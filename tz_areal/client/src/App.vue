<template>
  <v-app>
    <NavigBar/>
    <router-view/>
  </v-app>
</template>

<script>
import NavigBar from '@/components/NavigBar.vue';

export default {
    name: "App",
    components: {
        NavigBar
    }
};
</script>
