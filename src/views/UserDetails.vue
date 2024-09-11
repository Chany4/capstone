<template>
    <div>
      <div v-if="!user">
        <SpinnerComp />
      </div>
      <div v-else>
        <div class="row my-2">
          <div class="row center">
            <div class="card mt-5">
              <img :src="user.userProfile" class="card-img-top" />
              <div class="card-body">
                <div class="Username">
                  <h5 class="card-title">{{ user.userProfile }}</h5>
                  <h4>{{ user.emailAdd }}</h4>
                </div>
                <div>
                  <p class="card-text">{{ user.userRole }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SpinnerComp from "@/components/SpinnerComp.vue";
  import { useCookies } from 'vue3-cookies'; // Import the cookie utility
  const {cookies}  = useCookies()
  
  export default {
    components: {
      SpinnerComp
    },
    data() {
      return {
        loading: true,
        userInfo: cookies.get('userInfo')?.user || null // To hold the user info
      };
    },
    computed: {
      user() {
        return this.$store.state.user || this.userInfo; // Fetch user from store or fallback to userInfo
      }
    },
    methods: {
      getSingleUser() {
        try{
            const userID = cookies.get('userInfo').user.userID
            this.$store.dispatch('fetchSingleUser', userID)
        }catch(e){
            console.error(e.message);
            this.loading = false;
        }
        //   .try(() => {
        //     this.loading = false;
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //     this.loading = false;
        //   });
      },
      fetchUserInfoFromCookies() {
        const storedUserInfo = cookies.get('userInfo'); // Get userInfo from cookies
        if (storedUserInfo) {
          this.userInfo = storedUserInfo.user; // Assign user object from cookie
          this.$store.commit('setSingleUser', storedUserInfo.user); // Set user to store if needed
        }
      }
    },
    mounted() {
      this.fetchUserInfoFromCookies(); // Fetch the userInfo from cookies when the component mounts
      this.getSingleUser(); // Fetch the user from the store (if applicable)
    }
  };
  </script>
  
  <style></style>
  