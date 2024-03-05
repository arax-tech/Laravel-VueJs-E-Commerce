<script setup>
import { computed, onMounted, ref } from 'vue';
import Loading from '../../components/Loading.vue'
import store from '../../store';
import { useToast } from 'vue-toast-notification';
import $ from 'jquery';
import 'datatables.net-dt';
import { format } from 'date-fns';
const toast = useToast();

onMounted(() => store.dispatch("GetUsers"));
onMounted(() => $('#MyTable').DataTable());
const users = computed(() => store.state.users);
const VITE_IMAGES_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL;

const DeleteUser = (id) => {
    console.log(id);
}
</script>

<template>
    
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="box">
                    <div class="box-header with-border">
                        <h4 class="box-title">Users</h4>
                    </div>
                    <div v-if="users.loading"><Loading/></div>
                    <div v-else class="box-body no-padding">
                        <div class="nav-tabs-custom">
                            <ul class="nav nav-tabs">
                                <li><a class="active" href="#Admins" data-bs-toggle="tab">Admin</a></li>
                                <li><a href="#Users" data-bs-toggle="tab">Users</a></li>
                            </ul>

                            <div class="tab-content">

                                <div class="tab-pane active" id="Admins">
                                    <div class="no-shadow">
                                        <div class="table-responsive">
                                            <table id="MyTable" class="table table-hover table-striped " style="width:100%">
                                                <thead>
                                                    <tr>
                                                        <th style="width:10%">Image</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Status</th>
                                                        <th>CreatedAt</th>
                                                        <th class="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(admin, index) in users.data.admins" :key="index">
                                                        <td><img class="img-thumbnail"
                                                                :src="VITE_IMAGES_BASE_URL + '/admin/profile/' + admin.image"
                                                                style="width: 50%; height: 50%;">
                                                        </td>
                                                        <td>{{ admin.name }}</td>
                                                        <td>{{ admin.email }}</td>
                                                        <td>
                                                            <span v-if="admin.status === 'Active'"
                                                                class="badge badge-pill badge-success">{{ admin.status
                                                                }}</span>
                                                            <span v-else
                                                                class="badge badge-pill badge-danger">{{ admin.status
                                                                }}</span>
                                                        </td>
                                                        <td><span class="text-muted"><i class="fa fa-clock"></i> {{
                                                            format(new
                                                                Date(admin.created_at), 'dd MMM yyyy') }}</span>
                                                        </td>


                                                        <td class="text-center">
                                                            <div class="btn-group">
                                                                <button @click="DeleteUser(admin.id)"
                                                                    class="btn btn-danger btn-rounded btn-sm">Delete</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>




                                </div>
                                <!-- /.tab-pane -->

                                <div class="tab-pane" id="Users">

                                    <div class="no-shadow">
                                        <div class="table-responsive">
                                            <table id="MyTable" class="table table-hover table-striped " style="width:100%">
                                                <thead>
                                                    <tr>
                                                        <th style="width:10%">Image</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Status</th>
                                                        <th>CreatedAt</th>
                                                        <th class="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(user, index) in users.data.users" :key="index">
                                                        <td><img class="img-thumbnail"
                                                                :src="VITE_IMAGES_BASE_URL + '/admin/profile/' + user.image"
                                                                style="width: 50%; height: 50%;">
                                                        </td>
                                                        <td>{{ user.name }}</td>
                                                        <td>{{ user.email }}</td>
                                                        <td>
                                                            <span v-if="user.status === 'Active'"
                                                                class="badge badge-pill badge-success">{{ user.status
                                                                }}</span>
                                                            <span v-else class="badge badge-pill badge-danger">{{ user.status
                                                            }}</span>
                                                        </td>
                                                        <td><span class="text-muted"><i class="fa fa-clock"></i> {{
                                                            format(new
                                                                Date(user.created_at), 'dd MMM yyyy') }}</span>
                                                        </td>


                                                        <td class="text-center">
                                                            <div class="btn-group">
                                                                <button @click="DeleteUser(user.id)"
                                                                    class="btn btn-danger btn-rounded btn-sm">Delete</button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <!-- /.tab-content -->
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

.nav-tabs-custom {
    border: none !important;
}</style>