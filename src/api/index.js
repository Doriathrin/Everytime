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
// 登录接口
import login from '@/api/login'
// 短信接口
import VerificationLogin from '@/api/VerificationLogin'
// 进行验证
import verify from '@/api/verify'
// 设置密码
import password from '@/api/password'
// 预约课程详情
import reservation from '@/api/reservation'
// 时间
import invite from '@/api/invite'
// 个人信息
import userInfo from '@/api/userInfo'
// 题库选择
import classify from '@/api/classify'
// 我的学习
import myStudy from '@/api/myStudy'

// 导出接口
export default {
  article,
  banner,
  course,
  courseBasis,
  courseInfo,
  otoCourse,
  login,
  VerificationLogin,
  verify,
  password,
  reservation,
  invite,
  userInfo,
  classify,
  myStudy,
  // ……
}