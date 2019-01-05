<template lang="pug">
  .container#app
    h1.text-center EDB Electron Start
    p.text-center {{ info }}
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['info'])
  }
}
</script>
