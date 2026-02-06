function toSnakeCase(input) {
  if (input == null) return '';
  const str = String(input);
  // Normalize and remove diacritics
  const normalized = str.normalize && str.normalize('NFKD')
    ? str.normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
    : str;

  return normalized
    // Handle camelCase -> camel_Case
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    // Replace spaces and hyphens with underscore
    .replace(/[\s\-]+/g, '_')
    // Remove all non-alphanumeric/underscore characters
    .replace(/[^A-Za-z0-9_]/g, '')
    // Collapse multiple underscores
    .replace(/_+/g, '_')
    // Trim leading/trailing underscores
    .replace(/^_+|_+$/g, '')
    .toLowerCase();
}

module.exports = { toSnakeCase };
