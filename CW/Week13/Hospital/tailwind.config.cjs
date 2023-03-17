/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                'primary': '#EEF1FF',
                'secondary': '#B1B2FF',
                'btn-color': '#AAC4FF',
                'card-color': '#D2DAFF'
            },
            fontFamily: {
                sans: ['Vazir', 'sans-serif']
            }
        },
    },
    plugins: [],
}