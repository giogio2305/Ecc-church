<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BannerCards from '../components/BannerCards.vue';
import EventCards from '../components/EventCards.vue';
import SiteNavigation from '../components/SiteNavigation.vue';
import AboutUs from '../components/AboutUs.vue'
import DonateSection from '../components/DonateSection.vue';
import Ministries from '../components/Ministries.vue';
import ContactSection from '../components/ContactSection.vue';
import BlogSection from '../components/BlogSection.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white m-0 p-0 overflow-hidden">
    <SiteNavigation/>
    <BannerCards/> 
    <EventCards/>
    <AboutUs/>
    <DonateSection/>
    <Ministries/>
    <!-- <ContactSection/> -->
    <BlogSection/>
    <Footer/>
  </div>
</template>

