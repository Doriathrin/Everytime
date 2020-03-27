/**   
 * api接口统一管理
 */
import { get, post } from './http'
export const apiAddress = data => post('api/app/recommend/appIndex', data);
export const apiAddbanner = data => get('api/app/banner', data);
