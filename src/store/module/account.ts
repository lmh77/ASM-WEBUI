import { list_account } from '/@/api/layout/index'
import { ActionContext } from 'vuex'
import { IAccounts, IAccount } from '/@/type/store/account'

const state: IAccounts = {
  accounts: []
}
const mutations = {
  setAccounts(state: IAccounts, accounts: Array<IAccount> = []): void {
    state.accounts = accounts
  }
}
const actions = {
  async list(context: ActionContext<IAccounts, IState>): Promise<void> {
    const res = await list_account()
    context.commit('setAccounts', res.data.Data)
  }
}
const accountState = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default accountState
