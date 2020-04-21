import base from './base'; // 导入接口域名列表
import axios from '../request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const userInfo = {
  userInfo() {
    return axios.get(`${base.userInfo}/app/userInfo`);
  },
  // 城市选择
  sonArea(obj, params) {
    return axios.get(`${base.userInfo}/app/sonArea/${obj}`);
  },
  // 图片
  Public(params) {
    return axios.post(`${base.password}/app/public/img`);
  },
  // 信息
  user (obj) {
    return axios.put(`${base.userInfo}/app/user`,obj);
  },
  // 年级选择
  attribute(obj, params) {
    return axios.get(`${base.userInfo}/app/attribute/1`);
  },
  // 其他接口…………
}
export default userInfo;