<template>
  <div>
    <div v-if="!user">
      <SpinnerComp />
    </div>
    <div v-else>
      <div class="row my-2">
        <div class="row center">
          <div class="card mt-5">
            <div class="img">
              <img :src="user.userProfile" class="card-img-top" />
            </div>
            <div class="card-body">
              <div class="Username">
                <h5 class="card-title">{{ user.firstName }}</h5>
                <h5 class="card-title">{{ user.lastName }}</h5>
                <h4>{{ user.emailAdd }}</h4>
              </div>
              <div>
                <p class="card-text">{{ user.userRole }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <router-link to="/logout">
          <button id="log-in-button" class="mt-3" @click="logOutUser">
            Log Out
          </button>
        </router-link>
        <button class="btn btn-primary" @click="showModal = true">
          Update My Information
        </button>
      </div>
    </div>
    <updateUser 
      :user="user" 
      :isVisible="showModal" 
      @update="fetchUserInfoFromCookies"
      @close="showModal = false"
    />
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
import updateUser from '@/components/UserUpdateModal.vue'
import { useCookies } from 'vue3-cookies';

const { cookies } = useCookies();

export default {
  components: {
    SpinnerComp,
    updateUser
  },
  data() {
    return {
      loading: true,
      userInfo: cookies.get('userInfo')?.user || null,
      showModal: false
    };
  },
  computed: {
    user() {
      return this.$store.state.user || this.userInfo;
    }
  },
  methods: {
    getSingleUser() {
      try {
        const userID = cookies.get('userInfo').user.userID;
        this.$store.dispatch('fetchSingleUser', userID);
      } catch (e) {
        console.error(e.message);
        this.loading = false;
      }
    },
    fetchUserInfoFromCookies() {
      const storedUserInfo = cookies.get('userInfo');
      if (storedUserInfo) {
        this.userInfo = storedUserInfo.user;
        this.$store.commit('setSingleUser', storedUserInfo.user);
      }
    },
    logOutUser() {
      Swal.fire({
        title: "Logged Out! Refresh Page",
        text: "You have been logged out. Please refresh the page.",
        icon: "success",
        showConfirmButton: true,
      });
      this.$store.dispatch("logout");
    }
  },
  mounted() {
    this.fetchUserInfoFromCookies();
    this.getSingleUser();
  }
};
</script>

<style scoped>
.img {
  width: 300px;
  height: 400px;
}
.img > img {
  object-fit: contain;
}
</style>
