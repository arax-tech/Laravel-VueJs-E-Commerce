import {createWebHistory, createRouter} from 'vue-router'

import App from './App.vue'
import Website from './pages/layouts/Website.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Shop from './pages/Shop.vue'
import ProductDetail from './pages/ProductDetail.vue'
import Cart from './pages/Cart.vue'
import Contact from './pages/Contact.vue'
import PageNotFound from './pages/PageNotFound.vue'

import Login from './pages/Login.vue'
import Checkout from './pages/Checkout.vue'
import Dashboard from './pages/Dashboard.vue'


const routes = [
    {
        path: '/',
        name: 'Website',
        component: Website,
        children: [
            { path: '/', name: 'Home', component: Home },
            { path: '/shop', name: 'Shop', component: Shop },
            { path: '/product/:id', name: 'ProductDetail', component: ProductDetail },
            { path: '/about', name: 'About', component: About },
            { path: '/cart', name: 'Cart', component: Cart },
            { path: '/contact', name: 'Contact', component: Contact },
            { path: '/login', name: 'Login', component: Login },
            { path: '/:pathMatch(.*)*', component: PageNotFound },
        ],
    },
    {
        path: '/user',
        name: 'UserDashboard',
        redirect: '/user',
        meta: { User: false },
        component: Website,
        children: [
            { path: 'checkout', name: 'Checkout', component: Checkout },
            { path: 'dashboard', name: 'Dashboard', component: Dashboard },
            { path: '/:pathMatch(.*)*', component: PageNotFound },
        ],
    },
];


const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;