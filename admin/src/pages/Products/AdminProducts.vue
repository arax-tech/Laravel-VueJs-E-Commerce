<script setup>
import { ref, onMounted, computed } from 'vue';
import $ from 'jquery';
import 'datatables.net-dt';
import store from '../../store';
import { format } from 'date-fns';
import { useToast } from 'vue-toast-notification';
import Loading from '../../components/Loading.vue';

onMounted(() => store.dispatch("GetProducts"));
onMounted(() => $('#MyTable').DataTable());

const VITE_IMAGES_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL;
const products = computed(() => store.state.products);
const categories = computed(() => store.state.categories);

const modal = ref(false);
const type = ref('Create')
const toast = useToast();


const data = ref({
    id: "",
    category_id: "",
    name: "",
    on_sale: "No",
    off_percentage: 0,
    future: 'No',
    status: "Active",
});
const ToggleModal = () => {
    if (modal.value === true) {
        type.value = "Create";
        data.value = {
            id: "",
            category_id: "",
            name: "",
            on_sale: "No",
            off_percentage: 0,
            future: 'No',
            status: "Active",
        };
    }
    modal.value = !modal.value;
}
const CreateProductFunction = async () => {
    try {
        const response = await store.dispatch('CreateProductAction', data.value);
        if (response.status === 200) {
            store.dispatch("GetProducts");
            toast.success(response.message);
            ToggleModal();
            data.value = {
                id: "",
                category_id: "",
                name: "",
                on_sale: "No",
                off_percentage: 0,
                future: 'No',
                status: "Active",
            };
        }
    } catch (error) {
        console.log(error)
    }
}

const UpdateProductFunction = async () => {
    try {
        const response = await store.dispatch('UpdateProductAction', data.value);
        if (response.status === 200) {
            store.dispatch("GetProducts");
            toast.success(response.message);
            data.value = {
                id: "",
                category_id: "",
                name: "",
                on_sale: "No",
                off_percentage: 0,
                future: 'No',
                status: "Active",
            };
            type.value = "Create";
            ToggleModal();
        }
    } catch (error) {
        console.log(error)
    }
}




const EditProductFunction = (id) => {
    type.value = 'Update';
    const product = products.value.data.find((pro => pro.id === id));
    data.value.id = product.id;
    data.value.category_id = product.category_id;
    data.value.name = product.name;
    data.value.on_sale = product.on_sale;
    data.value.off_percentage = product.off_percentage;
    data.value.future = product.future;
    data.value.status = product.status;
    ToggleModal();


};

