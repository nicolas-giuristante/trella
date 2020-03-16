module.exports = {
    theme: {
        extend: {
            width: {
                72: '18rem',
                80: '20rem',
            },

            colors: {
                gray: {
                    100: '#f8f8f8',
                    200: '#f1f1f1',
                    300: '#e0e0e0',
                    400: '#bdbdbd',
                    500: '#9e9e9e',
                    600: '#757575',
                    700: '#616161',
                    800: '#424242',
                    900: '#212121',
                },
            },
        },

        filter: {
            'none': 'none',
            'grayscale': 'grayscale(1)',
            'invert': 'invert(1)',
            'sepia': 'sepia(1)',
        },

        backdropFilter: {
            'none': 'none',
            'blur': 'saturate(120%) blur(20px)',
        },
    },

    variants: {
        // exemple: ['responsive', 'group-hover', 'focus-within', 'first', 'last', 'odd', 'even', 'hover', 'focus', 'active', 'visited', 'disabled'],
        backgroundColor: ['responsive', 'focus-within', 'hover', 'focus', 'active', 'visited', 'disabled'],
    },

    plugins: [
        require('tailwindcss-filters'),
    ],
}
