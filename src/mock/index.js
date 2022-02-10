/*
 * @Author: kevinZhang
 * @Date: 2022-02-10 18:13:16
 * @LastEditors: kevinZhang
 * @LastEditTime: 2022-02-11 04:30:18
 * @FilePath: /contacts-web/src/mock/index.js
 */

// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const contactsData = function() {
	let developers = [];
	for (let i = 0; i < 1000; i++) {
		const authorName = Random.name();
		let newDeveloperObject = {
			id: Random.guid(), //随机生成一个uuid
            authorName,//随机生成一个名字
            avatar: Random.dataImage('40x40',authorName[0]), // 随机生成一段Base64 图片编码作为头像
			followers: Random.integer( 0, 99999 ), //  随机生成一个关注人数
			stars: Random.integer( 0, 99999 ), //  随机生成一个关注人数
			email: Random.email(), // 随机生成一个email
            bio: Random.paragraph( 1 ) // 随机生成一段句子
		}
		developers.push(newDeveloperObject)
	}

	return {
		developers: developers
	}
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/mock/contacts', 'post', contactsData);