<template>
  <MainHeader/>
</template>

<script>
import { defineComponent } from 'vue'
import MainHeader from './components/MainHeader.vue'

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
