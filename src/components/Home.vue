<template lang="pug">
  #home
    h3.text-center.upper Home
    p.text-center {{ info }}
    .text-center.spinner-wrapper(v-if="backendInfo.loading")
      fulfilling-square-spinner(:animation-duration="4000", :size="50", color="#000") /
    .text-center(v-else)
      p {{ backendInfo.msg }}
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import { FulfillingSquareSpinner } from 'epic-spinners'

export default {
  name: 'Home',
  components: {
    FulfillingSquareSpinner
  },
  mounted () {
    window.setTimeout(() => {
      this.loadBackendInfo()
    }, 5000)
  },
  computed: {
    ...mapGetters(['info', 'backendInfo'])
  },
  methods: {
    ...mapActions(['loadBackendInfo'])
  }
}
</script>

<style lang="sass" scoped>
  .spinner-wrapper
    display: flex
    justify-content: center
</style>
