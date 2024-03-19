<template>
    <div>
      <!-- Carrusel -->
      <v-carousel :show-arrows="false">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          cover
        ></v-carousel-item>
      </v-carousel>
  
      <!-- Componente de Branding -->
      <v-timeline side="end">
        <v-timeline-item
          v-for="item in brandingItems"
          :key="item.id"
          :dot-color="item.color"
          size="small"
        >
          <v-alert
            :color="item.color"
            :icon="item.icon"
            :value="true"
          >
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
          </v-alert>
        </v-timeline-item>
      </v-timeline>
  
      <!-- Componente de Timeline -->
      <v-timeline align="start">
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :dot-color="year.color"
          size="small"
        >
          <template v-slot:opposite>
            <div
              :class="`pt-1 headline font-weight-bold text-${year.color}`"
              v-text="year.year"
            ></div>
          </template>
          <div>
            <h2 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
              Lorem ipsum
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        brandingItems: [
          {
            id: 1,
            color: 'info',
            icon: 'mdi-information',
          },
          {
            id: 2,
            color: 'error',
            icon: 'mdi-alert-circle',
          },
        ],
        years: [
          {
            color: 'cyan',
            year: '1960',
          },
          {
            color: 'green',
            year: '1970',
          },
          {
            color: 'pink',
            year: '1980',
          },
          {
            color: 'amber',
            year: '1990',
          },
          {
            color: 'orange',
            year: '2000',
          },
        ],
      };
    },
  };
  </script>
  