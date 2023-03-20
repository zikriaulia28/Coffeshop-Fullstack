/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '150%': '150%',
    },
    extend: {
      backgroundImage: {
        'payment': "url('/src/assets/bg-payment.webp')",
        'home': "url('/src/assets/home.webp')",
      },
      colors: {
        primary: '#FFBA33',
        secondary: '#6A4029',
        bgprimary: '#F8F8F8',
        bgsecondary: '#FFFFFF',
        overlay: '#00000080'
      },
      width: {
        '90%': '90%',
        '30': '79rem',
        '70': '17.75rem',
        '82': '22rem',
        '105': '22.4rem',
        '110': '29.5rem',
      }
    }
  },
  // plugins: [require("daisyui")],
}
