<script setup>
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { RouterLink, RouterView } from 'vue-router'
polyfillCountryFlagEmojis();
</script>
<template>
    <div class="w-full min-h-screen p-3 bg-white">
        <div class="flex flex-col items-center w-5/6 h-auto rounded-xl shadow-md my-8 overflow-clip bg-white mx-auto">
            <div class="w-full p-20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"></div>
            <div class="w-full min-h-32 p-8">
                <div class="w-36 h-36 rounded-full overflow-clip shadow -mt-28">
                    <img src="../../assets/bdt.jpg" class="w-full h-full object-cover"/>
                </div>
                <h1 class="font-semibold text-zinc-800 text-2xl my-3">Marc Sigha</h1>
                <h1 class="font-medium text-zinc-600 text-lg">&#127464;&#127474; &nbsp; Douala, Cameroun</h1>
                <div class="flex items-center my-3">
                    <h2 class="text-zinc-500 text-md">marcsigha@gmail.com</h2> <div class="w-1.5 h-1.5 mt-1 mx-2 bg-slate-300 rounded-full"></div>
                    <h2 class="text-zinc-500 text-md">694567890</h2> <div class="w-1.5 h-1.5 mt-1 mx-2 bg-slate-300 rounded-full"></div>
                    <h2 class="text-zinc-500 text-md">Homme</h2>
                </div>
                <div class="flex items-center mt-10">
                    <router-link :to="{name:'editprofil'}">
                    <div class="flex items-center p-2 rounded-lg bg-slate-50 border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-zinc-800 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                        </svg>
                        <p class="font-semibold text-zinc-800 text-lg mx-2">Editer le profil</p>
                    </div>
                </router-link>
                </div>
            </div>
        </div>

            <div class="flex w-5/6 mx-auto">
            <div class="flex flex-col w-4/5 h-auto rounded-lg shadow-md p-5 my-8 overflow-clip bg-white mx-auto">
            <h1 class="font-semibold text-zinc-800 text-xl my-3">Biographie</h1>
            <div class="w-full h-auto flex flex-col items-center justify-center p-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-300 w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                <p class="font-semibold text-zinc-600 text-xl my-3">Aucune Biographie</p>
                <div class="flex items-center p-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-600 mt-4 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="text-white w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
    
                    <p class="font-semibold text-white text-md mx-2">Nouvelle biographie</p>
                    </div>
            </div>
            </div>
            <div class="flex flex-col w-2/5 h-auto rounded-lg shadow-md p-5 my-8 overflow-clip bg-white mx-auto ml-4">
                    <h1 class="font-semibold text-zinc-800 text-xl my-3">Messages récents</h1>
                    <div class="w-full h-auto flex flex-col items-center justify-center p-12">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-300 w-16 h-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                        <p class="font-semibold text-zinc-600 text-xl my-3">Aucun message</p>
                        <div class="flex items-center p-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-600 mt-4 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="text-white w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
            
                            <p class="font-semibold text-white text-md mx-2">Nouveau message</p>
                            </div>
                    </div>
            </div>
            </div>

            <div class="flex w-5/6 mx-auto">
            <div class="flex flex-col w-4/5 h-auto rounded-lg shadow-md p-5 my-8 overflow-clip bg-white mx-auto">
            <h1 class="font-semibold text-zinc-800 text-xl my-3">Diplome et Certification</h1>
            <div class="w-full h-auto flex flex-col items-center justify-center p-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-300 w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg>

                <p class="font-semibold text-zinc-600 text-xl my-3">Aucune diplome</p>
            </div>
            </div>
            <div class="flex flex-col w-2/5 h-auto rounded-lg shadow-md p-5 my-8 overflow-clip bg-white mx-auto ml-4">
                    <h1 class="font-semibold text-zinc-800 text-xl my-3">Langues parlées</h1>
                    <div class="w-full h-auto flex flex-col items-center justify-center p-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-300 w-16 h-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                        </svg>

                        <p class="font-semibold text-zinc-600 text-xl my-3">Aucune langue</p>
                    </div>
            </div>
            </div>

        <div class="flex flex-col w-5/6 h-auto rounded-lg shadow-md p-5 my-8 overflow-clip bg-white mx-auto">
            <h1 class="font-semibold text-zinc-800 text-xl my-3">Évènements</h1>
            <div class="w-full h-auto flex flex-col items-center justify-center p-12">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-300 w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>

                <p class="font-semibold text-zinc-600 text-xl my-3">Aucune évènement par ici !</p>
                <div class="flex items-center p-2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-600 mt-4 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="text-white w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
    
                    <p class="font-semibold text-white text-md mx-2">Nouvel évènement</p>
                    </div>

            </div>
        </div>
    </div>
</template>