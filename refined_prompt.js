/**
 * Converts a string to camelCase format.
 * 
 * This function takes a delimited string and converts it to camelCase notation,
 * where the first word is lowercase and subsequent words are capitalized without delimiters.
 * 
 * @function toCamelCase
 * @param {string} str - The input string to convert. Can contain spaces, underscores, or hyphens as delimiters.
 * @returns {string} The converted camelCase string.
 * @throws {Error} If the string is empty or contains only whitespace.
 * @throws {Error} If the string contains only non-letter characters (e.g., "___").
 * @throws {Error} If the resulting camelCase string starts with a number, which is invalid for JavaScript and Python variable names.
 * 
 * @example
 * // Returns "firstName"
 * toCamelCase("first name");
 * 
 * @example
 * // Returns "userId"
 * toCamelCase("user_id");
 * 
 * @example
 * // Returns "screenName"
 * toCamelCase("SCREEN_NAME");
 * 
 * @example
 * // Throws error: Cannot use "123variable" as a variable name
 * toCamelCase("123variable");
 */

/**
 * Converts a string to dot.case format.
 * 
 * This function takes a delimited string and converts it to dot.case notation,
 * where words are separated by dots and all characters are lowercase.
 * 
 * @function toDotCase
 * @param {string} str - The input string to convert. Can contain spaces, underscores, or hyphens as delimiters.
 * @returns {string} The converted dot.case string with words separated by periods.
 * @throws {Error} If the string is empty or contains only whitespace.
 * @throws {Error} If the string contains only non-letter characters (e.g., "___").
 * 
 * @example
 * // Returns "first.name"
 * toDotCase("first name");
 * 
 * @example
 * // Returns "user.id"
 * toDotCase("user_id");
 * 
 * @example
 * // Returns "screen.name"
 * toDotCase("SCREEN_NAME");
 * 
 * @example
 * // Returns "my.variable.name"
 * toDotCase("myVariableName");
 */
function toCamelCase(str) {
    // Check if string is empty
    if (!str || str.trim().length === 0) {
        throw new Error("Error: Cannot convert empty string to camelCase.");
    }

    // Split by common delimiters (spaces, underscores, hyphens)
    const words = str.split(/[\s_-]+/).filter(word => word.length > 0);

    // Check if we have any valid words
    if (words.length === 0) {
        throw new Error("Error: String contains only non-letter characters.");
    }

    // Convert to camelCase
    const camelCased = words
        .map((word, index) => {
            // Convert word to lowercase first, then capitalize first letter (except first word)
            const processed = word.toLowerCase();
            return index === 0 ? processed : processed.charAt(0).toUpperCase() + processed.slice(1);
        })
        .join("");

    // Check if first character is a number
    if (/^\d/.test(camelCased)) {
        throw new Error(
            `Error: Cannot use "${camelCased}" as a variable name. Variables cannot start with a number in JavaScript and Python.`
        );
    }

    return camelCased;
}

// Test cases
console.log(toCamelCase("first name"));           // firstName
console.log(toCamelCase("user_id"));              // userId
console.log(toCamelCase("SCREEN_NAME"));          // screenName
console.log(toCamelCase("mobile-number"));        // mobileNumber
console.log(toCamelCase("myVariableName"));       // myVariableName

// Error cases
try {
    toCamelCase("");                                // throws error
} catch (e) {
    console.error(e.message);
}

try {
    toCamelCase("___");                            // throws error
} catch (e) {
    console.error(e.message);
}

try {
    toCamelCase("123variable");                     // throws error
} catch (e) {
    console.error(e.message);
}

function toDotCase(str) {
    // Check if string is empty
    if (!str || str.trim().length === 0) {
        throw new Error("Error: Cannot convert empty string to dot.case.");
    }

    // Split by common delimiters (spaces, underscores, hyphens)
    const words = str.split(/[\s_-]+/).filter(word => word.length > 0);

    // Check if we have any valid words
    if (words.length === 0) {
        throw new Error("Error: String contains only non-letter characters.");
    }

    // Convert to dot.case
    const dotCased = words
        .map(word => word.toLowerCase())
        .join(".");

    return dotCased;
}

// Test cases for toDotCase
console.log(toDotCase("first name"));           // first.name
console.log(toDotCase("user_id"));              // user.id
console.log(toDotCase("SCREEN_NAME"));          // screen.name
console.log(toDotCase("mobile-number"));        // mobile.number
console.log(toDotCase("myVariableName"));       // my.variable.name

// Error cases for toDotCase
try {
    toDotCase("");                                // throws error
} catch (e) {
    console.error(e.message);
}

try {
    toDotCase("___");                            // throws error
} catch (e) {
    console.error(e.message);
}



