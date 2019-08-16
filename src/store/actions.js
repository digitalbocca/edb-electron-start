'use strict'

/**
 * edb-electron-start
 *
 * @file actions.js
 * @description Actions da store do Vuex.
 *
 * @copyright (c)2019 - Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @since v0.7.0
 * @version v3.0.0
 */

import axios from 'axios'

export default {
  async loadBackendInfo (context) {
    try {
      const response = (await axios.get('http://localhost:1985')).data
      context.commit('BACKEND_INFO', response)
    } catch (e) {
      console.log(e.message)
    }
  }
}
