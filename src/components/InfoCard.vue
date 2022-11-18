<template>
  <v-app>
    <v-card
      class="py-4 mx-16"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        height="194"
      ></v-img>
      <v-card-title class="headline">John Doe</v-card-title>
      <v-card-subtitle>Photographer</v-card-subtitle>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>
      <v-card-actions>
        <v-btn text>Share</v-btn>
        <v-btn text>Explore</v-btn>
      </v-card-actions>
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
