<template>
<<<<<<< Updated upstream
    <div class="flex items-start px-6 pt-24 pb-6 bg-cover bg-no-repeat bg-center bg-img-main">
        <trella-cards-list />
=======
    <div class="flex items-start px-4 pt-24 pb-6 bg-cover bg-no-repeat bg-center bg-img-main">
        <trella-cards-list
            :cards-list="cardsList"
            :key="index"
            v-for="(cardsList, index) in cardsLists"
        />

        <trella-new-cards-list
            @dismimiss-new-cards-list="dismissNewCardsList"
            v-show="this.newCardsListVisibility"
        />
>>>>>>> Stashed changes

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
        name: 'TrellaBoard',

        components: {
            TrellaCardsList,
<<<<<<< Updated upstream
        },

        props: {

=======
            TrellaNewCardsList,
        },

        data() {
            return {
                cardsLists: [
                    {
                        id: this.generateKey(),
                        title: 'In Progress',
                        cards: [
                            {
                                id: this.generateKey(),
                                title: 'Learn Vue.js',
                                description: 'I shall brute force my way through this knowledge.',
                                tasksLists: [
                                    {
                                        id: this.generateKey(),
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
                                        id: this.generateKey(),
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
                        id: this.generateKey(),
                        title: 'Done',
                        cards: [
                            {
                                id: this.generateKey(),
                                title: 'Learn HTML',
                                description: 'Easy.',
                                tasksLists: [
                                    {
                                        id: this.generateKey(),
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
                                id: this.generateKey(),
                                title: 'Learn CSS',
                                description: 'Easy. But flexbox behaviours were a bit weird to grasp.',
                                tasksLists: [
                                    {
                                        id: this.generateKey(),
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

        methods: {
            // Generates random number
            generateKey() {
                return Math.random().toString(36).substr(2, 9);
            },

            // Shows the temporary new cards list
            showNewCardsList() {
                this.newCardsListVisibility = true;
            },

            // Hides the temporary new cards list
            dismissNewCardsList() {
                this.newCardsListVisibility = false;
            },

            // Saves the card by pushing it into the main array
            saveNewCard(newCard, cardsListId) {
                const matchedCardsListId = this.cardsLists.findIndex(cardsList => cardsList.id === cardsListId);
                this.cardsLists[matchedCardsListId].cards.push(newCard);
                console.log(this.cardsLists);
            },

            // Saves the cards list by pushing it into the main array
            saveNewCardsList(newCardsList) {
                this.cardsLists.push(newCardsList);
            },
        },

        mounted() {
            window.$eventBus.$on("save-new-card", this.saveNewCard);
            window.$eventBus.$on("save-new-cards-list", this.saveNewCardsList);
        },

        beforeDestroyed() {
            window.$eventBus.$off("save-new-card");
            window.$eventBus.$off("save-new-cards-list");
>>>>>>> Stashed changes
        },
    }
</script>
