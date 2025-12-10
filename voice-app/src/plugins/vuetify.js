/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Guía de funcionalidades de Vuetify
export default createVuetify({
  theme: {
    defaultTheme: 'system',
  },
})
