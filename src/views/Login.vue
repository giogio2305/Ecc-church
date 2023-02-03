<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div class="flex flex-col items-center justify-center w-full min-h-screen bg-slate-100">
        <div class="flex items-center justify-center my-16">
            <div class="w-[60px] h-[46px]">
                <img src="../assets/LOGO.png" class="w-full h-full object-contain"/>
            </div>
            <h5 class="text-lg font-semibold text-zinc-800">Eglise du Christianisme Céleste</h5>
        </div>

        <div class="flex flex-col items-center justify-center w-full -mt-8">
            <h1 class="font-bold text-3xl text-zinc-800">Connectez-vous à votre compte</h1>
            <h3 class="flex flex-col items-center text-zinc-800 text-base my-1">Ou <a href="/inscription" class="text-blue-500 ml-2">Inscrivez vous et rejoignez la communauté.</a></h3>
        </div>

    <div class="flex flex-col items-center justify-center p-3 w-[480px] h-[484px] bg-white shadow-md rounded-lg my-8">
        <form class="flex flex-col w-full py-3 px-4">
            <label class="my-3">Nom d'utilisateur</label>
            <input class="border-gray-300 border-[1.8px] p-2 outline-none rounded-lg shadow-sm" type="text" placeholder="Ex: Marc Emmanuel"/>
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
</template>