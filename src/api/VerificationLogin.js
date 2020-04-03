import base from './base'; // 导入接口域名列表
import axios from '../request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const VerificationLogin = {
  VerificationLogin(obj, params) {
    return axios.post(`${base.VerificationLogin}/app/smsCode?mobile=${obj.mobile}&sms_type=${obj.sms_type}`);
  },
  // 其他接口…………
}
export default VerificationLogin;