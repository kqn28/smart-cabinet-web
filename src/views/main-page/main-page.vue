<template>
  <div class="flex-container flex-item-variable">
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>{{ currentUser && currentUser.firstName }} {{ currentUser && currentUser.lastName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click.stop="addItemDialogOpen = true">
        <v-icon>mdi-plus-thick</v-icon>
      </v-btn>
    </v-app-bar>
    <v-alert type="error" v-if="errorMessage !== null">
      {{ errorMessage }}
    </v-alert>
    <v-data-table
      :headers="headers"
      :items="cabinetItems"
      :fixed-header="true"
      class="elevation-1 flex-item-variable"
    >
      <template v-slot:item.buttons="{ item }">
        <v-btn icon @click="onDeleteButtonClick(item.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <add-item-dialog 
      :dialog-open="addItemDialogOpen"
      :error-message.sync="errorMessage"
      @fade-error="onErrorFade"
      @close="onAddItemDialogClose"
      @save="onAddItemDialogSave"
    ></add-item-dialog>
  </div>
</template>

<script lang="ts" src="./main-page.vue.ts"></script>
