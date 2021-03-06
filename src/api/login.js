import base from './base'; // 导入接口域名列表
import axios from '../request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const login = {
  login(obj, params) {
    return axios.post(`${base.login}/app/login?type=${obj.type}&mobile=${obj.mobile}&password=${obj.password}`);
  },
  Mag(obj, params) {
    return axios.post(`${base.login}/app/message/classifyMessage`);
  },
  Center(obj, params) {
    return axios.get(`${base.login}/app/getUCenterInfo`);
  },
  // 其他接口…………
}
export default login;