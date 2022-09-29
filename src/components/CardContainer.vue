<template>
  <div class="row">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
    },
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => this.$emit("getdata", data));
  },
};
</script>
