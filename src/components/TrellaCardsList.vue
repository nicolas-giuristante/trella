<template>
    <div class="flex flex-col w-80 max-h-full rounded-lg shadow-xl backdrop-blur">
        <div class="rounded-t-lg | transition-colors ease-out duration-500 focus-within:bg-white-alpha-10">
<<<<<<< Updated upstream
            <input class="w-full p-4 text-xl text-white border-none bg-transparent" value="Lorem ipsum" />
=======
            <input
                class="w-full p-4 text-xl text-white border-none bg-transparent"
                type="text"
                readonly
                :value="cardsList.title"
            />
>>>>>>> Stashed changes
        </div>

        <!-- relative w-80 h-full max-h-full   -->
        <div class="flex-1 max-h-full overflow-y-auto px-4 pt-4 rounded-b-lg">
<<<<<<< Updated upstream
            <trella-card />
=======
            <trella-card
                :key="index"
                :card="card"
                v-for="(card, index) in cardsList.cards"
            />

            <trella-new-card
                :cards-list-id="this.cardsList.id"
                @dismimiss-new-card="dismissNewCard"
                v-show="this.newCardVisibility"
            />
        </div>

        <div class="p-4 rounded-b-lg">
            <button
                class="px-3 py-2 w-full rounded-lg text-gray-900 bg-white-alpha-50"
                @click="createNewCard()"
            >
                Add card
            </button>
>>>>>>> Stashed changes
        </div>
    </div>
</template>

<script>
    import TrellaCard from './TrellaCard.vue';

    export default {
        name: 'TrellaCardsList',

        components: {
            TrellaCard,
        },

        props: {
<<<<<<< Updated upstream
=======
            cardsList: {
                type: Object,
                required: true,
            },
        },

        methods: {
            createNewCard() {
                this.newCardVisibility = true;
            },

            dismissNewCard() {
                this.newCardVisibility = false;
            },
        },
>>>>>>> Stashed changes

        },

        beforeDestroyed() {
            window.$eventBus.$off("dismimiss-new-card");
        },
    }
</script>