const DeleteProductFunction = async (id) => {
    if (!confirm(`Are you sure you to delete ???`)) {
        return
    }
    try {
        const response = await store.dispatch('DeleteProductAction', id);
        if (response.status === 200) {
            store.dispatch("GetProducts");
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
                        <h4 class="box-title">Products</h4>

                        <div class="box-controls pull-right">
                            <button class="btn btn-primary  btn-rounded" style="margin-top: -5px;" type="button"
                                @click="ToggleModal">Create</button>

                            <div v-if="modal" class="modal fade show" style="display: block;">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title"> {{ type }} Product</h4>

                                            <button type="button" class="btn-close" @click="ToggleModal"></button>
                                        </div>
                                        <div class="modal-body">
                                            <pre></pre>
                                            <form v-if="type === 'Create'" @submit.prevent="CreateProductFunction">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Category</label>
                                                            <div class="controls">
                                                                <select class="form-control rounded" name="category_id"
                                                                    v-model="data.category_id">
                                                                    <optgroup label="Parent Categories"
                                                                        v-for="parent in categories.data.parents_categories"
                                                                        :key="parent.id">
                                                                        <option :value="parent.id">{{ parent.name }}
                                                                        </option>
                                                                        <option v-for="child in parent.sub_categories"
                                                                            :key="child.id" :value="child.id">-- {{
                                                                                child.name }}</option>
                                                                    </optgroup>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Name<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="name" class="form-control rounded"
                                                                    required v-model="data.name">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>On Sale<span class="text-danger">*</span></label>
                                                            <select class="form-control rounded" name="on_sale"
                                                                v-model="data.on_sale">
                                                                <option value="Yes">Yes</option>
                                                                <option value="No">No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Off Percentage<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="text" class="form-control rounded"
                                                                    required v-model="data.off_percentage">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Future Product<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <select class="form-control rounded" name="future" v-model="data.future">
                                                                    <option value="Yes">Yes</option>
                                                                    <option value="No">No</option>
                                                                </select>
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
                                                </div>
                                                <div class="text-xs-right">
                                                    <button :disabled="products.loading" type="submit"
                                                        class="btn btn-primary btn-rounded w-100 ">{{ products.loading ?
                                                            'Creating...' : 'Create' }}</button>
                                                </div>
                                            </form>
                                            <form v-else @submit.prevent="UpdateProductFunction">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Category</label>
                                                            <div class="controls">
                                                                <!-- <select class="form-control rounded" name="category_id"
                                                                    v-model="data.category_id">
                                                                    <option v-for="cat in categories.data" :key="cat.id" :value="cat.id">{{ cat.name }}</option>
                                                                </select> -->
                                                                <select class="form-control rounded" name="category_id"
                                                                    v-model="data.category_id">
                                                                    <optgroup label="Parent Categories"
                                                                        v-for="parent in categories.data.parents_categories"
                                                                        :key="parent.id">
                                                                        <option :value="parent.id">{{ parent.name }}
                                                                        </option>
                                                                        <option v-for="child in parent.sub_categories"
                                                                            :key="child.id" :value="child.id">-- {{
                                                                                child.name }}</option>
                                                                    </optgroup>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Name<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="name" class="form-control rounded"
                                                                    required v-model="data.name">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>On Sale<span class="text-danger">*</span></label>
                                                            <select class="form-control rounded" name="on_sale"
                                                                v-model="data.on_sale">
                                                                <option value="Yes">Yes</option>
                                                                <option value="No">No</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Off Percentage<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="text" class="form-control rounded"
                                                                    required v-model="data.off_percentage">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Future Product<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <select class="form-control rounded" name="future" v-model="data.future">
                                                                    <option value="Yes">Yes</option>
                                                                    <option value="No">No</option>
                                                                </select>
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
                                                </div>
                                                <div class="text-xs-right">
                                                    <button :disabled="products.loading" type="submit"
                                                        class="btn btn-primary btn-rounded w-100 ">{{ products.loading ?
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
                        <div v-if="products.loading">
                            <Loading />
                        </div>
                        <div v-else class="table-responsive">
                            <table id="MyTable" class="table table-hover table-striped " style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Name</th>
                                        <th>On Sale</th>
                                        <th>Off Percentage</th>
                                        <th>Future</th>
                                        <th>CreatedAt</th>
                                        <th>Status</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product, index) in products.data" :key="index">

                                        <td>{{ product.category_name }}</td>
                                        <td>{{ product.name }}</td>
                                        <td>{{ product.on_sale }}</td>
                                        <td>{{ product.off_percentage }}</td>
                                        <td>{{ product.future }}</td>
                                        <td><span class="text-muted"><i class="fa fa-clock"></i> {{ format(new
                                            Date(product.created_at), 'dd MMM yyyy') }}</span>
                                        </td>
                                        <td>
                                            <span v-if="product.status === 'Active'"
                                                class="badge badge-pill badge-success">{{ product.status }}</span>
                                            <span v-else class="badge badge-pill badge-danger">{{ product.status }}</span>
                                        </td>

                                        <td class="text-center">
                                            <div class="btn-group text-center">
                                                <button @click="EditProductFunction(product.id)"
                                                    class="btn btn-primary btn-rounded btn-sm">Update</button>
                                                <RouterLink :to="`/admin/product/attribute/${product.id}`"
                                                    class="btn btn-success btn-rounded btn-sm">Attribute</RouterLink>
                                                <button @click="DeleteProductFunction(product.id)"
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
    </section>
</template>

<style scoped></style>