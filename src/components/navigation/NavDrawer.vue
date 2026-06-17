<script setup>
import SideBar from '@/components/navigation/SideBar.vue'
const visible = defineModel({ type: Boolean, default: false })
</script>

<template>
  <Drawer v-model:visible="visible">
    <template #container>
        <Button icon="pi pi-times" class="p-button-rounded p-button-text p-button-plain absolute top-2 right-2" @click="visible = false" />
      <SideBar />
    </template>
  </Drawer>
</template>
