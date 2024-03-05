<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import Loading from '../components/Loading.vue';


onMounted(() => store.dispatch("GetDashboard"));
const dashboard = computed(() => store.state.dashboard.data);
const loading = computed(() => store.state.dashboard.loading);

</script>

<template>
    <section class="content">
        <div v-if="loading"><Loading/></div>
        <div v-else class="row">
            <div class="col-xxxl-12 col-xl-12 col-12">
                <div class="row">
                    <div class="col-xl-3 col-lg-6 col-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h2 class="mb-5 font-weight-bolder">{{dashboard.users}}</h2>
                                        <p class="text-mute mb-0">Total Users</p>
                                    </div>
                                    <div class="bg-primary mb-20 w-50 h-50 rounded10 text-center l-h-50">
                                        <!-- <i class="fs-18 fa fa-users"></i> -->
                                        <i class="icon-Group custom_icon11"><span class="path1"></span><span
                                                class="path2"></span></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h2 class="mb-5 font-weight-bolder">{{dashboard.categories}}</h2>
                                        <p class="text-mute mb-0">Total Categories</p>
                                    </div>
                                    <div class="bg-primary mb-20 w-50 h-50 rounded10 text-center l-h-50">
                                        <i class="icon-Bullet-list custom_icon11"><span class="path1"></span><span
                                                class="path2"></span></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h2 class="mb-5 font-weight-bolder">{{dashboard.products}}</h2>
                                        <p class="text-mute mb-0">Total Products</p>
                                    </div>
                                    <div class="bg-primary mb-20 w-50 h-50 rounded10 text-center l-h-50">
                                        <i class="icon-Price custom_icon11"><span class="path1"></span><span
                                                class="path2"></span></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h2 class="mb-5 font-weight-bolder">{{dashboard.product_attributs}}</h2>
                                        <p class="text-mute mb-0">Total Product Attributes</p>
                                    </div>
                                    <div class="bg-primary mb-20 w-50 h-50 rounded10 text-center l-h-50">
                                        <i class="icon-Price custom_icon11"><span class="path1"></span><span
                                                class="path2"></span></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-6 col-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h2 class="mb-5 font-weight-bolder">{{ dashboard.orders }}</h2>
                                        <p class="text-mute mb-0">Total Orders</p>
                                    </div>
                                    <div class="bg-primary mb-20 w-50 h-50 rounded10 text-center l-h-50">
                                        <i class="icon-Cart custom_icon11"><span class="path1"></span><span
                                                class="path2"></span></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h2 class="mb-5 font-weight-bolder">{{ dashboard.payments }}</h2>
                                        <p class="text-mute mb-0">Total Payments</p>
                                    </div>
                                    <div class="bg-primary mb-20 w-50 h-50 rounded10 text-center l-h-50">
                                        <i class="icon-Credit-card custom_icon11"><span class="path1"></span><span
                                                class="path2"></span></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-12">
                        <div class="box">
                            <div class="box-body">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div>
                                        <h2 class="mb-5 font-weight-bolder">{{ dashboard.coupons }}</h2>
                                        <p class="text-mute mb-0">Total Coupons</p>
                                    </div>
                                    <div class="bg-primary mb-20 w-50 h-50 rounded10 text-center l-h-50">
                                        <i class="icon-Gift custom_icon11"><span class="path1"></span><span
                                                class="path2"></span></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<style scoped>
.custom_icon11 {
    font-size: 33px;
    position: absolute;
    margin: 8px -17px;
}

.font-weight-bolder {
    font-weight: bolder;
}
</style>