import base from './base'; // 导入接口域名列表
import axios from '../request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const banner = {
  apiBanner(id, params) {
    return axios.get(`${base.banner}/app/banner`);
  },
  // post提交    
  Banner(params) {
    return axios.get(`${base.banner}/accesstoken`, qs.stringify(params));
  }
  // 其他接口…………
}
export default banner; 