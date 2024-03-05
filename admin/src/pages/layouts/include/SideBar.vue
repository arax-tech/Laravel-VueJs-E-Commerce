<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'
import { useToast } from 'vue-toast-notification';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();
const toast = useToast();
const VITE_IMAGES_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL;

const user = computed(() => store.state.auth.user);
const LogoutFunction = async () => {
	try {
		const response = await store.dispatch('LogoutAction');
		if (response.status === 200) {
			toast.success(response.message);
			window.location.href = "/login";
		}
	} catch (error) {
		console.log(error)
	}
}
</script>
<template>
	<aside class="main-sidebar">
		<!-- sidebar-->
		<section class="sidebar position-relative">
			<div class="d-flex align-items-center logo-box justify-content-start d-md-block d-none">
				<!-- Logo -->
				<RouterLink to="/admin/dashboard" class="logo">
					<!-- logo-->
					<div class="logo-mini">
						<span class="light-logo fs-36 fw-700">AD</span>
					</div>
					<div class="logo-lg">
						<span class="light-logo fs-36 fw-700">Ad<span class="text-primary">min</span></span>
					</div>
				</RouterLink>
			</div>
			<div class="user-profile my-15 px-20 py-10 b-1 rounded10 mx-15">
				<div class="d-flex align-items-center justify-content-between">
					<div class="image d-flex align-items-center">
						<img :src="VITE_IMAGES_BASE_URL + '/admin/profile/' + user.image" :alt="user.name"
							class="rounded me-10">
						<div>
							<h4 class="mb-0 fw-600">{{ user.name }}</h4>
							<p class="mb-0 text-success">Online</p>
						</div>
					</div>
					<div class="info">
						<a class="dropdown-toggle p-15 d-grid" data-bs-toggle="dropdown" href="#"></a>
						<div class="dropdown-menu dropdown-menu-end">
							<RouterLink class="dropdown-item" to="/admin/profile"><i class="fa fa-user"></i> Profile
							</RouterLink>
							<div class="dropdown-divider"></div>
							<RouterLink class="dropdown-item" @click="LogoutFunction" to=""><i class="fa fa-sign-out"></i>
								Logout</RouterLink>
						</div>
					</div>
				</div>
			</div>
			<div class="multinav">
				<div class="multinav-scroll">
					<!-- sidebar menu-->
					<ul class="sidebar-menu" data-widget="tree">
						<li :class="route.path == '/admin/dashboard' ? 'active' : ''">
							<RouterLink to="/admin/dashboard">
								<i class="icon-Layout-4-blocks"><span class="path1"></span><span class="path2"></span></i>
								<span>Dashboard</span>
							</RouterLink>
						</li>
						<li :class="route.path == '/admin/users' ? 'active' : ''">
							<RouterLink to="/admin/users">
								<i class="icon-Group"><span class="path1"></span><span class="path2"></span></i>
								<span>Users</span>
							</RouterLink>
						</li>
						<li :class="route.path == '/admin/categories' ? 'active' : ''">
							<RouterLink to="/admin/categories">
								<i class="icon-Bullet-list"><span class="path1"></span><span class="path2"></span></i>
								<span>Categories</span>
							</RouterLink>
						</li>
						<li :class="route.path == '/admin/products' ? 'active' : ''">
							<RouterLink to="/admin/products">
								<i class="icon-Price"><span class="path1"></span><span class="path2"></span></i>
								<span>Products</span>
							</RouterLink>
						</li>
						<li :class="route.path == '/admin/orders' ? 'active' : ''">
							<RouterLink to="/admin/orders">
								<i class="icon-Cart"><span class="path1"></span><span class="path2"></span></i>
								<span>Orders</span>
							</RouterLink>
						</li>
						<li :class="route.path == '/admin/coupons' ? 'active' : ''">
							<RouterLink to="/admin/coupons">
								<i class="icon-Gift"><span class="path1"></span><span class="path2"></span></i>
								<span>Coupons</span>
							</RouterLink>
						</li>
						<li :class="route.path == '/admin/payments' ? 'active' : ''">
							<RouterLink to="/admin/payments">
								<i class="icon-Credit-card"><span class="path1"></span><span class="path2"></span></i>
								<span>Payments</span>
							</RouterLink>
						</li>
						<li :class="route.path == '/admin/profile' ? 'active' : ''">
							<RouterLink to="/admin/profile">
								<i class="icon-User"><span class="path1"></span><span class="path2"></span></i>
								<span>Profile</span>
							</RouterLink>
						</li>
						<li>
							<RouterLink to="" @click="LogoutFunction">
								<i class="icon-Sign-out"><span class="path1"></span><span class="path2"></span></i>
								<span>Logout</span>
							</RouterLink>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</aside>
</template>