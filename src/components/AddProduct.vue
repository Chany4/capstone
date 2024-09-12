<template>
    <button
      type="button"
      class="btn btn-outline-success"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
    <i class="bi bi-plus"></i>
    </button>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="Product Name"
                  v-model="partName"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="Product Material"
                  v-model="material"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="Product Engine Type"
                  v-model="engineType"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="Product Compatible Make"
                  v-model="compatibleCarMake"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="Product URL"
                  v-model="imageURL"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="Product Price"
                  v-model="price"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="Product Category"
                  v-model="category"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="Product Quantity"
                  v-model="stockQuantity"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="Product Warranty"
                  v-model="warrantyPeriod"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control w-50 mx-auto"
                  placeholder="Product Description"
                  v-model="description"
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  @click.prevent="addProduct"
                  class="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "addProduct",
    data() { 
      return {
          partName: "",
          material: "",
          engineType: "",
          compatibleCarMake: "",
          imageURL: "",
          price: "",
          category:"",
          stockQuantity:"",
          warrantyPeriod:"",
          description:""  
        };
    },
    computed: {
    addProduct() {
      this.$store.dispatch("addMech",this.$data);
    }
  },
  };
  </script>
  
  <style scoped></style>