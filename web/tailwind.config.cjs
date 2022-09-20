/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.tsx", "./index.html"],

	theme: {
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				"background-galaxy": "url('/background-galaxy.png')",
				"text-grandient":
					"linear-gradient(89.86deg, #9572FC 10%, #43E7AD 89%, #E1D55D 1%)",
				"game-gradient":
					"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);",
			},
		},
	},
	plugins: [],
};
