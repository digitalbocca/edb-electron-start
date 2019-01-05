<template lang="pug">
  #home
    h3.text-center.upper Home
    p.text-center {{ info }}
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['info'])
  }
}
</script>
