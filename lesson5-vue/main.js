/**
 * Created by lhy95 on 2016/12/14.
 */

new Vue({
    el: '.container',
    data: {
        list: []
    },
    mounted() {
        let that = this;
        this.$http.get('http://115.159.184.76:3001/api/comments').then(function (res) {
            console.log(res.data);
            that.list = res.data;
        })
    }
});
