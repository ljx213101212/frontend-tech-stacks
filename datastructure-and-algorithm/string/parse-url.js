/**
 * Parses a URL pattern and a URL string into an object of key-value pairs.
 *
 * @param {string} pattern - The URL pattern (e.g., 'foo/:id/:name').
 * @param {string} url - The actual URL to parse (e.g., 'foo/12/bob').
 * @returns {Object} - A key-value object extracted from the URL.
 */
function parseUrl(pattern, url) {
  const patternParts = pattern.split("/"); // Split pattern into parts
  const urlParts = url.split("/"); // Split URL into parts

  if (patternParts.length !== urlParts.length) {
    throw new Error("Pattern and URL do not match in structure.");
  }

  const result = {};

  // Iterate through pattern parts and match dynamic segments
  patternParts.forEach((part, index) => {
    if (part.startsWith(":")) {
      // Remove the leading ':' to get the key
      const key = part.slice(1).trim();
      result[key] = urlParts[index];
    }
  });

  return result;
}

// Example usage:
console.log(parseUrl("foo/:id/:name", "foo/12/bob"));
// Output: { id: '12', name: 'bob' }

console.log(parseUrl("foo/:id/bar/:sex", "foo/14/bar/male"));
// Output: { id: '14', sex: 'male' }
