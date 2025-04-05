// src/main.js

import { appState, setCanvasDefaults } from './state.js';
import { layouts, prepareLayouts, getCurrentLayout } from './layout.js';
import { renderCanvas } from './canvas.js';
import { bindUIEvents } from './uiUtils.js';
import { loadImage } from './helpers.js';
import { setupApi } from './api.js';

async function init() {
  prepareLayouts(); // ➜ Setzt Defaults wie fontGroup etc.

  // 🖼 Layout-Auswahl vorbereiten
  appState.selectedLayoutId = layouts[0].id; // Default: erstes Layout
  const layout = getCurrentLayout();

  // 📐 Canvas-Größe setzen
  setCanvasDefaults({
    scaleX: 2,
    scaleY: 2,
    logicalWidth: 600,
    logicalHeight: 400
  });

  // 🖼 Bild laden
  const bgImage = await loadImage(layout.background);
  appState.canvas.backgroundImage = bgImage;

  // ✍️ Texte vorbereiten
  appState.canvas.textGroups = layout.textGroups;

  // 🖌 Initiales Rendering
  renderCanvas();

  // 🧩 UI binden
  bindUIEvents();

  // 🌐 API-Setup (optional für Speichern, Freigeben etc.)
  setupApi();
}

window.addEventListener('DOMContentLoaded', init);
