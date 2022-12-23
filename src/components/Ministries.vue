<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div class="w-full flex flex-col items-center justify-center my-16">
        <h3 class="font-bold text-blue-500 text-base">Ministères</h3>
            <h1 class="font-bold my-2 text-slate-700 text-3xl">Nos ministères</h1>
            <hr class="bg-blue-500 w-[6%] h-1 my-2"/>

            <div class="flex flex-col md:flex-row items-center justify-center my-16">
                <div class="w-[328px] h-[448px]  rounded-lg shadow-sm ">
                    <div class="w-[100%] h-[50%] overflow-clip rounded-t-lg">
                        <img src="../assets/met.jpg" class="w-full h-full object-cover "/>
                    </div>
                    <div class="w-full h-[50%] bg-slate-50 rounded-b-lg border-b-4 border-blue-500 p-5">
                        <h1 class="font-bold text-xl">Ministère des Enfants</h1>
                        <p class="my-3 font-normal text-base text-slate-600">Le ministère des enfants est le ministère le plus important de notre église. Ce ministère aide les enfants à découvrir le Seigneur.</p>

                        <a class="text-yellow-500 font-bold text-md"><u><router-link to="/ministere">Lire la suite</router-link></u></a>
                    </div>
                </div>

                <div class="my-8 md:mx-8 w-[328px] h-[448px]  rounded-lg shadow-sm ">
                    <div class="w-[100%] h-[50%] overflow-clip rounded-t-lg">
                        <img src="../assets/mft.jpg" class="w-full h-full object-cover "/>
                    </div>
                    <div class="w-full h-[50%] bg-slate-50 rounded-b-lg border-b-4 border-blue-500 p-5">
                        <h1 class="font-bold text-xl">Ministère des Femmes</h1>
                        <p class="my-3 font-normal text-base text-slate-600">Le ministère des enfants est le ministère le plus important de notre église. Ce ministère aide les enfants à découvrir le Seigneur.</p>

                        <router-link to="/ministere"><a class="text-yellow-500 font-bold text-md"><u>Lire la suite</u></a></router-link>
                    </div>
                </div>

                <div class="w-[328px] h-[448px]  rounded-lg shadow-sm ">
                    <div class="w-[100%] h-[50%]  rounded-t-lg overflow-clip">
                        <img src="../assets/gmt.jpg" class="w-full h-full object-cover "/>
                    </div>
                    <div class="w-full h-[50%] bg-slate-50 rounded-b-lg border-b-4 border-blue-500 p-5">
                        <h1 class="font-bold text-xl">Ministère Global</h1>
                        <p class="my-3 font-normal text-base text-slate-600">Le ministère des enfants est le ministère le plus important de notre église. Ce ministère aide les enfants à découvrir le Seigneur.</p>

                        <router-link to="/ministere"><a class="text-yellow-500 font-bold text-md"><u>Lire la suite</u></a></router-link>
                    </div>
                </div>
            </div>
    </div>
</template>