<template>
  <el-container  style="height: 100%;">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside>
        <Sidebar></Sidebar>
      </el-aside>
      <el-main>Main</el-main>
  </el-container>
  </el-container>
</template>

<script>
import Sidebar from '@/views/layout/Sidebar'
import Header from '@/views/layout/Header'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style>

  .el-header {
    background-color: #373d41;
  }

  .el-aside {
    width: auto !important;
    background-color: #333744;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }

</style>
