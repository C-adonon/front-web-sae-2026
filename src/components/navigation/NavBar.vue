<script setup>
defineEmits(['open-sideBar'])
</script>

<template>
  <Menubar>
    <template #start>
      <div class="mobile-logo">
        <img src="../../assets/logo/logo_square.svg" alt="logo" class="logo max-h-8" />
      </div>
    </template>
    <template #end>
      <Button icon="pi pi-bars" @click="$emit('open-sideBar')" />
    </template>
  </Menubar>
</template>
