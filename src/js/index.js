'use strict'

/**
 * edb-electron-start
 *
 * @file index.js
 * @description Javascript carregado na página principal.
 * @description Antigo renderer.js.
 *
 * @copyright (c)2018-2019 Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @version v2.0.0
 */

import Vue from 'vue'
import App from './../components/App'
import router from './../router'
import store from './../store'

console.log('©2019 - Estúdio Digital Bocca')

Vue.config.productionTip = false

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
