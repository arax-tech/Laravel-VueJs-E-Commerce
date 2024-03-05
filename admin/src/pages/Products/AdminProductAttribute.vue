<script setup>
import { ref, onMounted, computed } from 'vue';
import $ from 'jquery';
import 'datatables.net-dt';
import store from '../../store';
import { format } from 'date-fns';
import { useToast } from 'vue-toast-notification';
import { useRoute } from 'vue-router';
import Loading from '../../components/Loading.vue';

const route = useRoute();
onMounted(() => store.dispatch("GetProductAttributes", route.params.id));
onMounted(() => $('#MyTable').DataTable());
const VITE_IMAGES_BASE_URL = import.meta.env.VITE_IMAGES_BASE_URL;
const productAttributes = computed(() => store.state.productAttributes);

const modal = ref(false);
const toast = useToast();


const data = ref({
    id: "",
    product_id: "",
    size: "",
    color: "",
    price: "",
    stock: "",
    image: "",
});
const ToggleModal = () => {
    modal.value = !modal.value;
}


const UpdateProductAttribueFunction = async () => {
    try {
        const response = await store.dispatch('UpdateProductAttribueAction', data.value);
        if (response.status === 200) {
            store.dispatch("GetProductAttributes", route.params.id);
            toast.success(response.message);
            ToggleModal();
            data.value = {};
        }
    } catch (error) {
        console.log(error)
    }
}




const editItem = (id) => {
    const attrib = productAttributes.value.data.find((attr => attr.id === id));
    data.value.id = attrib.id;
    data.value.product_id = attrib.product_id;
    data.value.size = attrib.size;
    data.value.color = attrib.color;
    data.value.price = attrib.price;
    data.value.stock = attrib.stock;
    ToggleModal();
};

const DeleteProductAttribute = async (id) => {
    if (!confirm(`Are you sure you to delete ???`)) {
        return
    }
    try {
        const response = await store.dispatch('DeleteProductAttribueAction', id);
        if (response.status === 200) {
            store.dispatch("GetProductAttributes", route.params.id);
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
                        <h4 class="box-title">Product Attributes</h4>

                        <div class="box-controls pull-right">
                            <RouterLink :to="`/admin/product/attribute/create/${route.params.id}`"
                                class="btn btn-primary  btn-rounded" style="margin-top: -5px;">Create</RouterLink>

                            <div v-if="modal" class="modal fade show" style="display: block;">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title"> Update Product Attribute</h4>
                                            <button type="button" class="btn-close" @click="ToggleModal"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form @submit.prevent="UpdateProductAttribueFunction">
                                                <div class="row">

                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Price<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="price" class="form-control rounded"
                                                                    required v-model="data.price">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Color<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="color" class="form-control rounded"
                                                                    required v-model="data.color">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Size<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="size" class="form-control rounded"
                                                                    required v-model="data.size">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Stock<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="stock" class="form-control rounded"
                                                                    required v-model="data.stock">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <label>Image</label>
                                                            <div class="controls">
                                                                <input type="file"
                                                                    @change="event => data.image = event.target.files[0]"
                                                                    name="text" class="form-control rounded">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="text-xs-right">
                                                    <button :disabled="productAttributes.loading" type="submit"
                                                        class="btn btn-primary btn-rounded w-100 ">{{ productAttributes.loading ?
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
                        <div v-if="productAttributes.loading">
                            <Loading />
                        </div>
                        <div v-else class="table-responsive">
                            <table id="MyTable" class="table table-hover table-striped " style="width:100%">
                                <thead>
                                    <tr>
                                        <th style="width:10%">Image</th>
                                        <th>Price</th>
                                        <th>Color</th>
                                        <th>Size</th>
                                        <th>Stock</th>
                                        <th>CreatedAt</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(attribute, index) in productAttributes.data" :key="index">

                                        <td><img class="img-thumbnail"
                                                :src="VITE_IMAGES_BASE_URL + '/admin/products/' + attribute.image"
                                                style="width: 50%; height: 50%;">
                                        </td>
                                        <td>{{ attribute.price }}</td>
                                        <td>{{ attribute.color }}</td>
                                        <td>{{ attribute.size }}</td>
                                        <td>{{ attribute.stock }}</td>
                                        <td><span class="text-muted"><i class="fa fa-clock"></i> {{ format(new
                                            Date(attribute.created_at), 'dd MMM yyyy') }}</span>
                                        </td>

                                        <td class="text-center">
                                            <div class="btn-group text-center">
                                                <button @click="editItem(attribute.id)"
                                                    class="btn btn-primary btn-rounded btn-sm">Update</button>
                                                <button @click="DeleteProductAttribute(attribute.id)"
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