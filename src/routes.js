import Home from './components/home/Home.vue';
import Register from './components/register/Register.vue';

export const routes = [
  { path: '/', name: "Home", component: Home, title: 'Home', menu: true },
  { path: '/register', name: "Register", component: Register, title: 'Cadastro', menu: true },
  { path: '*', component: Home, menu: false },
];