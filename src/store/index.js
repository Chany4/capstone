import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import IntExtSingle from '@/views/IntExtSingle.vue';
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
    intExt:null,
    IntExtSingle:null
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
    setIntExtSingle(state,payload){
      state.IntExtSingle= payload
    }

  },
  actions: {
    // users
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

      // mechanical

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

      // Interior and Exterior 

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
      },
      async fetchIntExtSingle({commit},id) {
        console.log('Fetching single interior or exterior part...');
        try {
          const results = await (await axios.get(`${apiURL}bigTime/getInteriorExterior/${id}`)).data;
          if (results) {
                  commit('setIntExtSingle', results);
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


    },
  modules: {
  }
})


