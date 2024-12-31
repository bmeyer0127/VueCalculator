import './assets/main.css'

// Material Design components
import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/button/elevated-button.js'
import '@material/web/checkbox/checkbox.js'

// Personal components
// import NumberButton from './components/NumberButton.vue'
// import NumberContainer from './components/NumberContainer.vue'

// App
//   .component('NumberButton', NumberButton)
//   .component('NumberContainer', NumberContainer)

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
