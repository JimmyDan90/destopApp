import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .mount('#app')
  .$nextTick(window.removeLoading)

window.ipcRenderer.on('main-process-message', (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args)
})
