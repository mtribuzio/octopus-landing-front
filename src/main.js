import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './assets/tailwind.css';
import Landing from './components/Landing.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', name: 'home', component: Landing
      ,
    },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
