<script setup>
import { computed, ref } from 'vue';
import store from '../store';
import { useToast } from 'vue-toast-notification';

const toast = useToast();

const user = computed(() => store.state.auth.user);
const loading = computed(() => store.state.auth.loading);
const data = ref({
    name: user.value.name,
    email: user.value.email,
    phone: user.value.phone,
    image: null,
})
const password = ref({
    current_password: '',
    new_password: '',
    confirm_password: '',
})

const VITE_IMAGES_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL;
const UpdateProfileFunction = async () => {
    const formData = new FormData();
    formData.append('name', data.value.name);
    formData.append('email', data.value.email);
    formData.append('phone', data.value.phone);
    formData.append('image', data.value.image ? data.value.image : null);
    try {
        const response = await store.dispatch('UpdateProfileAction', formData);
        if (response.status === 200) {
            toast.success(response.message);
        }
    } catch (error) {
        console.log(error)
    }
}
const UpdatePasswordFunction = async () => {
    if (password.value.new_password != password.value.confirm_password) {
        toast.error("Pasword confirmation oes not matched...");
        return;
    }
    
    try {
        const response = await store.dispatch('UpdatePasswordAction', password.value);
        if (response.status === 200) {
            toast.success(response.message);
            password.value = '';
        } else if (response.status === 400) {
            toast.error(response.message);
        }
    } catch (error) {
        console.log(error)
    }
}
</script>

<template>
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="d-flex align-items-center">
            <div class="me-auto">
                <h4 class="page-title">Profile</h4>
            </div>

        </div>
    </div>

    <!-- Main content -->
    <section class="content">

        <div class="row">
            <div class="col-12 col-lg-7 col-xl-8">

                <div class="nav-tabs-custom">
                    <ul class="nav nav-tabs">
                        <li><a class="active" href="#UserProfile" data-bs-toggle="tab">Profile</a></li>
                        <li><a href="#UserActivity" data-bs-toggle="tab">Password</a></li>
                    </ul>


                    <div class="tab-content">

                        <div class="tab-pane active" id="UserProfile">
                            <div class="box b-1 no-shadow">
                                <form enctype="multipart/form-data" @submit.prevent="UpdateProfileFunction">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label>Name<span class="text-danger">*</span></label>
                                                <div class="controls">
                                                    <input type="text" name="name" v-model="data.name"
                                                        class="form-control rounded" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label>Email<span class="text-danger">*</span></label>
                                                <div class="controls">
                                                    <input type="email" name="text" v-model="data.email"
                                                        class="form-control rounded" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label>Phone<span class="text-danger">*</span></label>
                                                <div class="controls">
                                                    <input type="text" name="phone" v-model="data.phone"
                                                        class="form-control rounded" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label>Image</label>
                                                <div class="controls">
                                                    <input type="file" @change="event => data.image = event.target.files[0]"
                                                        name="text" class="form-control rounded">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-xs-right">
                                        <button :disabled="loading" type="submit"
                                            class="btn btn-primary btn-rounded w-100 ">{{ loading ? 'Updating...' : 'Update'
                                            }}</button>
                                    </div>
                                </form>
                            </div>




                        </div>
                        <!-- /.tab-pane -->

                        <div class="tab-pane" id="UserActivity">

                            <div class="box b-1 no-shadow">
                                <form @submit.prevent="UpdatePasswordFunction">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label>Current Password<span class="text-danger">*</span></label>
                                                <div class="controls">
                                                    <input type="text" v-model="password.current_password" name="text"
                                                        class="form-control rounded" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label>New Password<span class="text-danger">*</span></label>
                                                <div class="controls">
                                                    <input type="text" v-model="password.new_password" name="text"
                                                        class="form-control rounded" required>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label>Confirm Password<span class="text-danger">*</span></label>
                                                <div class="controls">
                                                    <input type="text" v-model="password.confirm_password" name="text"
                                                        class="form-control rounded" required>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="text-xs-right">
                                        <button :disabled="loading" type="submit"
                                            class="btn btn-primary btn-rounded w-100 ">{{ loading ? 'Updating...' : 'Update'
                                            }}</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <!-- /.tab-content -->
                </div>
                <!-- /.nav-tabs-custom -->
            </div>
            <!-- /.col -->

            <div class="col-12 col-lg-5 col-xl-4">
                <div class="box box-widget widget-user">
                    <!-- Add the bg color to the header using any of the bg-* classes -->
                    <!-- style="background: url('/assets/backend/images/gallery/full/10.html') center center;" -->
                    <div class="widget-user-header bg-img bbsr-0 bber-0" data-overlay="5">
                        <h3 class="widget-user-username text-white">{{ user.name }}</h3>
                        <h6 class="widget-user-desc text-white">{{ user.email }}</h6>
                    </div>
                    <div class="widget-user-image">
                        <img class="rounded-circle" :src="VITE_IMAGES_BASE_URL + '/admin/profile/' + user.image"
                            :alt="user.name">
                    </div>
                    <div class="box-footer">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="description-block">
                                    <h5 class="description-header">12K</h5>
                                    <span class="description-text">FOLLOWERS</span>
                                </div>
                                <!-- /.description-block -->
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-6 be-1 bs-1">
                                <div class="description-block">
                                    <h5 class="description-header">550</h5>
                                    <span class="description-text">FOLLOWERS</span>
                                </div>
                                <!-- /.description-block -->
                            </div>
                        </div>
                        <!-- /.row -->
                    </div>
                </div>
                <div class="box">
                    <div class="box-body box-profile">
                        <div class="row">
                            <div class="col-12">
                                <div>
                                    <p>Email :<span class="text-gray ps-10">{{ user.email }}</span> </p>
                                    <p>Phone :<span class="text-gray ps-10">{{ user.phone }}</span></p>
                                    <p>Address :<span class="text-gray ps-10">123, Lorem Ipsum, Florida, USA</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-body -->
                </div>


            </div>

        </div>
        <!-- /.row -->

    </section>
    <!-- /.content -->
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