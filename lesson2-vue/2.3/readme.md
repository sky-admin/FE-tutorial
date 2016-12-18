# Vue 版本3

用Vue实现按题目搜索

## 代码实现

jquery实现搜索又新加了一个方法，叫获取查询参数，而Vue通过computed属性（请查官方文档 - 计算属性 一节），其实和方法没太大区别，就是会根据我们的模型的变化，得到新的我们需要的一个稍复杂的但是和页面无关的对象：queryParam（查询参数）

然后在每次点击search按钮的时候执行一遍从服务器获取数据即可。请求里带上参数，方法也很容易，利用这个数据模型是属于vue的计算属性，通过this.queryParam即可得到。

## 相关资料

Vue.js 基于数据驱动的思想,数据和DOM是绑定在一起的,将表单数据取出,当做post的参数即可。

[官方文档](https://cn.vuejs.org/v2/guide/)

vue-resource是一个第三方的库，为Vue框架封装了发请求和处理回复的功能。类似于jquery的$.ajax()方法。它的功能特点有支持Promise异步处理。

[Github地址](https://github.com/pagekit/vue-resource)

## 服务器端接口说明

同JQuery版3中的说明