<template>
  <div class="n">
    <h1>Products</h1>
    <div class="container">
      <!-- Show Spinner while loading -->
      <SpinnerComp v-if="loading" class="spinner" />

      <!-- Display Product Cards once data is loaded -->
      <div v-else>
        <!-- Search and Filter Options -->
        <div class="filter-section mb-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search by part name"
            class="form-control mb-2"
          />
          <select v-model="selectedEngineType" class="form-control mb-2">
            <option value="">Select Engine Type</option>
            <option v-for="type in uniqueEngineTypes" :key="type" :value="type">
              {{ type }}
            </option>
          </select>
          <select v-model="sortOrder" class="form-control">
            <option value="">Sort by Price</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <!-- Display Mechanical Parts -->
        <h1>Mechanical Parts</h1>
        <div class="row">
          <div
            class="col-md-4 col-lg-3 mb-4"
            v-for="mech in filteredAndSortedMechs"
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
            <router-link to="/products" class="text-decoration-none text-white">
              Back
            </router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SpinnerComp from "@/components/SpinnerComp.vue";
import Card from "@/components/CardComp.vue";
import { ref, computed, onMounted } from "vue";
import store from "@/store";

const searchQuery = ref("");
const selectedEngineType = ref("");
const sortOrder = ref("");

const loading = ref(true);

const addToCart = (game) => {
  store.dispatch("toCart", game);
};

const fetchData = async () => {
  try {
    await store.dispatch("fetchMech");
    await store.dispatch("fetchIntExt");
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});

// Compute unique engine types for filter dropdown
const uniqueEngineTypes = computed(() => {
  const mechs = store.state.mech || [];
  const types = new Set(mechs.map((mech) => mech.engineType));
  return [...types];
});

// Filter and sort mechanical parts
const filteredAndSortedMechs = computed(() => {
  let filteredMechs = store.state.mech || [];

  // Apply search filter
  if (searchQuery.value) {
    filteredMechs = filteredMechs.filter(mech =>
      mech.partName.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // Apply engine type filter
  if (selectedEngineType.value) {
    filteredMechs = filteredMechs.filter(mech =>
      mech.engineType === selectedEngineType.value
    );
  }

  // Apply sorting
  if (sortOrder.value) {
    filteredMechs = filteredMechs.sort((a, b) => {
      if (sortOrder.value === "asc") {
        return a.price - b.price;
      } else if (sortOrder.value === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
  }

  return filteredMechs;
});
</script>
<style scoped>
.n {
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

.filter-section {
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.filter-section input,
.filter-section select {
  margin-bottom: 1rem;
}
</style>
