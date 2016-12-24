/**
 * Created by lhy95 on 2016/12/14.
 */

new Vue({
    el: '.container',
    // 数据驱动，数据即模型即核心，先声明数据，先理解一个页面的数据模型，不要出现没声明就直接在模板中使用的数据
    data: {
        list: [],
        title: '',
        content: '',
        searchContent: '',
        totleNum: 1,
        offset: 0,
        numberPerPage: 1,
        pageNum: 1
    },
    computed: {
        filterParam() {
            return {
                filter: {
                    where: {
                        title: {
                            regexp: '/' + this.searchContent + '/'
                        }
                    },
                    order: 'DESC',
                    limit: this.numberPerPage,
                    offset: this.numberPerPage * (this.pageNum - 1)
                }
            }
        }
    },
    methods: {
        getMessageFromServer() {
            let that = this;
            console.log(that.filterParam);
            this.$http.get('http://115.159.184.76:3001/api/comments', {params: that.filterParam}).then(function (res) {
                console.log(res.data);
                that.list = res.data;
            })
        },
        postMessageToServer() {
            let param = {
                title: this.title,
                content: this.content,
                time: Date()
            };
            this.$http.post('http://115.159.184.76:3001/api/comments', param).then(function (res) {
                console.log(res.data);
                this.getMessageFromServer();
            });
        },
        deleteMsgFromServer(msg) {
            let that = this;
            this.$http.delete('http://115.159.184.76:3001/api/comments/' + msg.id).then(function (res) {
                console.log(res);
                that.getMessageFromServer();
            })
        },
        getTotalNumber(url) {
            $.get({
                url: url + 'count',
                success(res) {
                    // 获取总条数
                    this.totalNum = parseInt(res.count / numberPerPage);
                    console.log(queryParam);
                }
            })
        },
        lastPage() {
            this.pageNum--;
            this.offset = this.numberPerPage * (this.pageNum - 1)
            this.getMessageFromServer()
        },
        nextPage() {
            this.pageNum++;
            this.offset = this.numberPerPage * (this.pageNum - 1)
            this.getMessageFromServer()
        }
    },
// 一个Vue实例是有完善的生命周期的，请阅读Vue官方文档，生命周期一节
    created()
    {
        this.getMessageFromServer();
    }
})
;
