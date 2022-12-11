<template>
  <div @click="eventDetails">
    <v-card
    v-for="(event, index) in events"
    :key="index"
    style="margin: 25px auto; background-color: #162130; color: white !important"
    max-width="600"
  >
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-title>{{ event.title }}</v-card-title>
    <v-card-text style="color: white !important">
      {{ event.description }}
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>{{ event.date }}</v-card-title>
    <v-card-text style="color: white !important">
      {{ event.owner }}
    </v-card-text>
      <v-btn
        style="background-color: rgba(21,122,34,0.56) !important; margin: 10px 0 10px 10px"
        text
        @click="join"
      >
        Join to event
      </v-btn>
  </v-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import router from "@/router";

export default defineComponent({
  name: 'EventsComponent',
  setup() {
    const events = [
      {id: 1, title: 'Event 1', description: 'Event 1 description', date: '2021-01-01', owner: 'owner'},
      {id: 2, title: 'Event 2', description: 'Event 2 description', date: '2021-01-02', owner: 'owner'},
      {id: 3, title: 'Event 3', description: 'Event 3 description', date: '2021-01-03', owner: 'owner'},
      {id: 4, title: 'Event 4', description: 'Event 4 description', date: '2021-01-04', owner: 'owner'},
    ]
    const eventDetails = () => {
      router.push('/event-details')
    }
    return {
      events,
      eventDetails
    }
  },
})
</script>

<style scoped>

</style>
