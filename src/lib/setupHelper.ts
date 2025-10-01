// src/lib/setupHelper.ts
import { supabase } from "./supabase";

export type DiagnosticResult = {
  status: "ok" | "error" | "warning";
  message: string;
  details?: any;
};

/**
 * Vérifie si la table profiles existe et est accessible
 */
export async function checkProfilesTable(): Promise<DiagnosticResult> {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("id")
      .limit(1);

    if (error) {
      if (error.code === "42P01") {
        return {
          status: "error",
          message: "Table 'profiles' n'existe pas",
          details: error,
        };
      }
      return {
        status: "error",
        message: "Erreur d'accès à la table profiles",
        details: error,
      };
    }

    return {
      status: "ok",
      message: "Table profiles OK",
    };
  } catch (err) {
    return {
      status: "error",
      message: "Erreur de connexion",
      details: err,
    };
  }
}

/**
 * Vérifie si l'utilisateur actuel a un profil
 */
export async function checkUserProfile(): Promise<DiagnosticResult> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return {
        status: "warning",
        message: "Utilisateur non connecté",
      };
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return {
          status: "warning",
          message: "Profil utilisateur manquant",
          details: { userId: user.id },
        };
      }
      return {
        status: "error",
        message: "Erreur lecture profil",
        details: error,
      };
    }

    return {
      status: "ok",
      message: "Profil utilisateur OK",
      details: data,
    };
  } catch (err) {
    return {
      status: "error",
      message: "Erreur vérification profil",
      details: err,
    };
  }
}

/**
 * Crée le profil de l'utilisateur actuel s'il n'existe pas
 */
export async function createUserProfile(): Promise<DiagnosticResult> {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return {
        status: "error",
        message: "Utilisateur non connecté",
      };
    }

    const { data, error } = await supabase
      .from("profiles")
      .insert({
        id: user.id,
        email: user.email!,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      return {
        status: "error",
        message: "Erreur création profil",
        details: error,
      };
    }

    return {
      status: "ok",
      message: "Profil créé avec succès",
      details: data,
    };
  } catch (err) {
    return {
      status: "error",
      message: "Erreur création profil",
      details: err,
    };
  }
}

/**
 * Diagnostic complet et réparation automatique
 */
export async function runFullDiagnostic(): Promise<{
  results: DiagnosticResult[];
  canProceed: boolean;
  recommendation: string;
}> {
  const results: DiagnosticResult[] = [];

  // 1. Vérifier la table
  const tableCheck = await checkProfilesTable();
  results.push(tableCheck);

  if (tableCheck.status === "error") {
    return {
      results,
      canProceed: false,
      recommendation: "❌ La table 'profiles' doit être créée dans Supabase. Va sur le dashboard Supabase > SQL Editor et exécute le script de création.",
    };
  }

  // 2. Vérifier le profil utilisateur
  const profileCheck = await checkUserProfile();
  results.push(profileCheck);

  // 3. Si profil manquant, tenter de le créer
  if (profileCheck.status === "warning" && profileCheck.message === "Profil utilisateur manquant") {
    const createResult = await createUserProfile();
    results.push(createResult);

    if (createResult.status === "ok") {
      return {
        results,
        canProceed: true,
        recommendation: "✅ Profil créé automatiquement ! Tu peux maintenant utiliser l'app normalement.",
      };
    } else {
      return {
        results,
        canProceed: false,
        recommendation: "⚠️ Impossible de créer le profil automatiquement. Vérifie les permissions RLS dans Supabase.",
      };
    }
  }

  if (profileCheck.status === "ok") {
    return {
      results,
      canProceed: true,
      recommendation: "✅ Tout fonctionne correctement !",
    };
  }

  return {
    results,
    canProceed: false,
    recommendation: "⚠️ Problème détecté. Vérifie les détails ci-dessus.",
  };
}
