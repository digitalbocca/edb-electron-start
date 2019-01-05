<template lang="pug">
  p.edb-menu.text-center.upper
    router-link.btn(to="/") Home
    router-link.btn(to="/config") Config
    router-link.btn(to="/contato") Contato
</template>

<script>
export default {
  name: 'EdbMenu'
}
</script>

<style lang="sass" scoped>

a, a:hover, a:active, a:visited, a:link
  text-decoration: none

.edb-menu > .btn
  background-color: #7f8fa6
  border-radius: 3px
  color: #f5f6fa
  /* font-weight: bold */
  margin: 0rem 1rem
  padding: 1rem 1.6rem

.edb-menu > .btn:hover
  background-color: #718093

</style>

