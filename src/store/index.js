import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
import IntExtSingle from '@/views/IntExtSingle.vue';
import { useCookies } from 'vue3-cookies'
import router from '@/router';
const {cookies} = useCookies()
import Swal from 'sweetalert2'
const apiURL = 'https://capstone-jm4p.onrender.com/'
// const apiURL = 'http://localhost:9001/'

const msg = 'Product not found'

// Should you reload the page after logging in
// applyToken(cookies.get('LegitUser')?.token)
export default createStore({
  state: {
    users: null,
    user:null,
    mech:null,
    mechSingle:null,
    intExt:null,
    IntExtSingle:null,
    carts:[],
    login: false,
    // cart:JSON.parse($cookies.get("cart")) || []
  },
  getters: {
  },
  mutations: {
    setUsers(state, payload){
      state.users = payload
    },
    setSingleUser(state, payload){
      state.user = payload
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
    },setCarts(state,value){
      state.carts = value
    },
    setLogin(state,data){
      state.login = data
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
        toast.error(`Ooops something went wrong`, {
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

      // delete works but doesn't show pop up message , only shows when page is refreshed 
      async deleteUser(context, id) {
        try {
            const response = await axios.delete(`${apiURL}bigTime/removeUser/${id}`);
            console.log(response.data); // Log the entire response data to inspect into structure
            const { message, err } = response.data;
            if (message) {
              console.log(message);
              context.commit('fetchUsers');
              Swal.fire({
                title: "Good job!",
                text: "User was deleted successfully!",
                icon: "success"
              });
            }else{
              console.log(err);
              
            }
        } catch (e) {
            toast.error(e.message, {
              autoClose: 2000,
              position: toast.POSITION.BOTTOM_CENTER
            });
        }
    },
    async updateUser(context, id) {
      console.log(id);
      
      try {
        const { message, err } = await (await axios.patch(`${apiURL}users/updateUser/${id.userID}`, id)).data
        if (message) {
          context.dispatch('fetchUsers')
        } else {
          toast.error(`${err}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
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

        
        async loginUser({commit}, currentUser) {
         
          try{
            console.log('yayo', currentUser);
            let {message, token, user} = await (await axios.post(`${apiURL}bigTime/login`, currentUser)).data
          console.log({message, token, user});
          cookies.set('userInfo', {message, token, user}) 
          commit('setSingleUser', user)
          if (user) {
            Swal.fire({
              icon: 'success',
              title: 'Login Successful!',
              text: message,
              showConfirmButton: true,
              timer: 1500 
            })
          }     
          router.push('/') 
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          // location.reload()

          commit('setLogin', true);
          }
          catch (error) {
            if (error.response && error.response.status === 401) {
              Swal.fire({
                icon: 'error',
                title: 'Login Failed!',
                text: 'Please enter correct credentials.',
                confirmButtonText: 'OK'
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Login Failed!',
                text: 'An unexpected error occurred. Please try again later.',
                confirmButtonText: 'OK'
              });
            }
          }
          
        },




        // async loginUser({commit}, info) {
         
        //   try{
        //     console.log('yayo', info);
        //     let data = await axios.post(`${apiURL}bigTime/login`, info)
        //   console.log(data);
        //   $cookies.set('token', data.token) 
        //   commit('setSingleUser', data)
        //   if (data.message) {
        //     toast("Login was success!", {
        //       "theme": "auto",
        //       "type": "default",
        //     "position": "top-center",
        //       "dangerouslyHTMLString": true
        //     })
        //   }     
        //   router.push('/') 
        //   // location.reload()
        //   }
        //   catch(error){
        //     // `Ooops there was an error with logging in `
        //     toast.error(error.message, {
        //       autoClose : 1000,
        //       position : 'bottom-center'
        //     })
      
            
        //   }
          
        // },

        // cart

        addToCart(state,cart){
          state.cart.push(cart);
        },
        removeFromCart(state,itemId){
          state
        },
        toCart({commit},game){
          commit('addToCart', game);
          $cookies.set("cart",JSON.stringify(this.state.cart));
        },







        // async getCart({commit},userID) {
        //   let {data} = await axios.get(carts+'/'+userID)
        //   console.log(data);
        //   commit('setCarts',data)
        //  },


// add to cart 
        // async addToCartMech({ commit }, mechanicalPartID) {
        //   // console.log('test');
          
        //   try {
        //     let { data } = await axios.post(`${apiURL}bigTime/addcartMech`, { id: mechanicalPartID });
        //     console.log('Added to cart: ', data);
        //     console.log('Mechanical Part ID:', mechanicalPartID);
        //   } catch (error) {
        //     console.error('Error adding to cart:', error);
        //   }
        // },

        // async deleteFromCart({commit},mechanicalPartID){
        //   try{
        //     let { data } = await axios.post(`${apiURL}bigTime/deleteFromCartMech`, { id: cart_id });
        //     console.log('Removed from cart: ', data);
        //     console.log('Mechanical Part ID:', mechanicalPartID);
        //   }
        //   catch(error){
        //     console.log(error);
        //   }
        // },

        // async purchas({commit},UserID) {
        //   let {data} = await axios.delete(`${apiURL}/bigTime//${id}`)
        //   // commit('setCart', data)
        //   console.log(data);
        //   Swal.fire({
        //     title: 'Purchase',
        //     text: `Thank you for your purchase`,
        //     icon: "success",
        //     timer:"1000"
    
          
          
        //   })
        //   commit('set',data)
        //   // window.location.reload()
        //  }


        // async addToCartIntExt({commit}, interiorExteriorID) {
        //   let {data} = await axios.post(`${apiURL}bigTime/cart2`, {id: interiorExteriorID})
        //   console.log(data);
        //   console.log(interiorExteriorID);
          
        // },


    },
  modules: {
  }
})


