<template>
  <div>
    <el-container class="container">
      <el-aside width="200px">
        <common-aside></common-aside>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "@/components/CommonAside.vue";
export default {
  name: "mainpage",
  components: {
    CommonAside,
  },
};
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-header {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}
</style>