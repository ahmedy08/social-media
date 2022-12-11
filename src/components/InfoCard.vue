<template>
  <v-app>
    <v-card
      class="pa-4"
      max-width="300"
      style="background-color: #162130; color: white !important; position: fixed"
    >
      <v-img
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
        height="194"
      ></v-img>
      <v-card-title class="headline">John Doe</v-card-title>
      <v-card-subtitle style="color: white !important">Photographer</v-card-subtitle>
      <v-card-text style="color: white !important">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
        <v-btn style="color: white !important" text>Share</v-btn>
        <v-btn style="color: white !important" text>Explore</v-btn>
    </v-card>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfileCard',
  setup() {
    const user = {
      name: 'John Doe',
      email: 'ssss@sss.com'
    }
    return {
      user
    }
  },
})
</script>

<style scoped>

</style>
