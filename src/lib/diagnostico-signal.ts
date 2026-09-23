"use client";

import { useSyncExternalStore } from "react";

/**
 * Tiny external store so any link/button anywhere on the site (the floating
 * "Haz tu diagnóstico" badge, but not only it) can ask the home page's quiz
 * (see Routes.tsx) to open itself — not just scroll to its CTA.
 *
 * Two ways in, both read by the same snapshot:
 * - `requestDiagnostico()`: for a same-page click. SmoothScroll intercepts
 *   in-page "#…" links and scrolls via Lenis without ever touching
 *   location.hash, so a plain hash check wouldn't see it.
 * - the URL's hash itself: for landing on "/#diagnostico" fresh — another
 *   page, a direct link, or a reload.
 */
let requested = false;
const listeners = new Set<() => void>();

export function requestDiagnostico() {
  requested = true;
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  window.addEventListener("hashchange", callback);
  listeners.add(callback);
  return () => {
    window.removeEventListener("hashchange", callback);
    listeners.delete(callback);
  };
}

function getSnapshot() {
  return requested || window.location.hash === "#diagnostico";
}

function getServerSnapshot() {
  return false;
}

export function useDiagnosticoRequested(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
