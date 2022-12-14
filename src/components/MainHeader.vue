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
          v-if="isMainPage"
          style="background-color: gray"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          rounded
        />
      <v-spacer/>
      <v-btn icon @click="addNewEvent">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-toolbar-items class="px-4">
        <v-menu open-on-click>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-list class="mt-16 mr-1">
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
import { defineComponent, computed } from 'vue'
import router from "@/router";
import store from "@/store";

export default defineComponent({
  name: 'MainHeader',
  setup() {
    const goToProfile = () => {
      router.push('/profile')
    }
    const goToHome = () => {
      router.push('/home')
    }
    const isMainPage = computed(() => {
      return store.getters.isMainPage
    })
    const addNewEvent = () => {
      store.state.isMainPage = false
      router.push('/add-new-event')
    }
    return {
      goToProfile,
      goToHome,
      isMainPage,
      addNewEvent
    }
  },
})
</script>

<style scoped>
.cursor-point {
  cursor: pointer;
}

</style>
