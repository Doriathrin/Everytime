import base from './base'; // 导入接口域名列表
import axios from '../request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const courseBasis = {
  // courseClassify(id, params) {
  //   return axios.get(`${base.courseClassify}/app/courseClassify`);
  // },
  // get提交    
  courseBasis(obj) {
    return axios.get(`${base.courseBasis}/app/courseBasis?page=${obj}`);
  }
  // 其他接口…………
}
export default courseBasis;