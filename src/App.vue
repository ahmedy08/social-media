<template>
  <div>
    <Base/>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Base from '@/pages/Base.vue'

export default defineComponent({
  name: 'App',
  components: {
    Base
  },
  setup() {
    return {}
  },
})
</script>
