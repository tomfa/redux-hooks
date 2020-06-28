module.exports = {
  "**/*.{css,js,jsx,ts,tsx,html}": (filenames) =>
    filenames.map((filename) => `prettier --write '${filename}'`),
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
};
