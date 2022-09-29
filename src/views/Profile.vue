<template>
  <div>
    <card-container
      url="https://fakestoreapi.com/products"
      @getdata="getApiData"
    >
      <bootstrap-card
        :card_data="comp_data"
        :item="item"
        :key="item.id"
        v-for="item in items"
      ></bootstrap-card>
    </card-container>
  </div>
</template>
<script>
import CardContainer from "../components/CardContainer.vue";
import BootstrapCard from "../components/BootstrapCard.vue";
export default {
  components: {
    BootstrapCard,
    CardContainer,
  },
  data() {
    return {
      comp_data: {
        image: "image",
        title: "title",
        decription: "decription",
      },
      items: [],
    };
  },
  methods: {
    getApiData(data) {
      this.items = data;
    },
  },
};
</script>
