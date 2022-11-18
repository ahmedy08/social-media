<template>
<v-app class="h-80" style="background-color: blue !important">
  <v-toolbar style="height:80px !important;" dark color="#162130">
     <v-toolbar-title>
        <v-img
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          alt="Vuetify Logo"
          max-width="60"
          max-height="60"
        ></v-img>
      </v-toolbar-title>
      <v-toolbar-items>

      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="px-4">
        <v-btn text>Home</v-btn>
        <v-btn text>Events</v-btn>
        <v-btn text>Gallery</v-btn>
        <v-btn text>Contact</v-btn>
      </v-toolbar-items>
  </v-toolbar>
</v-app>
</template>

<script>
import { defineComponent } from 'vue'
import router from "@/router";

export default defineComponent({
  name: 'MainHeader',
  setup() {
    const login = () => {
      router.push('/login')
    }
    return {
      login
    }
  },
})
</script>

<style scoped>
.h-80 {
  height: 80px !important;
}

</style>
