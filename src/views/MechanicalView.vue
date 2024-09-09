<template>
  <div>
    <h1>Products</h1>
    <div class="container">
      <!-- Show Spinner while loading -->
      <SpinnerComp v-if="loading" />

      <!-- Display Product Cards once data is loaded -->
      <div v-else>
        <!-- Display Mechanical Parts -->
        <h1>Mechanical Parts</h1>
        <div class="row">
          <div
            class="col-md-3 mb-4"
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
                <div class="d-flex justify-content-between">
                <button @click="purchase(mech.mechanicalPartID)" id="black">Purchase</button>
              
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

const loading = ref(true);

const purchase = (mechanicalPartID) => {
  store.dispatch('addToCartMech', mechanicalPartID);
  console.log("purchase button clicked", mechanicalPartID);
}

onMounted(() => {
  store.dispatch("fetchUsers");
  purchase();
  store.dispatch("fetchMech").then(() => {
    store.dispatch("fetchIntExt").then(() => {
      loading.value = false;
    });
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
