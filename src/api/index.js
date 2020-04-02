/** 
 * api接口的统一出口
 */
// 文章模块接口
import article from '@/api/article';
// 其他模块的接口……
// 轮播图
import banner from '@/api/banner'
// 分类
import course from '@/api/courseClassify'
// 特色课
import courseBasis from '@/api/courseBasis'
// 课程详情
import courseInfo from '@/api/courseInfo'
// 预约
import otoCourse from '@/api/otoCourse'
// 导出接口
export default {
  article,
  banner,
  course,
  courseBasis,
  courseInfo,
  otoCourse
  // ……
}