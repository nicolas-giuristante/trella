<template>
    <div id="app" class="h-screen min-w-screen">
        <!-- <modals-container/> -->

        <nav class="fixed flex items-center justify-between w-full p-4 shadow-xl backdrop-blur">
            <div class="flex items-center">
                <img class="w-8 mr-4" src="./assets/img/trella-logo.svg" />
                <h1 class="text-2xl font-light text-white">Trella</h1>
            </div>

            <div class="flex items-center justify-center w-8 h-8 rounded-full text-white bg-gray-500">
                NG
            </div>
        </nav>

        <trella-board class="h-full w-full" />
    </div>
</template>

<script>
import TrellaBoard from './components/TrellaBoard.vue'

export default {
    name: 'App',
    components: {
        TrellaBoard,
    },

    data() {
        return {

        };
    },

    methods: {
        // showCardModal() {
        //     this.$modal.show('modalKey');
        // },
    },
}
</script>

<style>
    .bg-gradient-primary {
        background-image: linear-gradient(45deg, rgba(92,0,255,1) 0%, rgba(0,255,236,1) 100%);
    }

    .bg-img-main {
        background-image: url('./assets/img/unleashed-agency-A-8glbZbeKw-unsplash.jpg');
    }

    .bg-white-alpha-10 {
        background-color: rgba(255, 255, 255, 0.1);
    }
    .focus-within\:bg-white-alpha-10:focus-within {
        background-color: rgba(255, 255, 255, 0.1);
    }
    .bg-white-alpha-20 {
        background-color: rgba(255, 255, 255, 0.2);
    }
    .bg-white-alpha-30 {
        background-color: rgba(255, 255, 255, 0.3);
    }
    .bg-white-alpha-40 {
        background-color: rgba(255, 255, 255, 0.4);
    }
    .bg-white-alpha-50 {
        background-color: rgba(255, 255, 255, 0.5);
    }
    .bg-white-alpha-60 {
        background-color: rgba(255, 255, 255, 0.6);
    }
    .bg-white-alpha-70 {
        background-color: rgba(255, 255, 255, 0.7);
    }
    .bg-white-alpha-80 {
        background-color: rgba(255, 255, 255, 0.8);
    }
    .bg-white-alpha-90 {
        background-color: rgba(255, 255, 255, 0.9);
    }
</style>
