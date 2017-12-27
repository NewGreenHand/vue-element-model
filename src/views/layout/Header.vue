<template>
  <el-row type="flex" class="row-bg" justify="space-between">
    <el-col :sapn="12">
      <p class="project-name">Hello World</p>
    </el-col>
    <el-col :sapn="12">
      <el-menu
        :default-active="activeIndex2"
        class="right-item"
        mode="horizontal"
        @select="handleSelect"
        background-color="#373d41"
        text-color="#fff"
        active-text-color="#fff">
        <el-menu-item index="1">搜索</el-menu-item>
        <el-menu-item index="2">处理</el-menu-item>
        <el-menu-item index="3">消息<el-badge class="mark" style="border: none;" :value="12" /></el-menu-item>
        <el-submenu index="4">
          <template slot="title">个人</template>
          <el-menu-item index="2-1">修改头像</el-menu-item>
          <el-menu-item index="2-2">修改密码</el-menu-item>
          <el-menu-item index="2-3">注销</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
.el-badge {
  border: none;
}
.project-name {
  font-size: 17px;
  line-height: 30px;
  color: #fff;
}

.right-item {
  float: right;
}


</style>
