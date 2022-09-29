<template>
  <div>
    <router-link to="/">Homee</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/profile">Profile</router-link> |
    <router-link to="/product">product</router-link>
  </div>
</template>
<script>
export default {
  props: {
    text_parent: {
      type: String,
    },
  },
};
</script>
