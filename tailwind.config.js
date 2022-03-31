const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
			},
		},
    screens: {
      'sm': '320px',
      'md': '576px',
      'lg': '768px',
      'xl': '992px',
      '2xl': '1200px',
    }
	},
  plugins: [],
}
