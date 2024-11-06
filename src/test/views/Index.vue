<template>
  <div class="flex-row animator-demo">
    <Nav class="animator-demo__nav" />
    <router-view class="flex-1 visual" />
  </div>
</template>

<script>
export default {
  components: {
    Nav: () => import("../components/Nav"),
  },
  data() {
    return {
      screen: {},
    }
  },
  methods: {},
}
</script>

<style scoped>
.animator-demo__nav {
  width: 400px;
}
.visual {
  width: calc(100vw - 500px - 20px);
  margin: 10px;
  margin-left: 0;
  background: rgb(21, 21, 21);
  border-radius: 6px;
  color: #fff;
  padding-top: 20px;
}
.visual >>> .visual-block {
  background: #333;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
}
</style>

