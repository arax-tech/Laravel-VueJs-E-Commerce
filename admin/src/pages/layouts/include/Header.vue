<script setup>
import { computed, ref } from 'vue'
import store from '../../../store';
const Status = ref(true)

const ToggleSideBar = () => {
    Status.value = !Status.value;
    if (Status.value == false) {
        document.body.classList.add('sidebar-collapse');
        document.body.classList.add('sidebar-open');
    } else {
        document.body.classList.remove('sidebar-collapse');
        document.body.classList.remove('sidebar-open');
    }
}

const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

const VITE_IMAGES_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL;
const user = computed(() => store.state.auth.user);

</script>

<template>
    <header class="main-header">
        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
            <div class="app-menu">
                <ul class="header-megamenu nav">
                    <li class="btn-group nav-item">
                        <RouterLink @click="ToggleSideBar" to=""
                            class="waves-effect waves-light nav-link push-btn btn-primary-light" data-toggle="push-menu"
                            role="button">
                            <i class="icon-Menu"><span class="path1"></span><span class="path2"></span></i>
                        </RouterLink>
                    </li>
                    <li class="btn-group d-lg-inline-flex d-none">
                        <div class="app-menu">
                            <div class="search-bx mx-5">
                                <form >
                                    <div class="input-group">
                                        <input style="border-radius: 30px 0px 0px 30px !important;" type="search"
                                            class="form-control" placeholder="Search">
                                        <div class="input-group-append">
                                            <button style="border-radius: 0px 30px 30px 0px !important;" class="btn"
                                                type="button" id="button-addon3"><i class="icon-Search"><span
                                                        class="path1"></span><span class="path2"></span></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="navbar-custom-menu r-side">
                <ul class="nav navbar-nav">
                    <li class="dropdown notifications-menu btn-group nav-item">
                        <RouterLink to="" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon"
                            data-bs-toggle="dropdown" title="Notifications">
                            <i class="icon-Notifications"><span class="path1"></span><span class="path2"></span></i>
                            <div class="pulse-wave"></div>
                        </RouterLink>
                        <ul class="dropdown-menu animated bounceIn">
                            <li class="header">
                                <div class="p-20">
                                    <div class="flexbox">
                                        <div>
                                            <h4 class="mb-0 mt-0">Notifications</h4>
                                        </div>
                                        <div>
                                            <a href="#" class="text-danger">Clear All</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <!-- inner menu: contains the actual data -->
                                <ul class="menu sm-scrol">
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-users text-info"></i> Curabitur id eros quis nunc suscipit
                                            blandit.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-warning text-warning"></i> Duis malesuada justo eu sapien
                                            elementum, in semper diam posuere.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-users text-danger"></i> Donec at nisi sit amet tortor commodo
                                            porttitor pretium a erat.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-shopping-cart text-success"></i> In gravida mauris et nisi
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-user text-danger"></i> Praesent eu lacus in libero dictum
                                            fermentum.
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-user text-primary"></i> Nunc fringilla lorem
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-user text-success"></i> Nullam euismod dolor ut quam interdum,
                                            at scelerisque ipsum imperdiet.
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="footer">
                                <a href="#">View all</a>
                            </li>
                        </ul>
                    </li>


                    <li class="btn-group nav-item d-xl-inline-flex d-none">
                        <RouterLink to="/admin/orders" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" >
                            <i class="icon-Cart1"><span class="path1"></span><span class="path2"></span></i>
                        </RouterLink>
                    </li>


                    <li class="btn-group">
                        <RouterLink to="" class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon dropdown-toggle"
                            data-bs-toggle="dropdown">
                            <img class="rounded" src="/src/assets/images/flag/usa.svg" alt="">
                        </RouterLink>
                        <div class="dropdown-menu">
                            <RouterLink class="dropdown-item my-5" to=""><img class="w-20 rounded me-10" src="/src/assets/images/flag/usa.svg" alt=""> English</RouterLink>
                            <RouterLink class="dropdown-item my-5" to=""><img class="w-20 rounded me-10" src="/src/assets/images/flag/spain.svg" alt=""> Spanish</RouterLink>
                            <RouterLink class="dropdown-item my-5" to=""><img class="w-20 rounded me-10" src="/src/assets/images/flag/ger.svg" alt=""> German</RouterLink>
                            <RouterLink class="dropdown-item my-5" to=""><img class="w-20 rounded me-10" src="/src/assets/images/flag/jap.svg" alt=""> Japanese</RouterLink>
                            <RouterLink class="dropdown-item my-5" to=""><img class="w-20 rounded me-10" src="/src/assets/images/flag/fra.svg" alt=""> French</RouterLink>
                        </div>
                    </li>

                    <li class="btn-group nav-item d-xl-inline-flex d-none">
                        <RouterLink @click="toggleFullScreen" to="" data-provide="fullscreen"
                            class="waves-effect waves-light nav-link btn-primary-light svg-bt-icon" title="Full Screen">
                            <i class="icon-Expand-arrows"><span class="path1"></span><span class="path2"></span></i>
                        </RouterLink>
                    </li>

                    <!-- User Account-->
                    <li class="dropdown user user-menu">
                        <RouterLink to=""
                            class="waves-effect waves-light dropdown-toggle w-auto l-h-12 bg-transparent p-0 no-shadow"
                            title="User" data-bs-toggle="modal" data-bs-target="#quick_user_toggle">
                            <div class="d-flex pt-1">
                                <div class="text-end me-10">
                                    <p class="pt-5 fs-14 mb-0 fw-700 text-primary">{{user.name}}</p>
                                    <small class="fs-10 mb-0 text-uppercase text-mute">Online</small>
                                </div>
                                <img :src="VITE_IMAGES_BASE_URL + '/admin/profile/' + user.image"
                            :alt="user.name" class="avatar rounded-10 bg-primary-light h-40 w-40" />
                            </div>
                        </RouterLink>
                    </li>

                </ul>
            </div>
        </nav>
    </header>
</template>