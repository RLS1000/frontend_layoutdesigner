// public/src/eventListeners.js

import {
  handleTextInputChange,
  handleColorChange,
  handleLayoutSelection
} from './eventHandlers.js';

export function attachEventListeners() {
  // Texteingaben
  document.querySelectorAll('.text-input').forEach(input => {
    input.addEventListener('input', handleTextInputChange);
  });

  // Farbauswahl
  document.querySelectorAll('.color-input').forEach(input => {
    input.addEventListener('input', handleColorChange);
  });

  // Layout-Auswahl
  document.querySelectorAll('.layout-thumb').forEach(thumb => {
    thumb.addEventListener('click', handleLayoutSelection);
  });
}
