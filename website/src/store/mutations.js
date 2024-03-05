export const SetProducts = (state, [loading, data = null]) => {
    if (data) {
        state.products = {
            ...state.products,
            data: data,
        }
    }
    state.products.loading = loading;
}

export const GetProductDetails = (state, data) => {;
    state.productDetails = data;
}
