// 📁 src/textUtils.js
import { canvas } from './canvas.js';
import { appState } from './state.js';

// 🔁 Platzhalter in Text ersetzen
export function replacePlaceholders(text) {
  return text
    .replace(/name1/g, appState.variables.name1)
    .replace(/name2/g, appState.variables.name2)
    .replace(/weddingDate/g, appState.variables.weddingDate);
}

// 🔄 Update aller Texte im Canvas (basierend auf aktivem Layout)
export function updateCanvasText() {
  const layout = appState.currentLayout;
  if (!layout) return;

  // 1. Alle alten Texte entfernen
  canvas.getObjects().forEach(obj => {
    if (obj.isType("i-text")) {
      canvas.remove(obj);
    }
  });

  // 2. Neue Texte hinzufügen
  addTextGroups(layout);
  canvas.renderAll();
}

// 🧱 Füge alle Textgruppen gemäß Layout hinzu
export function addTextGroups(layout) {
  const scaleX = appState.canvas.scaleX;
  const scaleY = appState.canvas.scaleY;

  layout.textGroups.forEach(group => {
    const textObjects = [];
    const originY = group.originY || "top";
    const spacing = group.spacing * scaleX;

    // Einzelne Texte erzeugen
    group.texts.forEach(t => {
      const textWithVars = replacePlaceholders(t.text || "");

      const textObj = new fabric.IText(textWithVars, {
        fontSize: t.size * scaleY,
        fontFamily: t.fontFamily || "Arial",
        fontWeight: t.fontWeight || "normal",
        fontStyle: t.fontStyle || "normal",
        charSpacing: t.charSpacing || 0,
        fill: t.fill || "#000000",
        originX: "left",
        originY: originY,
        selectable: true,
        editable: true,
        isColorEditable: !!t.isColorEditable,
        fontGroup: t.fontGroup || "primary"
      });

      textObjects.push(textObj);
      canvas.add(textObj);
    });

    // 🔁 Gruppierte Positionierung (zentriert)
    const totalWidth = textObjects.reduce((sum, obj, i) => {
      return sum + obj.width + (i < textObjects.length - 1 ? spacing : 0);
    }, 0);

    const startX = group.groupX * scaleX - (totalWidth / 2);
    const topY = group.groupY * scaleY;

    let currentX = startX;
    textObjects.forEach((obj, i) => {
      obj.set({ left: currentX, top: topY });
      obj.setCoords();
      currentX += obj.width + (i < textObjects.length - 1 ? spacing : 0);
    });
  });
}
