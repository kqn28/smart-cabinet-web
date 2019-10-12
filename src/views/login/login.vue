<template>
  <div class="flex-container flex-item-variable center-align">
    <img alt="Smart Cabinet logo" src="../../assets/smart-cabinet-logo.png">
    <v-form>
      <v-text-field
        label="Username"
        name="username"
        prepend-icon="person"
        type="text"
      ></v-text-field>
      <v-text-field
        id="password"
        label="Password"
        name="password"
        prepend-icon="lock"
        type="password"
      ></v-text-field>
      <div class="flex-container-row login-button-bar">
        <v-btn color="primary">Login</v-btn>
      </div>
    </v-form>
  </div>
</template>

<script lang="ts" src="./login.vue.ts"></script>
<style lang="scss" scoped>
  .logo {
    align-items: center;
  }
  .login-button-bar {
    justify-content: flex-end;
  }
  .center-align {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
