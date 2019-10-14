<template>
  <div class="flex-container flex-item-variable center-align">
    <img alt="Smart Cabinet logo" src="../../assets/smart-cabinet-logo.png">
    <v-alert type="error" v-if="showError">
      This username/email is already registered
    </v-alert>
    <v-form class="create-account-form" ref="createAccountForm" v-model="isFormValid">
      <v-text-field
        label="First Name"
        name="firstName"
        type="text"
        v-model="firstName"
        :rules="[() => !!firstName || 'This field is required']"
        required
      ></v-text-field>
      <v-text-field
        label="Last Name"
        name="lastName"
        type="text"
        v-model="lastName"
        :rules="[() => !!lastName || 'This field is required']"
        required
      ></v-text-field>
      <v-text-field
        label="Email"
        name="email"
        type="text"
        v-model="email"
        @focus="onTextFieldFocus()"
        :rules="[
          () => !!email || 'This field is required',
          () => !!email.match(emailRegex) || 'Email is invalid'
        ]"
        required
      ></v-text-field>
       <v-text-field
        label="Username"
        name="userame"
        type="text"
        v-model="username"
        @focus="onTextFieldFocus()"
        :rules="[() => !!username || 'This field is required']"
        required
      ></v-text-field>
      <v-text-field
        label="Password"
        name="password"
        type="password"
        v-model="password"
        :rules="[() => !!password || 'This field is required']"
        required
      ></v-text-field>
      <v-text-field
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        v-model="confirmPassword"
        :rules="[
          () => !!confirmPassword || 'This field is required',
          () => confirmPassword === password || 'Password and Confirm Password do not match'
        ]"
        required
      ></v-text-field>
      <div class="flex-container-row create-account-button-bar">
        <v-btn color="primary" @click="onBackToLoginButtonClick()">Back to login</v-btn>
        <v-btn color="primary" @click="onCreateButtonClick()">Create</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script lang="ts" src="./create-account.vue.ts"></script>
<style lang="scss" scoped>
  .logo {
    align-items: center;
  }
  .create-account-button-bar {
    padding: 5px;
    justify-content: space-between;
  }
  .create-account-form {
    min-width: 500px;
  }
  .center-align {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
