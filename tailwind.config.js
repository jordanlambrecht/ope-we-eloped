module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      sage: 'rgb(121, 180, 183)',
      cream: {
        light: 'rgb(254, 251, 243)',
        DEFAULT: 'rgb(248, 240, 223)',
        dark: 'rgb(241, 236, 226)',
      },
      grey: 'rgb(157, 157, 157)',
      black: 'rgb(38,38,38)',
    },
    extend: {
      scale: {
        25: '.25',
        97: '.97',
        98: '.98',
        99: '.99',
        101: '1.01',
        102: '1.02',
        103: '1.03',
        175: '1.75',
        200: '2.00',
      },
    },
  },
  plugins: [],
}
