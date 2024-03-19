  <!-- Sidebar.vue -->
<template>
    <div class="dashboard" >
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-img src="../assets/logo_zoe/logo_zoe_horizontal.svg" alt="Logo" class="mr-6"></v-img>

        
    <!-- Icono de notificaciones -->
    <v-btn icon class="mr-4">
      <v-badge offset-x="2" offset-y="2" color="info" content="5">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>
    <!-- Avatar y nombre de usuario --> 
        <div class="usuario">
            <v-list>
          <v-list-item
            prepend-avatar="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
            subtitle="OPTIMUN SOFT COL S.A.S" 
            title="Jose Daniel Rodriguez Chinchilla">
          </v-list-item>
        </v-list>
        </div>
      </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        temporary
        >
        <!-- Lista de items del sidebar -->
        <v-list>
            <v-list-subheader>REPORTS</v-list-subheader>
            <router-link v-for="(item, i) in items" :key="i" :to="item.route" class="router-link">
            <v-list-item :value="item" rounded="xl">
              <template v-slot:prepend>
                <v-icon>{{ item.icon }}</v-icon>
              </template>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </router-link>
      <v-divider></v-divider>
      <v-list-subheader>ACTION</v-list-subheader>
      <v-list-group value="Documentos">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" title="Documentos">
            <template v-slot:prepend>
              <v-icon icon="mdi-file-document"></v-icon>
            </template>
          </v-list-item>
        </template>
        <v-list-item
          v-for="([title, icon], i) in cruds"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :value="title"  
        ></v-list-item>
      </v-list-group>
      <v-divider></v-divider>
      
      <v-list-subheader>REPORTS</v-list-subheader>
      <router-link v-for="(closed, i) in closed" :key="i" :to="closed.route" class="router-link">
          <v-list-item :value="closed" color="primary" rounded="xl">
            <template v-slot:prepend>
              <v-icon>{{ closed.icon }}</v-icon>
            </template>
            <v-list-item-title>{{ closed.text }}</v-list-item-title>
          </v-list-item>
        </router-link>
    </v-list>
      </v-navigation-drawer>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue'
  
    const drawer = ref(null)
  </script>
  
  <script>
  export default {
    name: 'SidebarNav',
    data() {
      return {
        isOpen: false,
        activeSubmenu: null,
        items: [
        { text: 'Inicio', icon: 'mdi-home', route: '/dashboard' },
        { text: 'Tablas', icon: 'mdi-table', route: '/tabladataviewscrud' },
        { text: 'Perfil', icon: 'mdi-account', route: '/profile' },
        { text: 'Estadisticas', icon: 'mdi-finance', route: '/statistics' },
        ],
        closed: [
          { text: 'Salir', icon: 'mdi-logout', route:'login' },
        ],
        cruds: [
          ['Emitido', 'mdi-call-made'],
          ['Recibido', 'mdi-call-received'],
          ['Update', 'mdi-update'],
          ['Delete', 'mdi-delete'],
        ],
        drawer: null
      };
    }
  }
</script>
<style>
.router-link {
  color: inherit; 
  text-decoration: none; 
}
.route {
  color: inherit; 
  text-decoration: none; 
}
</style>