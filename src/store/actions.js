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
 * @version v2.0.0
 */

import axios from 'axios'

export default {
  loadBackendInfo (context) {
    axios.get('http://localhost:1985')
      .then(response => context.commit('BACKEND_INFO', response.data))
      .catch(err => console.log(err))
  }
}
