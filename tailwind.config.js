module.exports = {
    theme: {
        extend: {
            width: {
                72: '18rem',
                80: '20rem',
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
