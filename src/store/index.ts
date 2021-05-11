import { createStore, Store, useStore as baseUseStore } from 'vuex'
import layout from '/@/store/module/layout'
import account from '/@/store/module/account'
import { loadStorePage } from '/@/utils/tools'
const page = import.meta.globEager('./page/**/**.ts')

export const store = createStore<IState>({
  modules: {
    layout,
    account,
    ...loadStorePage(page)
  }
})

export function useStore(): Store<IState> {
  return baseUseStore()
}
