// src/api.js

import { appState } from './state.js';
import { canvas } from './canvas.js';
import { getCurrentLayout } from './layout.js';

/**
 * Lädt Layout-Daten aus der API anhand einer ID.
 */
export async function loadLayoutFromAPI(layoutId) {
  try {
    const response = await fetch(`https://backendlayoutdesigner-production.up.railway.app/layouts/${layoutId}`);
    if (!response.ok) throw new Error("Fehler beim Laden des Layouts");

    const layoutData = await response.json();

    // 💾 SessionStorage setzen
    sessionStorage.setItem("api_layout", JSON.stringify(layoutData));
    sessionStorage.setItem("selectedColor", layoutData.selectedColor || "#000000");
    sessionStorage.setItem("selectedTextPreset", layoutData.selectedPreset || "elegant");

    // 🧠 API-Variablen ins State
    appState.variables.name1 = layoutData.name1 || "NAME 1";
    appState.variables.name2 = layoutData.name2 || "NAME 2";
    appState.variables.weddingDate = layoutData.eventDate || "DD. MMMM YYYY";

    return layoutData;
  } catch (error) {
    console.error("❌ Fehler beim Laden:", error);
    throw error;
  }
}

/**
 * Speichert das aktuelle Layout in der API.
 */
export async function saveLayoutToAPI(isFinal = false) {
  const apiLayout = JSON.parse(sessionStorage.getItem("api_layout") || "{}");
  const layoutId = apiLayout.id;

  if (!layoutId) {
    throw new Error("Kein gültiges Layout (API-ID) gefunden.");
  }

  const canvasData = JSON.stringify(canvas.toJSON());

  const selectedColor = sessionStorage.getItem("selectedColor") || "#000000";
  const selectedPreset = sessionStorage.getItem("selectedTextPreset") || "elegant";
  const selectedLayout = appState.selectedLayoutId;
  const layoutFormat = getCurrentLayout()?.format || null;

  const payload = {
    layoutId,
    layoutData: canvasData,
    isFinal,
    selectedColor,
    selectedPreset,
    selectedLayout,
    format: layoutFormat
  };

  try {
    const response = await fetch(`https://backendlayoutdesigner-production.up.railway.app/layouts/${layoutId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Serverfehler (${response.status}): ${errorText}`);
    }

    console.log(`✅ Layout ${layoutId} erfolgreich gespeichert`);
  } catch (error) {
    console.error("❌ Fehler beim Speichern:", error);
    throw error;
  }
}

/**
 * Bindet API-bezogene UI-Elemente an Klick-Events.
 */
export function setupApi() {
  const saveBtn = document.getElementById("saveBtn");
  const shareBtn = document.getElementById("shareBtn");
  const downloadBtn = document.getElementById("downloadBtn");

  if (saveBtn) {
    saveBtn.addEventListener("click", async () => {
      try {
        await saveLayoutToAPI(false);
        alert("Layout erfolgreich gespeichert!");
      } catch (err) {
        alert("Fehler beim Speichern.");
      }
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener("click", () => {
      // Platzhalter für Sharing-Funktion
      alert("Teilen-Funktion folgt!");
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => {
      const dataURL = canvas.toDataURL({
        format: 'png',
        multiplier: 2
      });

      const link = document.createElement('a');
      link.download = 'layout.png';
      link.href = dataURL;
      link.click();
    });
  }
}
