/**
 * Created by lhy95 on 2016/12/14.
 */

new Vue({
    el: '.container',
    data: {
        list: [],
        title: '',
        content: ''
    },
    methods: {
        getMessageFromServer() {
            let that = this;
            this.$http.get('http://115.159.184.76:3001/api/comments').then(function (res) {
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
        }
    },
    mounted() {
        this.getMessageFromServer();

    }
});
