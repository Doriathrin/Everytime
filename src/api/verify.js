import base from './base'; // 导入接口域名列表
import axios from '../request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const verify = {
  verify(obj, params) {
    return axios.post(`${base.verify}/app/login?mobile=${obj.mobile}&sms_code=${obj.smscode}&type=${obj.type}`);
  },
  // 其他接口…………
}
export default verify;