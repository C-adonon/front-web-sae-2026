<script setup>
import { ref } from 'vue'

const items = ref([
  {
    label: 'Formation',
    items: [
      { label: 'Ma formation', icon: 'pi pi-graduation-cap', route: '/formations' },
      { label: 'Autres formations', icon: 'pi pi-search', route: '/formations' },
    ],
  },
  {
    label: 'Cours',
    items: [
      { label: 'Mes cours', icon: 'pi pi-book', route: '/cours' },
      { label: 'Autres cours', icon: 'pi pi-search', route: '/cours' },
    ],
  },
  {
    label: 'Messagerie',
    items: [
      { label: 'Mes messages', icon: 'pi pi-inbox', route: '/messagerie' },
      { label: 'Nouveau message', icon: 'pi pi-search', route: '/messagerie/new' },
    ],
  },
])
</script>

<template>
  <Menu :model="items" class="h-full">
    <template #start>
      <div class="inline-flex items-center gap-1 px-2 py-2">
        <img src="../../assets/logo/logo_square.svg" alt="logo" class="logo max-h-8" />
        <span class="text-xl font-bold">Future</span>
      </div>
    </template>
    <template #item="{ item, props }">
      <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
        <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </a>
      </router-link>
    </template>
    <template #end>
      <div
        class="text-red-600 flex items-center gap-2 p-3 mt-auto hover:bg-red-50 cursor-pointer transition-colors duration-200"
      >
        <i class="pi pi-sign-out"></i>
        <span class="logout">Déconnexion</span>
      </div>
    </template>
  </Menu>
</template>