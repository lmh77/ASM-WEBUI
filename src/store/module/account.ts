import { list_account, update_account } from '/@/api/layout/index'
import { ActionContext } from 'vuex'
import { IAccounts, IAccount } from '/@/type/store/account'
import { ElMessage } from 'element-plus'

const state: IAccounts = {
  accounts: []
}
const mutations = {
  setAccounts(state: IAccounts, accounts: Array<IAccount> = []): void {
    state.accounts = accounts
  },
  updateAccount(state: IAccounts, account: IAccount): void {
    const isexsit = state.accounts.findIndex((a) => a.sn === account.sn && a.type === account.type)
    console.log(isexsit, account)
    if (isexsit !== -1) {
      const accounts = state.accounts
      accounts[isexsit] = { ...account }
      state.accounts = [...accounts]
    } else {
      state.accounts = [...state.accounts, { ...account }]
    }
  }
}
const actions = {
  async list(context: ActionContext<IAccounts, IState>): Promise<void> {
    const res = await list_account()
    context.commit('setAccounts', res.data.Data)
  },
  async update(context: ActionContext<IAccounts, IState>, data: IAccount): Promise<void> {
    const res = await update_account(data)
    if (res.data.Code === 200) {
      context.commit('updateAccount', {
        ...data,
        sn: res.data.Data
      })
      ElMessage.success({
        message: '更新成功',
        type: 'success'
      })
    } else {
      ElMessage.error({
        message: res.data.Msg,
        type: 'error'
      })
    }
  }
}
const accountState = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default accountState
