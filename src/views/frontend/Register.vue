<script setup>
</script>

<template>
    <div class=" w-full    bg-slate-100 relative">
        <div class="w-full h-full  bg-[url('../assets/abt.jpg')] bg-cover bg-center ">
        <div class="bg-black/50 w-full h-full min-h-screen  flex flex-col items-center justify-center px-4 py-20">
            <div class="text-center">
                <h1 class="font-bold lg:text-3xl text-2xl text-white">Rejoindre la communauté</h1>
                <h1 class="font-semibold lg:text-xl text-lg text-center tracking-tight text-white my-4">Inscrivez-vous et rejoignez la communauté chrétienne céleste.</h1>
            </div>

            <div class="flex flex-col items-center justify-center p-3 w-full max-w-xl bg-white shadow-md rounded-lg my-8">
                <form class="flex flex-col w-full py-3 px-4">
                    <label class="my-3">Type de profil</label>
                    <select class="form-select p-2 outline-none border border-gray-300 rounded-lg shadow-sm">
                        <option>Fidèle</option>
                        <option>Chargé Paroissial</option>
                        <option>Groupe de Prière</option>
                        <option>Diocèse</option>
                        <option>Siège</option>
                    </select>
                    <label class="my-3">Nom d'utilisateur</label>
                    <input class="border-gray-300 border form-input p-2 outline-none rounded-lg shadow-sm" type="text" placeholder="Ex: Marc Emmanuel"/>
                    <label class="my-3">Adresse mail</label>
                    <input class="border-gray-300 border form-input p-2 outline-none rounded-lg shadow-sm" type="text" placeholder="Ex: nom@xyz.com"/>
                    <label class="my-3">Mot de passe</label>
                    <input class="border-gray-300 border form-input p-2 outline-none rounded-lg shadow-sm" type="text" placeholder="8+ caracteres"/>
                    <input class="p-2 mt-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold" type="submit" value="S'inscrire"/>
                    <p class=" mt-4 text-sm text-center ">Déjà un compte ? <router-link :to="{name:'login'}" class="text-blue-500 hover:underline">Connectez vous</router-link> </p>
                </form>
            </div>
        </div>
    </div>
        
</div>
</template>