<template>
    <div class="w-full max-h-72 mb-4 p-4 rounded shadow-xl bg-white-alpha-70" >
        <input
            class="w-full mb-4 p-2 rounded bg-white-alpha-50"
            placeholder="Card Title"
            @keyup.enter="saveNewCard()"
            @keyup.escape="dismissNewCard()"
            v-model="newCardTitle"
        />

        <div class="flex justify-center items-center">
            <button
                class="mr-2 px-3 py-2 w-full rounded-lg text-gray-900 bg-green-500"
                @click="saveNewCard()"
            >
                Save
            </button>

            <button
                class="ml-2 px-3 py-2 w-full rounded-lg text-gray-900 bg-white-alpha-50"
                @click="dismissNewCard()"
            >
                Cancel
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TrellaNewCard',

        data() {
            return {
                newCardVisibility: false,
                newCardTitle: "",
            };
        },

        props: {
            cardsListId: {
                type: String,
                required: true,
            }
        },

        methods:{
            generateKey() {
                return Math.random().toString(36).substr(2, 9);
            },

            saveNewCard() {
                if (this.newCardTitle === "") {
                    return "";
                }

                window.$eventBus.$emit("save-new-card", {
                    id: this.generateKey(),
                    title: this.newCardTitle,
                },
                    this.cardsListId,
                );

                this.dismissNewCard();
            },

            dismissNewCard() {
                this.newCardTitle = "";
                this.$emit("dismimiss-new-card");
            }
        }
    }
</script>
