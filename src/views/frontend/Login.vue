<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div class=" w-full   bg-slate-100 relative">
        <div class="w-full h-full  bg-[url('../assets/abt.jpg')] bg-cover bg-center ">

            <div class="bg-black/50 z-10 w-full min-h-[80vh]  flex flex-col items-center justify-center px-4 py-20">
        <div class="text-center">
            <h1 class="font-bold lg:text-3xl text-2xl text-white">Connectez-vous à votre compte</h1>
            <h3 class="flex flex-col items-center text-white text-base my-1">Ou <router-link :to="{name:'register'}" class="text-blue-500 ml-2 hover:underline">Inscrivez vous et rejoignez la communauté.</router-link></h3>
        </div>

    <div class="flex flex-col items-center justify-center p-3 w-full max-w-xl bg-white shadow-md rounded-lg my-8">
        <form class="flex flex-col w-full py-3 px-4">
            <label class="my-3">Adresse mail</label>
            <input class="border-gray-300 border-[1.8px] p-2 outline-none rounded-lg shadow-sm" type="text" placeholder="Ex: nom@xyz.com"/>
            <label class="my-3">Mot de passe</label>
            <input class="border-gray-300 border-[1.8px] p-2 outline-none rounded-lg shadow-sm" type="text" placeholder="8+ caracteres"/>
        
            <div class="flex w-full justify-between my-5">
                <a href="#" class="text-blue-600">Mot de passe oublié ?</a>
            </div>
            <input class="p-2 my-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold" type="submit" value="Se connecter"/>
        </form>
    </div>
    </div>
        </div>
        
</div>
</template>