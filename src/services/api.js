import axios from 'axios'
import config from './config'

/**
 * Padrão de nomeclatura
 * [method Http](get, post)
 * [referência](transfer, wallet, validation...)
 * [contexto/ação](detalhes... )
 *
 *
 */
const api = config(axios)

export const getValidationTokenUserPayment = ({ token, value, lat, long }) => api.get(`/validar-token/${token}/${value}/${lat},${long}`)
