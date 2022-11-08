<template>
  <v-card>
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="email"
          label="Email"
          outlined
          dense
          type="email"
          placeholder="Enter your email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          outlined
          dense
          type="password"
          placeholder="Enter your password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="primary"
        class="white--text"
        @click="login"
      >Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login-Page',
  setup() {
    return {}
  },
})
</script>

<style scoped>

</style>
