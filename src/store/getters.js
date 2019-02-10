export const TOKEN = state =>
  state.token

export const ONLINE = state =>
  state.online

export const GET_NAME_APP = state =>
  state.NAME_APP

export const GET_HISTORY_TRANSACTIONS = state =>
  state.history

export const GET_SELLER_NAME = state =>
  state.seller.name

export const GET_WALLET = state =>
  state.history.reduce((acc, curr) => {
    return acc += curr.value
  }, 0).toFixed(2)