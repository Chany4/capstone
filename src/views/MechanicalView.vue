<template>
  <div class="n">
    <h1>Products</h1>
    <div class="container">
      <!-- Show Spinner while loading -->
      <SpinnerComp v-if="loading" class="spinner"/>

      <!-- Display Product Cards once data is loaded -->
      <div v-else>
        <!-- Display Mechanical Parts -->
        <h1>Mechanical Parts</h1>
        <div class="row">
          <div
            class="col-md-4 col-lg-3 mb-4"
            v-for="mech in $store.state.mech"
            :key="mech.mechanicalPartID"
          >
            <Card>
              <template #cardHeader>
                <img
                  :src="mech.imageURL"
                  alt="Product Image"
                  class="img-fluid"
                />
              </template>
              <template #cardBody>
                <p>{{ mech.partName }}</p>
                <p>Material: {{ mech.material }}</p>
                <p>Engine Type: {{ mech.engineType }}</p>
                <p>Price: {{ mech.price }}</p>
              </template>
              <template #cardButton>
                <div class="d-flex justify-content-start">
                <button @click="addToCart(mech)" id="black">Purchase</button>
                </div>
              </template>
              <template #cardButton2>
                <router-link
                  :to="{
                    name: 'singleView',
                    params: { id: mech.mechanicalPartID },
                  }"
                >
                  <button class="btn ">View more</button>
                </router-link>
              </template>
            </Card>
          </div>

          <button type="button" class="btn btn-primary">
            <router-link to="/products" class="text-decoration-none text-white"
              >Back</router-link
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SpinnerComp from "@/components/SpinnerComp.vue";
import Card from "@/components/CardComp.vue";
import { ref, onMounted } from "vue";
import store from "@/store";

const addToCart = (game)=>{
  store.dispatch('toCart', game)
}

const loading = ref(true);

onMounted(() => {
  // store.dispatch("fetchUsers");
  store.dispatch("fetchMech").then(() => {
    store.dispatch("fetchIntExt").then(() => {
      loading.value = false;
    });
  });

});


</script>



<style scoped>
.n{
  background-color: rgb(240, 240, 240);
}
#black {
  color: black;
  border: none;
  background-color: white;
}
h1 {
  text-align: center;
  color: black;
}

</style>
