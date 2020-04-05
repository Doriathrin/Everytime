import base from './base'; // 导入接口域名列表
import axios from '../request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const password = {
  // password(id, params) {
  //   return axios.get(`${base.password}/app/banner`);
  // },
  // post提交    
  password(params) {
    return axios.post(`${base.password}/app/password`, qs.stringify(params));
  }
  // 其他接口…………
}
export default password;