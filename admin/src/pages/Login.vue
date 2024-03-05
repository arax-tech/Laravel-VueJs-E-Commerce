<script setup>
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toast-notification';

const store = useStore();
const toast = useToast();

const classess = "hold-transition theme-primary bg-img";
const remove_classess1 = 'light-skin sidebar-mini theme-primary fixed';

onMounted(() => classess.split(" ").forEach(clg => document.body.classList.add(clg)));
onMounted(() => {
    document.body.style = "background-image: url('src/assets/backend/images/auth-bg/bg-1.jpg')";
    remove_classess1.split(" ").forEach(clg => document.body.classList.remove(clg));
});

const loading = computed(() => store.state.auth.loading);
// Login Functions
const data = ref({
    email: 'admin@info.com',
    password: '123'
});



const LoginFunction = async () => {
    try {
        const response = await store.dispatch('LoginAction', data.value);
        if (response.status === 200) {
            toast.success(response.message);
            window.location.href = "/admin/dashboard"
        } else if (response.status === 401) {
            toast.error(response.message);
        } else {
            toast.error(response.message);
        }
    } catch (error) {
        console.log(error);
    }

}
</script>

<template>
    <div class="container h-p100 mt-120 ">
        <div class="row align-items-center justify-content-md-center h-p100">

            <div class="col-12">
                <div class="row justify-content-center g-0">
                    <div class="col-lg-5 col-md-5 col-12">
                        <div class="bg-white rounded10 shadow-lg">
                            <div class="content-top-agile p-20 pb-0">
                                <h2 class="text-primary">Let's Get Started</h2>
                                <p class="mb-0">Sign in to continue to Admin Panel.</p>

                            </div>

                            <div class="p-40">
                                <form @submit.prevent="LoginFunction">
                                    <div class="form-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text bg-transparent"><i
                                                    class="fa fa-envelope"></i></span>
                                            <input type="text" class="form-control ps-15 bg-transparent"
                                                v-model="data.email" placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text  bg-transparent"><i class="fa fa-lock"></i></span>
                                            <input type="password" class="form-control ps-15 bg-transparent"
                                                v-model="data.password" placeholder="Password">
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="checkbox">
                                                <input type="checkbox" id="basic_checkbox_1">
                                                <label for="basic_checkbox_1">Remember Me</label>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="fog-pwd text-end">
                                                <a href="javascript:void(0)" class="hover-warning"><i
                                                        class="fa fa-lock"></i> Forgot pwd?</a><br>
                                            </div>
                                        </div>
                                        <div class="col-12 text-center">
                                            <button :disabled="loading" type="submit"
                                                class="btn btn-primary text-white btn-rounded mt-10">{{ loading ?
                                                    'Loading...' : 'SIGN IN' }}</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-control {
    border-radius: 0px 30px 30px 0px !important;
}

.input-group-text {
    border-radius: 30px 0px 0px 30px !important;
    width: 45px;
    padding-left: 18px;
}
</style>