# Vue 版本1

用Vue框架结合vue-resource库实现了请求接口获取comment并显示，让我们看看vue和jquery的区别。

## 相关资料

这里的Vue框架是现在热门的三大框架之一。背后的思想是数据驱动，和Jquery这种传统的指令式的JS库有很多不同之处。

[官方文档](https://cn.vuejs.org/v2/guide/)

vue-resource是一个第三方的库，为Vue框架封装了发请求和处理回复的功能。类似于jquery的$.ajax()方法。它的功能特点有支持Promise异步处理。

[Github地址](https://github.com/pagekit/vue-resource)

## 代码实现

先是引入库，vue和vue-resource是两个东西，分别引入，再在最下面引入一个自己写js用的main.js。

自己写的部分（这个部分需要读上面相关资料给出的Vue官方文档），上手new一个Vue实例，用el属性声明挂载点，在data属性下声明我们的数据，这个数据是可以直接用于驱动页面的变化的。

mounted属性下写方法，mounted是vue声明周期的几个钩子之一，是在vue实例被挂载成功时触发的。类似于jquery的$(function(){})。

里面用vue-resource向接口发起get请求获取了数据，把数据直接给了list。注意这里，我们不再需要手工拼接字符串，不需要手工将元素插入到HTML中了。

html里用一个v-for，把list这个数组中的元素依次取出来显示了。

这里还看不出来Vue比jquery更优秀，没事我们继续。


## 服务器端接口说明

同JQuery版1中的说明