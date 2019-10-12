<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
});
</script>
<style lang="scss">
  .flex-container {
    display: flex;
    flex-direction: column;
  }
  .flex-container-row {
    display: flex;
    flex-direction: row;
  }
  .flex-item-variable {
    flex: 1 1 auto;
  }
</style>
