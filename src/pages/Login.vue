<template>
  <v-app class="bg-color">
    <v-main>
      <v-container fluid fill-height>
        <v-row>
          <v-col cols="6">
            <template>
              <v-img
                class="ma-auto"
                style=" border-radius: 7px"
                src="https://cdn.dribbble.com/users/3897976/screenshots/7555548/media/c21f8071c3bfba17abf5272ba69d4db5.gif"
                height="500"
                width="500"
              />
            </template>
          </v-col>
          <v-col :key="key" cols="6" v-if="isLogin">
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                <v-card style="height: 500px !important;" class="elevation-12">
                  <v-toolbar dark color="primary">
                    <v-toolbar-title>Welcome 2</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <form ref="form" @submit.prevent="login()">
                      <v-text-field
                        v-model="username"
                        name="username"
                        label="Username"
                        type="text"
                        placeholder="username"
                        required
                      ></v-text-field>
                      <v-text-field
                        v-model="password"
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="password"
                        required
                      ></v-text-field>
                      <v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
                      <v-btn class="mt-4 ml-16" color="secondary" value="log in" @click="goToSignUp">Sign Up</v-btn>
                    </form>
                  </v-card-text>
                </v-card>

              </v-flex>
            </v-layout>
          </v-col>
          <v-col :key="key" cols="6" v-if="!isLogin">
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                <v-card style="height: 500px !important;" class="elevation-12">
                  <v-toolbar dark color="primary">
                    <v-toolbar-title>Welcome</v-toolbar-title>
                  </v-toolbar>
                  <v-card-text>
                    <form ref="form" @submit.prevent="login()">
                      <v-text-field
                        v-model="username"
                        name="username"
                        label="Username"
                        type="text"
                        placeholder="username"
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="password"
                        name="password"
                        label="Password"
                        type="password"
                        placeholder="password"
                        required
                      ></v-text-field>
                      <v-btn type="submit" class="mt-4" color="primary" value="log in">Login</v-btn>
                      <v-btn class="mt-4 ml-16" color="secondary" value="log in" @click="goToSignUp">Sign Up</v-btn>
                    </form>
                  </v-card-text>
                </v-card>

              </v-flex>
            </v-layout>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>
import { defineComponent,ref } from 'vue'
import router from "@/router";

export default defineComponent({
  name: 'Login-Page',
  setup() {
    let isLogin = ref(true);
    let key = ref(0);
    // TODO: add login logic
    const login = () => {
      router.push('/home')
    }
    // TODO: add signup logic
    const goToSignUp = () => {
     isLogin = false;
     key++
    }

    return {
      login,
      goToSignUp,
      isLogin,
      key
    }
  },
})
</script>

<style scoped>
.bg-color{
  background: rgb(2,0,30);
  background: linear-gradient(90deg, rgba(2,0,28,1) -10%, rgba(9,9,88,1) 10%, rgba(0,212,165,1) 150%)
}
</style>
