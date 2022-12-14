<template>
  <v-card width="50vw">
    <v-list
      dense
      class="px-4"
      v-if="!isEventYours"
    >
      <v-list-item
        v-for="(event,index) in events"
        :key="index">
        <v-list-item-title class="title">{{ event.title }}</v-list-item-title>
        <v-list-item-title> {{ event.description }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ProfileEvents",
  props: ["isEventYours"],
  setup() {
    const events = [
      {id: 5, title: 'Event 5', description: 'Event 5 description', date: '2021-01-05'},
      {id: 6, title: 'Event 6', description: 'Event 6 description', date: '2021-01-06'},
      {id: 7, title: 'Event 7', description: 'Event 7 description', date: '2021-01-07'},
      {id: 8, title: 'Event 8', description: 'Event 8 description', date: '2021-01-08'},
    ]
    return {
      events
    }
  },
})
</script>

<style scoped>

</style>
