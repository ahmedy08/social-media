<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-row>
      <MainHeader/>
    </v-row>
    <v-row
      class="pa-0"
      style="margin-top: 120px"
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        lg="8"
        md="8"
        sm="12"
      >
        <Events/>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        md="4"
        sm="12"
      >
        <ProfileCard/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue'
import Events from "@/components/Events/Events";
import ProfileCard from "@/components/InfoCard";
import MainHeader from "@/components/MainHeader";

export default defineComponent({
  name: 'HomeWrapper',
  components: {
    Events,
    ProfileCard,
    MainHeader
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>

</style>
