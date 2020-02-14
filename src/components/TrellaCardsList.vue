<template>
    <div class="flex flex-col w-80 max-h-full rounded-lg shadow-xl backdrop-blur">
        <div class="rounded-t-lg | transition-colors ease-out duration-500 focus-within:bg-white-alpha-10">
            <input class="w-full p-4 text-xl text-white border-none bg-transparent" value="Lorem ipsum" />
        </div>

        <!-- relative w-80 h-full max-h-full   -->
        <div class="flex-1 max-h-full overflow-y-auto px-4 pt-4 rounded-b-lg">
            <trella-card />
        </div>
    </div>
</template>

<script>
    import TrellaCard from './TrellaCard.vue';

    export default {
        name: 'trella-cards-list',

        components: {
            TrellaCard,
        },

        props: {

        },
    }
</script>
