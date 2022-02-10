/*
 * @Author: your name
 * @Date: 2020-04-27 10:13:18
 * @LastEditTime: 2021-08-26 14:40:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-admin\src\utils\validate.js
 */
export function isFile (obj) {
  return Object.prototype.toString.call(obj) === '[object File]';
}

export function isBase64 (url) {
  const reg = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i;
  return reg.test(url);
}

export function isURL (url) {
  const reg = /^((blob:)?https?|ftp):\/\//;
  return reg.test(url);
}
