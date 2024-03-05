import { createWebHistory, createRouter } from 'vue-router'

import { useToast } from 'vue-toast-notification';
const toast = useToast();

// Admin Penal

import AdminLayout from './pages/layouts/AdminLayout.vue'
import AdminDashboard from './pages/AdminDashboard.vue'
import AdminProfile from './pages/AdminProfile.vue'
import Admin404 from './pages/Admin404.vue'
import Login from './pages/Login.vue'

import AdminUsers from './pages/Users/AdminUsers.vue'
import AdminCategories from './pages/Categories/AdminCategories.vue'
import AdminProducts from './pages/Products/AdminProducts.vue'
import AdminProductAttribute from './pages/Products/AdminProductAttribute.vue'
import AdminCreateProductAttribute from './pages/Products/AdminCreateProductAttribute.vue'
import AdminCoupons from './pages/Coupons/AdminCoupons.vue'
import store from './store/index.js';


const routes = [
    
    
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'Login', component: Login },
    // Admin Penal
    {
        path: '/admin',
        name: 'Admin',
        component: AdminLayout,
        redirect: '/admin',
        meta: { Admin: true },
        children: [
            { path: 'dashboard', name: 'AdminDashboard', component: AdminDashboard },
            { path: 'profile', name: 'AdminProfile', component: AdminProfile },
            { path: 'users', name: 'AdminUsers', component: AdminUsers },
            { path: 'categories', name: 'AdminCategories', component: AdminCategories },
            { path: 'products', name: 'AdminProducts', component: AdminProducts },
            { path: 'product/attribute/:id', name: 'AdminProductAttribute', component: AdminProductAttribute },
            { path: 'product/attribute/create/:id', name: 'AdminCreateProductAttribute', component: AdminCreateProductAttribute },
            { path: 'coupons', name: 'AdminCoupons', component: AdminCoupons },
            { path: '/:pathMatch(.*)*', component: Admin404 },
        ],


    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach((to, from, next) => {

    if (to.path === '/login' && store.state.auth.token) {
        next({ name: 'AdminDashboard' });
    } else {
        if (to.meta.Admin && !store.state.auth.token) {
            toast.error('Please Login to Access...');
            next({ name: 'Login' });
        } else if (to.meta.Admin === true && store.state.auth.token === true && store.state.auth.user.role != "Admin") {
            toast.error('Only Admin Can Access...');
            next({ name: 'Login' });
        } else {
            next();
        }
    }
});
export default router;