<template>
 <v-app style="background-color: #162130">
   <v-container class="mt-16">
     <v-row class="mt-4">
       <v-col cols="2">
         <v-img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"></v-img>
       </v-col>
       <v-col cols="6">
         <v-row style="color: white !important">
           <v-col cols="2">@ahmedy</v-col>
           <v-col>Ahmet Dede</v-col>
         </v-row>
         <v-row style="color: white !important; font-size: 1.1rem; font-style: italic">
           <v-col cols="3">Follower</v-col>
           <v-col cols="3">Follow</v-col>
         </v-row>
         <v-row class="ma-0" style="font-weight: 700; color: rgba(170,134,201,0.56) !important">
           <v-col cols="3">501</v-col>
           <v-col cols="3">168</v-col>
         </v-row>
         <v-row>
            <v-col class="pa-0 mt-1" cols="6">
              <v-btn color="secondary" @click="showEditModal">Edit Profile</v-btn>
            </v-col>
         </v-row>
       </v-col>
     </v-row>
     <v-row>
       <v-col class="px-0 py-4">
         <v-btn class="mr-4" color="secondary" @click="isEventYours = false">Katılınan Etkinlikler</v-btn>
         <v-btn color="secondary" @click="isEventYours = true">Oluşturulan Etkinlikler</v-btn>
       </v-col>
     </v-row>
     <v-row>
       <created-events v-if="isEventYours"/>
       <joined-events v-else></joined-events>
     </v-row>
   </v-container>
 </v-app>
</template>

<script>
import {defineComponent, ref} from 'vue'
import CreatedEvents from "@/components/Events/CreatedEvents";
import JoinedEvents from "@/components/Events/JoinedEvents";

export default defineComponent({
  name: "UserProfile",
  components: {
    CreatedEvents,
    JoinedEvents
  },
setup() {
    const isEventYours = ref(true);
    const showEditModal = () => {
      console.log("edit modal")
    }
    return {
      isEventYours,
      showEditModal
    }
  },
})
</script>

<style scoped>

</style>
