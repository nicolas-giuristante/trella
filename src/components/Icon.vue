<template>
    <svg
        class=""
        :class="iconClasses()"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.com/svgjs"
        viewBox="0 0 16 16"
        :width="size"
        :height="size"
        v-html="iconContent"
    >
    </svg>
</template>

<script>
    export default {
        name: 'Icon',

        props: {
            name: {
                type: String,
                required: true,
            },

            size: {
                type: String,
                default: '1em',
                required: false,
            },
        },

        computed: {
            iconContent() {
                switch (this.name) {
                    case "regular/close":
                        return "<g transform=\"matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)\"><path d=\"M 0.75,23.249l22.5-22.5 \" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 23.25,23.249l-22.5-22.5\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g>"
                    default:
                        return "<g transform=\"matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)\"><path d=\"M 3.75,0.748h16.5c1.657,0,3,1.343,3,3v16.5c0,1.657-1.343,3-3,3H3.75c-1.657,0-3-1.343-3-3v-16.5 C0.75,2.091,2.093,0.748,3.75,0.748z \" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 14.25,5.998L12,3.748l-2.25,2.25 \" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 9.75,17.998l2.25,2.25l2.25-2.25 \" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 6,9.748l-2.25,2.25 L6,14.248 \" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path><path d=\"M 18,14.248l2.25-2.25L18,9.748\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></g>"
                }
            },
        },

        methods: {
            iconClasses() {
                let classes = ""

                if (this.name.includes('bold/'), classes) {
                    return classes = "fill-current";
                } else {
                    return classes = "stroke-current";
                }
            },
        },
    };
</script>
