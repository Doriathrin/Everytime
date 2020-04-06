import base from './base'; // 导入接口域名列表
import axios from '../request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const invite = {
  // invite(id, params) {
  //   return axios.get(`${base.banner}/app/banner`);
  // },
  // post提交    
  invite(obj) {
    return axios.post(`${base.invite}/app/teacher/invite?teacher_id=${obj.teacher_id}&week_day=${obj.week_day}&is_next=${obj.is_next}`);
  }
  // 其他接口…………
}
export default invite;