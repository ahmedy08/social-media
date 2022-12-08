<template>
  <v-card width="50vw">
      <v-list
        dense
        class="px-4"
        v-if="!isEventYours"
      >
        <v-list-item
          v-for="(event,index) in events1"
          :key="index">
            <v-list-item-title class="title">{{ event.title }}</v-list-item-title>
            <v-list-item-title> {{ event.description }}</v-list-item-title>
        </v-list-item>
      </v-list>
    <v-list
      dense
      class="px-4"
      v-if="isEventYours"
    >
      <v-list-item
        v-for="(event,index) in events2"
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
    const events1 = [
      {id: 1, title: 'Event 1', description: 'Event 1 description', date: '2021-01-01'},
      {id: 2, title: 'Event 2', description: 'Event 2 description', date: '2021-01-02'},
      {id: 3, title: 'Event 3', description: 'Event 3 description', date: '2021-01-03'},
      {id: 4, title: 'Event 4', description: 'Event 4 description', date: '2021-01-04'},
    ]
    const events2 = [
      {id: 5, title: 'Event 5', description: 'Event 5 description', date: '2021-01-05'},
      {id: 6, title: 'Event 6', description: 'Event 6 description', date: '2021-01-06'},
      {id: 7, title: 'Event 7', description: 'Event 7 description', date: '2021-01-07'},
      {id: 8, title: 'Event 8', description: 'Event 8 description', date: '2021-01-08'},
    ]
    return {
      events1,
      events2
    }
  },
})
</script>

<style scoped>

</style>
