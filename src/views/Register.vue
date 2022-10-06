<template>
  <div>
    <form action="" method="post">
      {{ count }}
      <label for="name">name</label>
      <input type="text" v-model="name" name="name" />
      <label for="email">email</label>
      <input type="email" v-model="email" name="email" />
      <label for="password">password</label>
      <input type="password" v-model="password" name="password" />
      <input type="submit" @click="createUser" />
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    createUser(e) {
      let user = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      e.preventDefault();
      fetch("http://localhost:9000/user/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then((res) => {
        if (res.ok) {
          this.$router.push("login");
        }
      });
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  height: 400px;
  margin: auto;
  width: 60%;
  justify-content: space-around;
  padding: 1em;
  background: #ccc;
  box-shadow: 0px 0px 15px red;
}
</style>
