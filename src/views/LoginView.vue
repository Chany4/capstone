<template>
  <div class="d-flex justify-content-center my-5">
    <div  class="form">
      <div class="sign-up" v-if="signUp">
        <p class="title">Register</p>
        <p class="message">Signup now and get full access to our app.</p>
        <div class="flex">
          <label>
            <input
              class="input"
              type="text"
              placeholder=""
              required=""
              v-model="firstName"
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              class="input"
              type="text"
              placeholder=""
              required=""
              v-model="lastName"
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            class="input"
            type="email"
            placeholder=""
            required=""
            v-model="userAge"
          />
          <span>Age</span>
        </label>

        <label>
          <input
            class="input"
            type="email"
            placeholder=""
            required=""
            v-model="Gender"
          />
          <span>Gender</span>
        </label>

        <label>
          <input class="input" type="email" placeholder="" v-model="userRole" />
          <span>User rol</span>
        </label>

        <label>
          <input
            class="input"
            type="email"
            placeholder=""
            required=""
            v-model="emailAdd"
          />
          <span>Email</span>
        </label>

        <label>
          <input
            class="input"
            type="password"
            placeholder=""
            required=""
            v-model="userPass"
          />
          <span>Password</span>
        </label>

        <label>
          <input
            class="input"
            type="password"
            placeholder=""
            v-model="userProfile"
          />
          <span>Profile</span>
        </label>

        <button class="submit my-3" @click="addUser">Submit</button>
        <p class="signin">Already have an acount ? <a @click="signUp = !signUp">Signin</a></p>
      </div>

      <div class="login" v-else>
        <h1>Welcome Back! Let's get you logged in</h1>
        <label>
          <input
            class="input"
            type="email"
            placeholder=""
            required=""
            v-model="login_emailAdd"
          />
          <span>Email</span>
        </label>

        <label>
          <input
            class="input"
            type="password"
            placeholder=""
            required=""
            v-model="login_userPass" 
          />
          <span>Password</span>
        </label>

        <button class="submit my-3" @click="loginUser">Login</button>
        
        <p class="signin">Don't have an account? <a @click="signUp = !signUp">Sign Up</a></p>
      </div>
    </div>
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

/* card styles */

/* From Uiverse.io by ammarsaa */
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 800px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
}

.title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #00bfff;
}

.title::before {
  width: 18px;
  height: 18px;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #00bfff;
}

.message,
.signin {
  font-size: 14.5px;
  color: rgba(255, 255, 255, 0.7);
}

.signin {
  text-align: center;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.signin a {
  color: #00bfff;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
  width: 100%;
  margin-top: 1%;
}

.form label .input {
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 20px 05px 05px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  color: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 12.5px;
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  color: #00bfff;
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
}

.input {
  font-size: medium;
}

.submit {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: 0.3s ease;
  background-color: #00bfff;
}

.submit:hover {
  background-color: #00bfff96;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
