$(document).ready(function () {
    $.ajax({
        url: "http://api.tianapi.com/travel/?key=d7730e5c2424f8f9253f5ea5bd544224",
        data: {"num": 30},
        type: "GET",
        async: true,
        timeout: 3000,
        dataType: "text",
        success: function (data) {
            // alert(data);
            index += 10;
            addDataToHtml(data.newslist);
        },
        error: function (xhr) {
            alert(xhr);
        }
    });
});

function addDataToHtml(datas) {
    for (var i in datas){
        // $("#imgbox").append($('...'));
        // 动态生成
    }
}
