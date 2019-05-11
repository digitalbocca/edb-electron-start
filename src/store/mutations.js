'use strict'

/**
 * edb-electron-start
 *
 * @file mutations.js
 * @description Mutations da store do Vuex.
 *
 * @copyright (c)2019 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @since v0.7.0
 * @version v2.0.0
 */

export default {
  BACKEND_INFO (state, res) {
    state.backendInfo = res
  }
}
