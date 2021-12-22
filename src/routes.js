import Home from './components/home/Home.vue';
import Register from './components/register/Register.vue';

export const routes = [
  { path: '/', component: Home, title: 'Home' },
  { path: '/register', component: Register, title: 'Register' },
];