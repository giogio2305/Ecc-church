<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

let open = ref(false);

function MenuOpen(){
  open.value = !open.value;
}
</script>

<template>
  <nav class="relative flex items-center justify-between gap-3 bg-blue-400 text-white px-6  py-4 w-full h-auto">
   <div class="flex font-bold text-white">ECC LOGO</div>


   <span @click="MenuOpen()" class="md:hidden cursor-pointer" >
  <svg v-if="open"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

<svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
  </span>


   <ul class="flex flex-col md:flex-row md:items-center justify-center bg-blue-400 list-none  py-3 px-6 md:py-0 pb-10 md:pb-0 md:static absolute  md:w-[70%] w-full duration-700 ease-in top-14" :class="[open ? 'left-0' : 'left-[-100%]']">
    <li class="py-1 md:mx-2 hover:text-blue-800"><router-link to="/" class="font-semibold text-base">Acceuil</router-link></li>
    <li class="py-1 md:mx-2 hover:text-blue-800"><a href="#" class="font-semibold text-base">Services</a></li>
    <li class="py-1 md:mx-2 hover:text-blue-800"><router-link to="/cantiques" class="font-semibold text-base">Cantiques</router-link></li>
    <li class="py-1 md:mx-2 hover:text-blue-800"><a href="#" class="font-semibold text-base">Annonces</a></li>
    
    <div class=" flex flex-col md:flex-row md:items-center justify-start md:justify-evenly md:ml-48">
    <a href="#"><div class="w-28 p-2 text-center text-white  font-semibold text-base md:mx-4">Connexion</div></a>
    <a href="#"><div class="w-28 p-2 text-center rounded-lg bg-yellow-500 text-white font-semibold text-base">S'inscrire</div></a>
   </div> 
  </ul> 


  </nav>
</template>