<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts" src="./App.vue.ts"></script>
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
