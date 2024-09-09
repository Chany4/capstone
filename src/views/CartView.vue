<template>
    <div class="container">
      <h1 class="text-center my-4">Your Cart</h1>
  
      <!-- Check if the cart is empty -->
      <div v-if="cartItems.length === 0" class="text-center">
        <p>Your cart is empty</p>
        <router-link to="/products" class="btn btn-primary">Continue Shopping</router-link>
      </div>
  
      <!-- Display cart items if not empty -->
      <div v-else>
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartItems" :key="item.id">
              <td>
                <div class="d-flex align-items-center">
                  <img :src="item.imageURL" alt="Product Image" class="img-thumbnail" width="50" />
                  <span class="ms-3">{{ item.name }}</span>
                </div>
              </td>
              <td>{{ item.quantity }}</td>
              <td>{{ formatPrice(item.price) }}</td>
              <td>{{ formatPrice(item.price * item.quantity) }}</td>
              <td>
                <button @click="removeFromCart(item.id)" class="btn btn-danger btn-sm">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        </table>
  
        <!-- Display the total price -->
        <div class="d-flex justify-content-end">
          <h3>Total: {{ formatPrice(totalPrice) }}</h3>
        </div>
  
        <!-- Checkout button -->
        <div class="text-end mt-4">
          <button @click="checkout" class="btn btn-success">Checkout</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cartItems() {
        // Assuming you store cart items in Vuex state
        return this.$store.state.cart;
      },
      totalPrice() {
        return this.cartItems.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0);
      }
    },
    methods: {
      removeFromCart(itemId) {
        this.$store.dispatch('removeFromCart', itemId);
      },
      formatPrice(price) {
        return `$${price.toFixed(2)}`;
      },
      checkout() {
        console.log('Proceeding to checkout...');
        // You can navigate to the checkout page or trigger any other functionality here
      }
    }
  };
  </script>
  
  <style scoped>
  .table {
    margin-top: 2rem;
  }
  </style>
  