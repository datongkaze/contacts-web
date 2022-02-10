/*
 * @Author: kevinZhang
 * @Date: 2022-02-10 19:46:09
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-10 19:59:29
 * @FilePath: /contacts-web/src/router/routers.js
 */

const routes = [
  {
    path: "/",
    name: "Contacts",
    component: () => import("@/views/Contacts")
  },
  
]

export default routes;