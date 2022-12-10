<template>
  <v-app>
    <v-card
      class="py-4 mx-16"
    >
      <v-img
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
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
