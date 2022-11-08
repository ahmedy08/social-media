<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      fixed
      width="300"
      style="border: 1px solid black;"
    >
      <v-list
        dense
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">{{ user.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider/>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">{{ user.email }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
      <v-divider/>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SideBar',
  setup() {
    const user = {
      name: 'John Doe',
      email: 'johndoe@mail.com'
      }

    const drawer = true
    return {
      user,
      drawer
    }
  },
})
</script>

<style scoped>

</style>
