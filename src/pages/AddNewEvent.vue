<template>
    <v-card style="background-color: rgba(49,122,73,0.56) !important; width: 50%; margin: auto; margin-top: 10vh;" >
      <v-form style="padding: 25px">
        <v-text-field
          label="Event Name"
          v-model="eventName"
          outlined
          dense
        />
        <v-textarea
          label="Event Description"
          v-model="eventDescription"
          outlined
          dense
        />
          <v-date-picker v-model="eventDate" no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(eventDate)">OK</v-btn>
          </v-date-picker>
        <v-btn @click="addEvent">
          Add Event
        </v-btn>
      </v-form>
    </v-card>
</template>

<script>
import {defineComponent, onBeforeUnmount} from 'vue'
// import MainHeader from "@/components/MainHeader";
import store from "@/store";

export default defineComponent({
  name: "AddNewEvent",
  components: {
    // MainHeader
  },
  setup() {
    onBeforeUnmount(() => {
      store.state.isMainPage = true
    })
    return {}
  },
})
</script>

<style scoped>

</style>
