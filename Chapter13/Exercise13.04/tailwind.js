module.exports = {
  theme: {
    extend: {},
    spinner: (theme) => ({
      default: {
        color: theme('colors.gray.400'), 
        size: theme('spacing.4'),
        border: theme('borderWidth.2'),
        speed: theme('transitionDuration.500'),
      },
    }),
  },
  variants: {
    spinner: ['responsive'],
  },
  plugins: [require('tailwindcss-spinner')()],
}
