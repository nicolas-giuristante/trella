<template>
    <div class="cursor-pointer">
        <div class="w-full max-h-72 mb-4 p-4 rounded shadow-xl bg-white-alpha-70" @click="showCardModal()">
            <h3 class="text-lg">
                {{ card.title }}
            </h3>

            <p class="mt-2 text-sm text-gray-700" v-if="card.description">
                {{ card.description }}
            </p>
        </div>

        <!-- Fake Modal -->
        <portal to="modalland" v-if="cardModalShown">
            <div class="absolute z-10 inset-0 flex items-center justify-center w-screen h-screen overflow-x-none overflow-y-auto bg-black-alpha-30">
                <div class="flex flex-col min-w-xs w-1/3 max-w-screen-xl rounded-lg shadow-2xl bg-white">
                    <div class="flex justify-between items-start p-4">
                        <h2 class="text-2xl">
                            {{ card.title }}
                        </h2>

                        <button @click="hideCardModal()">
                            <icon
                                name="regular/close"
                                class=""
                                @click="hideCardModal()"
                            />
                        </button>
                    </div>

                    <div class="p-4">
                        <p>
                            {{ card.description }}
                        </p>
                    </div>
                </div>
            </div>
        </portal>
    </div>
</template>

<script>
    import Icon from './Icon.vue';

    export default {
        name: 'TrellaCard',

        components: {
            Icon,
        },

        data() {
            return {
                cardModalShown: false,
            };
        },

        props: {
            card: {
                type: Object,
                required: true,
            },
        },

        methods: {
            showCardModal() {
                this.cardModalShown = true;
            },

            hideCardModal() {
                this.cardModalShown = false;
            },
        },
    };
</script>
