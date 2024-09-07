<template>
  <div id="parallax m">
    <div class="img1">
      <div class="inner">
        <h1>Big Time</h1>
      </div>
    </div>

    <div class="home container-fluid">
      <div class="home-content row d-flex justify-content-around">
        <div class="col-md-4 x">product display</div>
        <div class="col-md-4 x">product display</div>
        <div class="col-md-4 x">product display</div>
      </div>

      <div class="row c">
      <p>Banner</p>
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-12 row d-flex justify-content-center">
          <h2>Best Sellers</h2>
        </div>
        <div class="col-md-3 y">heyo</div>
        <div class="col-md-3 y">heyo</div>
        <div class="col-md-3 y">heyo</div>
        <div class="col-md-3 y">heyo</div>
      </div>
      <h2>Ready to Upgrade Your Ride? Click Below to Join the BigTime Revolution!</h2>
      <router-link to="/login"><button>hiii</button></router-link>

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
.parallax{
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
  text-align: center;
}
p{
  color: black;
  font: bolder;
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

.home{
 padding:2%;
}

.x{
  padding: 2% ;
  width: 350px;
  height: 250px;
  background-color: red;
  margin: 1%;
}
.y{
  padding: 2%;
  width: 270px;
  height: 200px;
  margin: 2%;
  background-color: green;
}
.z{
  background-color: grey;
}
.m{
  max-width: 100vw;
  overflow-x: hidden;
}
.c{
  background-color: grey;
}
/*  */

</style>
