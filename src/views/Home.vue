<template>
  <div class="hello">
    <h1>HOME PAGE</h1>
    <h2>Shopping Cart</h2>
  </div>
</template>



<script>
import store from "../store";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      list: store.state.productList,
    };
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  font-size: 60px;
  color: #003D79;
  text-align:center
}
h2 {
  font-size: 30px;
  color: #005AB5;
  text-align:center
}
</style>
