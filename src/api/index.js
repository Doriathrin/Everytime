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
// 导出接口
export default {
  article,
  banner,
  course
  // ……
}