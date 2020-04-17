import base from './base'; // 导入接口域名列表
import axios from '../request/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
const course = {
  // courseClassify(id, params) {
  //   return axios.get(`${base.courseClassify}/app/courseClassify`);
  // },
  // get提交    
  courseClassify(id,params) {
    return axios.get(`${base.courseClassify}/app/courseClassify`, qs.stringify(params));
  },
  courseChapter(obj, params) {
    return axios.post(`${base.courseClassify}/app/courseChapter?id=${obj.id}`, qs.stringify(params));
  },
  getPlayToken(obj, params) {
    return axios.get(`${base.courseClassify}/app/getPlayToken/video_id=${obj.video_id}/course_id=${obj.course_id}`, qs.stringify(params));
  },
  chapterInfo(obj, params) {
    return axios.get(`${base.courseClassify}/app/chapterInfo/${obj.id}`, qs.stringify(params));
  },
  getPcRoomCode(obj, params) {
    return axios.get(`${base.courseClassify}/app/getPcRoomCode/course_id=${obj.course_id}/chapter_id=${obj.chapter_id}`, qs.stringify(params));
  },
  chapterDatum(obj, params) {
    return axios.get(`${base.courseClassify}/app/chapterDatum/${obj.datum_id}/chapter_id=${obj.file_id}`, qs.stringify(params));
  }
  // 其他接口…………
}
export default course;