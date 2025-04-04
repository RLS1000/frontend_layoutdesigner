// src/eventHandlers.js

import { appState } from "./state.js";
import { updateToolbar, hideToolbar, showToolbar } from "./uiUtils.js";
import { saveTemporaryLayout } from "./persistence.js";

export function setupCanvasEventHandlers(canvas) {
  // 🎯 Entferne Selektion bei Klick auf leere Fläche
  canvas.on("mouse:down", function (event) {
    if (!event.target) {
      canvas.discardActiveObject();
      canvas.renderAll();
      hideToolbar();
    }
  });

  // 💡 Doppelklick: Direkt Text bearbeiten
  canvas.on("mouse:dblclick", function (event) {
    if (event.target?.isType("i-text")) {
      event.target.enterEditing();
      setTimeout(() => {
        event.target.hiddenTextarea?.focus();
      }, 50);
    }
  });

  // 🧠 Textfeld verschieben
  canvas.on("object:moving", function (event) {
    const obj = event.target;
    if (obj?.isType("i-text")) {
      console.log(`✏ "${obj.text}" moved to X: ${Math.round(obj.left)}, Y: ${Math.round(obj.top)}`);
    }
  });

  // 🧠 Toolbar bei Selektion aktualisieren
  canvas.on("selection:created", updateToolbar);
  canvas.on("selection:updated", updateToolbar);
  canvas.on("object:modified", updateToolbar);

  // 💾 Speichern bei Änderungen
  canvas.on("object:added", saveTemporaryLayout);
  canvas.on("object:modified", saveTemporaryLayout);

  // 🧠 Wenn ein Textfeld bearbeitet wird und Enter gedrückt wird
  document.addEventListener("keydown", function (event) {
    const active = canvas.getActiveObject();

    if (!active || !active.isType("i-text")) return;

    // ⏎ Enter → Beenden der Bearbeitung
    if (active.isEditing && event.key === "Enter") {
      active.exitEditing();
      canvas.discardActiveObject();
      canvas.renderAll();
      hideToolbar();
      event.preventDefault();
      return;
    }

    if (!active.isEditing) {
      switch (event.key) {
        case "Delete":
        case "Backspace":
          canvas.remove(active);
          canvas.discardActiveObject();
          canvas.renderAll();
          hideToolbar();
          event.preventDefault();
          break;
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          const step = event.shiftKey ? 10 : 1;
          if (event.key === "ArrowLeft") active.left -= step;
          if (event.key === "ArrowRight") active.left += step;
          if (event.key === "ArrowUp") active.top -= step;
          if (event.key === "ArrowDown") active.top += step;
          active.setCoords();
          canvas.renderAll();
          saveTemporaryLayout();
          event.preventDefault();
          break;
      }
    }
  });
}
