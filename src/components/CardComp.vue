<!-- 
<template>
    <div class="card card-hover">
        <div class="card-header">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "CardComp"
  }
  </script>
  
  <style scoped>
  .card {
    width: 18rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  /* Hover up and box shadow effect */
  .card-hover:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  </style>
 -->

 <template>
  <div>
    <div class="card">
      <!-- Card Header Slot -->
      <slot name="cardHeader" class="heading"></slot>
      <!-- Card Body Slot -->
      <slot name="cardBody" class="para"></slot>
      <div class="overlay"></div>
      <!-- Card Button Slot -->
      <div class="card-btn">
        <slot name="cardButton"></slot>
      </div>
      <div class="card-btn2">
        <slot name="cardButton2"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
/* From Uiverse.io by gharsh11032000 */
.card {
  position: relative;
  width: 100%;
  height: 100%;
  background-color:white;
  border-radius: 10px;
  display: flex;
  padding: 10px 30px;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-right: 32px;
}

.card:hover{
  scale: 1.028;
  transition: 0.34s ease-in;
}

.heading {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
}

.para {
  text-align: center;
  color: #ffffff;
  opacity: 0.7;
  line-height: 1.4;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.6);
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.card:hover .overlay {
  opacity: 1;
  pointer-events: auto;
}

.card .card-btn {
  position: absolute;
  top: 50%;
  right: -10%;
  font-weight: 400;
  padding: 10px 20px;
  font-size: 16px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  border: none;
  opacity: 0;
  scale: 0;
  transform-origin: 0 0;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card .card-btn2 {
  position: absolute;
  top: 50%;
  left: 27%;
  font-weight: 400;
  padding: 10px 20px;
  font-size: 16px;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 999;
  border: none;
  opacity: 0;
  scale: 0;
  transform-origin: 0 0;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.9s cubic-bezier(0.23, 1, 0.32, 1);
}

.card:hover .card-btn {
  opacity: 1;
  scale: 1;
}

.card:hover .card-btn2{
  opacity: 1;
  scale: 1;
}

.card .card-btn:hover {
  box-shadow: 0 0 0px 5px rgba(0, 0, 0, 0.3);
}

.card .card-btn2:hover {
  box-shadow: 0 0 0px 5px rgba(0, 0, 0, 0.3);
}

.card .card-btn2:active {
  scale: 0.95;
}

.overlay::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100%;
  height: 100%;
  background-image: linear-gradient(-45deg, #f89b2980 0%, #ff0f7b80 100%);
  transition: transform 0.5s ease;
}

.card:hover .overlay::after {
  transform: translate(-50%, -50%) scale(2);
}
</style>



