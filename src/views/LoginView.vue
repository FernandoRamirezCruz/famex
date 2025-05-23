<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 shadow p-4 rounded bg-white">
      <h2 class="text-center mb-4">Login</h2>

      <form @submit.prevent="handleSubmit">
        <!-- Email input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example1">Email address</label>
          <input
            v-model="email"
            type="email"
            id="form2Example1"
            class="form-control"
            required
          />
        </div>

        <!-- Password input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2">Password</label>
          <input
            v-model="password"
            type="password"
            id="form2Example2"
            class="form-control"
            required
          />
        </div>

        <!-- Error -->
        <div v-if="errorMsg" class="text-danger mb-2">{{ errorMsg }}</div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block w-100 mb-4" :disabled="loading">
          <span v-if="loading">Cargando...</span>
          <span v-else>Iniciar sesión</span>
        </button>

        <!-- Register link -->
        <div class="text-center">
          <p>¿No tienes cuenta? <a href="/register">Regístrate</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import gql from 'graphql-tag';
import { useMutation } from '@vue/apollo-composable';
import { useRouter } from 'vue-router'
import { nextTick } from 'vue'

// Estado
const email = ref('')
const password = ref('')
const errorMsg = ref('')
const router = useRouter()

// Mutación GraphQL
const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
      }
    }
  }
`

const { mutate: login, loading } = useMutation(LOGIN, {
  onDone: ({ data }) => {
    const token = data.login.token
    console.log('Nuevo token recibido:', token)

    localStorage.setItem('token', token)

    nextTick(() => {
      console.log('Token guardado en localStorage:', localStorage.getItem('token'))
      router.push('/games')
    })
  },
  onError: (error) => {
    console.error('Error en la mutación:', error)  // Registra el error
    errorMsg.value = error.message  // Muestra el error en el frontend
  }
})

// Manejador de submit
function handleSubmit(e) {
  e.preventDefault()
  errorMsg.value = ''
  console.log('Enviando datos para login:', email.value, password.value)
  login({ email: email.value, password: password.value }).then(response => {
    const token = response.data.login.token
    localStorage.setItem('token', token)
    router.push('/games')
  })
  .catch(error => {
    console.error('Error en la petición login:', error)
    errorMsg.value = 'Hubo un problema al iniciar sesión. Inténtalo de nuevo.'
  })
}
</script>
