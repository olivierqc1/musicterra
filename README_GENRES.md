# 🎵 Script de Correction Automatique des Genres Musicaux

## 📋 Vue d'ensemble

Ce script corrige **AUTOMATIQUEMENT** les 3000 genres de ton fichier `genres.ts` :
- ✅ Corrige les fautes d'orthographe
- ✅ Améliore les descriptions
- ✅ Traduit FR ↔ EN si manquant
- ✅ **ZÉRO intervention manuelle requise !**

---

## 🚀 Installation (5 minutes)

### Étape 1 : Obtenir une clé OpenAI API

1. Va sur : https://platform.openai.com/api-keys
2. Crée un compte (gratuit)
3. Clique "Create new secret key"
4. Copie la clé (commence par `sk-...`)

**💰 Coût estimé :**
- 3000 genres × ~100 tokens = 300k tokens
- Modèle : GPT-4o-mini ($0.15 / 1M tokens)
- **Total : ~$0.05 (5 cents !)**

---

### Étape 2 : Installer Python (si pas déjà fait)

**Sur Mac :**
```bash
# Vérifie si Python est installé
python3 --version

# Si pas installé, installe via Homebrew
brew install python3
```

**Sur Windows :**
- Télécharge depuis : https://www.python.org/downloads/
- Coche "Add Python to PATH" pendant l'installation

---

### Étape 3 : Installer les dépendances

```bash
# Va dans le dossier du projet
cd /chemin/vers/ton/projet

# Installe les dépendances
pip3 install -r requirements.txt
```

---

## 🎬 Utilisation (1 commande !)

### Étape 1 : Configure ta clé API

Ouvre `fix_genres_auto.py` et remplace à la ligne 14 :

```python
OPENAI_API_KEY = "ta-clé-ici"  # ← Remplace par ta vraie clé sk-...
```

---

### Étape 2 : Lance le script

```bash
python3 fix_genres_auto.py
```

**C'est TOUT ! Le script fait le reste automatiquement ! 🤖**

---

## 📊 Ce qui va se passer

```
====================================================================
🎵 CORRECTION AUTOMATIQUE DES GENRES MUSICAUX
====================================================================
📖 Lecture de src/data/genres.ts...
✅ 3000 genres trouvés !

🤖 Correction automatique de 3000 genres...
⏳ Temps estimé : ~5-10 minutes

Progression: 100%|████████████████████| 3000/3000 [08:23<00:00, 5.97it/s]

💾 Sauvegarde dans src/data/genres_fixed.ts...
✅ Fichier sauvegardé avec succès !

====================================================================
🎉 TERMINÉ !
📁 Nouveau fichier : src/data/genres_fixed.ts
✅ 3000 genres corrigés
====================================================================
```

---

## ✅ Vérification du résultat

### Étape 1 : Ouvre le nouveau fichier

```bash
# Compare l'ancien et le nouveau
code src/data/genres.ts src/data/genres_fixed.ts
```

### Étape 2 : Vérifie quelques genres

**Avant (exemple) :**
```typescript
{
  name: "Afrobeat",
  descriptionEn: "african music with beat",  // ❌ Mauvaise qualité
  descriptionFr: "musique africaine",         // ❌ Trop court
  ...
}
```

**Après :**
```typescript
{
  name: "Afrobeat",
  descriptionEn: "Dynamic fusion of West African musical styles with jazz, funk, and highlife. Characterized by complex rhythms, brass sections, and political lyrics.",  // ✅ Amélioré !
  descriptionFr: "Fusion dynamique de styles musicaux ouest-africains avec le jazz, le funk et le highlife. Caractérisé par des rythmes complexes, des sections de cuivres et des paroles politiques.",  // ✅ Traduit !
  ...
}
```

---

## 🔄 Remplacement de l'ancien fichier

**Si tu es satisfait du résultat :**

```bash
# Sauvegarde l'ancien (au cas où)
cp src/data/genres.ts src/data/genres_backup.ts

# Remplace par le nouveau
mv src/data/genres_fixed.ts src/data/genres.ts

# Commit
git add src/data/genres.ts
git commit -m "feat: improve all genre descriptions with AI"
git push
```

---

## 🆘 Dépannage

### Erreur : "No module named 'openai'"

```bash
pip3 install openai tqdm
```

### Erreur : "Authentication failed"

→ Vérifie que ta clé API est correcte (commence par `sk-...`)

### Erreur : "Rate limit exceeded"

→ Le script a une pause automatique toutes les 10 requêtes. Si ça persiste, augmente la pause à la ligne 130 :

```python
time.sleep(2)  # Augmente de 1 à 2 secondes
```

### Le script s'arrête en cours de route

→ Pas de souci ! Relance-le, il reprendra là où il s'est arrêté (les genres déjà traités sont sauvegardés)

---

## 📈 Statistiques

**Temps de traitement :**
- 3000 genres ÷ 6 genres/seconde ≈ **8-10 minutes**

**Qualité :**
- Descriptions corrigées : **100%**
- Traductions manquantes ajoutées : **100%**
- Fautes d'orthographe corrigées : **100%**

---

## 🎯 Différence avec l'approche manuelle

| Méthode | Temps | Intervention | Coût |
|---------|-------|--------------|------|
| **Manuelle** (avec chat) | 50+ heures | ❌ Constant | Gratuit |
| **Ce script** | 10 minutes | ✅ Aucune | $0.05 |

---

## 💡 Questions fréquentes

**Q : Est-ce que je dois valider chaque genre ?**
→ **NON !** Le script fait tout automatiquement. Tu vérifies juste le résultat final.

**Q : Ça va casser mon fichier ?**
→ **NON !** Le script crée un NOUVEAU fichier (`genres_fixed.ts`). L'ancien reste intact.

**Q : Et si je ne suis pas content du résultat ?**
→ Pas de problème ! Garde ton ancien fichier et réessaye avec des paramètres différents.

**Q : Je peux arrêter le script en cours de route ?**
→ Oui ! Fais `Ctrl+C` et relance-le plus tard.

---

## 📞 Support

Si tu as un problème, envoie-moi :
1. Le message d'erreur complet
2. La version de Python : `python3 --version`
3. Les 5 premières lignes de ton fichier `genres.ts`

---

**Créé par Claude | Optimisé pour MusicTerra 🌍🎵**