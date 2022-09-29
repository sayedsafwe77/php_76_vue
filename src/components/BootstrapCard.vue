<template>
  <div class="card" style="width: 18rem">
    <img :src="item[card_data.image]" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ item[card_data.title] }}</h5>
      <p class="card-text">{{ item[card_data.description] }}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
    },
    card_data: {
      type: Object,
    },
  },
};
</script>
