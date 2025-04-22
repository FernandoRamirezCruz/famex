// main.js
import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'

// 🔌 Apollo
import { DefaultApolloClient } from '@vue/apollo-composable'
import apolloClient from './apollo'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

app.use(router).mount('#app')