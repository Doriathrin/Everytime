/** 
 * api接口的统一出口
 */
// 文章模块接口
import article from '@/api/article';
// 其他模块的接口……
import banner from '../api/banner'
// 导出接口
export default {
  article,
  banner
  // ……
}