<template>
    <div class="flex items-start px-6 pt-24 pb-6 bg-cover bg-no-repeat bg-center bg-img-main">
        <trella-cards-list />

        <div class="w-80 mx-4 p-4 rounded-lg shadow-xl backdrop-blur">
            <button class="px-3 py-2 w-full rounded-lg text-gray-900 bg-white-alpha-50">
                Create List
            </button>
        </div>
    </div>
</template>

<script>
    import TrellaCardsList from './TrellaCardsList.vue';

    export default {
        name: 'trella-board',

        components: {
            TrellaCardsList,
        },

        props: {

        },
    }
</script>
