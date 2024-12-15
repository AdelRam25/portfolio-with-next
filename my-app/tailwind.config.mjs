module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'], // Update your paths
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'fade-up': 'fadeUp 1.5s ease-in-out',
        'slide-down': 'slideDown 1.2s ease-out',
        'slide-left': 'slideLeft 1.2s ease-out',
        'bounce-in': 'bounceIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
