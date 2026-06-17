<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import SideBar from '@/components/navigation/SideBar.vue'
import NavDrawer from '@/components/navigation/NavDrawer.vue'
import NavBar from '@/components/navigation/NavBar.vue'

const isDrawerOpen = ref(false)
</script>

<template>
  <div class="app-layout">
    <aside class="sidebar hidden md:block">
      <SideBar />
    </aside>
    <section class="app-content">
      <RouterView />
    </section>
      <NavDrawer v-model="isDrawerOpen" />
    <section class="app-navbar block md:hidden">
      <NavBar @open-sideBar="isDrawerOpen = true" />
    </section>
  </div>
</template>