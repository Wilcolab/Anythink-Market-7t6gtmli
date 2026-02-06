/**
 * Transforms various string formats into kebab-case.
 * 
 * This utility function converts input strings to kebab-case by:
 * - Converting to lowercase
 * - Replacing spaces and underscores with hyphens
 * - Collapsing consecutive hyphens into a single hyphen
 * 
 * @param {string} input - The string to convert to kebab-case
 * @returns {string} The converted kebab-case string
 * @throws {Error} If input is an empty string: "Input cannot be empty."
 * @throws {Error} If input contains no alphabetic characters: "Input must contain at least one letter character."
 * 
 * @example
 * toKebabCase("first name");      // "first-name"
 * toKebabCase("user_id");         // "user-id"
 * toKebabCase("SCREEN_NAME");     // "screen-name"
 */
function toKebabCase(input) {
    // Validate input is not empty
    if (input === "") {
        throw new Error("Input cannot be empty.");
    }

    // Check if input contains at least one alphabetic character
    if (!/[a-zA-Z]/.test(input)) {
        throw new Error("Input must contain at least one letter character.");
    }

    // Convert to lowercase
    let kebabString = input.toLowerCase();

    // Replace spaces and underscores with hyphens
    kebabString = kebabString.replace(/[\s_]+/g, "-");

    // Collapse consecutive hyphens into a single hyphen
    kebabString = kebabString.replace(/-+/g, "-");

    // Remove leading/trailing hyphens if any
    kebabString = kebabString.replace(/^-+|-+$/g, "");

    // Warning: Check if string starts with a digit
    if (/^\d/.test(kebabString)) {
        console.warn(
            "Warning: This string is not suitable as a variable name in languages like Python or JavaScript."
        );
    }

    return kebabString;
}

module.exports = toKebabCase;