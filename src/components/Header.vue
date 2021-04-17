<template>
  <div id="app">
    <Menu mode="horizontal" active-name="1">
      <MenuItem name="1">
        <Icon type="ios-paper"/>
        <router-link to="/add-product" exact>新增產品</router-link>
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />
        <router-link to="/" exact>產品列表</router-link>
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
menu {
  margin: auto;
}
</style>