<script setup>
import { ref, onMounted, computed } from 'vue';
import $ from 'jquery';
import 'datatables.net-dt';
import store from '../../store';
import { format } from 'date-fns';
import { useToast } from 'vue-toast-notification';
import Loading from '../../components/Loading.vue';

onMounted(() => store.dispatch("GetCategories"));
onMounted(() => $('#MyTable').DataTable());

const VITE_IMAGES_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL;
const categories = computed(() => store.state.categories);
// console.log(categories.value);

const modal = ref(false);
const type = ref('Create')
const toast = useToast();


const data = ref({
    id: "",
    parent_id: "",
    name: "",
    slug: "",
    status: "Active",
    image: null,
});
const ToggleModal = () => {
    if (modal.value === true) {
        type.value = "Create";
        data.value = {};
    }
    modal.value = !modal.value;
}
const CreateCategoryFunction = async () => {
    const formData = new FormData();
    formData.append('parent_id', data.value.parent_id);
    formData.append('name', data.value.name);
    formData.append('slug', data.value.slug);
    formData.append('status', data.value.status);
    formData.append('image', data.value.image ? data.value.image : null);
    try {
        const response = await store.dispatch('CreateCategoryAction', formData);
        if (response.status === 200) {
            store.dispatch("GetCategories");
            toast.success(response.message);
            ToggleModal();
            data.value = {};
        }
    } catch (error) {
        console.log(error)
    }
}

const UpdateCategoryFunction = async () => {
    try {
        const response = await store.dispatch('UpdateCategoryAction', data.value);
        if (response.status === 200) {
            store.dispatch("GetCategories");
            toast.success(response.message);
            data.value = {};
            type.value = "Create";
            ToggleModal();
        }
    } catch (error) {
        console.log(error)
    }

}




const editItem = (id) => {
    type.value = 'Update';
    const category = categories.value.data.categories.find((cats => cats.id === id));
    data.value.id = category.id;
    data.value.parent_id = category.parent_id;
    data.value.name = category.name;
    data.value.slug = category.slug;
    data.value.status = category.status;
    ToggleModal();


};

const DeleteCategroyFunction = async (id) => {
    if (!confirm(`Are you sure you to delete ???`)) {
        return
    }
    try {
        const response = await store.dispatch('DeleteCategroyAction', id);
        if (response.status === 200) {
            store.dispatch("GetCategories");
            toast.error(response.message);
        }
    } catch (error) {
        console.log(error)
    }
};


</script>
  


<template>
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="box">
                    <div class="box-header with-border">
                        <h4 class="box-title">Categories</h4>

                        <div class="box-controls pull-right">
                            <button class="btn btn-primary  btn-rounded" style="margin-top: -5px;" type="button"
                                @click="ToggleModal">Create</button>

                            <div v-if="modal" class="modal fade show" style="display: block;">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title"> {{ type }} Categroy</h4>

                                            <button type="button" class="btn-close" @click="ToggleModal"></button>
                                        </div>
                                        <div class="modal-body">
                                            <pre></pre>
                                            <form v-if="type === 'Create'" @submit.prevent="CreateCategoryFunction">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label>Parent Category</label>
                                                            <!-- <ul v-for="parent in categories.data.parents_categories" :key="parent.id">
                                                                <li>{{parent.name}}</li>
                                                                <li v-for="child in parent.sub_categories" :key="child.id">--{{child.name}}</li>
                                                            </ul> -->
                                                            <div class="controls">
                                                                <select class="form-control rounded" name="parent_id" v-model="data.parent_id">
                                                                    <option v-for="parent in categories.data.parents_categories" :key="parent.id" :value="parent.id">{{ parent.name }}</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Name<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="text" class="form-control rounded"
                                                                    required v-model="data.name">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Slug<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="text" class="form-control rounded"
                                                                    required v-model="data.slug">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Status<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <select class="form-control rounded" name="status"
                                                                    v-model="data.status">
                                                                    <option value="Active">Active</option>
                                                                    <option value="InActive">InActive</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Image<span v-if="type === 'Create'"
                                                                    class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="file"
                                                                    @change="event => data.image = event.target.files[0]"
                                                                    name="text" class="form-control rounded"
                                                                    :required="type === 'Create'">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-xs-right">
                                                    <button :disabled="categories.loading" type="submit"
                                                        class="btn btn-primary btn-rounded w-100 ">{{ categories.loading ?
                                                            'Creating...' : 'Create' }}</button>
                                                </div>
                                            </form>
                                            <form v-else @submit.prevent="UpdateCategoryFunction">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label>Parent Category</label>
                                                            <div class="controls">
                                                                <select class="form-control rounded" name="parent_id"
                                                                    v-model="data.parent_id">
                                                                    <option v-for="parent in categories.data.parents_categories" :key="parent.id" :value="parent.id">{{ parent.name }}</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Name<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="text" class="form-control rounded"
                                                                    required v-model="data.name">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Slug<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="text" class="form-control rounded"
                                                                    required v-model="data.slug">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Status<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <select class="form-control rounded" name="status"
                                                                    v-model="data.status">
                                                                    <option value="Active">Active</option>
                                                                    <option value="InActive">InActive</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Image<span v-if="type === 'Create'"
                                                                    class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="file"
                                                                    @change="event => data.image = event.target.files[0]"
                                                                    name="text" class="form-control rounded"
                                                                    :required="type === 'Create'">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-xs-right">
                                                    <button :disabled="categories.loading" type="submit"
                                                        class="btn btn-primary btn-rounded w-100 ">{{ categories.loading ?
                                                            'Updating...' : 'Update' }}</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-body">
                        <div v-if="categories.loading"><Loading /></div>
                        <div v-else class="table-responsive">
                            <table id="MyTable" class="table table-hover table-striped " style="width:100%">
                                <thead>
                                    <tr>
                                        <th style="width:10%">Image</th>
                                        <th>Parent</th>
                                        <th>Category</th>
                                        <th>Products</th>
                                        <th>CreatedAt</th>
                                        <th>Status</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(category, index) in categories.data.categories" :key="index">
                                        <td><img class="img-thumbnail"
                                                :src="VITE_IMAGES_BASE_URL + '/admin/category/' + category.image"
                                                style="width: 50%; height: 50%;">
                                        </td>
                                        <td>{{ category.parent_category || '...' }}</td>
                                        <td>{{ category.name }}</td>
                                        <td>{{ category.parent_id }}</td>
                                        <td><span class="text-muted"><i class="fa fa-clock"></i> {{ format(new
                                            Date(category.created_at), 'dd MMM yyyy') }}</span>
                                        </td>
                                        <td>
                                            <span v-if="category.status === 'Active'"
                                                class="badge badge-pill badge-success">{{ category.status }}</span>
                                            <span v-else class="badge badge-pill badge-danger">{{ category.status }}</span>
                                        </td>

                                        <td>
                                            <div class="btn-group text-center">
                                                <button @click="editItem(category.id)"
                                                    class="btn btn-primary btn-rounded btn-sm">Update</button>
                                                <button @click="DeleteCategroyFunction(category.id)"
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
    </div>
</section></template>

<style scoped></style>