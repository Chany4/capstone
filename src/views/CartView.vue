<template>
  <div v-if="cartItems && cartItems.length">
    <div class="row" v-for="item in cartItem" :key="item.id">
      <div class="col-md-8 d-flex justify-content-center">
        <img :src="item.cover_image" alt="product Image">
        <strong>{{ item.partName }}</strong>
        <p class="mb-1">Quantity: {{ item.stock_quantity }}</p>
      </div>
      <button class="btn btn-primary w-100" @click="confirmDelete(item.id)">Delete</button>
      <button class="btn btn-primary w-100" @click="proceedToPurchase">Proceed To Purchase</button>

    </div>
  </div>
  <div v-else>
    <p>Your Cart is empty</p>
  </div>
</template>
<script setup>
import { onMounted,computed } from 'vue';
import {useStore} from 'vuex'
import {useCookies} from 'vue3-cookies'
// import Swal from 'sweetalert2'

const store = useStore();
const{cookies} = useCookies();

const cartItems = computed(() => store.state.cart)

// Loads cart items from cookies
const loadCartFromCookies = () => {
  const cartData = cookies.get('cart');
  if(cartData){
    try{
      const parsedCart = JSON.parse(cartData);
      store.commit('setCart', parsedCart); 
    }catch(error){
      console.error('Failed to Parse cart data from cookies', error);
      store.commit('setCart',[])
    }
  }else{
    store.commit('setCart',[])
  }
}
</script>
<style>
  
</style>









<!-- <template >
  <div>
    <h1>hello</h1>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  
</style> -->