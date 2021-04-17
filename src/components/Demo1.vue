<template>
  <div id="app">
    子類別接值 : {{fts}}
    <button v-on:click="doEmit">調整父類別數據</button>
  </div>
</template>

<script>

export default {
  name: 'Demo1',
  components: {
    
  },
  props: {
      fts: String
  },
  data() {
    return {
        emitString: 'emit works'
    }
  },
  methods: {
    doEmit: function() {
        console.log(this.emitString)
        // 调用this.$emit方法第一个参数是事件的名称，后面全部都是参数。
        // this.$emit方法其实是自定义了一个事件，通过这种方式来完成子组件向父组件传递消息。
        this.$emit("emit", this.emitString);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

