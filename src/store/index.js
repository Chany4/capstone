import { createStore } from 'vuex'
import axios from 'axios'
// import { toast } from "vue3-toastify";
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
// import { useCookies } from 'vue-cookies'
// import router from '@/router';
const apiURL = 'https://capstone-jm4p.onrender.com/'


// Should you reload the page after logging in
// applyToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
  },
  getters: {
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload
    }

  },
  actions: {
    async fetchUsers(context) {
      console.log('here');
      try {
        const results = await (await axios.get(`${apiURL}bigTime/getUsers`)).data;
        context.commit('setUsers', results) 
        console.log(results);
        
      } catch (error) {
        toast.error(`Ooops something `, {
          autoClose : 3000,
          position : 'bottom-center'

        })
      }
      },
    // async fetchUsers(context) {
    //   console.log('here');
    //   try {
    //     const results = await (await axios.get(`${apiURL}bigTime/getUsers`)).data;
    //     context.commit('setUsers', results) 
    //   } catch (error) {
    //     toast.error(`Ooops something `, {
    //       autoClose : 3000,
    //       position : 'bottom-center'

    //     })
    //   }
    //   }




    },
  modules: {
  }
})
