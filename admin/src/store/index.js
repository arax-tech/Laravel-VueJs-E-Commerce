import { createStore } from "vuex";
import state from './state'
import * as actions from './actions'
import * as mutations from './mutations'

const store = createStore({
    state,
    getters: {},
    actions,
    mutations,
})



const storedState = localStorage.getItem('Vue E-Commerce');
if (storedState) {
    store.replaceState(JSON.parse(storedState));
}

store.subscribe((mutation, state) => {
    localStorage.setItem('Vue E-Commerce', JSON.stringify(state));
});

export default store;
