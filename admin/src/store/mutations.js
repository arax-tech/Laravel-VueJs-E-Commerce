
export const SetAuthUser = (state, [loading, data = null]) => {
    if (data) {
        state.auth = {
            ...state.auth,
            user: data,
        }
    }
    state.auth.loading = loading;
}
export const SetToken = (state, token) => {
    localStorage.setItem('token', token);
    state.auth.token = token;
}
export const SetDashboard = (state, [loading, data = null]) => {
    // state.dashboard = dashboard;
    if (data) {
        state.dashboard = {
            ...state.dashboard,
            data: data,
        }
    }
    state.dashboard.loading = loading;
}
export const SetUsers = (state, [loading, data = null]) => {
    if (data) {
        state.users = {
            ...state.users,
            data: data,
        }
    }
    state.users.loading = loading;
}
export const SetCategories = (state, [loading, data = null]) => {
    if (data) {
        state.categories = {
            ...state.categories,
            data: data,
        }
    }
    state.categories.loading = loading;
}
export const SetCoupons = (state, [loading, data = null]) => {
    if (data) {
        state.coupons = {
            ...state.coupons,
            data: data,
        }
    }
    state.coupons.loading = loading;
}
export const SetProducts = (state, [loading, data = null]) => {
    if (data) {
        state.products = {
            ...state.products,
            data: data,
        }
    }
    state.products.loading = loading;
}
export const SetProductAttributes = (state, [loading, data = null]) => {
    if (data) {
        state.productAttributes = {
            ...state.productAttributes,
            data: data,
        }
    }
    state.productAttributes.loading = loading;
}

