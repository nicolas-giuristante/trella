<template>
    <div class="w-full max-h-72 mb-4 p-4 rounded shadow-xl bg-white-alpha-70">
        <h3 class="mb-2 text-lg ">
            {{ card.title }}
        </h3>

        <p class="text-sm text-gray-700">
            {{ card.description  }}
        </p>

        <!-- <modal name="modalKey">
            <div class="p-4 bg-white">
                <h2 class="text-2xl">
                    Name of the card
                </h2>
            </div>

            <div class="p-4 bg-gray-100">
                <textarea class="w-full p-2 border-transparent bg-red-500 | focus:border-gray-500">
                </textarea>
            </div>

            <div class="flex justify-end items-center w-full p-4 bg-white">
                <button>
                    TEST
                </button>
            </div>
        </modal> -->
    </div>
</template>

<script>
    export default {
        name: 'trella-card',

        data() {
            return {

            };
        },

        props: {
            card: {
                type: Object,
                required: true,
            },
        },

        methods:{

        }
    }
</script>
