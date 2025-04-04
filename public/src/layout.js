// src/layouts.js

import { appState } from './state.js';
import { layoutData } from './layoutData.js';

/**
 * Prepares all layouts by adding default values like originalText, isColorEditable, fontGroup.
 * Returns the modified layout array.
 */
export function prepareLayouts(data) {
  return data.map(layout => {
    layout.textGroups.forEach(group => {
      group.texts.forEach((t, index) => {
        if (!t.originalText) {
          t.originalText = t.text;
        }
        if (typeof t.isColorEditable === "undefined") {
          t.isColorEditable = false;
        }
        if (!t.fontGroup) {
          t.fontGroup = index % 2 === 0 ? "primary" : "secondary";
        }
      });
    });
    return layout;
  });
}

/**
 * The fully prepared layouts array, ready for use.
 */
export const layouts = prepareLayouts(layoutData);

/**
 * Returns the currently selected layout based on appState.
 */
export function getCurrentLayout() {
  return layouts.find(layout => layout.id == appState.selectedLayoutId);
}
