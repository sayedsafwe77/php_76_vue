<template>
  <form action="">
    {{ count }}

    <label for="email">email</label>
    <input type="text" v-model="email" name="email" />
    <label for="password">password</label>
    <input type="password" v-model="password" name="password" />
    <input type="submit" @click="loginuser" />
  </form>
</template>
<script>
// vuex
// state managment
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginuser(e) {
      e.preventDefault();
      let user = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", user);
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>