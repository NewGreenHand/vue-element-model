import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/views/layout'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/dashboard',
      component: layout,
      children: [
        { path: 'dashboard', component: _import('dashboard/index'), name: '首页' },
        { path: 'menu', component: _import('userConfig/menu/index'), name: '菜单管理', hidden: true },
        { path: 'role', component: _import('userConfig/role/index'), name: '角色管理', hidden: true },
        { path: 'user', component: _import('userConfig/user/index'), name: '用户管理', hidden: true }
      ]
    }
  ]
})
