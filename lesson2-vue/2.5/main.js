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
        totalNum: 1,
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
        },
        hasPre() {
            return this.pageNum !== 1;
        },
        hasNext() {
            return this.pageNum !== this.totalNum;
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
        getTotalNumber() {
            let that = this;
            this.$http.get('http://115.159.184.76:3001/api/comments/count').then(function (res) {
                console.log(res.data);
                that.totalNum = res.data.count;
            })
        },
        lastPage() {
                this.pageNum--;
                this.getMessageFromServer();
        },
        nextPage() {
            this.pageNum++;
            console.log(this.pageNum + '   ' + this.totalNum);
            this.getMessageFromServer()
        }
    },
// 一个Vue实例是有完善的生命周期的，请阅读Vue官方文档，生命周期一节
    created(){
        this.getMessageFromServer();
        this.getTotalNumber();
    }
})
;
