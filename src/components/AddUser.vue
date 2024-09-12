<template>
  <button
    type="button"
    class="btn btn-outline-success"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal1"
  >
    <i class="bi bi-plus"></i>
  </button>
  <div
    class="modal fade"
    id="exampleModal1"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
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
                placeholder="first name"
                v-model="firstName"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="last name"
                v-model="lastName"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="user age"
                v-model="userAge"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="gender"
                v-model="Gender"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="user role"
                v-model="userRole"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="email address"
                v-model="emailAdd"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="user password"
                v-model="userPass"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="user profile"
                v-model="userProfile"
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
                @click.prevent="addUser"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { toast } from 'vue3-toastify/index';

export default {
  name: "addUser",
  data() {
    return {
      firstName: "",
      lastName: "",
      userAge: null,
      Gender: "",
      userRole: "",
      emailAdd: "",
      userPass: "",
      userProfile: "",
    };
  },

  computed: {
    addUser() {
      this.$store.dispatch("addUserAdmin", this.$data);
    }
  },
};
</script>

<style scoped></style>
