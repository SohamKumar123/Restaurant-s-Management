/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'booking-bg': "url('./images/booking.avif')",
        'footer-texture': "url('/img/footer-texture.png')",
        
      },
      fontFamily: {
        miniver: ['Miniver', 'cursive'],
        josefin:['Josefin sans','sans-serif'],
      },
    },
  },
  plugins: [],
}

