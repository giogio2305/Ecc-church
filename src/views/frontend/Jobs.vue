<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import { BriefcaseIcon,ClipboardDocumentCheckIcon } from '@heroicons/vue/24/outline';
import JobCard from '@/components/JobCard.vue';
const data =[
    {
    company: "SABC",
    post: "Assistant comptable",
    type: "Plein temps ou Contrat",
    salary: "Salaire négociable",
    exp: "3 ans d'expérience",
    publishedAt: "12 fév. 2023",
    location: "Douala, Cameroun"
},
{
    company: "Cible RH",
    post: "Gestionnaire client",
    type: "Plein temps",
    salary: "Salaire négociable",
    exp: "aucune expérience",
    publishedAt: "23 fév. 2023",
    location: "Douala, Cameroun"
},
{
    company: "CRTV",
    post: "Rédacteur WEB",
    type: "Plein temps ou Contrat",
    salary: "Salaire négociable",
    exp: "5 ans d'expérience",
    publishedAt: "6 fév. 2023",
    location: "Remote / Yaoundé, Cameroun"
},
{
    company: "Gras savoye",
    post: "Assistant juridique",
    type: "Contrat",
    salary: "Salaire négociable",
    exp: "aucune expérience",
    publishedAt: "23 jan. 2023",
    location: "Douala, Cameroun"
},
{
    company: "Balafon médias",
    post: "Cadreur pro",
    type: "Plein temps ou Contrat",
    salary: "Salaire négociable",
    exp: "2 ans expérience",
    publishedAt: "4 jan. 2023",
    location: "Douala, Cameroun"
},
]
</script>
<template>
    <div class="w-full min-h-screen bg-white">
        <!-- Hero section -->
        <div class="relative overflow-clip flex flex-col items-center justify-center w-full h-80 bg-gradient-to-tl from-blue-500 via-blue-300 to-blue-500 p-12">
            <BriefcaseIcon class="absolute -left-12 rotate-6 w-72 h-72 text-blue-800/50"/>
            <ClipboardDocumentCheckIcon class="absolute -right-12 rotate-12 w-72 h-72 text-blue-800/50"/>
            <div class="flex ">
            <h5 class="font-semibold text-blue-800 text-xl ml-2">Jobs</h5>
        </div>
        <h1 class="font-bold text-zinc-800 text-4xl my-4">Trouvez le job de vos reves</h1>

        <div class="flex items-center justify-center w-full h-auto">
            <div class="flex items-center w-1/2 h-16 p-4 bg-white rounded-full shadow mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-500 mx-2 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>

            <input class="border-0 focus:outline-0 border-r-2 border-gray-500  focus:ring-0 mr-4" type="text" placeholder="Pays ou ville"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class=" text-gray-500  w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
            </svg>

            <input class="w-80 border-0   focus:ring-0" type="text" placeholder="Titre du job ou mot clé"/>
        </div>
        <button type="submit" class="flex items-center shadow justify-center w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 via-blue-500 to-blue-600 ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="text-white w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

        </button>
        </div>
        </div>

        <!-- Body section -->
        <div class="flex items-start w-full h-auto mt-8">
            <div class="flex flex-col w-1/5 h-auto bg-white p-6">
                <div class="w-full flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                    <h2 class="font-semibold text-zinc-800 text-xl ml-4 my-8">Filtres</h2>
                </div>

        <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">

      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-white shadow px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75"
        >
          <span>Spécialités</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-blue-800"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div class="flex items-center">
                            <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="yes"  :value="true">
                            <label for="yes">Artiste Chantre</label>
                        </div>
        
                        <div class="flex items-center">
                                <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="no"   :value="false">
                            <label for="no">Chorale</label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="yes"  :value="true">
                            <label for="yes">Cours biblique</label>
                        </div>
        
                        <div class="flex items-center">
                                <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="no"   :value="false">
                            <label for="no">Chargé paroissial</label>
                        </div>

                        <div class="flex items-center">
                            <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="yes"  :value="true">
                            <label for="yes">Déchaussé</label>
                        </div>
        
                        <div class="flex items-center">
                                <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="no"   :value="false">
                            <label for="no">Evangelisation</label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="yes"  :value="true">
                            <label for="yes">Fidele</label>
                        </div>
        </DisclosurePanel>
      </Disclosure>

      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-white shadow px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
          <span>Type d'emploi</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-blue-800"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div class="flex items-center">
                            <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="yes"  :value="true">
                            <label for="yes">Artiste Chantre</label>
                        </div>
        
                        <div class="flex items-center">
                                <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="no"   :value="false">
                            <label for="no">Chorale</label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="yes"  :value="true">
                            <label for="yes">Cours biblique</label>
                        </div>
        
                        <div class="flex items-center">
                                <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="no"   :value="false">
                            <label for="no">Chargé paroissial</label>
                        </div>

                        <div class="flex items-center">
                            <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="yes"  :value="true">
                            <label for="yes">Déchaussé</label>
                        </div>
        </DisclosurePanel>
      </Disclosure>

      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-white shadow px-4 py-2 text-left text-sm font-medium text-blue-900 hover:bg-blue-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
          <span>Salaires</span>
          <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-blue-800"
          />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
            <div class="flex items-center">
                            <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="yes"  :value="true">
                            <label for="yes">Artiste Chantre</label>
                        </div>
        
                        <div class="flex items-center">
                                <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="no"   :value="false">
                            <label for="no">Chorale</label>
                        </div>
                        <div class="flex items-center">
                            <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="yes"  :value="true">
                            <label for="yes">Cours biblique</label>
                        </div>
        
                        <div class="flex items-center">
                                <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="no"   :value="false">
                            <label for="no">Chargé paroissial</label>
                        </div>

                        <div class="flex items-center">
                            <input type="checkbox" class="form-checkbox border-gray-300 mr-2" id="yes"  :value="true">
                            <label for="yes">Déchaussé</label>
                        </div>
        </DisclosurePanel>
      </Disclosure>
        </div>



            </div>

            <!-- SEction des offres -->
            <div class="w-4/5 h-auto bg-white p-6 my-2">
                <JobCard v-for="d,index in data" :key="index" :data="d"/>           
            </div>
        </div>

    </div>
</template>