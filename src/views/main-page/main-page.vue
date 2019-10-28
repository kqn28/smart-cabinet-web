<template>
  <div class="flex-container flex-item-variable">
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>{{ currentUser.firstName }} {{ currentUser.lastName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <v-data-table
      :headers="headers"
      :items="cabinetItems"
      fixed-header="true"
      class="elevation-1 flex-item-variable"
    ></v-data-table>
  </div>
</template>

<script lang="ts" src="./main-page.vue.ts"></script>
