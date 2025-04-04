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