<template>
  <div>
    <!-- USERS TABLE -->
    <br />
    <router-link to='/login'><button id="log-in-button" class=" mt-3">Log Out</button></router-link>
    <br>
    <h2 class="text-center">Users Table</h2>
    <br />

    <div class="container table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Age</th>
            <th>Gender</th>
            <th>User Role</th>
            <th>Email Address</th>
            <th>User Profile</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="users">
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.Gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
            <td><img :src="user.imageURL" alt="User Image"></td>
            <td
              class="d-flex justify-content-between align-items-center flex-column flex-md-row gap-2"
            >
              <addUser :user="user" />
              <updateUser :user="user" />
              <button
                class="btn btn-outline-danger deleteButton"
                @click="(event) => deleteUser(user.userID)"
              >
                <i class="bi bi-trash-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- PRODUCTS TABLE -->
    <br />
    <h2 class="text-center">Products Table</h2>
    <br />
    <div class="container table-responsive">
      <table class="table table-striped table-hover">
        <thead class="table-dark">
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Category Color</th>
            <th>Product URL</th>
            <th>Product Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-if="products">
          <tr v-for="product in products" :key="product.productID">
            <td>{{ product.mechanicalPartID }}</td>
            <td>{{ product.mechanicalPartID }}</td>
            <td>{{ product.stockQuantity }}</td>
            <td>R {{ product.price }}</td>
            <td>{{ product.category }}</td>
            <td>
              <img
                :src="product.imageURL"
                loading="lazy"
                class="img-fluid"
                :alt="productImage"
              />
            </td>
            <td>{{ product.description }}</td>
            <td
              class="d-flex justify-content-between align-items-center flex-column flex-md-row gap-2"
            >
              <addProduct :product="product" />
              <updateProduct :product="product" />
              <button
                class="btn btn-outline-danger deleteButton"
                @click="(event) => deleteProduct(product.productID)"
              >
                <i class="bi bi-trash-fill"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    products() {
      return this.$store.state.mech;
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
    this.$store.dispatch("fetchMech");
    
  },
  methods: {
    deleteUser(userID) {
      this.$store.dispatch('deleteUser', userID);
    },
    deleteProduct(productID) {
      this.$store.dispatch('deleteProduct', productID);
    }
  }
};
</script>
<style scoped>
h2 {
  color: #4E96D3;
}

.table {
  margin-top: 20px;
}

th,
td {
  text-align: center;
  vertical-align: middle;
  padding: 12px;
}

.img-fluid {
  max-width: 50px;
  height: auto;
  border-radius: 5px;
}

.btn {
  font-size: 14px;
  padding: 5px 10px;
}

.deleteButton {
  margin-left: 10px;
}

/* login button */

#log-in-button{
    width: 152px;
    height: 44px;
    background-color: rgb(226, 226, 255);
    border-radius: 25px;
    border: 2px solid rgb(0, 0, 136);
    position: fixed;
    top: 10%; 
    right: 0;
    margin-top: 20px;
    margin: 10px;
    z-index: 1;
    color: rgb(1, 0, 76);
    font-weight: bolder;
    text-align: 5px 2px 5px black;
}

@media(max-width: 768px) {
  .table-responsive {
    overflow-x: auto;
  }

  .d-flex {
    flex-direction: column;
    gap: 10px;
  }

  .btn {
    width: 100%;
    padding: 10px;
  }
}

@media(max-width: 576px) {
  .img-fluid {
    max-width: 40px;
  }
}
</style>
