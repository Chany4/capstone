<template>
    <div class="footer-container">
      <div class="footerTop">
        <div class="row py-4 px-4">
          <div class="col col-4">
            <h4 id="h4-foooter">About BigTime</h4>
            <p id="p"><router-link class="nav-link" to="/about">Brand Story</router-link></p><br>
            <p id="p"><router-link class="nav-link" to="/home">Discounts</router-link></p>
          </div>
          <div class="col col-4">
            <h4 id="h4-foooter">Customer Service</h4><br>
            <p id="p"><router-link class="nav-link" to="/about">FAQ</router-link></p><br>
            <p id="p"><router-link class="nav-link" to="/home">Promotions</router-link></p><br>
            <p id="p"><router-link class="nav-link" to="/contact">Contact Us</router-link></p><br>
            <p id="p"><router-link class="nav-link" to="/home">Membership</router-link></p><br>
          </div>
          <div class="col col-4">
            <h4 id="h4-foooter">News</h4><br>
            <p id="p"><router-link class="nav-link" to="/home">News</router-link></p><br>
            <p id="p"><router-link class="nav-link" to="/home">Partnerships</router-link></p><br>
            <div class="social-icons" id="i">
              <i class="bi bi-facebook"></i>
              <i class="bi bi-instagram"></i>
              <i class="bi bi-pinterest"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-tiktok"></i>
            </div>
          </div>
        </div>
      </div>
  
      <div class="footerBottom py-3">
        <p class="lead text-center">
          BigTime &copy; <span>{{ cYear }}</span>
        </p>

      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FooterComp",
    data() {
      return {
        cYear: new Date().getUTCFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer-container {
    width: 100%;
    z-index: 6;
  }
  
  .footerTop {
    background-color: black;
    color: white;
    padding: 20px;
  }
  
  .footerBottom {
    background-color:#000;
    color: white;
  }
  
  .social-icons {
    display: flex;
    gap: 15px;
  }
  
  #p, h4 {
    text-align: start;
  }
  </style>
  