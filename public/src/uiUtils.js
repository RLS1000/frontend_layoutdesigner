import { appState } from './state.js';
import { renderCanvas } from './canvas.js';

export function updateStyleSummary(layout) {
    if (!layout) return;
  
    const photoCountMatch = layout.name.match(/(\d+)\s*Fotos?/i);
    const photoInfo = photoCountMatch ? `${photoCountMatch[1]} Fotos` : "–";
    const styleLabel = `${layout.name.split(" - ")[0]} | ${photoInfo} | ${layout.format}`;
  
    const labelEl = document.getElementById("styleLabel");
    if (labelEl) {
      labelEl.textContent = styleLabel;
    }
  }
  
  export function setElementVisible(selector, visible) {
    const el = typeof selector === "string" ? document.querySelector(selector) : selector;
    if (!el) return;
  
    el.style.display = visible ? "" : "none";
  }
  
  export function toggleClass(selector, className, enabled) {
    const el = typeof selector === "string" ? document.querySelector(selector) : selector;
    if (!el) return;
  
    el.classList.toggle(className, enabled);
  }
  
  export function highlightInput(inputElement) {
    if (!inputElement) return;
  
    inputElement.classList.add("updated");
    setTimeout(() => inputElement.classList.remove("updated"), 1000);
  }  

  export function bindUIEvents() {
    document.querySelectorAll("[data-text-id]").forEach(input => {
      input.addEventListener("input", (e) => {
        const textId = e.target.getAttribute("data-text-id");
        const value = e.target.value;
        const groupId = e.target.getAttribute("data-group-id");
  
        const group = appState.canvas.textGroups.find(g => g.groupId === groupId);
        if (!group) return;
  
        const textObj = group.texts.find(t => t.originalText === textId || t.text === textId);
        if (!textObj) return;
  
        textObj.text = value;
        renderCanvas(); // neu rendern
      });
    });
  }
  