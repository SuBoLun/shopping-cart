<template>

  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    {{productList}}
    <FormItem label="Name" prop="name">
      <Input v-model="formValidate.name" placeholder="商品名稱" />
    </FormItem>
    <FormItem label="Price" prop="price">
      <Input v-model="formValidate.price" placeholder="商品價格" />
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
    </FormItem>
  </Form>
</template>
<script>
import store from "../store";
export default {
  data() {
    return {
      formValidate: {
        name: "",
        price: 0
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "商品名稱為必填",
            trigger: "blur"
          }
        ],
        price: [
          {
            required: true,
            message: "商品價錢為必填",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    productList() {
      return store.state.productList;
    },
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          // this.formValidate['id'] = Math.random().toString(36).substring(7);
          this.formValidate['amount'] = 0
          // this.$store.commit("addProduct", this.formValidate);
          // this.$Message.success("新增成功!");
          this.productList.push(this.formValidate);
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
