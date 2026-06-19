<script setup>
import { ref } from 'vue'
import { Form } from '@primevue/forms'
import { useAuthStore } from '@/stores/authStore'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const initialValues = ref({
  identifiant: '',
  password: '',
})
const onFormSubmit = () => {
    useAuthStore().login(initialValues.value)
  if (useAuthStore().isAuthenticated) {
    toast.add({ severity: 'success', summary: 'Connexion réussie', life: 3000 })
  } else {
    toast.add({ severity: 'error', summary: 'Identifiant ou mot de passe incorrect', life: 3000 })
  }
}
</script>

<template>
  <Toast />
  <div class="login-view">
    <h1 class="text-2xl font-bold text-center p-3">Login</h1>
    <Form
      v-slot="$form"
      :initialValues="initialValues"
      @submit="onFormSubmit"
      class="flex flex-col gap-4 w-full"
    >
      <div class="flex flex-col gap-1">
        <label for="identifiant">Identifiant</label>
        <InputText name="identifiant" type="text" placeholder="Identifiant" fluid />
      </div>
      <div class="flex flex-col gap-1">
        <label for="password">Mot de passe</label>
        <Password name="password" placeholder="Mot de passe" :feedback="false" fluid />
      </div>
      <Button type="submit" severity="primary" label="Submit" />
    </Form>
    <p class="text-center">
      Vous n'avez pas de compte ?
      <router-link to="/auth/signup" class="text-blue-700 underline">S'inscrire</router-link>
    </p>
  </div>
</template>
