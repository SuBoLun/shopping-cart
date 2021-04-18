<template>
  <List>
    <ListItem v-for="item in buyList" :key="item.name">
      <ListItemMeta :description="item.name" />
      <li>
        價錢 : 
      </li>
      <ListItemMeta :title="item.price.toString()" />

      <li>
        <InputNumber v-model="item.amount" style="width: 50px" :min="0"/>
      </li>
    </ListItem>
    
    <li class="total">總金額 {{countTotal(buyList)}}
    <Button class="clearBtn" type="error" ghost size=small @click="clearList">清空購物車</Button>
    </li>
  </List>

</template>
<script>
export default {
  props: { buyList: Array },
  methods:{
      countTotal: function(arr){
          var total = 0;
          arr.forEach(e => total += e.amount * e.price);
          return total
      },
      clearList: function(){
        this.$emit("emit", "購物車即將清空");
      }
  }
};
</script>


<style scoped>
.clearBtn {
  margin-left: 20px
}
.total{
  margin-top: 10px;
  font-weight: bold;
}
</style>