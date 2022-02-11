/*
 * @Author: kevinZhang
 * @Date: 2022-02-10 17:53:37
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-11 09:06:07
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
