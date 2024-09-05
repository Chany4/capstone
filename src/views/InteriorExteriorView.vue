<template>
  <div>
    <h1>Products</h1>
    <div class="container">
      <!-- Show Spinner while loading -->
      <SpinnerComp v-if="loading" />

      <!-- Display Product Cards once data is loaded -->
      <div v-else>
        <!-- Display Interior/Exterior Parts -->
        <h1>Interior and Exterior Parts</h1>
        <div class="row">
          <div
            class="col-md-3 mb-4"
            v-for="intExt in $store.state.intExt"
            :key="intExt.interiorExteriorID"
          >
            <Card>
              <template #cardHeader>
                <img
                  :src="intExt.imageURL"
                  alt="Product Image"
                  class="img-fluid"
                />
              </template>
              <template #cardBody>
                <p>{{ intExt.name }}</p>
                <p>Price: {{ intExt.price }}</p>
                <p>Stock Quantity: {{ intExt.stockQuantity }}</p>
              </template>
              <template #cardButton>
                <div class="d-flex justify-content-between">
                  <button @click="purchase" id="black">Purchase</button>
                </div>
              </template>
              <template #cardButton2>
                <div class="d-flex justify-content-between">
                  <button @click="View" id="black">View more</button>
                </div>
              </template>
            </Card>
          </div>
        </div>

        <button type="button" class="btn btn-primary">
          <router-link to="/products" class="text-decoration-none text-white"
            >Back</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import SpinnerComp from "@/components/SpinnerComp.vue";
import Card from "@/components/CardComp.vue";
import { ref, onMounted } from "vue";
import store from "@/store";

const loading = ref(true);

const purchase = () => {
  console.log("Purchase clicked");
};

const View = () => {
  console.log("View more clicked");
};

onMounted(() => {
  store.dispatch("fetchIntExt").then(() => {
    loading.value = false;
  });
});
</script>

<style scoped>
#black {
  color: black;
  border: none;
  background-color: white;
}
h1 {
  text-align: center;
}
</style>
