/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "#734949"
                },
                text:{
                    DEFAULT: "",
                    hover: "#BF3636"
                },
                button: {
                    DEFAULT: "#BF3636",
                    hover: "#BF7154"
                }
            },
            fontFamily: {
                'chakra-petch': ['Chakra Petch', 'sans-serif']
            },
        },
    },
    plugins: [],
}