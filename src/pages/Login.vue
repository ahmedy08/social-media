<template>
  <v-layout>
    <v-container>
      <v-row>
        <v-col cols="12">
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
                  required
                />
                <v-text-field
                  v-model="password"
                  label="Password"
                  outlined
                  dense
                  type="password"
                  required
                />
                <router-link to="/home">
                  <v-btn
                    color="primary"
                  >
                    Login
                  </v-btn>
                </router-link>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login-Page',
  setup() {
  },
})
</script>

<style scoped>

</style>
