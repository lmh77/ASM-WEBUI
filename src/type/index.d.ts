import { IAccounts } from './store/account'
import { ILayout } from '/@/type/store/layout'
import { IPage } from '/@/type/store/page'

declare global {
  interface IResponse<T = any> {
    Code: number
    Msg: string
    Data: T
  }
  interface IObject<T> {
    [index: string]: T
  }

  interface IState extends IPage {
    layout: ILayout
    account: IAccounts
  }
  interface ITable<T = any> {
    data: Array<T>
    total: number
    page: number
    size: number
  }
  interface ImportMetaEnv {
    VITE_APP_TITLE: string
  }
}
