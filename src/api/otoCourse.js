import base from './base'; // 导入接口域名列表
import axios from '../request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const otoCourse = {
  // apiBanner(id, params) {
  //   return axios.get(`${base.otoCourse}/app/banner`);
  // },
  // post提交    
  otoCourse(obj,params) {
    return axios.get(`${base.otoCourse}/app/otoCourse`, qs.stringify(params));
  }
  // 其他接口…………
}
export default otoCourse;