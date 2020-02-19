<template>
    <div class="flex items-start px-4 pt-24 pb-6 bg-cover bg-no-repeat bg-center bg-img-main">
        <trella-cards-list
            v-for="(cardsList, index) in cardsLists"
            :cards-list="cardsList"
            :key="index"
        />

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

        data() {
            return {
                // showCardModal: false,
                tempCardVisibility: false,
                tempCardName: "",
                cardsLists: [
                    {
                        title: 'In Progress',
                        cards: [
                            {
                                title: 'Learn Vue.js',
                                description: 'I shall brute force my way through this knowledge.',
                                tasksLists: [
                                    {
                                        title: 'Basics',
                                        tasks: [
                                            {
                                                title: 'Data binding',
                                                status: 'completed',
                                                priority: '0',
                                            },
                                            {
                                                title: 'Data interpolation',
                                                status: 'completed',
                                                priority: '0',
                                            },
                                            {
                                                title: 'List rendering',
                                                status: 'notCompleted',
                                                priority: '0',
                                            },
                                        ],
                                    },
                                    {
                                        title: 'Not so basic',
                                        tasks: [
                                            {
                                                title: 'Vuex',
                                                status: 'notCompleted',
                                                priority: '0',
                                            },
                                            {
                                                title: 'Vue Router',
                                                status: 'notCompleted',
                                                priority: '0',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        title: 'Done',
                        cards: [
                            {
                                title: 'Learn HTML',
                                description: 'Easy.',
                                tasksLists: [
                                    {
                                        title: 'Basics',
                                        tasks: [
                                            {
                                                title: 'Vuex',
                                                status: 'notCompleted',
                                                priority: '0',
                                            },
                                            {
                                                title: 'Vue Router',
                                                status: 'notCompleted',
                                                priority: '0',
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                title: 'Learn CSS',
                                description: 'Easy. But flexbox behaviours were a bit weird to grasp.',
                                tasksLists: [
                                    {
                                        title: '',
                                        tasks: [
                                            {
                                                title: '',
                                                status: '',
                                                priority: '',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            };
        },

        props: {

        },
    }
</script>
