export default axios => {
  return axios.create({
    baseURL: 'https://07681869.ngrok.io',
    timeout: 10000,
  })
}
