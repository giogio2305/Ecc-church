<script setup >
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <!-- <div class="flex flex-col md:flex-row items-center justify-start p-4 md:p-8">
         <div class="w-[420px] h-[380px] ">
            <img src="../assets/abt.jpg" class="w-full h-full object-cover"/>
         </div>

         <div class="flex flex-col items-start justify-start w-full md:w-[60%] md:ml-32 mt-12 md:mt-0">
            <h3 class="font-bold text-blue-500 text-base">À PROPOS DE NOUS</h3>
            <h1 class="font-bold my-6 text-slate-700 text-3xl md:text-5xl">Nous prenons de petites mesures pour rendre la Terre meilleure</h1>
            <hr class="bg-blue-500 w-[10%] h-2 my-3"/>
            <p class="my-4 font-normal text-base text-slate-600">Nous vous accueillons avec la grande joie de l'église ECC, Nous sommes ici pour partager la grande nouvelle de Jésus-Christ à tous ceux qui écouteront.</p>
            <p>Le nom du Seigneur est une tour forte ; Les nighteos mun dedans et un coffre-fort.</p>

            <div class="py-1 my-3 w-full flex flex-col md:flex-row md:items-center justify-start">
                <div class="flex flex-col w-full md:w-[50%] p-4">
                    <span class="flex items-center justify-center my-2 w-16 h-16 bg-yellow-500 text-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-1 w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

                    </span>
                    <h3 class="my-2 font-semibold text-xl">Lieu de paradis</h3>
                    <p class="w-[80%] font-normal text-base text-slate-600">Dans ECC, vous ressentirez la divinité, la piété, la bonté, la foi ou les bonnes croyances.</p>
                </div>

                <div class="flex flex-col w-full md:w-[50%] p-4">
                    <span class="flex items-center justify-center my-2 w-16 h-16 bg-yellow-500 text-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-1 w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>


                    </span>
                    <h3 class="my-2 font-semibold text-xl">Bible d'étude</h3>
                    <p class="w-[80%] font-normal text-base text-slate-600">Apprenez la Bible, améliorez votre sagesse, donnez-vous l'audace de votre foi.</p>
                </div>
            </div>

            <router-link to="/ecc"> <button class="p-3 bg-blue-500 text-white rounded-sm my-3">Apprendre encore plus</button></router-link>
         </div>
    </div> -->
    <div class="flex items-center justify-start w-[88%] h-auto my-20 mx-auto bg-white">
        <div class="flex flex-col w-[70%]  p-4">
            <div class="flex items-center justify-start">
                <div class="w-5 h-5 bg-blue-600 rounded-full mx-4"></div>
                <h1 class="font-bold text-3xl text-zinc-800 mr-6">Histoires Récentes</h1>
                <div class="w-[48%] h-4 bg-gray-300"></div>
            </div>

            <div class="grid grid-cols-2 gap-x-6 gap-y-2 my-10 w-full">
                <div class="relative w-[424px] h-[296px] bg-white p-1">
                    <div class="absolute  ml-2 mt-2 flex items-center justify-center h-[276px] w-[416px] bg-indigo-600 rounded-lg"></div>
                    <div class="relative flex items-center justify-center h-[276px] w-[416px] bg-violet-200 rounded-lg"></div>
                </div>
                <div class="flex flex-col items-start justify-start w-[296px] h-[354px] ml-6 bg-white p-3">
                        <div class="h-[198px] w-[268px] bg-violet-300 rounded-xl"></div>
                        <h1 class="font-semibold text-2xl my-4 text-left">La spiritualité et le travail quel impact.</h1>
                        <span class="flex">
                        <h6 class="font-normal text-gray-500 text-base mr-4">Par John Leo</h6>
                        <h6 class="flex items-center font-normal text-gray-500 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            28 mars 2021</h6>
                    </span>
                </div>
                <div class="flex items-center justify-center w-[424px] h-[184px] bg-white mt-[-40px] px-2">
                    <div class="w-[240px] h-[156px] rounded-xl bg-violet-300"></div>
                    <div class="flex flex-col ml-4">
                        <div class="bg-pink-700 p-1 rounded-md text-white font-semibold w-24">Technology</div>
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
                
                <div class="flex flex-col items-start justify-start w-[296px] h-[354px] ml-6 bg-white p-3">
                        <div class="h-[198px] w-[268px] bg-violet-300 rounded-xl"></div>
                        <h1 class="font-semibold text-2xl my-4 text-left">L'amour de Dieu, un gage sur pour le salut de l'ame.</h1>
                        <span class="flex">
                        <h6 class="font-normal text-gray-500 text-base mr-4">Par John Leo</h6>
                        <h6 class="flex items-center font-normal text-gray-500 text-base">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                            </svg>
                            28 mars 2021</h6>
                    </span>
                </div>
                <div class="flex items-center justify-center w-[424px] h-[184px] bg-white mt-[-192px] px-2">
                    <div class="w-[240px] h-[156px] rounded-xl bg-violet-300"></div>
                    <div class="flex flex-col ml-4">
                        <div class="bg-red-700 p-1 rounded-md text-white font-semibold w-24 text-center">Amour</div>
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

        <div class="flex flex-col items-start justify-start w-[30%] h-auto p-4 ">
            <div class="flex flex-col  items-center justify-center w-[96%] h-full border-blue-600 border-4 rounded-xl p-4 -mt-4">
                <div class="flex items-center justify-start bg-white p-4 -mt-10">
                <div class="w-5 h-5 bg-blue-600 rounded-full mx-4"></div>
                <h1 class="font-bold text-3xl text-zinc-800 mr-6">Les Exclus</h1>
            </div>


        <div class="flex flex-col w-[254px] h-auto p-1.5 my-4 border-b-2 border-gray-300 pb-6">
            <div class="flex items-center justify-start w-full">
                <div class="w-6 h-2 bg-red-600"></div>
                <h4 class="text-base text-red-600 ml-3">Santé</h4>
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
                <div class="w-6 h-2 bg-blue-600"></div>
                <h4 class="text-base text-blue-600 ml-3">Santé</h4>
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
                <div class="w-6 h-2 bg-orange-600"></div>
                <h4 class="text-base text-orange-600 ml-3">Santé</h4>
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
                <div class="w-6 h-2 bg-green-600"></div>
                <h4 class="text-base text-green-600 ml-3">Santé</h4>
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