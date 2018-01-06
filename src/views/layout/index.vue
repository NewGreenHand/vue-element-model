<template>
  <el-container  style="height: 100%;">
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside>
        <Sidebar></Sidebar>
      </el-aside>
      <div class="my-main">
        <TagsView></TagsView>
        <el-main>
            <AppMain></AppMain>
        </el-main>
      </div>
  </el-container>
  </el-container>
</template>

<script>
import Sidebar from './Sidebar'
import Header from './Header'
import AppMain from './AppMain'
import TagsView from './TagsView'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
    AppMain,
    TagsView
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
    padding: 10px;
  }

  .my-main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    flex: 1;
    box-sizing: border-box;
    min-width: 0;
  }

</style>
