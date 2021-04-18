<template>
  <div id="app">
    <Table border ref="selection" :columns="productColumns" :data="productList">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ index }" slot="action">
        <InputNumber
          v-model="buyList[index].amount"
          style="width: 100px" :min="0"
        />
      </template>
    </Table>
    <br />
    <Button
      type="primary"
      size="small"
      style="margin-right: 5px"
      @click="checkoutModal = true"
      >結帳</Button
    >
    <Modal
      v-model="checkoutModal"
      title="購買清單"
      @on-ok="checkout(buyList)"
      ok-text="確認付款"
      cancel-text="返回"
    >
      <CheckOut :buyList="buyList" v-on:emit="clearList($event, buyList)" />
    </Modal>

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
      productColumns: [
        {
          type: "selection",
          width: 60,
          align: "center",
        },
        {
          title: "商品名稱",
          key: "name",
        },
        {
          title: "商品價格",
          key: "price",
        },
        {
          title: "購買數量",
          slot: "action",
          width: 150,
          align: "center",
        },
      ],
      checkoutModal: false,
    };
  },
  methods: {
    createBuyList() {
      this.buyList = this.productList;
      this.buyList.forEach(e => this.$set(e, "amount", 0));
    },
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
  // },
  created() {
    // console.log('compare')
    // console.log(this.productList)
    // console.log(store.state.productList)
    this.createBuyList()
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
