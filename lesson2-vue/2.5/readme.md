# Vue 版本5

用Vue实现分页

## 代码实现

在这里我禁不住要感叹一下了, jquery版本里的参数传递已经搞得我眼花缭乱了, 在vue版本里却顺畅无比。

嗯，jquery版本太难我还没实现，这次是先实现的vue的。Vue的完整版也要写好了，就是完整的实现一个留言板，带一些样式和一些交互这样的。

首先先明确一下我们要做的事情: 分页。怎么实现呢, 需要在ajax请求里增加两个参数,一个limit,代表每次请求到的comments条数, 一个是offset, 代表偏移量, 偏离第一个数据的条数。limit我们可以固定,我们用一个变量来表示:numberPerPage, offset的值为: numberPerPage * (pageNum(当前第几页) - 1),到现在为止, 变量只有一个, 就是pageNum, 通过控制pageNum请求到我们想要的数据。

然后的问题是，这个请求的参数，该怎么何时获取，如何生成？jquery里，为了这个问题，需要仔细思考很久，而Vue则可以利用一个叫计算属性的方法来轻松完成。

[Vue计算属性参考](http://cn.vuejs.org/v2/guide/computed.html)

在HTML里加两个按钮，上一页和下一页。对pageNum进行控制的, 上一页的时候pageNum减一, 请求一次数据, 下一页的时候加一,请求一次数据。就这么简单, 我们的分页功能就实现了。

接下来需要考虑什么时候可以上一页,什么时候可以下一页。这也是一个很简单的逻辑，当现在是第一页的时候不能上一页，是最后一页的时候不能下一页。还是利用计算属性就OK了。

## 相关资料

Vue.js 基于数据驱动的思想,数据和DOM是绑定在一起的,将表单数据取出,当做post的参数即可。

[官方文档](https://cn.vuejs.org/v2/guide/)

vue-resource是一个第三方的库，为Vue框架封装了发请求和处理回复的功能。类似于jquery的$.ajax()方法。它的功能特点有支持Promise异步处理。

[Github地址](https://github.com/pagekit/vue-resource)

## 服务器端接口说明

同JQuery版5中的说明