/*
 * @Author: kevinZhang
 * @Date: 2022-02-10 18:44:42
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-10 19:36:51
 * @FilePath: /contacts-web/src/api/modules/mock/contacts.js
 */
import { axios } from '@/utils/request';

// 获取联系人数据
export const mockContacts = (data) => {
  return axios({
    url: '/mock/contacts',
    method: 'POST',
    data
  });
};
