<script setup>
import { ref, onMounted, computed } from 'vue';
import $ from 'jquery';
import 'datatables.net-dt';
import store from '../../store';
import { format } from 'date-fns';
import { useToast } from 'vue-toast-notification';
import Loading from '../../components/Loading.vue';

onMounted(() => store.dispatch("GetCoupons"));
onMounted(() => $('#MyTable').DataTable());

const coupons = computed(() => store.state.coupons);

const modal = ref(false);
const type = ref('Create')
const toast = useToast();


const data = ref({
    id: "",
    coupon_code: Math.random().toString(36).slice(2),
    amount: "",
    amount_type: "",
    expiry_date: "",
    status: "",
});
const ToggleModal = () => {
    if (modal.value === true) {
        type.value = "Create";
        data.value = {};
    }
    modal.value = !modal.value;
}
const CreateCouponFunction = async () => {
    try {
        const response = await store.dispatch('CreateCouponAction', data.value);
        if (response.status === 200) {
            store.dispatch("GetCoupons");
            toast.success(response.message);
            ToggleModal();
            data.value = {};
        }
    } catch (error) {
        console.log(error)
    }
}

const UpdateCouponFunction = async () => {
    try {
        const response = await store.dispatch('UpdateCouponAction', data.value);
        if (response.status === 200) {
            store.dispatch("GetCoupons");
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
    const coupon = coupons.value.data.find((cop => cop.id === id));
    data.value.id = coupon.id;
    data.value.coupon_code = coupon.coupon_code;
    data.value.amount = coupon.amount;
    data.value.amount_type = coupon.amount_type;
    data.value.expiry_date = coupon.expiry_date;
    data.value.status = coupon.status;
    ToggleModal();


};

const DeleteCouponFunction = async (id) => {
    if (!confirm(`Are you sure you to delete ???`)) {
        return
    }
    try {
        const response = await store.dispatch('DeleteCouponAction', id);
        if (response.status === 200) {
            store.dispatch("GetCoupons");
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
                        <h4 class="box-title">Coupons</h4>

                        <div class="box-controls pull-right">
                            <button class="btn btn-primary  btn-rounded" style="margin-top: -5px;" type="button"
                                @click="ToggleModal">Create</button>

                            <div v-if="modal" class="modal fade show" style="display: block;">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 class="modal-title"> {{ type }} Coupon</h4>

                                            <button type="button" class="btn-close" @click="ToggleModal"></button>
                                        </div>
                                        <div class="modal-body">
                                            <pre></pre>
                                            <form v-if="type === 'Create'" @submit.prevent="CreateCouponFunction">
                                                <div class="row">
                                                    
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Coupon Code<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="coupon_code" class="form-control rounded" required v-model="data.coupon_code">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Amount<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="number" name="amount" class="form-control rounded" required v-model="data.amount">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Amount Type<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <select class="form-control rounded" name="amount_type" v-model="data.amount_type">
                                                                    <option value="Fixed">Fixed</option>
                                                                    <option value="Percentage">Percentage</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Expiry Date<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="date" name="expiry_date" class="form-control rounded" required v-model="data.expiry_date">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
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
                                                    <button :disabled="coupons.loading" type="submit"
                                                        class="btn btn-primary btn-rounded w-100 ">{{ coupons.loading ?
                                                            'Creating...' : 'Create' }}</button>
                                                </div>
                                            </form>
                                            <form v-else @submit.prevent="UpdateCouponFunction">
                                                <div class="row">
                                                    
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Coupon Code<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="text" name="coupon_code" class="form-control rounded" required v-model="data.coupon_code">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Amount<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="number" name="amount" class="form-control rounded" required v-model="data.amount">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Amount Type<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <select class="form-control rounded" name="amount_type" v-model="data.amount_type">
                                                                    <option value="Fixed">Fixed</option>
                                                                    <option value="Percentage">Percentage</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-6">
                                                        <div class="form-group">
                                                            <label>Expiry Date<span class="text-danger">*</span></label>
                                                            <div class="controls">
                                                                <input type="date" name="expiry_date" class="form-control rounded" required v-model="data.expiry_date">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
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
                                                    <button :disabled="coupons.loading" type="submit"
                                                        class="btn btn-primary btn-rounded w-100 ">{{ coupons.loading ?
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
                        <div v-if="coupons.loading"><Loading/></div>
                        <div v-else class="table-responsive">
                            <table id="MyTable" class="table table-hover table-striped " style="width:100%">
                                <thead>
                                    <tr>
                                        <th>Coupon Code</th>
                                        <th>Amount</th>
                                        <th>Amount Type</th>
                                        <th>Expiry Date</th>
                                        <th>Status</th>
                                        <th class="text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(coupon, index) in coupons.data" :key="index">
                                        <td>{{ coupon.coupon_code }}</td>
                                        <td>{{ coupon.amount }}</td>
                                        <td>{{ coupon.amount_type }}</td>
                                        <td><span class="text-muted"><i class="fa fa-clock"></i> {{ format(new
                                            Date(coupon.expiry_date), 'dd MMM yyyy') }}</span>
                                        </td>
                                        <td>
                                            <span v-if="coupon.status === 'Active'" class="badge badge-pill badge-success">{{coupon.status }}</span>
                                            <span v-else class="badge badge-pill badge-danger">{{coupon.status }}</span>
                                        </td>

                                        <td>
                                            <div class="btn-group text-center">
                                                <button @click="editItem(coupon.id)"
                                                    class="btn btn-primary btn-rounded btn-sm">Update</button>
                                                <button @click="DeleteCouponFunction(coupon.id)"
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