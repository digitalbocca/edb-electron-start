<template lang="pug">
  #home
    h3.text-center.upper Config
    p.text-center Página de Configuração.
    p.text-center {{ info }}
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Config',
  computed: {
    ...mapGetters(['info'])
  }
}
</script>
