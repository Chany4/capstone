<template>
  <div id="parallax m">
    <div class="img1">
      <div class="inner">
        <h1>Big Time</h1>
      </div>
    </div>

    <div class="home container-fluid">
      <div class="home-content row d-flex justify-content-around">
        <h2>Check Out our amazing Range of products</h2>
        <div class="col-md-4 productDisplay1 x">
          <div class="text">
            <span><strong>Tyres</strong></span>
          </div>
        </div>
        <div class="col-md-4 productDisplay2 x">
          <div class="text2">
            <span><strong>Engine Parts</strong></span>
          </div>
        </div>
        <div class="col-md-4 productDisplay3 x">
          <div class="text3">
            <span><strong>Tools</strong></span>
          </div>
        </div>
      </div>

      <div class="row c">
        <p>Banner</p>
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-12 row d-flex justify-content-center">
          <h2>Best Sellers</h2><br><br>
          <span>No one can beat our amazing prices</span>
        </div>
        <div class="col-md-3 y">heyo</div>
        <div class="col-md-3 y">heyo</div>
        <div class="col-md-3 y">heyo</div>
        <div class="col-md-3 y">heyo</div>
      </div>

      <div class="row">

      </div>
      <h2>
        Ready to Upgrade Your Ride? Click Below to Join the BigTime Revolution!
      </h2>
      <router-link to="/login"><button>Log in </button></router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
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

h2{
  font-weight: bolder;
  text-align: center;
  padding: 5%;
}

p {
  color: black;
  font: bolder;
}
span{
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

.text{
  color: white;
  font-size: 90px;
  color: white;
  text-shadow: 5px 6px 5px black;
  position: absolute;
  bottom: 2px;
  left: 0px;
}
.productDisplay1{
  background-image: url('https://chany4.github.io/capstone-images/products/tyres_and_rims/NISMO-LM-GT2-removebg-preview.png');
  background-position: center;

}

.text2{
  color: white;
  font-size: 50PX;
  color: white;
  text-shadow: 5px 6px 5px black;
  position: absolute;
  bottom: 2px;
  left: 0px;
}
.productDisplay2{
  background-image: url('https://chany4.github.io/capstone-images/products/electrical/ignition_system/injector_dynamics_honda.png');
  background-position: center;
  background-size: cover; /* This will make sure the image covers the entire element */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  

}

.text3{
  color: white;
  font-size: 70px;
  color: white;
  text-shadow: 5px 6px 5px black;
  position: absolute;
  top: 100px;
  left: 100px;
}
.productDisplay3{
  background-image: url('https://chany4.github.io/capstone-images/products/tools/tool%201.png');
  background-position: center;
  background-size: cover; /* This will make sure the image covers the entire element */
  background-repeat: no-repeat; /* Prevents the image from repeating */
}

</style>
