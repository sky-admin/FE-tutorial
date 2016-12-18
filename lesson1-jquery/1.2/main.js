/**
 * Created by lhy95 on 2016/12/13.
 */

$(function () {

    getCommentFromServer();

    $('#submitBtn').on('click', function () {
        addNewCommentToServer();
        getCommentFromServer();
    })

});

function getCommentFromServer() {
    $('#comment-container').empty();
    let insertString = '';
    $.get({
        url: 'http://115.159.184.76:3001/api/comments',
        success: function (res) {
            console.log(res);
            for(let item of res) {
                console.log(item);
                insertString += '<div><h3>' + item.title + '</h3><p>' + item.content + '</p><p>' + item.time + '</p></div>'
            }
            $('#comment-container').append(insertString);
        }
    });
}

function addNewCommentToServer() {
    let postData = {
        title: $('#title').val(),
        content: $('#content').val(),
        time: Date()
    };

    $.post({
        url: 'http://115.159.184.76:3001/api/comments',
        data: postData,
        success(res) {
            console.log(res);
        }
    })
}