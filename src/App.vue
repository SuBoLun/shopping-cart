<template>
  <div class="layout">
    <Layout :style="{ minHeight: '100vh' }">
      <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu theme="dark" width="auto" :class="menuitemClasses">
          <!-- active-name="1-1" 可預設 -->
          <router-link to="/add-product" exact>
            <MenuItem name="1-1">
              <span>新增商品</span>
            </MenuItem>
          </router-link>
          <router-link to="/products" exact>
            <MenuItem name="1-2">
              <span>商品列表</span>
            </MenuItem>
          </router-link>
        </Menu>
      </Sider>
      <Layout>
        <Header class="layout-header-bar"
          >Shopping Cart</Header
        >
        <Content :style="{ padding: '0 16px 16px' }">
          <router-view><Home /></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import store from "./store";
import Home from "./views/Home.vue";

export default {
  components: {
    Home,
  },
  data() {
    return {
      isCollapsed: false,
    };
  },
  computed: {
    menuitemClasses: function () {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
  },
  created() {
    // 初始化商品清單 mock
    store.commit("initProductList");
  },
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
.layout-header-bar {
  padding: 0;
  background: #F0F0F0;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, .1);
  font-size: 30px;
  text-align:center;
  font-weight:bold;

}
</style>