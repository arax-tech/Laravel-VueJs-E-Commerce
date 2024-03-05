import axiosClient from "../axios";

/* ========================= */
//     Products Actions      //
/* ========================= */

export const GetProducts = async ({ commit }) => {
    commit('SetProducts', [true])
    try {
        const { data } = await axiosClient.get('/website/products');
        commit('SetProducts', [false, data.products])
        return data;
    } catch (error) {
        commit('SetProducts', [false])
        return error.response.data;
    }
}



export const GetProductDetails = async ({ commit }, id) => {
    try {
        const { data } = await axiosClient.get(`/website/product/${id}`);
        commit('GetProductDetails', data)
        return data;
    } catch (error) {
        return error.response.data;
    }
}