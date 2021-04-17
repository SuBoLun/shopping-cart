<template>
  <div id="app">
    {{productList}}
    <Table border ref="selection" :columns="columns1" :data="productList">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ index }" slot="action">
        <InputNumber
          v-model="productList[index].amount"
          placeholder="Enter something..."
          style="width: 100px"
        />
      </template>
    </Table>
    <br />
    <Button
      type="primary"
      size="small"
      style="margin-right: 5px"
      @click="modal1 = true"
      >結帳</Button
    >
    <Modal
      v-model="modal1"
      title="購買清單"
      @on-ok="checkout(productList)"
      ok-text="確認付款"
      cancel-text="返回"
    >
      <CheckOut :buyList="productList" v-on:emit="clearList($event, productList)" />
    </Modal>

    <!-- <Button
      type="primary"
      size="small"
      style="margin-right: 5px"
      @click="createBuyList"
      >test</Button
    > -->

  </div>
</template>

<script>
import CheckOut from "../components/Checkout";
import store from "../store";
export default {
  name: "ProductPage",
  components: { CheckOut },
  props: {},
  data() {
    return {
      buyList: [],
      columns1: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "名稱",
          key: "name",
        },
        {
          title: "價錢",
          key: "price",
        },
        {
          title: "購買數量",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],
      modal1: false,
    };
  },
  methods: {
    // createBuyList() {
      // console.log('t')
      // this.buyList = this.productList;
      // this.buyList.forEach((e) => (e.amount = 0));
      // test
      // this.productList.forEach((e) => (e.amount = 0));
      // this.productList.forEach((e) => (e.price = Number(e.price)));
      // console.log(this.buyList)
    // },
    checkout(arr) {
      this.$Message.info("結帳完成");
      arr.forEach((e) => (e.amount = 0));
    },
    clearList(data, arr) {
      arr.forEach((e) => (e.amount = 0));
      alert(data)
    }
  },
  computed: {
    productList() {
      return store.state.productList;
    },
  },
  // // watch: {},
  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  created() {
    // this.createBuyList()
    // console.log('c')
    // console.log(this.buyList)
  },
  // beforeMount() {
  //   console.log("beforeMount" + this.productList.length);
  // },
  // mounted() {
  //   console.log(this.productList);
  // },
  // activated() {
  //   console.log("activated");
  // },
  // deactivated() {
  //   console.log("deactivated");
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated() {},
  // beforeDestroy() {
  //   console.log("beforeDestroy");
  // },
  // destroyed() {
  //   console.log("destroyed");
  // }
};
</script>

<style>
</style>
