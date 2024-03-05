<script setup>
// @ts-ignore
import { computed, onMounted, ref } from 'vue'
import { useToast } from 'vue-toast-notification';
import { useStore } from 'vuex';

// @ts-ignore
import Header from './include/Header.vue'
import SideBar from './include/SideBar.vue'


import { RouterLink } from 'vue-router';


onMounted(() => {
    let themeScript = document.createElement("script");
    themeScript.setAttribute("src", "/src/assets/js/vendors.min.js");
    document.body.appendChild(themeScript);
});
onMounted(() => {
    let themeScript = document.createElement("script");
    themeScript.setAttribute("src", "/src/assets/js/template.js");
    document.body.appendChild(themeScript);
});

onMounted(() => {
    const classess = 'light-skin sidebar-mini theme-primary fixed';
    classess.split(" ").forEach(clg => document.body.classList.add(clg));
});


const store = useStore()
const toast = useToast();
const VITE_IMAGES_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL;

onMounted(() => store.dispatch('GetAuthUser'));

const user = computed(() => store.state.auth.user);
const loading = computed(() => store.state.auth.loading);

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
    
    <div class="wrapper">
        <Header />
        <SideBar />
        <div class="content-wrapper">
            <div class="container-full">
                <RouterView />
            </div>
        </div>
        <!-- quick_user_toggle -->
        <div class="modal modal-right fade" id="quick_user_toggle" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content slim-scroll3">
                    <div class="modal-body p-30 bg-white">
                        <div class="d-flex align-items-center justify-content-between pb-30">
                            <h4 class="m-0">Admin Profile </h4>
                            <a href="#" class="btn btn-icon btn-danger-light btn-sm no-shadow" data-bs-dismiss="modal">
                                <span class="fa fa-close"></span>
                            </a>
                        </div>
                        <div>
                            <div class="d-flex flex-row">
                                <div class=""><img :src="VITE_IMAGES_BASE_URL + '/admin/profile/' + user.image"
                                        :alt="user.name" class="rounded bg-danger-light w-150" width="100"></div>
                                <div class="ps-20">
                                    <h5 class="mb-0">{{ user.name }}</h5>
                                    <a href="mailto:{{user.email}}"><span
                                            class="icon-Mail-notification me-5 text-success"><span
                                                class="path1"></span><span class="path2"></span></span> {{ user.email }}</a>
                                    <button @click="LogoutFunction" data-bs-dismiss="modal"
                                        class="btn btn-success-light btn-sm mt-5"><i class="fa fa-plus"></i>
                                        Logout</button>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown-divider my-30"></div>
                        <div>
                            <div class="d-flex align-items-center mb-30">
                                <div class="me-15 bg-primary-light h-50 w-50 l-h-60 rounded text-center">
                                    <span class="icon-User fs-24"><span class="path1"></span><span
                                            class="path2"></span></span>
                                </div>
                                <div class="d-flex flex-column fw-500">
                                    <RouterLink to="/admin/profile" data-bs-dismiss="modal"
                                        class="text-dark hover-primary mb-1 fs-16">Profile</RouterLink>
                                    <span class="text-fade">Account settings and more</span>
                                </div>
                            </div>


                            <div class="d-flex align-items-center mb-30">
                                <div class="me-15 bg-danger-light h-50 w-50 l-h-60 rounded text-center">
                                    <span class="icon-Sign-out fs-24"><span class="path1"></span><span
                                            class="path2"></span><span class="path3"></span><span
                                            class="path4"></span></span>
                                </div>
                                <div class="d-flex flex-column fw-500">
                                    <RouterLink @click="LogoutFunction" to="" data-bs-dismiss="modal"
                                        class="text-dark hover-danger mb-1 fs-16">
                                        Logout</RouterLink>
                                    <span class="text-fade">Log out</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@import '@/assets/css/vendors_css.css';
@import '@/assets/css/style.css';
@import '@/assets/css/skin_color.css';
.form-control {
    border-radius: 30px !important;
    padding: 9px 20px;
}

.dataTables_filter>label>input[type='search'] {
    border: 2px solid #f2f2f2;
    outline: none;
    border-radius: 30px;
    padding: 5px 15px;
}

.dataTables_length>label>select[name='MyTable_length'] {
    border: 2px solid #f2f2f2;
    outline: none;
    padding: 5px 10px;
    border-radius: 30px;
}

.theme-primary.light-skin.sidebar-mini.sidebar-collapse .sidebar-menu>li.active>a>span {
    background-color: #f2f2f2 !important;
    color: black !important;
}

.w-100 {
    width: 100% !important;
}
</style>