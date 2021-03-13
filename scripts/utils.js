/**
 * Logs the passed error to the console
 * @param {string} error
 */
export function logError(error) {
  console.error('Vectary Viewer API Error', error)
}

/**
 * Generates a random color of the format: `rgb(r,g,b)`
 * @returns {string}
 */
export function getRandomColor() {
  const r = Math.round(Math.random() * 255)
  const g = Math.round(Math.random() * 255)
  const b = Math.round(Math.random() * 255)

  return `rgb(${r},${g},${b})`
}
