<template>
  <div>
    <HomeWrapper/>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import HomeWrapper from "@/components/HomeWrapper";

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeWrapper
  },
  setup() {
    return {}
  },
})
</script>
