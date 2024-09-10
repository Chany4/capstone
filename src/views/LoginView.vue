<template>
  <div>
    <button @click="signUp = !signUp">Sign Up/Login</button>
  </div>
  <div class="sign-up" v-if="signUp">
    <div>
      <h1>Register</h1>
    </div>
    <table class="table-1">
      <tr>
        <th>
          <label for=""> Name: </label>
        </th>
        <td>
          <input type="text" v-model="firstName" />
        </td>
      </tr>
      <tr>
        <th>
          <label for=""> Surname: </label>
        </th>
        <td>
          <input type="text" v-model="lastName" />
        </td>
      </tr>
      <tr>
        <th>
          <label for=""> Age: </label>
        </th>
        <td>
          <input type="text" v-model="userAge" />
        </td>
      </tr>
      <tr>
        <th>
          <label for=""> Gender </label>
        </th>
        <td>
          <input type="text" v-model="Gender" />
        </td>
      </tr>
      <tr>
        <th>
          <label for=""> User role </label>
        </th>
        <td>
          <input type="text" v-model="userRole" placeholder="user or admin" />
        </td>
      </tr>
      <!-- <tr>
        <th>
          <label class="label">
            <input
              type="radio"
              id="value-1"
              checked=""
              name="value-radio"
              value="value-1"
              v-model="userRole"
            />
            <p class="text">User</p>
          </label>
          <br />
          <label class="label">
            <input
              type="radio"
              id="value-2"
              name="value-radio"
              value="value-2"
              v-model="userRole"
            />
            <p class="text">Admin</p>
          </label>
        </th>
      </tr> -->
      <tr>
        <th>
          <label for=""> Email Address </label>
        </th>
        <td>
          <input type="text" v-model="emailAdd" />
        </td>
      </tr>
      <tr>
        <th>
          <label for=""> Password </label>
        </th>
        <td>
          <input type="password" v-model="userPass" />
        </td>
      </tr>
      <tr>
        <th>
          <label for=""> Profile: </label>
        </th>
        <td>
          <input type="text" v-model="userProfile" />
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <div>
            <button @click="addUser">Sign Up</button>
          </div>
        </th>
      </tr>
    </table>
  </div>
  <div class="login" v-else>
    <div>
      <h1>Login</h1>
    </div>
    <table class="table-2">
      <tr>
        <th>
          <label for=""> Email: </label>
        </th>
        <td>
          <input type="text" v-model="login_emailAdd" />
        </td>
      </tr>
      <tr>
        <th>
          <label for=""> Password: </label>
        </th>
        <td>
          <input type="password" v-model="login_userPass" />
        </td>
      </tr>
      <tr>
        <th colspan="2">
          <div>
            <button @click="loginUser">Login</button>
          </div>
        </th>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
      firstName: "",
      lastName: "",
      userAge: null,
      Gender: "",
      userRole: "",
      emailAdd: "",
      userPass: "",
      userProfile: "",
      login_emailAdd: "",
      login_userPass: "",
      signUp: true,
    };
  },
  computed: {
    addUser() {
      this.$store.dispatch("addUser", this.$data);
    },
    loginUser() {
      this.$store.dispatch("loginUser", {
        emailAdd: this.login_emailAdd,
        userPass: this.login_userPass,
      });
      //   location.reload()
    },
  },
};
</script>
<style scoped>
.sign-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
