import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
// import { useCookies } from 'vue-cookies'
// import router from '@/router';
const apiURL = 'https://capstone-jm4p.onrender.com/'
const msg = 'Product not found'

// Should you reload the page after logging in
// applyToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
    mech:null,
    mechSingle:null,
    intExt:null
  },
  getters: {
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload
    },
    setMech(state, payload){
      state.mech = payload
    },
    setMechSingle(state,payload){
      state.mechSingle = payload
    },
    setIntExt(state, payload){
      state.intExt = payload
    },


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
    async fetchMech(context) {
      console.log('hii');
      try {
        const results = await (await axios.get(`${apiURL}bigTime/getMechanics`)).data;
        context.commit('setMech', results) 
        console.log(results);
      } catch (error) {
        toast.error(`Ooops something `, {
          autoClose : 3000,
          position : 'bottom-center'

        })
      }
      },
    async fetchMechSingle({commit},id) {
      console.log('Fetching single mechanical part...');
      try {
        const results = await (await axios.get(`${apiURL}bigTime/getMechanic/${id}`)).data;
        if (results) {
                commit('setMechSingle', results);
                console.log(results);
              } else {
                toast.error(`${msg}`, {
                  autoClose: 2000,  
                  position: toast.POSITION.BOTTOM_CENTER
                })
              }
      } catch (error) {
        toast.error(`Ooops something `, {
          autoClose : 1000,
          position : 'bottom-center'

        })
      }
      },
    async fetchIntExt(context) {
      console.log('weow');
      try {
        const results = await (await axios.get(`${apiURL}bigTime/getInteriorExterior`)).data;
        context.commit('setIntExt', results) 
        console.log(results);
      } catch (error) {
        toast.error(`Ooops something `, {
          autoClose : 3000,
          position : 'bottom-center'

        })
      }
      }


    },
  modules: {
  }
})





// code 
// actions: {
//   async fetchMech({ commit }, id) {
//     // Fetch from your API or backend
//     const response = await axios.get(`/api/mechanical/${id}`);
//     commit('SET_MECH', response.data);
//   }
// }

