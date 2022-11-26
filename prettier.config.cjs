/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  single: true,
  singleQuote: true,
  jsxSingleQuote: false,
  semi: false,
}
