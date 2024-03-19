<template>
  <v-app>
    <SidebarNavWies />
    <div style="height: 100px;"></div>

    <div class="card-grid d-flex flex-wrap justify-center">
      <template v-for="(card, index) in cards" :key="index">
        <v-card
          :color="card.color"
          class="mx-auto custom-card"
          elevation="4"
          max-width="280"
          outlined
          rounded
        >
          <v-card-text class="d-flex align-center px-4 py-3">
            <v-icon class="custom-icon mr-4" size="48" color="primary">
              {{ card.icon }}
            </v-icon>
            <div class="card-content">
              <v-card-title class="text-h6 font-weight-medium mb-2 custom-title">
                {{ card.title }}
              </v-card-title>
              <div class="text-caption custom-text">{{ card.created }} Creadas</div>
            </div>
          </v-card-text>
        </v-card>
      </template>
    </div>
  </v-app>
</template>

<script>
import SidebarNavWies from '@/components/SidebarNav.vue';

export default {
  name: 'DashboardViewNav',
  components: {
    SidebarNavWies,
  },
  data() {
    return {
      cards: [
        {
          title: 'Factura de venta',
          created: 2,
          icon: 'mdi-ticket-outline',
          color: '#FFFFFF', 
        },
        {
          title: 'Nota crédito',
          created: 0,
          icon: 'mdi-currency-usd',
          color: '#FFFFFF', 
        },
        {
          title: 'Nota débito',
          created: 0,
          icon: 'mdi-currency-eur',
          color: '#FFFFFF', 
        },
        {
          title: 'Documento Soporte',
          created: 0,
          icon: 'mdi-file-document-outline',
          color: '#FFFFFF', 
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-grid {
  gap: 24px; 
}

.custom-card {
  border-radius: 5px; 
}

.custom-icon {
  margin-top: 0; 
}

.card-content {
  flex: 2; 
}

.custom-title {
  font-size: 2rem; 
}

.custom-text {
  font-size: 1rem; 
  margin-top: -10px; 
}
</style>
