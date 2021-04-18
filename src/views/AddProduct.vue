<template>
  <Form
    ref="formValidate"
    :model="formValidate"
    :rules="ruleValidate"
    :label-width="700"
    class="form"
  >
    <FormItem label="商品名稱" prop="name" >
      <Input
        v-model="formValidate.name"
        placeholder="商品名稱"
        class="input"
      />
    </FormItem>
    <FormItem label="商品名稱" prop="price">
      <Input
        v-model="formValidate.price"
        placeholder="商品名稱"
        class="input"
      />
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit('formValidate')"
        >新增</Button
      >
      <Button @click="handleReset('formValidate')" class="cancelBtn"
        >取消</Button
      >
    </FormItem>
  </Form>
</template>
<script>
export default {
  data() {
    return {
      formValidate: {
        name: "",
        price: 0,
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "商品名稱為必填",
            trigger: "blur",
          },
        ],
        price: [
          {
            required: true,
            message: "商品價錢為必填",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.formValidate['id'] = Math.random().toString(36).substring(7);
          // ruleValidate 表單無法驗證 number
          this.formValidate["price"] = Number(this.formValidate.price);
          this.$store.dispatch("addProduct", this.formValidate);
          this.$Message.success("新增成功!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
  },
};
</script>

<style scoped>
  .form {
    margin-top: 30px
  }
  .input{
    width: 200px
  }
  .cancelBtn{
    margin-left: 10px
  }
</style>
