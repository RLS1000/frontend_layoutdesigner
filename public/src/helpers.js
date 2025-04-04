/**
 * Rundet eine Zahl auf die nächste Ganzzahl.
 * @param {number} num 
 * @returns {number}
 */
export function round(num) {
  return Math.round(num);
}

/**
 * Limitiert einen Wert zwischen einem Minimum und Maximum.
 * @param {number} value 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Überprüft, ob zwei Werte ungefähr gleich sind (für Floating Points).
 * @param {number} a 
 * @param {number} b 
 * @param {number} [tolerance=0.01] 
 * @returns {boolean}
 */
export function nearlyEqual(a, b, tolerance = 0.01) {
  return Math.abs(a - b) < tolerance;
}

/**
 * Wandelt eine HEX-Farbe in rgba-String um (z. B. für Fill).
 * @param {string} hex 
 * @param {number} alpha 
 * @returns {string}
 */
export function hexToRgba(hex, alpha = 1) {
  const [r, g, b] = hex.replace("#", "")
                       .match(/.{1,2}/g)
                       .map(x => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/**
 * Lädt ein Bild von einer URL als HTMLImageElement (Promise).
 * @param {string} src 
 * @returns {Promise<HTMLImageElement>}
 */
export function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}
