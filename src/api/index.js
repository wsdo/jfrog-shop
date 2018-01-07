import Vue from 'vue'
import axios from 'axios'
import apiConfig from '../../config/api.config'
const service = axios.create({
  baseURL: apiConfig.baseUrl
})
Vue.prototype.$http = axios
export default service
