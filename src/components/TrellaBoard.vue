<template>
    <div class="flex items-start px-4 pt-24 pb-6 bg-cover bg-no-repeat bg-center bg-img-main">
        <trella-cards-list
            :cards-list="cardsList"
            :key="index"
            v-for="(cardsList, index) in cardsLists"
        />

        <trella-new-cards-list
            v-show="this.newCardsListVisibility"
            @dismimiss-new-cards-list="dismissNewCardsList"
        />

        <div class="w-80 mx-4 p-4 rounded-lg shadow-xl backdrop-blur">
            <button class="px-3 py-2 w-full rounded-lg text-gray-900 bg-white-alpha-50" @click="showNewCardsList()">
                Create List
            </button>
        </div>
    </div>
</template>

<script>
    import TrellaCardsList from './TrellaCardsList.vue';
    import TrellaNewCardsList from './TrellaNewCardsList.vue';

    export default {
        name: 'trella-board',

        components: {
            TrellaCardsList,
            TrellaNewCardsList,
        },

        data() {
            return {
                cardsLists: [
                    {
                        id: this.keyGenerator(),
                        title: 'In Progress',
                        cards: [
                            {
                                id: this.keyGenerator(),
                                title: 'Learn Vue.js',
                                description: 'I shall brute force my way through this knowledge.',
                                tasksLists: [
                                    {
                                        id: this.keyGenerator(),
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
                                        id: this.keyGenerator(),
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
                        id: this.keyGenerator(),
                        title: 'Done',
                        cards: [
                            {
                                id: this.keyGenerator(),
                                title: 'Learn HTML',
                                description: 'Easy.',
                                tasksLists: [
                                    {
                                        id: this.keyGenerator(),
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
                                id: this.keyGenerator(),
                                title: 'Learn CSS',
                                description: 'Easy. But flexbox behaviours were a bit weird to grasp.',
                                tasksLists: [
                                    {
                                        id: this.keyGenerator(),
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
                newCardsListVisibility: false,
            };
        },

        props: {

        },

        computed: {

        },

        methods: {
            // Generates random number
            keyGenerator() {
                return Math.random().toString(36).substr(2, 9);
            },

            // Saves the card by pushing it into the main array
            saveNewCard(newCard, cardsListId) {
                const matchedCardsListId = this.cardsLists.findIndex(cardsList => cardsList.id === cardsListId);
                this.cardsLists[matchedCardsListId].cards.push(newCard);
            },

            // Saves the cards list by pushing it into the main array
            saveNewCardsList(newCardsList) {
                this.cardsLists.push(newCardsList);
                console.log(this.cardsList);
            },

            // Shows the temporary new cards list
            showNewCardsList() {
                this.newCardsListVisibility = true;
            },

            // Hides the temporary new cards list
            dismissNewCardsList() {
                this.newCardsListVisibility = false;
            },
        },

        watch: {
            newCardsListVisibility() {
                console.log(this.newCardsListVisibility);
            }
        },

        mounted() {
            window.$eventBus.$on("save-new-card", this.saveNewCard);
            window.$eventBus.$on("save-new-cards-list", this.saveNewCardsList);
        },

        beforeDestroyed() {
            window.$eventBus.$off("save-new-card");
            window.$eventBus.$off("save-new-cards-list");
        },
    }
</script>
