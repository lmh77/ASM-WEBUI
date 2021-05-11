export interface IAccount {
  user: string
  name?: string
  type: string
  sn: string
  config?: string
}

export interface IAccounts {
  accounts: Array<IAccount>
}
