<template>
<v-layout style="position:fixed; width: 100%; z-index: 9999 !important">
  <v-toolbar height="80" dark color="#162130">
     <v-toolbar-title class="cursor-point" @click="goToHome">
        <v-img
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          alt="Vuetify Logo"
          max-width="60"
          max-height="60"
        ></v-img>
      </v-toolbar-title>
    <v-spacer/>
        <v-text-field
          v-model="search"
          style="background-color: gray; width: 5vw;"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          rounded
        />
      <v-spacer/>
      <v-toolbar-items class="px-4">
        <v-menu open-on-click>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="goToProfile">
             <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>
            <v-list-item @click="logout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
  </v-toolbar>
</v-layout>
</template>

<script>
import { defineComponent } from 'vue'
import router from "@/router";

export default defineComponent({
  name: 'MainHeader',
  setup() {
    const goToProfile = () => {
      router.push('/profile')
    }
    const goToHome = () => {
      router.push('/home')
    }
    return {
      goToProfile,
      goToHome
    }
  },
})
</script>

<style scoped>
.cursor-point {
  cursor: pointer;
}

</style>
