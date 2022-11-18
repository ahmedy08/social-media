<template>
  <div>
    <MainHeader style="height: 80px !important;"/>
    <router-view to="/"></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import MainHeader from "@/components/MainHeader";

export default defineComponent({
  name: 'App',
  components: {
    MainHeader
  },
    setup() {
    return {}
  },
})
</script>
