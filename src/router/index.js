'use strict'

/**
 * edb-electron-start
 *
 * @file index.js
 * @description Roteador da aplicação.
 *
 * @copyright (c)2019 Estúdio Digital Bocca - https://estudiodigitalbocca.com.br/
 * @author Gabriel Bertola Bocca - gabriel at estudiodigitalbocca.com.br
 *
 * @since v0.8.0
 * @version v1.0.0
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './../components/Home'
import Config from './../components/Config'
import Contato from './../components/Contato'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/config',
      component: Config
    },
    {
      path: '/contato',
      component: Contato
    }
  ]
})
