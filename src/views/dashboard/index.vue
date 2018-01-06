<template>
  <div class="dashboard-container">
    <component :is="currentRole"></component>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import adminDashboard from './admin/index'
import editorDashboard from './other/index'

export default {
  name: 'dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  created() {
    // if (this.roles.indexOf('admin') >= 0) {
    //   return
    // }
    // this.currentRole = 'editorDashboard'
  }
}
</script>
