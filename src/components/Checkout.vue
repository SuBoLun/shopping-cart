<template>
  <List>
    <ListItem v-for="item in buyList" :key="item.name">
      <ListItemMeta :description="item.name" />
      <li>
        價錢 : 
      </li>
      <ListItemMeta :title="item.price.toString()" />

      <li>
        <InputNumber v-model="item.amount" style="width: 50px" />
      </li>
    </ListItem>
    
    總金額 {{countTotal(buyList)}}
    <Button type="error" ghost size=small @click="clearList">清空購物車</Button>
  </List>

</template>
<script>
export default {
  props: { buyList: Array },
  methods:{
      countTotal: function(arr){
        console.log(666)
        console.log(arr)
          var total = 0;
          arr.forEach(e => total += e.amount * e.price);
          return total
      },
      clearList: function(){
        this.$emit("emit", "購物車已清空");
      }
  }
};
</script>