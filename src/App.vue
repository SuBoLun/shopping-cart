<template>
  <div class="layout">
    <Layout :style="{minHeight: '100vh'}">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <router-link to="/add-product" exact>
            <MenuItem name="1-1">
              <!-- <Icon type="ios-navigate"></Icon> -->
              <span>新增商品</span>
            </MenuItem>
          </router-link>
          <router-link to="/products" exact>
            <MenuItem name="1-2">
              <Icon type="search"></Icon>
              <span>商品列表</span>
            </MenuItem>
          </router-link>
        </Menu>
      </Sider>
      <Layout>
        <Header
          :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"
        >Shopping Cart</Header>
        <Content :style="{padding: '0 16px 16px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import store from "./store";

export default {
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    menuitemClasses: function() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  beforeCreate() {},
  created() {
    store.commit("initProductList");
  },
  beforeMount() {},
  mounted() {},
  activated() {},
  deactivated() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>
<style scoped>
.layout-con {
  height: 100%;
  width: 100%;
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>