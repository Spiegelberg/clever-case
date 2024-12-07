// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  semi: true, // Add semicolons at the end of statements
  singleQuote: true, // Use single quotes instead of double quotes
  tabWidth: 2, // Set indentation width to 2 spaces
  useTabs: false, // Use spaces instead of tabs
  trailingComma: 'es5', // Add trailing commas where valid in ES5 (objects, arrays, etc.)
  bracketSpacing: true, // Add spaces between brackets in object literals
  arrowParens: 'always', // Always include parentheses for arrow functions
  vueIndentScriptAndStyle: true, // Indent `<script>` and `<style>` tags in Vue files
  endOfLine: 'lf', // Use line feed for newlines (Unix-style)
  htmlWhitespaceSensitivity: 'strict', // Respect whitespace in HTML
  printWidth: 100 // Maximum line length before wrapping
};

export default config;