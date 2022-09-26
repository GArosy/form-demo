<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <p>View All Site Content</p>
      <el-submenu
        v-for="(item, index) in menuItems"
        :key="index"
        :index="item.title"
      >
        <template slot="title">
          <i class="el-icon-caret-right"></i>
          <span slot="title">{{ item.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            @click="clickMenu(subItem)"
            v-for="(subItem, index) in item.children"
            :key="index"
          >
            <span slot="title">{{ subItem.title }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "Sites",
          children: [
            {
              title: "Form Page",
              path: "/formpage",
            },
            {
              title: "Dance Club",
              path: "",
            },
            {
              title: "Swimming Club",
              path: "",
            },
            {
              title: "Table Tennis Club",
              path: "",
            },
          ],
        },
        {
          title: "Documents",
          children: [
            {
              title: "Documents",
              path: "",
            },
            {
              title: "Benefits",
              path: "",
            },
          ],
        },
      ],
    };
  },
  methods: {
    clickMenu(item) {
      this.$router.push(item.path).catch((e) => {});
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
  color: #fff;
}

.el-menu {
  height: 100vh;
  border: 0;
}
</style>
