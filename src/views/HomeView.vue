<template lang="">
  <div class="parallax">
    
    <div class="bg"></div>
    <div class="text"><h1>BIG TIME</h1></div>

    <img src="https://chany4.github.io/capstone-images/images/parallax/purpleLeft_lightning-removebg-preview.png" class="lightning_Right">

    <img src="https://chany4.github.io/capstone-images/images/parallax/purpleRight_lightning-removebg-preview.png" class="lightning_Left">

    <img src="https://chany4.github.io/capstone-images/images/parallax/download__14_-removebg-preview.png" class="car_middle">

    <img src="https://chany4.github.io/capstone-images/images/parallax/Black_Smoke_Wallpaper_-_Phone_Background-removebg-preview.png" class="black_smoke">
  </div>

  <div id="white">
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nam vitae inventore dolores officia modi cum, cumque sit nemo corrupti, ex maxime quo, explicabo dolorem optio! Iste numquam blanditiis ipsa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore vel sapiente perferendis amet voluptates tenetur itaque quae, aperiam eos voluptate delectus sint nesciunt ratione, libero, impedit asperiores quod maiores ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. A repudiandae quo autem? Animi quam dolor quaerat quod voluptate nihil sapiente libero delectus, voluptates repudiandae consequatur magni! In illo sunt impedit?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui doloremque aut autem obcaecati, nemo corporis corrupti sed suscipit voluptas, ratione consequatur? Asperiores voluptates optio adipisci quos, provident repudiandae mollitia veritatis.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus nam vitae inventore dolores officia modi cum, cumque sit nemo corrupti, ex maxime quo, explicabo dolorem optio! Iste numquam blanditiis ipsa. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore vel sapiente perferendis amet voluptates tenetur itaque quae, aperiam eos voluptate delectus sint nesciunt ratione, libero, impedit asperiores quod maiores ex! Lorem ipsum, dolor sit amet consectetur adipisicing elit. A repudiandae quo autem? Animi quam dolor quaerat quod voluptate nihil sapiente libero delectus, voluptates repudiandae consequatur magni! In illo sunt impedit?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui doloremque aut autem obcaecati, nemo corporis corrupti sed suscipit voluptas, ratione consequatur? Asperiores voluptates optio adipisci quos, provident repudiandae mollitia veritatis
      </p>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#white{
background-color: aliceblue;
}
.bg{
  width: 100vw;
  height: 100vh;
  background-color: black;
  position: absolute;
  z-index: -4 ;
}
div p{
  z-index: 10;
}
h1{
  color: white;
  text-align: center;
}
  .parallax{
    /* position: relative;
    z-index: 0; */
    min-height: 75vh;
    display: grid;
    grid-template-areas: "stack";
  }

  .parallax > * {
    grid-area: stack;
    animation: parallax linear 500ms;
    animation-timeline: scroll();
  }

  .parallax > img{
    width: 100%;
  }
  .black_smoke{
    position: absolute;
    top: 100px;
    opacity: 20%;
    z-index: -3;
  }
  .lightning_Left{
    position: absolute;
    top: 10px;
    z-index: -2;
  }
  .lightning_Right{
    position: absolute;
    top: 10px;
    z-index: -2;
  }
  .car_middle{
    position: absolute;
    z-index: -1;
  }

  @keyframes parallax{
    to{
      transform: translateY(calc(var(--parallax-speed)*(200px)));
    }
  }
</style>
