<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white text-slate-800 py-3 px-6 w-full">
   <div class="flex font-bold text-slate-800">ECC LOGO</div>
   <ul class="flex items-center justify-center list-none ml-52">
    <li class="mx-2 hover:text-red-600"><router-link to="/" class="font-semibold text-base">Acceuil</router-link></li>
    <li class="mx-2 hover:text-red-600"><a href="#" class="font-semibold text-base">Services</a></li>
    <li class="mx-2 hover:text-red-600"><router-link to="/cantiques" class="font-semibold text-base">Cantiques</router-link></li>
    <li class="mx-2 hover:text-red-600"><a href="#" class="font-semibold text-base">Annonces</a></li>
   </ul> 

   <div class=" flex items-center justify-evenly ml-8">
    <a href="#"><div class="w-28 p-2 text-center text-red-600 bg-white font-semibold text-base mx-4">Connexion</div></a>
    <a href="#"><div class="w-28 p-2 text-center rounded-lg bg-red-600 text-white font-semibold text-base">S'inscrire</div></a>
   </div>
  </nav>
</template>