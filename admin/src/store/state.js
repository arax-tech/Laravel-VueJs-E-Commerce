export default {
    auth: {
        token: localStorage.getItem('token'),
        user: {},
        loading: false
    },

    dashboard: {
        loading: false,
        data: {},
    },
    users: {
        loading: false,
        data: []
    },
    categories: {
        loading: false,
        data: []
    },
    coupons: {
        loading: false,
        data: []
    },
    products: {
        loading: false,
        data: [],
    },
    productAttributes: {
        loading: false,
        data: [],
    },
}
