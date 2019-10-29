<template>
  <v-row justify="center">
    <v-dialog v-model="dialogOpen" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Add New Item</span>
        </v-card-title>
        <v-card-text>
          <v-alert type="error" v-if="errorMessage !== null">
            {{ errorMessage }}
          </v-alert>
          <v-form ref="addItemForm" v-model="isFormValid">
            <v-text-field
              label="Item Name"
              name="itemName"
              type="text"
              @focus="onTextFieldFocus()"
              v-model="itemName"
              :rules="[() => !!itemName || 'This field is required']"
            ></v-text-field>
            <v-text-field
              label="Quantity"
              name="quantity"
              type="number"
              @focus="onTextFieldFocus()"
              v-model="quantity"
              :rules="[() => !!quantity || 'This field is required']"
            ></v-text-field>
            <v-text-field
              label="Unit"
              name="unit"
              type="text"
              @focus="onTextFieldFocus()"
              v-model="unit"
              :rules="[() => !!unit || 'This field is required']"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="onCloseButtonClick()">Close</v-btn>
          <v-btn color="primary" @click="onSaveButtonClick()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts" src="./add-item-dialog.vue.ts"></script>

<style lang="scss"></style>