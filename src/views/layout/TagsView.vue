<template>
  <div class='tabs-view-container'>
    <router-link
      v-for="tag in Array.from(visitedViews)"
      :to="tag.path"
      :key="tag.path">
      <el-tag
      size="medium"
      color="#eaedf1"
      :disable-transitions="false"
      closable
      :type="isActive(tag.path)?'primary':''"
      @close='closeViewTabs(tag,$event)'>
        {{tag.name}}
      </el-tag>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    visitedViews() {
      // 最多只显示 6 个标签
      return this.$store.state.app.visitedViews.slice(-6)
    }
  },
  methods: {
    closeViewTabs(view, $event) {
      this.$store.dispatch('delVisitedViews', view).then((views) => {
        if (this.isActive(view.path)) {
          const latestView = views.slice(-1)[0]
          if (latestView) {
            this.$router.push(latestView.path)
          } else {
            this.$router.push('/')
          }
        }
      })
      $event.preventDefault()
    },
    generateRoute() {
      if (this.$route.matched[this.$route.matched.length - 1].name) {
        return this.$route.matched[this.$route.matched.length - 1]
      }
      this.$route.matched[0].path = '/'
      return this.$route.matched[0]
    },
    addViewTabs() {
      this.$store.dispatch('addVisitedViews', this.generateRoute())
    },
    isActive(path) {
      return path === this.$route.path
    }
  },
  watch: {
    $route(to, from) {
      this.addViewTabs()
    }
  }
}
</script>

<style scoped>
  .tabs-view-container {
    display: inline-block;
    line-height: 35px;
    background-color: #ffffff;
  }
  .el-tag {
    vertical-align: middle;
    margin-left: 10px;
  }

</style>
