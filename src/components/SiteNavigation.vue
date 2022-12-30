<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router'

let open = ref(false);

function MenuOpen(){
  open.value = !open.value;
}
</script>

<template>
  <nav class="relative flex items-center justify-between gap-3 bg-white text-zinc-500 px-4  py-4 w-full h-auto border-b-4 border-yellow-400">
    <div class="w-[28%] flex items-center justify-start">
      <div class="w-[60px] h-[46px]">
                <img src="../assets/LOGO.png" class="w-full h-full object-contain"/>
            </div>
            <h5 class="text-lg font-semibold text-zinc-800">Eglise du Christianisme Céleste</h5>
    </div>



   <span @click="MenuOpen()" class="md:hidden cursor-pointer" >
  <svg v-if="open"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

<svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
  </span>


   <ul class="flex flex-col md:flex-row md:items-center justify-center bg-white list-none  py-3 px-6 md:py-0 pb-10 md:pb-0 md:static absolute  md:w-[70%] w-full duration-700 ease-in top-14" :class="[open ? 'left-0' : 'left-[-100%]']">
    <li class="hidden md:visible md:ml-24"></li>
    <li class="py-1 md:mx-2 hover:text-blue-500"><router-link to="/" class="font-semibold text-base">Acceuil</router-link></li>
    <li class="py-1 md:mx-2 hover:text-blue-500"><a href="#" class="font-semibold text-base">Services</a></li>
    <li class="py-1 md:mx-2 hover:text-blue-500"><router-link to="/cantiques" class="font-semibold text-base">Cantiques</router-link></li>
    <li class="py-1 md:mx-2 hover:text-blue-500"><a href="#" class="font-semibold text-base">Annonces</a></li>
    
    <div class=" flex flex-col md:flex-row md:items-center justify-start md:justify-evenly md:ml-48">
    <a href="#"><div class="w-28 p-2 text-center text-yellow-500  font-semibold text-base md:mx-4">Connexion</div></a>
    <a href="#"><div class="w-28 p-2 text-center rounded-lg bg-blue-500 text-white font-semibold text-base">S'inscrire</div></a>
   </div> 
  </ul> 


  </nav>
</template>