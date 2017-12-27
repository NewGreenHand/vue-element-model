<template>
 <el-menu default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="#333744"
      text-color="#fff"
      active-text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse">
      <div class="sidebar-fold" @click="isCollapse = !isCollapse">
        <i :class="{iconfont: true, 'ali-fold': isCollapse, 'ali-iconunfold': !isCollapse}"></i>
      </div>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </template>
        <el-menu-item index="1-1">用户管理</el-menu-item>
        <el-menu-item index="1-2">角色管理</el-menu-item>
        <el-menu-item index="1-3">菜单权限</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-location"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>

.sidebar-fold {
    height: 30px;
    color: #aeb9c2;
    background-color: #4A5064;
    text-align: center;
    line-height: 30px !important;
    font-size: 12px;
    user-select: none;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
}
.sidebar-fold:hover {
  color: #ffffff;

}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}

</style>
