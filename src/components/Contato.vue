<template lang="pug">
  #home
    h3.text-center.upper Contato
    p.text-center contato at estudiodigitalbocca.com.br
    p.text-center {{ info }}
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Contato',
  computed: {
    ...mapGetters(['info'])
  }
}
</script>
