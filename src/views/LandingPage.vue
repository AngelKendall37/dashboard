<template>
    <v-app>
    <LoginCompViews />
</v-app>
</template>

<script>
import LoginCompViews from '@/components/LoginComponents.vue';

export default {
  name: 'LandingPageViews',
  components: {
    LoginCompViews
  }
}
</script>