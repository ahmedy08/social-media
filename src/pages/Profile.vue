<template>
 <v-app>
   <v-container >
     <v-row class="mt-4">
       <v-col cols="2">
         <v-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"></v-img>
         </v-avatar>
       </v-col>
       <v-col cols="6">
         <v-row>
           <v-col cols="2">username</v-col>
           <v-col cols="2">fullname</v-col>
         </v-row>
         <v-row>
           <v-col cols="3">follower</v-col>
           <v-col cols="3">follow</v-col>
         </v-row>
         <v-row>
            <v-col cols="6">
              <v-btn>edit profile</v-btn>
            </v-col>
         </v-row>
       </v-col>
     </v-row>
     <v-row>
       <v-col cols="4">
         <v-btn @click="isEventYours = false">Katılınılan Etkinlikler</v-btn>
       </v-col>
       <v-col cols="4">
         <v-btn @click="isEventYours = true">Oluşturulan Etkinlikler</v-btn>
       </v-col>
     </v-row>
     <v-row>
       <profile-events :isEventYours="isEventYours"/>
     </v-row>
   </v-container>
 </v-app>
</template>

<script>
import { defineComponent } from 'vue'
import ProfileEvents from "@/components/ProfileEvents";

export default defineComponent({
  name: "UserProfile",
  components: {
    ProfileEvents
  },
setup() {
    const isEventYours = true;
    return {
      isEventYours
    }
  },
})
</script>

<style scoped>

</style>
