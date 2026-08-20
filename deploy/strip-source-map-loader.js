/**
 * Usuwa komentarze sourceMappingURL z CSS (np. Bootstrap),
 * żeby przeglądarka nie żądała nieistniejących .map w /_next/static/.
 */
module.exports = function stripSourceMapLoader(source) {
  return source.replace(/\/\*#\s*sourceMappingURL=.*?\s*\*\//g, '');
};
