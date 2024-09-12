import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify';
import "vue3-toastify/dist/index.css";
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
      console.log('fetching users');
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
      // single user
      async fetchSingleUser({commit},id){
        try{
        const results = await (await axios.get(`${apiURL}bigTime/getUser/${id}`)).data;
        commit('setSingleUser', results) 
        }catch(error){
          toast.error(error, {
            autoClose : 3000,
            position : 'bottom-center'
          })
        }
        
      },
      // add user
    async addUser({commit}, info) {
      console.log(info);
      try {
        const results = await (await axios.post(`${apiURL}bigTime/addUser`,info)).data;
        console.log(results);
        toast("Yayyy!You have signed in and added as user!", {
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
      async addUserAdmin({commit}, info) {
        console.log(info);
        try {
          const results = await (await axios.post(`${apiURL}bigTime/addUser`,info)).data;
          console.log(results);
          toast("User has been added successfully", {
            "theme": "auto",
            "type": "default",
            "dangerouslyHTMLString": true
          })
          location.reload()
          
        } catch (error) {
          toast.error(`Ooops something `, {
            autoClose : 3000,
            position : 'bottom-center'
  
          })
        }
        },

      // delete user
      // delete works but doesn't show pop up message , only shows when page is refreshed  --> ask matthew 
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
              location.reload()
            }else{
              alert('User is being deleted')
            }
        } catch (e) {
            toast.error(e.message, {
              autoClose: 2000,
              position: toast.POSITION.BOTTOM_CENTER
            });
        }
    },

    // update user 
    async updateUser(context, id) {
      console.log(id);
      try {
        const { message, err } = await (await axios.patch(`${apiURL}bigTime/updateUser/${id}`)).data
        if (message) {
          context.dispatch('fetchUsers')
          Swal.fire({
            title: "Good job!",
            text: "User was updated successfully!",
            icon: "success"
          });
          location.reload()
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

      // mechanical get all

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
      
      // fetch single mechanical
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

      // delete mechanical by ID
       // delete works but doesn't show pop up message , only shows when page is refreshed  --> ask matthew 
      async deleteMech(context, id) {
        try {
          const response = await axios.delete(`${apiURL}bigTime/mech/${id}`);
          console.log(response.data); // Log the entire response to inspect its structure
          const { message, err } = response.data;
      
          if (message) {
            console.log(message);
            context.dispatch('fetchMech'); // Correctly dispatch the fetchMech action
            Swal.fire({
              title: "Good job!",
              text: "Product was deleted successfully!",
              icon: "success"
            });
            location.reload()
          } else if (err) {
            console.log(err);
            Swal.fire({
              title: "Error!",
              text: err || "Something went wrong.",
              icon: "error"
            });
          }
        } catch (e) {
          Swal.fire({
            title: "Error!",
            text: e.message || "An unexpected error occurred.",
            icon: "error",
            timer: 2000
          });
        }
      },

      // add Mechanical

      async addMech({commit}, info) {
        console.log(info);
        try {
          const results = await (await axios.post(`${apiURL}bigTime/addMechanic`,info)).data;
          console.log(results);
          toast("Product was added", {
            "theme": "auto",
            "type": "default",
            "dangerouslyHTMLString": true
          });
          location.reload()
          
        } catch (error) {
          toast.error(`Ooops something wentt wrong `, {
            autoClose : 3000,
            position : 'bottom-center'
  
          })
        }
        },

        // update Mechanical

        async updateMech(context, id) {
          console.log(id);
          try {
            const { message, err } = await (await axios.patch(`${apiURL}bigTime/mech/${id}`)).data
            if (message) {
              context.dispatch('fetchMech')
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
            alert('wait a moment we are logging you in, this might take a while, if it takes longer than expected, reload the page and try again, if login failed the you have exceeded your maximum amount of connections')
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
          }else{
            alert('we are logging you in, this might take a while')
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

        logout(){
          alert('please refresh the page when redirected')
        },
      

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


    },
  modules: {
  }
})


