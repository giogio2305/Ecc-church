<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="flex items-center justify-center w-full min-h-screen bg-white">
        <div class="w-[60%] h-screen bg-[url('../assets/abt.jpg')] bg-cover bg-center">
        </div>
        <div class="flex flex-col items-center justify-start w-[40%] h-full px-10 py-2"> 
            <div class="flex items-center justify-center">
            <div class="w-[60px] h-[46px]">
                <img src="../assets/LOGO.png" class="w-full h-full object-contain"/>
            </div>
            <h5 class="text-lg font-semibold text-zinc-800">Eglise du Christianisme Céleste</h5>
        </div>
            <h1 class="font-semibold text-2xl text-center tracking-tight text-zinc-800 my-4">Inscrivez-vous et rejoignez la communauté chrétienne céleste.</h1>
            <form class="flex flex-col w-full py-3 px-4">
            <label class="my-3">Nom d'utilisateur</label>
            <input class="border-gray-300 border-[1.8px] p-2 outline-none rounded-lg shadow-sm" type="text" placeholder="Ex: Marc Emmanuel"/>
            <label class="my-3">Adresse mail</label>
            <input class="border-gray-300 border-[1.8px] p-2 outline-none rounded-lg shadow-sm" type="text" placeholder="Ex: nom@xyz.com"/>
            <label class="my-3">Mot de passe</label>
            <input class="border-gray-300 border-[1.8px] p-2 outline-none rounded-lg shadow-sm" type="text" placeholder="8+ caracteres"/>
            <label class="my-3">Type de profil</label>
            <select class="border-gray-300 border-[1.8px] p-2 outline-none rounded-lg shadow-sm">
                <option>Fidèle</option>
                <option>Chargé Paroissial</option>
                <option>Groupe de Prière</option>
                <option>Diocèse</option>
                <option>Siège</option>
            </select>
            <input class="p-2 mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold" type="submit" value="S'inscrire"/>
        </form>
        </div>
    </div>

</template>