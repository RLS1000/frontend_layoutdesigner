// public/src/eventHandlers.js

import { renderCanvas } from './canvas.js';
import { appState } from './state.js';

export function handleTextInputChange(event) {
  const input = event.target;
  const key = input.dataset.key;
  const value = input.value;
  appState.userTexts[key] = value;
  renderCanvas();
}

export function handleColorChange(event) {
  const input = event.target;
  const key = input.dataset.key;
  const color = input.value;
  appState.userColors[key] = color;
  renderCanvas();
}

export function handleLayoutSelection(event) {
  const layoutId = event.currentTarget.dataset.layoutId;
  appState.selectedLayoutId = parseInt(layoutId, 10);
  renderCanvas();
}
