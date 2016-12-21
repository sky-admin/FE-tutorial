# Vue 版本4

用Vue实现删除

## 代码实现

Vue的优势开始越来越大，在html里直接写button显然比去js里写button要简单。

然后是数据的传递，jq里想把id跟button关联起来，需要改造从服务器端获取数据的方法，将id塞进button的id或者data-*等地方。jquery再从html中获取出来。

而vue可以通过简单的双向数据绑定，取到想取的数据和绑上相应的方法。

当我们取到id，剩下的就是调用接口了，restful接口，通过delete请求相应的url，当返回的count为1的时候说明删除成功。

删除成功后还需要及时更新当前的页面，把删除的数据拿掉，如何处理？再调一遍从服务器获取数据的方法，而这里又可以看到和jquery比的优势，性能更好。

同样的逻辑下，jquery把整个dom列表全删了重新渲染，而vue的迭代会帮我们分析数组的变化，进行增量更新（哪里变了改哪里）。

## 相关资料

Vue.js 基于数据驱动的思想,数据和DOM是绑定在一起的,将表单数据取出,当做post的参数即可。

[官方文档](https://cn.vuejs.org/v2/guide/)

vue-resource是一个第三方的库，为Vue框架封装了发请求和处理回复的功能。类似于jquery的$.ajax()方法。它的功能特点有支持Promise异步处理。

[Github地址](https://github.com/pagekit/vue-resource)

## 服务器端接口说明

同JQuery版4中的说明