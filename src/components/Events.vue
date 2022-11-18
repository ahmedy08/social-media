<template>
  <v-app>
      <v-list
        dense
        class="px-4"
        v-for="(event,index) in events"
        :key="index"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">{{ event.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">{{ event.description }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EventsComponent',
  setup() {
    const events = [
      {id: 1, title: 'Event 1', description: 'Event 1 description', date: '2021-01-01'},
      {id: 2, title: 'Event 2', description: 'Event 2 description', date: '2021-01-02'},
      {id: 3, title: 'Event 3', description: 'Event 3 description', date: '2021-01-03'},
      {id: 4, title: 'Event 4', description: 'Event 4 description', date: '2021-01-04'},
    ]
    return {
      events
    }
  },
})
</script>

<style scoped>

</style>
