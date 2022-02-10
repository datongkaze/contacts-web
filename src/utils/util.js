/*
 * @Author: kevinZhang
 * @Date: 2019-09-05 13:35:02
 * @LastEditTime: 2022-02-11 02:26:48
 * @LastEditors: kevinZhang
 * @Description: In User Settings Edit
 * @FilePath: /contacts-web/src/utils/util.js
 */

//26个字母
export function getLetter26 () {
  var str = [];
  for (var i = 65; i < 91; i++) {
    str.push(String.fromCharCode(i));
  }
  return str;
}

//去重
export function unique(arr,attr){
  const res = new Map();
  return arr.filter(item=>{
    const attrItem = item[attr]
    return !res.has(attrItem) && res.set(attrItem,1);
  })
}