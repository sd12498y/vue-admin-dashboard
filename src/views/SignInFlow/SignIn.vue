<template>
  <div class="container" :class="{'light-background' : !isDarkMode, 'dark-background': isDarkMode}">
    <div class="request" :class="{'light-request':isDarkMode, 'dark-request': !isDarkMode}">
      Don't have a Design+Code HQ account?
      <router-link to="/request">Request an account</router-link>
    </div>
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-if="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-if="!isDarkMode" />
      <h4 :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}">Sign into Design+Code HQ</h4>
      <input
        :class="{'light-field':isDarkMode,'dark-field':!isDarkMode}"
        type="email"
        placeholder="Email"
      />
      <input
        :class="{'light-field':isDarkMode,'dark-field':!isDarkMode}"
        type="password"
        placeholder="Password"
      />
      <button>Sign In</button>
      <router-link
        to="/recover"
        :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}"
      >Forgot your password?</router-link>
      <button @click="toggleDarkMode">Toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      isDarkMode: true
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.style.background = this.isDarkMode ? "#212c4f" : "#f0f3f5";
    }
  }
};
</script>

<style lang="scss" scoped>
.light-background {
  background: $light-gray;
}
.dark-background {
  background: $dark-blue;
}
.light-text {
  color: $white;
}
.dark-text {
  color: $black;
}
.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}
.request {
  position: absolute;
  top: 20px;
  right: 20px;
  color: rgba(255, 255, 255, 0.2);
  a {
    color: white;
  }
}
.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}
.login {
  width: 400px;
}

h4 {
  font-size: 24px;
  line-height: 34px;
  /* identical to box height */

  text-align: center;

  /* white */

  color: #ffffff;
}
input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;

  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 40px;
}
a {
  line-height: 25px;
  /* identical to box height */

  text-align: center;

  color: rgba(255, 255, 255, 0.3);

  text-decoration: none;
}
</style>