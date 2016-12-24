# JQuery版本3

在2的基础上实现了查询功能（按title查询）

## 代码实现

在2的基础上，新加了一个事件监听，searchBtn的按下将会触发两步操作。

第一步：获取用户输入的搜索内容，获得我们想要的queryParam（查询条件，格式有要求，我需要想想如何告诉大家怎么自己了解这个filter可以用哪些查询条件去获得我们希望的内容，有英文文档，我整理下）

第二步：发送带queryParam的get请求获取我们希望的数据

## 服务器端接口说明

接口地址：http://115.159.184.76:3001/api/comments

参考资料：[get接口的filter的使用](https://loopback.io/doc/en/lb2/Querying-data.html)

接口功能：

- get请求会返回所有的comment（留言）
- post请求可以新增加一条comment（数据应包含title,content,time）
- get请求可以携带参数，过滤（或者叫增加搜索条件）得到我们想要的数据