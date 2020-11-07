import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        sessionid: '',
        uid: '',
        user: null,
        isLogin:false
    },
    getters: {
        getUser: state => state,
    },
    mutations: {
        set_session_data(state, data) {
            state.sessionid = data.sessionid;
            state.uid = data.uid;
            state.user = data.user;
            state.isLogin = !state.isLogin;
        }
    }
});

export default store;

    
