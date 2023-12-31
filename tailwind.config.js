/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            'text': '#101b1e',
            'background': '#f1fbfe',
            'primary': '#53C0E4',
            'secondary': '#d7e5ea',
            'accent': '#fb6f9b',
	    'gradientStart': 'rgba(2, 18, 23, 1)',
	    'gradientEnd': 'rgba(2, 18, 23, 0.2)',
        },
	fontFamily: {
	    "sans": ["Convergence", "Arial", ...defaultTheme.fontFamily.sans],
	    "display": ["Jua", "Arial", ...defaultTheme.fontFamily.sans],
	    "quote": ["Wellfleet", "Arial", ...defaultTheme.fontFamily.serif]
	},
	keyframes: {
	    fadeIn: {
	        "from": {opacity: "0"},
	        "to": {opacity: "1"}
	    },
	    fadeOut: {
	        "to": {opacity: "0"}
	    },
	},
	animation: {
	    "fadeIn": "fadeIn 400ms linear forwards",
	    "fadeOut": "fadeOut 400ms linear"
	}
    },
    plugins: [],
}

