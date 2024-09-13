<template>
    <nav class="navbar navbar-expand-lg bg-body sticky-top">
      <div class="container-fluid ">
        <router-link class="navbar-brand" to="/">
          <!-- <img src="" loading="lazy" alt="logo"> -->
           <h4>Big Time</h4>
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse bg-white" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-link" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" exact-active-class="active-link" to="/cart"><i class="bi bi-cart"></i></router-link>
            </li>
            <ul class="navbar-nav" v-if="user">
              <li class="nav-item" v-if="isUser = !isUser">
                <router-link class="nav-link" exact-active-class="active-link" to="/admin"><i class="bi bi-person-check"></i></router-link>
              </li>
              <li class="nav-item" v-else>
                <router-link class="nav-link" exact-active-class="active-link" to="/user"><i class="bi bi-person-circle"></i></router-link>
              </li>
            </ul>
            <ul class="navbar-nav" v-else>
              <li class="nav-item">
                <router-link class="nav-link" exact-active-class="active-link" to="/login">Login</router-link>
              </li>
              
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  <script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex'; 
  import { useCookies } from 'vue3-cookies'
  const {cookies} = useCookies()
  const store = useStore()
  const user = computed(() => store.state?.user || cookies.get('userInfo')?.user)
  const isUser = computed(()=> user?.value.userRole?.toLowerCase() == 'user' )  
console.log(isUser);

</script>
  <style scoped>
  nav{
    background-color: #3333334f;
  }
  .container-fluid {
    height: 80px;
  }
  
  .navbar-brand img {
    height: 50px;
    object-fit: cover;
  }
  
  .navbar-nav .nav-link {
    font-size: 1rem;
    color: #333;
    padding: 15px 20px;
  }
  
  .navbar-nav .nav-link:hover,
  .navbar-nav .nav-link.active-link {
    color: black; /* Highlight color for active  */
    font: bolder;
  }
  
  .navbar-nav .nav-link.active-link {
    font-weight: bold;
  }
  
  /* .navbar-toggler {
    border: none;
  } */
  </style>
  