<template>
  <div id="parallax m">
    <div class="img1">
      <div class="inner">
        <h1>Big Time</h1>
      </div>
    </div>

    <div class="home container-fluid">
      <router-link to="/products">
        <div class="home-content row d-flex justify-content-center">
        <h2>Check Out our amazing Range of products</h2>
        <div class="col-md-4 productDisplay1 x  mx-5">
          <div class="text">
            <span><strong>Tyres</strong></span>
          </div>
        </div>
        <div class="col-md-4 productDisplay2 x  mx-5">
          <div class="text2">
            <span><strong>Engine Parts</strong></span>
          </div>
        </div>
        <div class="col-md-4 productDisplay3 x  mx-5">
          <div class="text3">
            <span><strong>Tools</strong></span>
          </div>
        </div>
      </div>
      </router-link>

      <div class="row c">
        <img src="https://za.pinterest.com/pin/93309023523956157/" alt="">
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-12 row d-flex justify-content-center">
          <h2>Best Sellers</h2>
          <br /><br />
        </div>
        <div class="col-md-3 ">
          <div class="card a">
            <b></b>
            <div class="content">
              <p class="title">
                <router-link to="/products">View more</router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 ">
          <div class="card b">
            <b></b>
            <div class="content">
              <p class="title">
                <router-link to="/products">View more</router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 ">
          <div class="card cc">
            <b></b>
            <div class="content">
              <p class="title">
                <router-link to="/products">View more</router-link>
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3 ">
          <div class="card d">
            <b></b>
            <div class="content">
              <p class="title">
                <router-link to="/products">View more</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row"></div>
      <h2>
        Ready to Upgrade Your Ride?Join the BigTime Revolution!
      </h2>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
* {
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  box-sizing: border-box;
}
.parallax {
  object-fit: contain;
}
h1 {
  font-size: 100px;
  text-align: center;
  text-shadow: 5px 2px 1px black;
  font-weight: bolder;
  color: white;
}

h2 {
  font-weight: bolder;
  text-align: center;
  padding: 5%;
  font-family: "Orbitron", sans-serif;
  font-size: 550%;
}

p {
  color: black;
  font: bolder;
}
span {
  text-align: center;
  font-size: 109x;
}
.img1 {
  background: url("https://chany4.github.io/capstone-images/images/contact%20page/toyota-967011_1920.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.inner {
  padding: 15%;
}

.home {
  padding: 2%;
}

.x {
  padding: 2%;
  width: 430px;
  height: 400px;
  background-color: rgb(230, 230, 230);
  margin: 1%;
  border-radius: 5px;
  position: relative;
}
.x:hover {
  background-color: rgb(214, 91, 91);
  transition: 1s ease-in-out;
}
.y {
  padding: 2%;
  width: 270px;
  height: 200px;
  margin: 2%;
  background-color: green;
}
.z {
  background-color: grey;
}
.m {
  max-width: 100vw;
  overflow-x: hidden;
}
.c {
  background-color: grey;
}

/*Product Display  */

.text {
  color: white;
  font-size: 90px;
  color: white;
  text-shadow: 5px 6px 5px black;
  position: absolute;
  bottom: 2px;
  left: 0px;
}
.productDisplay1 {
  background-image: url("https://chany4.github.io/capstone-images/products/tyres_and_rims/NISMO-LM-GT2-removebg-preview.png");
  background-position: center;
}

.text2 {
  color: white;
  font-size: 50px;
  color: white;
  text-shadow: 5px 6px 5px black;
  position: absolute;
  bottom: 2px;
  left: 0px;
}
.productDisplay2 {
  background-image: url("https://chany4.github.io/capstone-images/products/electrical/ignition_system/injector_dynamics_honda.png");
  background-position: center;
  background-size: cover; /* This will make sure the image covers the entire element */
  background-repeat: no-repeat; /* Prevents the image from repeating */
}

.text3 {
  color: white;
  font-size: 70px;
  color: white;
  text-shadow: 5px 6px 5px black;
  position: absolute;
  top: 100px;
  left: 100px;
}
.productDisplay3 {
  background-image: url("https://chany4.github.io/capstone-images/products/tools/tool%201.png");
  background-position: center;
  background-size: cover; /* This will make sure the image covers the entire element */
  background-repeat: no-repeat; /* Prevents the image from repeating */
}

/* 🤣 */

.a {
  background-image: url('https://chany4.github.io/capstone-images/products/tyres_and_rims/s-l640-removebg-preview.png');
  width: 100%; /* Set width according to your layout */
  background-size: cover; /* or 'contain' depending on your needs */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the background image from repeating */
}
.b{
  background-image: url('https://chany4.github.io/capstone-images/products/battery/battery_nissan_turbo.jpg');
  width: 100%; /* Set width according to your layout */
  background-size: cover; /* or 'contain' depending on your needs */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the background image from repeating */
}
.cc{
  background-image: url('https://chany4.github.io/capstone-images/products/tyres_and_rims/s-l640-removebg-preview.png');
  width: 100%; /* Set width according to your layout */
  background-size: cover; /* or 'contain' depending on your needs */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the background image from repeating */
}
.d{
  background-image: url('https://chany4.github.io/capstone-images/products/tyres_and_rims/s-l640-removebg-preview.png');
  width: 100%; /* Set width according to your layout */
  background-size: cover; /* or 'contain' depending on your needs */
  background-position: center; /* Centers the image */
  background-repeat: no-repeat; /* Prevents the background image from repeating */
} 
.card {
  position: relative;
  width: 280px;
  height: 254px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.card b {
  position: absolute;
  inset: 6px;
  z-index: 2;
}

.card img {
  position: absolute;
  z-index: 3;
  scale: 0.8;
  opacity: 0.25;
  transition: 0.5s;
}

.card:hover img {
  scale: 0.5;
  opacity: 0.9;
  transform: translateY(-70px);
}

.card .content {
  position: absolute;
  z-index: 3;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0);
  transition: 0.5s;
}

.card:hover .content {
  transform: scale(1);
  bottom: 25px;
}

.content .title {
  position: relative;
  background-color: white;
  color: black;
  font-weight: 900;
  line-height: 1em;
  font-size: 1em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  padding: 2%;
}

.content .title span {
  font-weight: 300;
  font-size: 0.7em;
}






</style>
