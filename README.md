<!--
 * @Author: kevinZhang
 * @Date: 2022-02-10 17:53:37
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-11 09:22:44
 * @FilePath: /contacts-web/README.md
-->
# contacts-web
实现一个 Web 版通讯录功能

## Demo
[Demo](https://contacts-web.vercel.app/#/)

## Features

- 该项目基于[Vue](https://vuejs.org/)
- 样式尝鲜了时下流行的[tailwindcss](https://tailwindcss.com/)
- 时间处理使用[dayjs](https://dayjs.gitee.io/)
- 数据Mock使用[mockjs](http://mockjs.com/)
- 客户端数据的存储使用[localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)
- 列表虚拟渲染使用[vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)组件
- 骨架屏使用[skeleton-loader-vue](https://github.com/abdulqudus001/vue-skeleton-loader)组件

## To do list
- [x] 列表支持查询
- [x] 可以记录用户的查询记录(最近一天)
- [x] 列表支持基于用户首字母的查询功能
- [x] 点击某个条目时，弹出一个详情界面
- [x] 详情界面模式下可点击上下箭头进行用户切换

## Requirements

- 考虑模块化 
    - 项目基于前端模块化思想编写，在组件及通用的方法上都有体现，但仍有优化，解耦的空间。
- 考虑性能问题 
    - 性能的优化体现在：
        - 1、加载数据过程中的骨架屏，给用户提供良好的体验；
        - 2、加载数据完成后，考虑到懒加载对长列表的体验以及跳转功能的影响，包括DOM节点多导致的滚动不流畅，故采用虚拟渲染的方式做处理；
        - 3、现数据由mock获得，后期有接口的加持，会获得进一步的优化。
        - 4、基于用户首字母的查询涉及DOM的滚动，在这里还做了一个节流

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

