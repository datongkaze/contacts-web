/*
 * @Author: kevinZhang
 * @Date: 2022-02-10 18:46:52
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-11 09:07:16
 * @FilePath: /contacts-web/src/utils/validate.js
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
