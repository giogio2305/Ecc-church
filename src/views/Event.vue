<script setup>
import router from '../router'
import { RouterLink, RouterView } from 'vue-router'
import SiteNavigation from '../components/SiteNavigation.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
    <SiteNavigation/>
    <div class="w-full min-h-screen bg-white m-0 p-0">
        <div class="w-full flex items-center justify-center h-48 bg-blue-300/70">
            <h1 class="text-3xl font-bold text-zinc-800">Événement : Refléter la communauté et servir</h1>
        </div>

        <div class="flex flex-col items-center justify-center mx-auto w-full min-h-[80vh] px-4 pt-20 pb-12 ">
            <div class="w-[92%] h-[580px] overflow-clip rounded-lg mb-10">
                <img src="../assets/bc3.jpg" class="object-cover h-full w-full"/>
            </div>

            <div class="flex w-[92%] h-auto">
                <div class="w-[65%] min-h-[680px] bg-gray-200"></div>
                <div class="w-[35%] min-h-[680px] bg-gray-300"></div>
            </div>

            <div class="w-[92%] h-[480px] bg-green-200 rounded-lg mt-10"></div>
        </div>
    </div>
    <Footer/>
</template>
