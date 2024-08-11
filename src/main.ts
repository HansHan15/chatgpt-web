import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import { setupI18n } from './locales'
import { setupAssets, setupScrollbarStyle } from './plugins'
import { setupStore } from './store'
import { setupRouter } from './router'
import 'element-plus/dist/index.css'

async function bootstrap() {
  const app = createApp(App)
  app.use(ElementPlus)
  setupAssets()

  setupScrollbarStyle()

  setupStore(app)

  setupI18n(app)

  await setupRouter(app)

  app.mount('#app')
}

bootstrap()
