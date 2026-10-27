// src/lib/toast.ts
// Petits messages en bas de l'écran, à la place des alert() du navigateur.
// Utilisable partout : toast("Photo mise à jour", "success").
// L'affichage est fait par <Toaster /> (src/components/Toaster.tsx), monté
// une seule fois dans App.tsx.

export type ToastKind = "info" | "success" | "error";

export interface ToastMessage {
  id: number;
  text: string;
  kind: ToastKind;
}

export const TOAST_EVENT = "mt-toast";
let nextId = 1;

export function toast(text: string, kind: ToastKind = "info") {
  try {
    window.dispatchEvent(
      new CustomEvent<ToastMessage>(TOAST_EVENT, { detail: { id: nextId++, text, kind } })
    );
  } catch {
    /* hors navigateur */
  }
}
