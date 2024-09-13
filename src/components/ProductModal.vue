<template>
  <div>
    <!-- Button to trigger modal -->
    <button type="button" class="btn" :data-bs-target="'#adminEditUser' + mech.mechanicalPartID" data-bs-toggle="modal">
      <i class="bi bi-pencil-square"></i>
    </button>

    <!-- Modal Structure -->
    <div class="modal fade" :id="'adminEditUser' + mech.mechanicalPartID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="editUserLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="editUserLabel">Edit User</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <!-- Form to update user details -->
            <form @submit.prevent="updateProductFx">
              <div class="container">
                <!-- Form fields bound to updateMech data model -->
                <input class="form-control m-2" type="text" placeholder="Enter ID" v-model="updateMech.mechanicalPartID" required>
                <input class="form-control m-2" type="text" placeholder="Enter Name" v-model="updateMech.partName" required>
                <input class="form-control m-2" type="text" placeholder="Enter Material" v-model="updateMech.material" required>
                <input class="form-control m-2" type="number" placeholder="Enter Age" v-model="updateMech.engineType" required>
                <input class="form-control m-2" type="text" placeholder="Enter Car Make" v-model="updateMech.compatibleCarMake" required>
                <input class="form-control m-2" type="text" placeholder="Enter Profile Image URL" v-model="updateMech.imageURL" required>
                <input class="form-control m-2" type="text" placeholder="Enter Price" v-model="updateMech.price" required>
                <input class="form-control m-2" type="text" placeholder="Enter Category" v-model="updateMech.category" required>
                <input class="form-control m-2" type="number" placeholder="Enter Stock Quantity" v-model="updateMech.stockQuantity" required>
                <input class="form-control m-2" type="text" placeholder="Enter Warranty Period" v-model="updateMech.warrantyPeriod" required>
                <input class="form-control m-2" type="text" placeholder="Enter Description" v-model="updateMech.description" required>
              </div>
              <div class="modal-footer">
                <!-- Modal buttons -->
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Clear</button>
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-outline-success">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['mech'],
  data() {
    return {
      updateMech: {
        mechanicalPartID: this.mech?.mechanicalPartID || '',
        partName: this.mech?.partName || '',
        material: this.mech?.material || '',
        engineType: this.mech?.engineType || '',
        compatibleCarMake: this.mech?.compatibleCarMake || '',
        imageURL: this.mech?.imageURL || '',
        price: this.mech?.price || '',
        category: this.mech?.category || '',
        stockQuantity: this.mech?.stockQuantity || '',
        warrantyPeriod: this.mech?.warrantyPeriod || '',
        description: this.mech?.description || '',
      }
    }
  },
  methods: {
    async updateProductFx() {
      try {
        await this.$store.dispatch('updateUser', this.updateMech);
        this.$emit('update');
        Swal.fire({
          title: "Good job!",
          text: "User was updated successfully!",
          icon: "success"
        });
      } catch (e) {
        Swal.fire({
          title: "Error!",
          text: e.message,
          icon: "error"
        });
      }
    },
  }
}
</script>
  
<style scoped>
.btn {
  color: red;
  background-color: white;
  border: none;
}
button.btn:hover {
  color: white;
  background-color: red;
  border: none;
  transition: 0.6s ease-in-out;
}
</style>
