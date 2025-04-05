// 📁 src/canvas.js
// fabric wird global über das <script>-Tag geladen – kein Import nötig
import { appState } from './state.js';

export const canvas = new fabric.Canvas("canvas", {
  selection: true,
  backgroundColor: "#ffffff"
});

// 👇 Initiale Skalierung
appState.canvas.scaleX = 1;
appState.canvas.scaleY = 1;

export function setCanvasSizeByFormat(format) {
  const canvasContainer = document.getElementById("canvas-container");
  const dpr = window.devicePixelRatio || 1;

  let logicalWidth = 600;
  let logicalHeight = 400;

  switch (format) {
    case "15x10":
      logicalWidth = 600;
      logicalHeight = 400;
      break;
    case "10x15":
      logicalWidth = 400;
      logicalHeight = 600;
      break;
    case "15x5":
      logicalWidth = 600;
      logicalHeight = 200;
      break;
    case "5x15":
      logicalWidth = 200;
      logicalHeight = 600;
      break;
  }

  // Speichern im zentralen State
  appState.canvas.logicalWidth = logicalWidth;
  appState.canvas.logicalHeight = logicalHeight;

  let displayWidth = logicalWidth;
  let displayHeight = logicalHeight;

  if (window.innerWidth < 768) {
    displayWidth *= 0.5;
    displayHeight *= 0.5;
  }

  const renderWidth = displayWidth * dpr;
  const renderHeight = displayHeight * dpr;

  canvas.setWidth(renderWidth);
  canvas.setHeight(renderHeight);
  canvas.setDimensions({ width: displayWidth, height: displayHeight });

  canvasContainer.style.width = `${displayWidth}px`;
  canvasContainer.style.height = `${displayHeight}px`;

  appState.canvas.scaleX = displayWidth / logicalWidth;
  appState.canvas.scaleY = displayHeight / logicalHeight;

  console.log(`🎯 Canvas-Größe: ${displayWidth}x${displayHeight} (Format: ${format})`);
}

export function renderCanvas() {
  canvas.renderAll();
}

export function renderTextGroups(textGroups) {
  textGroups.forEach(group => {
    let offsetY = 0;

    group.texts.forEach(text => {
      const textObj = new fabric.Text(text.text, {
        left: group.groupX,
        top: group.groupY + offsetY,
        fontSize: text.size,
        fontFamily: text.fontFamily,
        fill: text.fill || "#000000",
        charSpacing: text.charSpacing,
        originX: "center",
        originY: group.originY || "top"
      });

      canvas.add(textObj);
      offsetY += group.spacing;
    });
  });
}

