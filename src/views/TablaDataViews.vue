<!-- Tabla de datos -->
<template>
    <v-app>
    <SidebarNavWies />
    <v-app>
        <TablaCrudData />
    </v-app>
    
</v-app>
</template>

<script>
import SidebarNavWies from '@/components/SidebarNav.vue';
import TablaCrudData from '@/components/TablaCrud.vue';
export default {
  name: 'TablaDataViewsCrud',
  components: {
    SidebarNavWies,
    TablaCrudData
  }
}
</script>