import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { IMenubarList } from '/@/type/store/layout'

const components: IObject<() => Promise<typeof import('*.vue')>> = {
  Layout: (() => import('/@/layout/index.vue')) as unknown as () => Promise<typeof import('*.vue')>,
  Redirect: (() => import('/@/layout/redirect.vue')) as unknown as () => Promise<
    typeof import('*.vue')
  >,
  LayoutBlank: (() => import('/@/layout/blank.vue')) as unknown as () => Promise<
    typeof import('*.vue')
  >,
  404: (() => import('/@/views/ErrorPage/404.vue')) as unknown as () => Promise<
    typeof import('*.vue')
  >,
  Workplace: (() => import('/@/views/Dashboard/Workplace.vue')) as unknown as () => Promise<
    typeof import('*.vue')
  >,

  Login: (() => import('/@/views/User/Login.vue')) as unknown as () => Promise<
    typeof import('*.vue')
  >
}

// 静态路由页面
export const allowRouter: Array<IMenubarList> = [
  {
    name: 'Dashboard',
    path: '/',
    component: components['Layout'],
    redirect: '/Dashboard/Workplace',
    meta: { title: '仪表盘', icon: 'el-icon-eleme' },
    children: [
      {
        name: 'Workplace',
        path: '/Dashboard/Workplace',
        component: components['Workplace'],
        meta: { title: '工作台', icon: 'el-icon-s-tools' }
      }
    ]
  },
  {
    name: 'ErrorPage',
    path: '/ErrorPage',
    meta: { title: '错误页面', hidden: true, icon: 'el-icon-eleme' },
    component: components.LayoutBlank,
    redirect: '/ErrorPage/404',
    children: [
      {
        name: '404',
        path: '/ErrorPage/404',
        component: components['404'],
        meta: { title: '404', icon: 'el-icon-s-tools' }
      }
    ]
  },
  {
    name: 'RedirectPage',
    path: '/redirect',
    component: components['Layout'],
    meta: { title: '重定向页面', icon: 'el-icon-eleme', hidden: true },
    children: [
      {
        name: 'Redirect',
        path: '/redirect/:pathMatch(.*)*',
        meta: {
          title: '重定向页面',
          icon: ''
        },
        component: components.Redirect
      }
    ]
  },
  {
    name: 'Login',
    path: '/Login',
    component: components.Login,
    meta: { title: '登录', icon: 'el-icon-eleme', hidden: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(), // createWebHistory
  routes: allowRouter as RouteRecordRaw[]
})

export default router
