import base from './base'; // 导入接口域名列表
import axios from '../request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const collect = {
  // get提交    
  collect(obj, params) {
    return axios.post(`${base.courseInfo}/app/collect?course_basis_id=${obj.course_basis_id}&type=${obj.type}`);
  },
  cancel(obj, params) {
    return axios.put(`${base.courseInfo}/app/collect/cancel/${obj}/1`);
  }
  // 其他接口…………
}
export default collect;