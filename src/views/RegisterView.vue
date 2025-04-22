<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 shadow p-4 rounded bg-white">
      <h2 class="text-center mb-4">Registro</h2>

      <form @submit="handleSubmit">
        <!-- Name input -->
        <div class="form-outline mb-3">
          <label class="form-label" for="registerName">Nombre completo</label>
          <input v-model="name" type="text" id="registerName" class="form-control" required />
        </div>

        <!-- Email input -->
        <div class="form-outline mb-3">
          <label class="form-label" for="registerEmail">Correo electrónico</label>
          <input v-model="email" type="email" id="registerEmail" class="form-control" required />
        </div>

        <!-- Password input -->
        <div class="form-outline mb-3">
          <label class="form-label" for="registerPassword">Contraseña</label>
          <input v-model="password" type="password" id="registerPassword" class="form-control" required />
        </div>

        <!-- Repeat Password input -->
        <div class="form-outline mb-4">
          <label class="form-label" for="registerRepeatPassword">Repetir contraseña</label>
          <input v-model="repeatPassword" type="password" id="registerRepeatPassword" class="form-control" required />
        </div>

        <!-- Error -->
        <div v-if="errorMsg" class="text-danger mb-2">{{ errorMsg }}</div>

        <!-- Checkbox -->
        <div class="form-check d-flex justify-content-center mb-4">
          <input class="form-check-input me-2" type="checkbox" v-model="acceptedTerms" id="termsCheck" />
          <label class="form-check-label" for="termsCheck">
            Acepto los <a href="#!">términos y condiciones</a>
          </label>
        </div>

        <!-- Submit button -->
        <button type="submit" class="btn btn-success btn-block w-100 mb-3" :disabled="loading">
          <span v-if="loading">Registrando...</span>
          <span v-else>Registrarse</span>
        </button>

        <div class="text-center">
          <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
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

// Estado del formulario
const name = ref('')
const email = ref('')
const password = ref('')
const repeatPassword = ref('')
const acceptedTerms = ref(true)
const errorMsg = ref('')
const router = useRouter()

// Mutación GraphQL
const REGISTER = gql`
  mutation Register($name: String!, $email: String!, $password: String!) {
    register(name: $name, email: $email, password: $password) {
      token
      user {
        id
        name
      }
    }
  }
`

const { mutate: register, loading } = useMutation(REGISTER, {
  onDone: ({ data }) => {
    localStorage.setItem('token', data.register.token)
    router.push('/') // Redirige al home, o donde tu vayas a mandarlo
  },
  onError: (error) => {
    errorMsg.value = error.message
  }
})

// Manejador del submit
function handleSubmit(e) {
  e.preventDefault()
  errorMsg.value = ''

  if (!acceptedTerms.value) {
    errorMsg.value = 'Debes aceptar los términos y condiciones.'
    return
  }

  if (password.value !== repeatPassword.value) {
    errorMsg.value = 'Las contraseñas no coinciden.'
    return
  }

  register({
    name: name.value,
    email: email.value,
    password: password.value,
  })
}
</script>
