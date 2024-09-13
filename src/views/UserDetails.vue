<template>
  <div>
    <!-- Spinner Component displayed when user data is not available -->
    <div v-if="!user">
      <SpinnerComp />
    </div>

    <!-- User Profile Section -->
    <div v-else>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="card profile-card">
            <div class="card-img-wrapper">
              <img :src="user.userProfile" class="card-img-top profile-img" />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
              <h4 class="card-email">{{ user.emailAdd }}</h4>
              <p class="card-text">{{ user.userRole }}</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-4">
          <router-link to="/logout">
            <button id="log-in-button" class="btn btn-danger" @click="logOutUser">
              Log Out
            </button>
          </router-link>
          <button class="btn btn-primary ms-3" @click="showModal = true">
            Update My Information
          </button>
        </div>
      </div>
    </div>

    <!-- Update User Modal -->
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
/* Container to center the profile card */
.container {
  max-width: 1200px;
  margin: auto;
}

/* Styling for the card */
.profile-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

/* Styling for the image container */
.card-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 20px;
}

/* Profile image styling */
.profile-img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

/* Styling for the card body */
.card-body {
  padding: 20px;
  text-align: center;
}

/* Styling for title and email */
.card-title {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.card-email {
  margin-bottom: 15px;
  color: #555;
}

/* Button styling */
#log-in-button {
  background-color: #d9534f;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 5px;
}

#log-in-button:hover {
  background-color: #c9302c;
}

/* Additional button styling */
.btn-primary {
  background-color: #0275d8;
  border-color: #0275d8;
}

.btn-primary:hover {
  background-color: #025aa5;
  border-color: #024a87;
}
</style>
