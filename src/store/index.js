import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import IntExtSingle from '@/views/IntExtSingle.vue';
import { useCookies } from 'vue-cookies'
import router from '@/router';
// const apiURL = 'https://capstone-jm4p.onrender.com/'
const apiURL = 'http://localhost:9001/'

const msg = 'Product not found'

// Should you reload the page after logging in
// applyToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
    mech:null,
    mechSingle:null,
    intExt:null,
    IntExtSingle:null,
    cart:[]
  },
  getters: {
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload
    },
    setSingleUser(state, payload){
      state.users = payload
    },
    setAddUser(state, payload){
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
    },
    ADD_TO_CART(state, item) {
      const cartItem = state.cart.find((cartItem) => cartItem.id === item.id);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, itemId) {
      state.cart = state.cart.filter(item => item.id !== itemId);
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
      
    async addUser({commit}, info) {
      console.log(info);
      try {
        const results = await (await axios.post(`${apiURL}bigTime/addUser`,info)).data;
        console.log(results);
        toast("Yayyy!You have signed in!", {
          "theme": "auto",
          "type": "default",
          "dangerouslyHTMLString": true
        })
        
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
          toast.error(`Ooops something went wrong`, {
            autoClose : 1000,
            position : 'bottom-center'
  
          })
        }
        },

        // login
        
        async loginUser({commit}, info) {
         
          try{
            console.log('yayo', info);
            let data = await axios.post(`${apiURL}bigTime/login`, info)
          console.log(data);
          $cookies.set('token', data.token) 
          if (data.message) {
            toast("Login was success!", {
              "theme": "auto",
              "type": "default",
            "position": "top-center",
              "dangerouslyHTMLString": true
            })
          }     
          router.push('/') 
          // location.reload()
          }
          catch(error){
            // `Ooops there was an error with logging in `
            toast.error(error.message, {
              autoClose : 1000,
              position : 'bottom-center'
            })
      
            
          }
          
        },

        // cart
        
        async addToCartMech({ commit }, mechanicalPartID) {
          // console.log('test');
          
          try {
            let { data } = await axios.post(`${apiURL}bigTime/cartMech`, { id: mechanicalPartID });
            console.log('Added to cart: ', data);
            console.log('Mechanical Part ID:', mechanicalPartID);
          } catch (error) {
            console.error('Error adding to cart:', error);
          }
        },
        async addToCartIntExt({commit}, interiorExteriorID) {
          let {data} = await axios.post(`${apiURL}bigTime/cart2`, {id: interiorExteriorID})
          console.log(data);
          console.log(interiorExteriorID);
          
        },


    },
  modules: {
  }
})


