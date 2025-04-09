/**
 * Recursively generates dot-notated key paths for nested object values.
 *
 * @param {Object} obj - The input object.
 * @param {String} [basePath=""] - Optional base path prefix.
 * @returns {Object} - Object with same shape but dot-path values.
 */
function pathify(obj, path = "") {
  const result = {};

  for (const key in obj) {
    const newPath = path ? `${path}.${key}` : key;

    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      result[key] = pathify(obj[key], newPath);
    } else {
      result[key] = newPath;
    }
  }

  return result;
}
module.exports = { pathify };
