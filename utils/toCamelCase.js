function toCamelCase(input) {
  if (input == null) return '';
  const str = String(input);
  const normalized = str.normalize && str.normalize('NFKD')
    ? str.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    : str;

  // Insert space between camelCase boundaries and replace non-alphanumerics with spaces
  const spaced = normalized
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[^A-Za-z0-9]+/g, ' ')
    .trim();

  if (!spaced) return '';

  const parts = spaced.split(/\s+/);
  const first = parts[0].toLowerCase();
  const rest = parts.slice(1)
    .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join('');

  return first + rest;
}

module.exports = { toCamelCase };
