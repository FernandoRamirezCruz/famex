<template>
  <div class="container d-flex justify-content-center align-items-center min-vh-100">
  <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4 shadow p-4 rounded bg-white">
    <h2 class="text-center mb-4">Registro</h2>

    <form>
      <!-- Name input -->
      <div class="form-outline mb-3">
        <label class="form-label" for="registerName">Nombre completo</label>
        <input type="text" id="registerName" class="form-control" />
      </div>

      <!-- Email input -->
      <div class="form-outline mb-3">
        <label class="form-label" for="registerEmail">Correo electrónico</label>
        <input type="email" id="registerEmail" class="form-control" />
      </div>

      <!-- Password input -->
      <div class="form-outline mb-3">
        <label class="form-label" for="registerPassword">Contraseña</label>
        <input type="password" id="registerPassword" class="form-control" />
      </div>

      <!-- Repeat Password input -->
      <div class="form-outline mb-4">
        <label class="form-label" for="registerRepeatPassword">Repetir contraseña</label>
        <input type="password" id="registerRepeatPassword" class="form-control" />
      </div>

      <!-- Checkbox -->
      <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="termsCheck" checked />
        <label class="form-check-label" for="termsCheck">
          Acepto los <a href="#!">términos y condiciones</a>
        </label>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-success btn-block w-100 mb-3">Registrarse</button>

      <div class="text-center">
        <p>¿Ya tienes cuenta? <a href="/login">Inicia sesión</a></p>
      </div>
    </form>
  </div>
  </div>

</template>
  
<script>

</script>