<!-- placeholder -->

<template>
  <button type="button" class="btn btn-outline-warning modalButton" data-bs-toggle="modal" data-bs-target="#updateUserModal">
    <i class="bi bi-pencil-square"></i>
  </button>

  <!-- Modal -->
  <div class="modal fade" id="updateUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Update User</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="updateUser">
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="user ID" v-model="userID">
            </div>
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="first name" v-model="firstName">
            </div>
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="last name" v-model="lastName">
            </div>
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="user age" v-model="userAge">
            </div>
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="gender" v-model="gender">
            </div>
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="user role" v-model="userRole">
            </div>
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="email address" v-model="emailAdd">
            </div>
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="user password" v-model="userPass">
            </div>
            <div class="mb-3">
              <input type="text" class="form-control w-50 mx-auto" placeholder="user profile" v-model="userProfile">
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit"
                  @click.prevent="patchUser"
                  class="btn btn-success"
                  data-bs-dismiss="modal">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'updateUser',
  data() {
    return {
        userID: "",
        firstName: "",
        lastName: "",
        userAge: "",
        gender: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        userProfile: ""
    }
  },
  computed: {
    patchUser() {
      this.$store.dispatch("updateUser", this.$data);
    }
  },
}
</script>

<style scoped>

</style>