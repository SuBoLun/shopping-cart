<template>
  <div class="hello">
    {{ list }}
    211
  </div>
</template>



<script>

import store from "../store";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return{
      list: store.state.productList
    }
  },
  methods:{
  },
  // computed: {
  //   list() {
  //     return store.state.productList;
  //   },
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
