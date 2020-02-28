<template>
    <div class="flex flex-col w-80 mx-4 max-h-full rounded-lg shadow-xl backdrop-blur">
        <div class="rounded-t-lg | transition-colors ease-out duration-500 focus-within:bg-white-alpha-10">
            <input
                class="w-full p-4 text-xl text-white border-none bg-transparent"
                placeholder="List Title"
                type="text"
                @keyup.enter="saveNewCardsList()"
                @keyup.escape="dismissNewCardsList()"
                v-model="newCardsListTitle"
            />
        </div>

        <div class="flex justify-center items-center">
            <button class="mr-2 px-3 py-2 w-full rounded-lg text-gray-900 bg-green-500" @click="saveNewCardsList()">
                Save
            </button>

            <button class="ml-2 px-3 py-2 w-full rounded-lg text-gray-900 bg-white-alpha-50" @click="dismissNewCardsList()">
                Cancel
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'trella-new-cards-list',

        data() {
            return {
                newCardsListTitle: "",
            };
        },

        props: {

        },

        methods:{
            keyGenerator() {
                return Math.random().toString(36).substr(2, 9);
            },

            saveNewCardsList() {
                if (this.newCardsListTitle === "") {
                    return "";
                }

                window.$eventBus.$emit("save-new-cards-list", {
                    id: this.keyGenerator(),
                    title: this.newCardsListTitle
                });

                this.dismissNewCardsList();
            },

            dismissNewCardsList() {
                this.newCardTitle = "";
                this.$emit("dismimiss-new-cards-list");
            }
        }
    }
</script>
