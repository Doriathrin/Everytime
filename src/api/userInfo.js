import base from './base'; // 导入接口域名列表
import axios from '../request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const userInfo = {
  userInfo() {
    return axios.get(`${base.userInfo}/app/userInfo`);
  },
  // 城市选择
  sonArea(obj, params) {
    return axios.get(`${base.userInfo}/app/sonArea/0`);
  },
  sonAreaID(obj, params) {
    return axios.get(`${base.userInfo}/app/sonArea/${obj}`);
  },
  sonAreaSID(obj, params) {
    return axios.get(`${base.userInfo}/app/sonArea/${obj}`);
  },
  // 年级选择
  attribute(obj, params) {
    return axios.get(`${base.userInfo}/app/module/attribute/${obj}`);
  },
  // 其他接口…………
}
export default userInfo;