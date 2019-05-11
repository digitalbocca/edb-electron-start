'use strict'

/**
 * edb-electron-start
 *
 * @file index.js
 * @description Cria a instancia da store do Vuex.
 *
 * @copyright (c)2019 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @since v0.7.0
 * @version v1.0.0
 */

import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})
