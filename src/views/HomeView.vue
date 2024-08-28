<template>
  <div class="container-fluid">
    <div class="row">
      <div class="x">
        <img src="https://chany4.github.io/capstone-images/images/home%20page/carousel_home.jpg" alt="homePage">
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="a">
          <img src="https://chany4.github.io/capstone-images/images/home%20page/home_pagecar.png" alt="">
        </div>
      </div>
      <div class="col-8">

      </div>
    </div>

  </div>
</template>

<script>
export default {
  // Your component logic here
}
</script>

<style scoped>
/* Apply a global reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box; /* Include padding and border in element's total width and height */
}

.container-fluid{
  overflow-x: unsetm; /* Hide horizontal overflow */
  background-color: black;
}

.x{
  width: 1700px;
  height: min-content;
}

.x> img {
  display: block; /* Remove any unwanted space below the image */
  height: 100%; /* Adjust height as needed */
  width: 100%; /* Ensure the image takes full viewport width */
  object-fit: contain; 
  object-position: center; /* Center the image */
}
.a{
  width: 100%;
  height: auto;
}
.a>img{
  width: 100%;
  height: 100%;
}
</style>
