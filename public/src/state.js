// src/state.js

export const appState = {
  variables: {
    name1: "ERIKA",
    name2: "MAX",
    weddingDate: "01. Januar 1978"
  },
  layout: {
    currentId: null,
    selectedLayoutData: null
  },
  ui: {
    isZoomed: false,
    isMobileView: window.innerWidth < 768,
    snapLevel: 0
  },
  canvas: {
    scaleX: 1,
    scaleY: 1,
    logicalWidth: 600,
    logicalHeight: 400
  },
  flags: {
    isProgrammaticLayoutChange: false,
    isSwipeInProgress: false,
    isLoadingFromAPI: false,
    hasRestoredPresets: false
  }
};

/**
 * Setzt die Standardwerte für die Canvas-Konfiguration im appState.
 * Kann z. B. in main.js beim Initialisieren aufgerufen werden.
 * @param {Object} defaults - Optionales Konfig-Objekt zum Überschreiben.
 */
export function setCanvasDefaults(defaults = {}) {
  appState.canvas.scaleX = defaults.scaleX ?? 1;
  appState.canvas.scaleY = defaults.scaleY ?? 1;
  appState.canvas.logicalWidth = defaults.logicalWidth ?? 600;
  appState.canvas.logicalHeight = defaults.logicalHeight ?? 400;
}
