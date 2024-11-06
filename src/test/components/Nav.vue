<template>
  <div class="nav-container flex-col">
    <div class="flex-row align-center nav-container__title">
      <Logo style="margin-right: 20px" />
      <div class="flex-col title-box">
        <span>Vue2大屏动画场景编排</span>
        <span>Animator</span>
      </div>
    </div>
    <ul class="nav-list flex-1">
      <li
        class="nav-item"
        :class="{ active: $route.name === item.name }"
        v-for="(item, index) in menu"
        :key="index"
        @click="$router.push(item)"
      >
        <div class="flex-row nav-item__title">
          <span>{{ (item.meta && item.meta.title) || item.name }}</span>
        </div>
        <div class="nav-item__desc">
          {{ item.meta && item.meta.description }}
        </div>
      </li>
    </ul>

    <div class="nav-container__footer flex-row">
      <el-button class="flex-1" type="primary" @click="go('doc')"
        >文档</el-button
      >
      <el-button @click="go('github')">
        <svg
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
      </el-button>
    </div>
  </div>
</template>

<script>
import Logo from "./Logo"
import routes from "../index"

export default {
  components: {
    Logo,
  },
  mounted() {
    this.$router.push("/demo1")
  },
  data() {
    return {
      menu: routes[0].children,
    }
  },
  methods: {
    go(type) {
      type === "github" &&
        window.open("https://github.com/yuuuuuyu/animator.git", "_blank")
      type === "doc" &&
        window.open(
          "https://github.com/yuuuuuyu/animator/blob/master/README.md",
          "_blank"
        )
    },
  },
}
</script>

<style scoped>
.nav-container {
  padding: 20px;
  box-sizing: border-box;
}
.nav-container__title {
  margin-bottom: 20px;
  height: 50px;
}
.title-box {
  height: 100%;
}
.title-box span:first-child {
  font-size: 20px;
  line-height: 30px;
  height: 30px;
  font-weight: 500;
}
.title-box span:last-child {
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  color: #999;
}
.nav-list {
  padding-top: 20px;
}
.nav-item {
  margin-bottom: 6px;
  cursor: pointer;
  padding: 12px;
  transition: all ease-in-out 0.3s;
}
.nav-item:hover {
  background-color: #333;
  transition: all ease-in-out 0.3s;
}
.nav-item:hover span {
  color: #fff;
}
.nav-item:hover .nav-item__desc {
  color: rgba(255, 255, 255, 0.7);
}
.nav-item.active {
  background-color: #333;
  color: #fff;
}
.nav-item__title {
  font-size: 20px;
}
.nav-item__desc {
  font-size: 14px;
  color: #999;
}
</style>

