import axiosClient from "../axios";

/* ========================= */
//      Auth Actions         //
/* ========================= */
export const GetAuthUser = async ({ commit }, data) => {
    commit('SetAuthUser', [true])
    try {
        const { data } = await axiosClient.get('/admin/profile');
        commit('SetAuthUser', [false, data.user])
    } catch (error) {
        commit('SetAuthUser', [false])
        return error.response.data;
    }
}
export const LoginAction = async ({ commit }, formData) => {
    commit('SetAuthUser', [true])
    try {
        const { data } = await axiosClient.post('/auth/login', formData);
        commit('SetAuthUser', [false, data.user])
        commit('SetToken', data.token)
        return data;
    } catch (error) {
        commit('SetAuthUser', [false])
        return error.response.data;
    }
}
export const LogoutAction = async ({ commit }) => {
    try {
        const { data } = await axiosClient.get('/auth/logout');
        commit('SetToken', null)
        return data;
    } catch (error) {
        return error.response.data;
    }
}
export const UpdateProfileAction = async ({ commit }, formData) => {
    commit('SetAuthUser', [true])
    try {
        const { data } = await axiosClient.post('/admin/update/profile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        commit('SetAuthUser', [false, data.user])
        return data;
    } catch (error) {
        commit('SetAuthUser', [false])
        return error.response.data;
    }
}
export const UpdatePasswordAction = async ({ commit }, formData) => {
    commit('SetAuthUser', [true])
    try {
        const { data } = await axiosClient.post('/admin/update/password', formData);
        commit('SetAuthUser', [false])
        return data;
    } catch (error) {
        commit('SetAuthUser', [false])
        return error.response.data;
    }
}





/* ========================= */
//     Dashboard Actions     //
/* ========================= */
export const GetDashboard = async ({ commit }) => {
    commit('SetDashboard', [true])
    try {
        const { data } = await axiosClient.get('/admin/dashboard');
        commit('SetDashboard', [false, data])
        return data;
    } catch (error) {
        commit('SetDashboard', [false])
        return error.response.data;

    }
}






/* ========================= */
//       Users Actions       //
/* ========================= */
export const GetUsers = async ({ commit }) => {
    commit('SetUsers', [true])
    try {
        const { data } = await axiosClient.get('/admin/users');
        commit('SetUsers', [false, data])
        return data;
    } catch (error) {
        commit('SetUsers', [false])
        return error.response.data;
    }
}







/* ========================= */
//  Categories CRUD Actions  //
/* ========================= */
export const GetCategories = async ({ commit }) => {
    commit('SetCategories', [true])
    try {
        const { data } = await axiosClient.get('/admin/category');
        commit('SetCategories', [false, data])
        return data;
    } catch (error) {
        commit('SetCategories', [false])
        return error.response.data;
    }
}
export const CreateCategoryAction = async ({ commit }, formData) => {
    commit('SetCategories', [true])
    try {
        const { data } = await axiosClient.post('/admin/category/store', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        commit('SetCategories', [false, data])
        return data;
    } catch (error) {
        commit('SetCategories', [false])
        return error.response.data;
    }
}
export const UpdateCategoryAction = async ({ commit }, data1) => {
    commit('SetCategories', [true])
    const formData = new FormData();
    formData.append('parent_id', data1.parent_id);
    formData.append('name', data1.name);
    formData.append('slug', data1.slug);
    formData.append('status', data1.status);
    formData.append('image', data1.image ? data1.image : null);

    try {
        const { data } = await axiosClient.post(`/admin/category/update/${data1.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        commit('SetCategories', [false, data])
        return data;
    } catch (error) {
        commit('SetCategories', [false])
        return error.response.data;
    }
}
export const DeleteCategroyAction = async ({ commit }, id) => {
    commit('SetCategories', [true])
    try {
        const { data } = await axiosClient.get(`/admin/category/delete/${id}`);
        commit('SetCategories', [false])
        return data;
    } catch (error) {
        commit('SetCategories', [false])
        return error.response.data;
    }
}







/* ========================= */
//   Coupons CRUD Actions    //
/* ========================= */
export const GetCoupons = async ({ commit }) => {
    commit('SetCoupons', [true])
    try {
        const { data } = await axiosClient.get('/admin/coupon');
        commit('SetCoupons', [false, data.coupons])
        return data;
    } catch (error) {
        commit('SetCoupons', [false])
        return error.response.data;
    }
}
export const CreateCouponAction = async ({ commit }, formData) => {
    commit('SetCoupons', [true])
    try {
        const { data } = await axiosClient.post('/admin/coupon/store', formData);
        commit('SetCoupons', [false])
        return data;
    } catch (error) {
        commit('SetCoupons', [false])
        return error.response.data;
    }
}
export const UpdateCouponAction = async ({ commit }, formData) => {
    commit('SetCoupons', [true])
    try {
        const { data } = await axiosClient.post(`/admin/coupon/update/${formData.id}`, formData);
        commit('SetCoupons', [false])
        return data;
    } catch (error) {
        commit('SetCoupons', [false])
        return error.response.data;
    }
}
export const DeleteCouponAction = async ({ commit }, id) => {
    commit('SetCoupons', [true])
    try {
        const { data } = await axiosClient.get(`/admin/coupon/delete/${id}`);
        commit('SetCoupons', [false])
        return data;
    } catch (error) {
        commit('SetCoupons', [false])
        return error.response.data;
    }
}







/* ========================= */
//   Products CRUD Actions   //
/* ========================= */

export const GetProducts = async ({ commit }) => {
    commit('SetProducts', [true])
    try {
        const { data } = await axiosClient.get('/admin/product');
        commit('SetProducts', [false, data.products])
        return data;
    } catch (error) {
        commit('SetProducts', [false])
        return error.response.data;
    }
}
export const CreateProductAction = async ({ commit }, formData) => {
    commit('SetProducts', [true])
    try {
        const { data } = await axiosClient.post('/admin/product/store', formData);
        commit('SetProducts', [false])
        return data;
    } catch (error) {
        commit('SetProducts', [false])
        return error.response.data;
    }
}
export const UpdateProductAction = async ({ commit }, formData) => {
    commit('SetProducts', [true])
    try {
        const { data } = await axiosClient.post(`/admin/product/update/${formData.id}`, formData);
        commit('SetProducts', [false])
        return data;
    } catch (error) {
        commit('SetProducts', [false])
        return error.response.data;
    }
}
export const DeleteProductAction = async ({ commit }, id) => {
    commit('SetProducts', [true])
    try {
        const { data } = await axiosClient.get(`/admin/product/delete/${id}`);
        commit('SetProducts', [false])
        return data;
    } catch (error) {
        commit('SetProducts', [false])
        return error.response.data;
    }
}







/* ================================ */
// Product Attributes CRUD Actions  //
/* ================================ */

export const GetProductAttributes = async ({ commit }, id) => {
    commit('SetProductAttributes', [true])
    try {
        const { data } = await axiosClient.get(`/admin/product/attribute/single/${id}`);
        commit('SetProductAttributes', [false, data.product_attributes])
        return data;
    } catch (error) {
        commit('SetProductAttributes', [false])
        return error.response.data;
    }
}
export const CreateProductAttribueAction = async ({ commit }, fdata) => {
    commit('SetProductAttributes', [true])
    const formData = new FormData();
    fdata?.map(attrib => {
        formData.append('product_id', attrib.product_id);
        formData.append('color[]', attrib.color);
        formData.append('size[]', attrib.size);
        formData.append('price[]', attrib.price);
        formData.append('stock[]', attrib.stock);
        formData.append('image[]', attrib.image ? attrib.image : null);
    });

    try {
        const { data } = await axiosClient.post(`admin/product/attribute/store`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        commit('SetProductAttributes', [false])
        return data;
    } catch (error) {
        commit('SetProductAttributes', [false])
        return error.response.data;
    }
}
export const UpdateProductAttribueAction = async ({ commit }, fdata) => {
    commit('SetProductAttributes', [true])

    const formData = new FormData();
    formData.append('color', fdata.color);
    formData.append('size', fdata.size);
    formData.append('price', fdata.price);
    formData.append('stock', fdata.stock);
    formData.append('image', fdata.image ? fdata.image : null);

    try {
        const { data } = await axiosClient.post(`/admin/product/attribute/update/${fdata.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        commit('SetProductAttributes', [false])
        return data;
    } catch (error) {
        commit('SetProductAttributes', [false])
        return error.response.data;
    }
}
export const DeleteProductAttribueAction = async ({ commit }, id) => {
    commit('SetProductAttributes', [true])
    try {
        const { data } = await axiosClient.get(`/admin/product/attribute/delete/${id}`);
        commit('SetProductAttributes', [false])
        return data;
    } catch (error) {
        commit('SetProductAttributes', [false])
        return error.response.data;
    }
}