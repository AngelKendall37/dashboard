  <!-- LoginComponents.vue -->
<template>
  <div>
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="../assets/logo_zoe/logo_zoe_horizontal.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Cuenta</div>

      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Correo electrónico"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Contraseña

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          ¿Olvidó su contraseña de acceso?</a>
      </div>

      <v-text-field
        v-model="password"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Ingrese su contraseña"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <v-card-text class="text-medium-emphasis text-caption">
          Advertencia: En caso de presentar problemas con el inicio de sesion, comuniquese con un administrador en: admin@admin.com
        </v-card-text>
      </v-card>

      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        @click="login"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
      
      <!-- Mostrar mensaje de error si existe -->
      <v-alert
        v-if="error"
        class="mb-4"
        dense
        outlined
        type="error"
      >
        {{ error }}
      </v-alert>
    </v-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginCompViews',
  data() {
    return {
      email: '',
      password: '',
      visible: false,
      error: '' 
    };
  },
  methods: {
  async login() {
    try {
      // Realizar la solicitud de inicio de sesión con las credenciales
      const response = await axios.post('http://localhost:5000/login', {
        email: this.email, 
        password: this.password,
      });

      // Manejar la respuesta de la API
      console.log('Respuesta del servidor:', response.data);

      // Verificar si la respuesta tiene el formato esperado y si el inicio de sesión fue exitoso
      if (response.data && response.data.message === 'Inicio de sesión exitoso') {
        // Redirigir al usuario al dashboard si el inicio de sesión es exitoso
        this.$router.push('/dashboard');
      } else {
        // Mostrar un mensaje de error si el inicio de sesión falla
        this.error = 'Credenciales incorrectas';
      }
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud
      console.error('Error al iniciar sesión:', error);
      this.error = 'Error al conectar con el servidor';
    }
  }
}

};
</script>
