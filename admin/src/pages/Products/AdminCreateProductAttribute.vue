<script setup>
import { ref, reactive, computed } from 'vue';
import store from '../../store';
import { useToast } from 'vue-toast-notification';
import { useRoute, useRouter } from 'vue-router';
import Loading from '../../components/Loading.vue';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const productAttributes = computed(() => store.state.productAttributes);

const data = reactive([
    { product_id: route.params.id, size: "", color: "", price: "", stock: "", image: null  }
]);


const AddRow = (index) => {
    data.push({ product_id: route.params.id, size: "", color: "", price: "", stock: "", image: null },)
}
const RemoveRow = (index) => {
    if (data.length > 1) {
        data.splice(index, 1)
    }
}


const CreateProductAttribueFunction = async () => {
    try {
        const response = await store.dispatch('CreateProductAttribueAction', data);
        if (response.status === 200) {
            toast.success(response.message);
            router.push(`/admin/product/attribute/${route.params.id}`);
        }
    } catch (error) {
        console.log(error)
    }

}







</script>
  


<template>
    <section class="content">
        <div class="row">
            <div class="col-12">
                <div class="box">
                    <div class="box-header with-border">
                        <h4 class="box-title">Product Attributes</h4>
                        <!-- <pre>{{ data }}</pre> -->

                        <div class="box-controls pull-right">
                            <RouterLink :to="`/admin/product/attribute/${route.params.id}`" class="btn btn-primary  btn-rounded" style="margin-top: -5px;">Back</RouterLink>

                        </div>
                    </div>
                    <div class="box-body">
                        <form @submit.prevent="CreateProductAttribueFunction">
                            <div class="row" v-for="(item, index) in data" :key="index">

                                <div class="col-2">
                                    <div class="form-group">
                                        <label>Price<span class="text-danger">*</span></label>
                                        <div class="controls">
                                            <input type="number" name="price" class="form-control rounded" required
                                                v-model="item.price">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="form-group">
                                        <label>Color<span class="text-danger">*</span></label>
                                        <div class="controls">
                                            <input type="text" name="color" class="form-control rounded" required
                                                v-model="item.color">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="form-group">
                                        <label>Size<span class="text-danger">*</span></label>
                                        <div class="controls">
                                            <input type="text" name="size" class="form-control rounded" required
                                                v-model="item.size">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="form-group">
                                        <label>Stock<span class="text-danger">*</span></label>
                                        <div class="controls">
                                            <input type="number" name="stock" class="form-control rounded" required
                                                v-model="item.stock">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="form-group">
                                        <label>Image<span class="text-danger">*</span></label>
                                        <div class="controls">
                                            <input type="file" @change="event => item.image = event.target.files[0]"
                                                name="text" class="form-control rounded" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="form-group">
                                        <label></label>
                                        <div class="controls">
                                            <div class="btn-group text-center">
                                                <button type="button" class="btn btn-success btn-rounded " @click="AddRow(index)">Add</button>
                                                <button type="button" class="btn btn-danger btn-rounded" @click="RemoveRow(index)">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="text-xs-right">
                                <button :disabled="productAttributes.loading" type="submit" class="btn btn-primary btn-rounded w-100 ">{{
                                    productAttributes.loading ?
                                    'Createing...' : 'Create' }}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>