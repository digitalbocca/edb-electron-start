<template lang="pug">
  .container#app
    h1.text-center EDB Electron Start
    edb-menu
    router-view/
</template>

<script>

import EdbMenu from './EdbMenu'

export default {
  name: 'App',
  components: {
    EdbMenu
  }
}
</script>
