module.exports = {
  'src/**/*.{ts,tsx}': filenames => ['yarn run check-types'],
  "src/**/*.{js,jsx,ts,tsx,json,md}": ["prettier --write"],
  "src/**/*.{js,jsx,ts,tsx}": ["eslint --fix", "stylelint"]
};
