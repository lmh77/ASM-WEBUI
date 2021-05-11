import { IMenubarList } from '/@/type/store/layout'
export const user = [
  { name: 'admin', pwd: 'admin' },
  { name: 'dev', pwd: 'dev' },
  { name: 'test', pwd: 'test' }
]

export const role = [
  { name: 'admin', description: '管理员' },
  { name: 'dev', description: '开发人员' },
  { name: 'test', description: '测试人员' }
]

export const user_role = [
  { userName: 'admin', roleName: 'admin' },
  { userName: 'dev', roleName: 'dev' },
  { userName: 'test', roleName: 'test' }
]

export const permission = [
  { name: 'add', description: '新增' },
  { name: 'update', description: '修改' },
  { name: 'remove', description: '删除' }
]

export const role_route = [
  { roleName: 'admin', id: 1, permission: [] },
  { roleName: 'admin', id: 10, permission: [] },
  { roleName: 'admin', id: 2, permission: [] },
  { roleName: 'admin', id: 20, permission: [] },
  { roleName: 'admin', id: 21, permission: [] },
  { roleName: 'admin', id: 22, permission: [] },
  { roleName: 'admin', id: 3, permission: [] },
  { roleName: 'admin', id: 30, permission: [] },
  { roleName: 'admin', id: 300, permission: [] },
  { roleName: 'admin', id: 31, permission: [] },
  { roleName: 'admin', id: 310, permission: [] },
  { roleName: 'admin', id: 4, permission: [] },
  { roleName: 'admin', id: 40, permission: [] },
  { roleName: 'admin', id: 41, permission: [] },
  { roleName: 'admin', id: 42, permission: [] },
  { roleName: 'admin', id: 43, permission: [] },
  { roleName: 'admin', id: 5, permission: [] },
  { roleName: 'admin', id: 50, permission: ['add', 'update', 'remove'] },

  { roleName: 'dev', id: 1, permission: [] },
  { roleName: 'dev', id: 10, permission: [] },
  { roleName: 'dev', id: 5, permission: [] },
  { roleName: 'dev', id: 50, permission: ['add'] },

  { roleName: 'test', id: 1, permission: [] },
  { roleName: 'test', id: 10, permission: [] },
  { roleName: 'test', id: 5, permission: [] },
  { roleName: 'test', id: 50, permission: ['update'] }
]

export const route: Array<IMenubarList> = [
  {
    id: 2,
    parentId: 0,
    name: 'Account',
    path: '/Account',
    component: 'Layout',
    redirect: '/Account/AccountList',
    meta: { title: '账户管理', icon: 'el-icon-phone' }
  },
  {
    id: 20,
    parentId: 2,
    name: 'AccountList',
    path: '/Account/AccountList',
    component: 'AccountList',
    meta: { title: '账户列表', icon: 'el-icon-goods' }
  },
  {
    id: 21,
    parentId: 2,
    name: 'AccountDetail',
    path: '/Account/AccountDetail/:projName',
    component: 'AccountDetail',
    meta: {
      title: '账户详情',
      icon: 'el-icon-question',
      activeMenu: '/Account/AccountList',
      hidden: true
    }
  }
  // {
  //   id: 22,
  //   parentId: 2,
  //   name: 'AccountImport',
  //   path: '/Account/AccountImport',
  //   component: 'AccountImport',
  //   meta: { title: '账户导入', icon: 'el-icon-help' }
  // }
]

export const accounts = [
  {
    user: '王小虎',
    config: '上海'
  },
  {
    user: '王小虎',
    config: '上海'
  }
]
