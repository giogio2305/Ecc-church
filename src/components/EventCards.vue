<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div class="flex flex-col items-center justify-center md:p-12 w-full mx-auto mt-[88px]">
        <div class="w-full flex justify-evenly ">
            <div class="p-6 flex h-44 md:h-40 w-[96%] md:w-[48%] bg-white rounded-md  shadow">
            <div class="flex flex-col w-28 md:w-32 h-24 md:h-26">
                <span class="flex items-center justify-center rounded-t-md w-full h-[65%] bg-blue-200 text-blue-600 text-lg font-normal">3 mars</span>
                <span class="flex items-center justify-center rounded-b-md w-full h-[35%] bg-blue-500 text-white text-md font-medium">7h00</span>
            </div>

            <div class="flex flex-col justify-between w-full h-full mx-4">
                <h2 class="font-bold  text-xl md:text-2xl">Événement : Refléter la communauté et servir</h2>
            <router-link to="/evenement"><a class="text-yellow-500 font-semibold text-base md:text-lg"><u>Détails de l'évènement</u></a></router-link>
            </div>
        </div>

        <div class="hidden md:visible p-6 md:flex h-40 w-[48%] bg-white rounded-md  shadow">
            <div class="flex flex-col w-32 h-26">
                <span class="flex items-center justify-center rounded-t-md w-full h-[65%] bg-blue-200 text-blue-600 text-lg font-normal">18 déc.</span>
                <span class="flex items-center justify-center rounded-b-md w-full h-[35%] bg-blue-500 text-white text-md font-medium">8h00</span>
            </div>

            <div class="flex flex-col justify-between w-full h-full mx-4">
                <h2 class="font-bold text-2xl">Notre Meetup de parrainage aura lieu à nouveau</h2>
                <a class="text-yellow-500 font-semibold text-lg"><u>Détails de l'évènement</u></a>
            </div>
        </div>
        </div>
        <div class="flex items-center justify-evenly  w-[24%] md:w-[6%] my-8 md:mt-16">
            <span class="w-3 md:w-4 h-3 md:h-4 rounded-full bg-blue-500"></span>
            <span class="w-3 md:w-4 h-3 md:h-4 rounded-full bg-slate-300"></span>
            <span class="w-3 md:w-4 h-3 md:h-4 rounded-full bg-slate-300"></span>
        </div>

    </div>
</template>