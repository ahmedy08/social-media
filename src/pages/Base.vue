<template>
  <div>
    <MainHeader/>
    <SideBar/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import MainHeader from '@/components/MainHeader.vue'
import SideBar from "@/components/SideBar";
// import Login from "@/pages/Login";

export default defineComponent({
  name: 'Base-Page',
  components: {
    MainHeader,
    SideBar,
    // Login
  },
  setup() {
    return {}
  },
})
</script>
