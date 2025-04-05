// src/main.js

import { appState, setCanvasDefaults } from './state.js';
import { layouts, getCurrentLayout } from './layout.js';
import { attachEventListeners } from './eventListeners.js';
import { renderCanvas, setCanvasSizeByFormat } from './canvas.js';
import { bindUIEvents } from './uiUtils.js';
import { loadImage } from './helpers.js';
import { setupApi } from './api.js';

async function init() {
  console.log("▶️ init läuft");
  console.log("🧱 layouts geladen?", layouts.length, layouts);

  appState.selectedLayoutId = layouts[0]?.id;
  const layout = getCurrentLayout();
  console.log("✅ selected ID:", appState.selectedLayoutId);
  console.log("🎯 aktuelles Layout:", layout);

  if (!layout) {
    console.error("❌ Kein Layout gefunden – Abbruch.");
    return;
  }

  // 📐 Canvas-Größe setzen
  setCanvasSizeByFormat(layout.format);


  // 🖼 Bild laden
  const bgImage = await loadImage(layout.background);
  appState.canvas.backgroundImage = bgImage;

  // ✍️ Texte vorbereiten
  appState.canvas.textGroups = layout.textGroups;

  // 🖌 Initiales Rendering
  renderCanvas();

  // 🧩 UI binden
  bindUIEvents();

  // 🔗 Events aktivieren
  attachEventListeners();

  // 🌐 API
  setupApi();
}

// Aufruf
window.addEventListener('DOMContentLoaded', init);
