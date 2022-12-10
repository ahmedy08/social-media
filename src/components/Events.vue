<template>
  <div>
    <v-card
    v-for="(event, index) in events"
    :key="index"
    class="ml-16 my-12"
    max-width="600"
  >
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-title>{{ event.title }}</v-card-title>
    <v-card-text>
      {{ event.description }}
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>{{ event.date }}</v-card-title>
    <v-card-text>
      {{ event.owner }}
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="success"
        text
        @click="join"
      >
        Join to event
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EventsComponent',
  setup() {
    const events = [
      {id: 1, title: 'Event 1', description: 'Event 1 description', date: '2021-01-01', owner: 'text'},
      {id: 2, title: 'Event 2', description: 'Event 2 description', date: '2021-01-02', owner: 'text'},
      {id: 3, title: 'Event 3', description: 'Event 3 description', date: '2021-01-03', owner: 'text'},
      {id: 4, title: 'Event 4', description: 'Event 4 description', date: '2021-01-04', owner: 'text'},
    ]
    return {
      events
    }
  },
})
</script>

<style scoped>

</style>
