import { createApp } from 'vue'
import App from './components/app/App.vue'
import uiComponents from './components/ui-components'

const app = createApp(App)
uiComponents.map(componet => app.component(componet.name, componet))

app.mount('#app')
