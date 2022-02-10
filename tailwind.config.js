/*
 * @Author: your name
 * @Date: 2022-01-20 11:46:31
 * @LastEditTime: 2022-02-11 00:36:33
 * @LastEditors: kevinZhang
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /contacts-web/tailwind.config.js
 */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

module.exports = {
  content: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
  ],
  purge:false,
  variants: {
    extend: {
      borderWidth: ['last'],
    }
  },
}
