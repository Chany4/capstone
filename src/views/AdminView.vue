<template>
  <div>
    <!-- USERS TABLE -->
    <br />
    <div class="row">
      <router-link to="/logout"
        ><button id="log-in-button" class="mt-3" @click="logOutUser()">
          Log Out
        </button></router-link>
        <br />
      <router-link to="/user"
        ><button id="log-in-button2" class="mt-3">
          View Profile
        </button></router-link
      >
      <br />
    </div>
    <h2 class="text-center">Users Table</h2>
    <br />

    <div class="container table-responsive">
      <table class="table table-striped table-hover">
        <thead>
          <tr class="thead" >
            <td colspan="100%">
              <!-- Use colspan to ensure the content spans the full width -->
              <div class="center-content">
                <p class="mx-3">Add user</p>
                <addUser/>
              </div>
            </td>
          </tr>
        </thead>
        <tbody class="table-dark">
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
        </tbody>
        <tfoot v-if="users">
          <tr v-for="user in users" :key="user.userID">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.Gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
            <td><img :src="user.imageURL" alt="User Image" /></td>
            <td
              class="d-flex justify-content-between align-items-center flex-column flex-md-row gap-2"
            >
              <!-- update -->

              <updateUsers :user="user" />
              <!-- <updateUser/> -->

              <!-- delete -->
              <button
                class="btn btn-outline-danger deleteButton"
                @click="(event) => deleteUser(user.userID)"
              >
                <i class="bi bi-trash-fill"></i>
              </button>
            </td>
          </tr>
        </tfoot>
       
      </table>
    </div>

    <!-- PRODUCTS TABLE -->
    <br />
    <h2 class="text-center">Products Table</h2>
    <br />
    <div class="container table-responsive">
      <table class="table table-striped table-hover">
        <thead  class="thead">
          <tr>
            <td colspan="100%">
              <!-- Use colspan to ensure the content spans the full width -->
              <div class="center-content">
                <p class="mx-3">Add Product</p>
                <!-- add -->
                <addProduct :product="product" />
              </div>
            </td>
          </tr>
        </thead>
        <tbody class="table-dark">
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
        </tbody>
        <tfoot v-if="products">
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
              
              <updateProduct :product="product" />
              

              <!-- update -->
              <!-- <button
                class="btn btn-outline-danger deleteButton"
                @click="(event) => deleteProduct(product.productID)"
              >
                <i class="bi bi-pencil-square"></i>
              </button> -->
              <!-- delete -->
              <button
                class="btn btn-outline-danger deleteButton"
                @click="(event) => deleteProduct(product.mechanicalPartID)"
              >
                <i class="bi bi-trash-fill"></i>
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<script>
import addUser from "@/components/AddUser.vue";
import addProduct from "@/components/AddProduct.vue";
import updateUsers from "@/components/UserUpdateModal.vue";

export default {
  components: {
    addUser,
    addProduct,
    updateUsers
  },
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
      this.$store.dispatch("deleteUser", userID);
    },
    deleteProduct(mechanicalPartID) {
      this.$store.dispatch("deleteMech", mechanicalPartID);
    },
    logOutUser() {
      // Add your custom logout logic here, e.g., clearing Vuex state, removing cookies, etc.

      Swal.fire({
        title: "Logged Out! Refresh Page",
        text: "You have been logged out. Please refresh the page.",
        icon: "success",
        showConfirmButton: true,
      });
      this.$store.dispatch("logout"); // Make sure you have a logout action in your store
      
    },
  },
};
</script>
<style scoped>
h2 {
  color: #4e96d3;
}
p {
  text-align: center;
  color: #4e96d3;
  font-size: 20px;
  font-weight: bold;
  max-width: fit-content;
  align-self: baseline;
}
.box {
  max-width: fit-content;
}
.t {
  border: 2px solid black;
  margin-left: 10%;
  margin-right: 10%;
}
.table {
  margin-top: 20px;
  width: 100%;
}
thead {
  text-align: center; /* Centers inline and inline-block elements inside tfoot */
}
.thead{
  background-color: black;
}
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Ensures the content is centered vertically if needed */
}
tr {
  min-width: fit-content;
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

#log-in-button {
  width: 152px;
  height: 44px;
  background-color: rgb(226, 226, 255);
  border-radius: 25px;
  border: 2px solid rgb(0, 0, 136);
  position: fixed;
  top: 13%;
  right: 0;
  margin-top: 20px;
  margin: 10px;
  z-index: 1;
  color: rgb(1, 0, 76);
  font-weight: bolder;
  text-align: 5px 2px 5px black;
}
#log-in-button2 {
  width: 152px;
  height: 44px;
  background-color: rgb(226, 226, 255);
  border-radius: 25px;
  border: 2px solid rgb(0, 0, 136);
  position: fixed;
  top: 20%;
  right: 0;
  margin-top: 20px;
  margin: 10px;
  z-index: 1;
  color: rgb(1, 0, 76);
  font-weight: bolder;
  text-align: 5px 2px 5px black;
}

@media (max-width: 768px) {
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

@media (max-width: 576px) {
  .img-fluid {
    max-width: 40px;
  }
}
</style>
