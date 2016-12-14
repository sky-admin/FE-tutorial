# JQuery版本2

在1的基础上实现了添加新留言的功能

## 代码实现

在1的基础上，把请求数据封装成一个函数（请思考为什么要封成函数）。在HTML代码中添加一个表单块，用div#form-container包起来，里面包含了标题的输入框和内容的输入区（可以尝试fork走改好样式给我发pr）。用jq对button做一个事件监听，当点击button的时候，调用发送函数（为什么又要封成函数）。

发送函数干的事情是取出两个输入区的内容，通过.val()方法，请自行查阅jquery的API。把他们放进一个postData对象中，在ajax请求中发出去。success后触发请求数据的函数。重新加载一遍数据（请问为什么可以做到重新加载一遍数据，而不会追加在原来的上面。以及是否有更好的实现？）。

## 服务器端接口说明

接口地址：http://115.159.184.76:3001/api/comments

REST接口，支持CORS跨域请求，所以不会有跨域问题，请自行了解跨域相关问题，参考资料：[MDN-浏览器的同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)  [阮一峰-浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)

接口功能：get请求会返回所有的comment（留言）、post请求可以新增加一条comment（数据应包含title,content,time）