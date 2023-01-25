<script setup >
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <!-- <div class="w-full flex flex-col items-center justify-center my-16">
        <h3 class="font-bold text-blue-500 text-base">NOTRE BLOG</h3>
            <h1 class="font-bold my-2 text-slate-700 text-3xl">Derniers articles</h1>
            <hr class="bg-blue-500 w-[6%] h-1 my-2"/>

            <div class="flex flex-col md:flex-row items-center justify-center my-16">
                <div class="w-[328px] h-[408px]  rounded-lg shadow-sm ">
                    <div class="w-[100%] h-[65%] overflow-clip">
                        <img src="../assets/bc1.jpg" class="w-full h-full object-cover "/>
                    </div>
                    <div class="w-full h-[35%] bg-slate-50  p-3 relative">
                        <div class="w-[188px] p-1.5 bg-blue-500 text-white flex items-center justify-start absolute rotate-[-90deg] ml-[-86px] mt-[-126px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <h4 class="mx-3 font-semibold text-lg">21 octobre 2021</h4>
                        </div>
                        <h1 class="w-[90%] my-2 font-bold text-xl">Donner en retour - Centres de formation en Ouganda.</h1>
                        <router-link to="/article"><a class="text-yellow-500 font-bold text-md"><u>Lire la suite</u></a></router-link>
                    </div>
                </div>

                <div class="w-[328px] h-[408px] mx-8  rounded-lg shadow-sm ">
                    <div class="w-[100%] h-[65%] overflow-clip">
                        <img src="../assets/bc2.jpg" class="w-full h-full object-cover "/>
                    </div>
                    <div class="w-full h-[35%] bg-slate-50  p-3 relative">
                        <div class="w-[188px] p-1.5 bg-blue-500 text-white flex items-center justify-start absolute rotate-[-90deg] ml-[-86px] mt-[-126px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <h4 class="mx-3 font-semibold text-lg">21 octobre 2021</h4>
                        </div>
                        <h1 class="w-[90%] my-2 font-bold text-xl">L'Esprit Du Seigneur Est, De La Nouvelle Vie.</h1>
                        <router-link to="/article"><a class="text-yellow-500 font-bold text-md"><u>Lire la suite</u></a></router-link>
                    </div>
                </div>

                <div class="w-[328px] h-[408px]  rounded-lg shadow-sm ">
                    <div class="w-[100%] h-[65%] overflow-clip">
                        <img src="../assets/bc3.jpg" class="w-full h-full object-cover "/>
                    </div>
                    <div class="w-full h-[35%] bg-slate-50  p-3 relative">
                        <div class="min-w-[160px] p-1.5 bg-blue-500 text-white flex items-center justify-start absolute rotate-[-90deg] ml-[-86px] mt-[-126px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                        </svg>
                        <h4 class="mx-3 font-semibold text-lg">22 octobre 2021</h4>
                        </div>
                        <h1 class="w-[90%] my-2 font-bold text-xl">Aidez à mettre fin à la crise de l'eau pour les familles.</h1>
                        <router-link to="/article"><a class="text-yellow-500 font-bold text-md"><u>Lire la suite</u></a></router-link>
                    </div>
                </div>


                
            </div>
            <div class="flex items-center justify-evenly w-[24%] md:w-[6%]  md:mt-4">
            <span class="w-4 h-4 rounded-full bg-blue-500"></span>
            <span class="w-4 h-4 rounded-full bg-slate-300"></span>
            
        </div>
    </div> -->
    <div class="flex items-center justify-start w-[88%] h-auto my-20 mx-auto bg-white">
        <div class="flex flex-col w-[65%] h-[674px]  p-4">
            <div class="flex items-center justify-start">
                <div class="w-5 h-5 bg-blue-600 rounded-full mx-4"></div>
                <h1 class="font-bold text-3xl text-zinc-800 mr-6">Notre Blog</h1>
                <div class="w-[68%] h-4 bg-gray-300"></div>
            </div>

            <div class="flex w-full h-full my-8">
                <div class="h-[580px] w-[488px] bg-slate-600">

                </div>

                <div class="flex flex-col h-[580px] w-[248px] bg-slate-700 ml-2"></div>
            </div>
        </div>

        <div class="flex flex-col items-start justify-start w-[35%] h-[674px]">
            <div class="flex flex-col  items-center justify-center w-[96%] h-full p-1 -mt-4">
                <div class="flex items-center justify-start w-full">
                <div class="w-5 h-5 bg-blue-600 rounded-full mx-4"></div>
                <h1 class="font-bold text-3xl text-zinc-800 mr-4">Social</h1>
                <div class="w-[48%] h-4 bg-gray-300"></div>
            </div>


        <div class="flex flex-col w-[254px] h-auto p-1.5 my-4 border-b-2 border-gray-300 pb-6">
            <div class="flex items-center justify-start w-full">
                <div class="w-6 h-2 bg-violet-800"></div>
                <h4 class="text-base text-violet-800 ml-3">Santé</h4>
            </div>
            <h2 class="my-1.5 font-semibold text-[21px] text-zinc-800">Paix du coeur et santé, le role du seigneur </h2>
            <span class="flex my-1">
                <h6 class="flex items-center font-normal text-gray-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            28 mars 20211</h6>
                    </span>
        </div>


        <div class="flex flex-col w-[254px] h-auto p-1.5 my-4 border-b-2 border-gray-300 pb-6">
            <div class="flex items-center justify-start w-full">
                <div class="w-6 h-2 bg-violet-800"></div>
                <h4 class="text-base text-violet-800 ml-3">Santé</h4>
            </div>
            <h2 class="my-1.5 font-semibold text-[21px] text-zinc-800">Paix du coeur et santé, le role du seigneur </h2>
            <span class="flex my-1">
                <h6 class="flex items-center font-normal text-gray-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            28 mars 20211</h6>
                    </span>
        </div>

        <div class="flex flex-col w-[254px] h-auto p-1.5 my-4">
            <div class="flex items-center justify-start w-full">
                <div class="w-6 h-2 bg-violet-800"></div>
                <h4 class="text-base text-violet-800 ml-3">Santé</h4>
            </div>
            <h2 class="my-1.5 font-semibold text-[21px] text-zinc-800">Paix du coeur et santé, le role du seigneur </h2>
            <span class="flex my-1">
                <h6 class="flex items-center font-normal text-gray-500 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            28 mars 20211</h6>
                    </span>
        </div>
            </div>
        </div>
    </div>
</template>