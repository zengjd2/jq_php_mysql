$(document).ready(function() {
    $.ajax({
        // type: "GET",
        url: "./admin/get.php",
        // url: "./get.php",
        data: { class: $("#dianwo").attr("tndex") },
        //dataType: "json",
        success: function(data) {
            var container = $(".content_left");
            var data = JSON.parse(data);
            $.each(data, function(index, value) {
                var div = $("<tr>").addClass("content_main");
                var mydiv = $("<tr>").addClass("content");
                var span = $("<td>").text(value.newsid);
                var span1 = $("<td>").text(value.newscontent);
                var p1 = $("<td>").text(value.newsaddtime);
                var p2 = $("<td>").attr("mydeleteid", "mydeleteid").text(value.newsclass);
                var span2 = $("<td>").addClass("modify").attr("mid", value.newsid).text("修改");
                var span3 = $("<td>").addClass("delete").attr("mid", value.newsid).text("删除");
                mydiv.appendTo(div);
                span.appendTo(mydiv);
                span1.appendTo(mydiv);
                p1.appendTo(mydiv);
                p2.appendTo(mydiv);
                span2.appendTo(mydiv);
                span3.appendTo(mydiv);
                container.append(div);
            })
        }
    });
    $(".turn-to-front").click(function() {
        window.location.href = "baiducell.html";
    });
    $(".dianwo").each(function() {
        $(this).on('click', function() {
            var newsclass = $(this).attr("tndex");
            // alert(newsclass);
            $.ajax({
                // type: "GET",
                url: "./admin/get.php",
                data: { class: newsclass },
                //dataType: "json",
                success: function(data) {
                    $(".content_main").remove();
                    $("form").remove();
                    var container = $(".content_left");
                    var data = JSON.parse(data);
                    $.each(data, function(index, value) {
                        var div = $("<tr>").addClass("content_main");
                        var mydiv = $("<tr>").addClass("content");
                        var span = $("<td>").text(value.newsid);
                        var span1 = $("<td>").text(value.newscontent);
                        var p1 = $("<td>").text(value.newsaddtime);
                        var p2 = $("<td>").attr("mydeleteid", "mydeleteid").text(value.newsclass);
                        var span2 = $("<td>").addClass("modify").attr("mid", value.newsid).text("修改");
                        var span3 = $("<td>").addClass("delete").attr("mid", value.newsid).text("删除");
                        mydiv.appendTo(div);
                        span.appendTo(mydiv);
                        span1.appendTo(mydiv);
                        p1.appendTo(mydiv);
                        p2.appendTo(mydiv);
                        span2.appendTo(mydiv);
                        span3.appendTo(mydiv);
                        container.append(div);
                    })
                }
            });
        });
    });
    // 修改文章开始

    $("body").on('click', '.modify', function() {
        $(".content_main").remove();
        $("form").remove();
        var mid = $(this).attr("mid");
        //alert(mid);

        $.ajax({
            // type: "GET",
            url: "./admin/mofidyshow.php",
            data: { class: mid },
            //dataType: "json",
            success: function(data) {
                $(".content_main").remove();

                var data = JSON.parse(data);
                $.each(data, function(index, value) {
                    var container = $(".modify_left");
                    var form = $("<form>");
                    var mydiv = $("<div>").addClass("form-group");
                    var label1 = $("<label>").addClass("label_red").text("*新闻标题");
                    var input1 = $("<input>").addClass("form-control").attr("value", value.newstitle).attr("id", "newstitle");
                    var label2 = $("<label>").addClass("label_red").text("*图片地址");
                    var input2 = $("<input>").addClass("form-control").attr("value", value.newsimg).attr("id", "newsimg");
                    var label3 = $("<label>").addClass("label_red").text("*新闻内容");
                    var input3 = $("<input>").addClass("form-control").attr("value", value.newscontent).attr("id", "newscontent");
                    var label4 = $("<label>").addClass("label_red").text("*新闻类别");
                    var input4 = $("<input>").addClass("form-control").attr("value", value.newsclass).attr("id", "newsclass");
                    var label5 = $("<label>").addClass("label_red").text("*新闻时间");
                    var input5 = $("<input>").addClass("form-control").attr("value", value.newsaddtime).attr({ id: "newsaddtime", type: "date" });
                    var input6 = $("<input>").attr({ value: "提交", type: "submit", id: "my_subit" });
                    var input7 = $("<input>").attr("value", value.newsid).attr("id", "myidid");
                    mydiv.appendTo(form);
                    label1.appendTo(form);
                    input1.appendTo(form);
                    label2.appendTo(form);
                    input2.appendTo(form);
                    label3.appendTo(form);
                    input3.appendTo(form);
                    label4.appendTo(form);
                    input4.appendTo(form);
                    label5.appendTo(form);
                    input5.appendTo(form);
                    input6.appendTo(form);
                    input7.appendTo(form);
                    container.append(form);
                })
            }
        });
    });
    $("body").on('click', '#my_subit', function() {

        if ($("#newstitle").val() == "" | $("#newscontent").val() == "" | $("#newsaddtime").val() == "") {
            alert("请正确并完整填写内容");
            return false;
        } else {
            $.ajax({
                type: "GET",
                dataType: "text",
                url: "./admin/modify.php",
                data: {
                    newstitle: $("#newstitle").val(),
                    newsimg: $("#newsimg").val(),
                    newscontent: $("#newscontent").val(),
                    newsclass: $("#newsclass").val(),
                    newsaddtime: $("#newsaddtime").val(),
                    newsid: $("#myidid").val()
                },
            });

        }
    });
    // 修改文章结束
    // 发布文章开始
    $("#news_publish").click(function() {
        $(".content_main").remove();
        $("form").remove();
        var container = $(".modify_left");
        var form = $("<form>");
        var mydiv = $("<div>").addClass("form-group");
        var label1 = $("<label>").addClass("label_red").text("*新闻标题");
        var input1 = $("<input>").addClass("form-control").attr("id", "newstitle");
        var label2 = $("<label>").addClass("label_red").text("*图片地址");
        var input2 = $("<input>").addClass("form-control").attr("id", "newsimg");
        var label3 = $("<label>").addClass("label_red").text("*新闻内容");
        var input3 = $("<input>").addClass("form-control").attr("id", "newscontent");
        var label4 = $("<label>").addClass("label_red").text("*新闻类别");
        var input4 = $("<input>").addClass("form-control").attr("id", "newsclass");
        // var label5 = $("<label>").addClass("label_red").text("*新闻ID");
        // var input5 = $("<input>").addClass("form-control").attr("id", "newsid");
        var label6 = $("<label>").addClass("label_red").text("*新闻时间");
        var input6 = $("<input>").addClass("form-control").attr({ id: "newsaddtime", type: "date" });
        var input7 = $("<input>").attr({ value: "提交", type: "submit", id: "mynews_publish" });
        mydiv.appendTo(form);
        label1.appendTo(form);
        input1.appendTo(form);
        label2.appendTo(form);
        input2.appendTo(form);
        label3.appendTo(form);
        input3.appendTo(form);
        label4.appendTo(form);
        input4.appendTo(form);
        // label5.appendTo(form);
        // input5.appendTo(form);
        label6.appendTo(form);
        input6.appendTo(form);
        input7.appendTo(form);

        container.append(form);

    });
    //  发布新闻表单提交的一些逻辑判断
    $("body").on('click', '#mynews_publish', function() {

        if ($("#newstitle").val() == "" | $("#newscontent").val() == "" | $("#newsaddtime").val() == "") {
            alert("请正确并完整填写内容");
            return false;
        } else {
            $.ajax({
                type: "GET",
                dataType: "text",
                url: "./admin/add.php",
                data: {
                    newstitle: $("#newstitle").val(),
                    newsimg: $("#newsimg").val(),
                    newscontent: $("#newscontent").val(),
                    newsclass: $("#newsclass").val(),
                    newsaddtime: $("#newsaddtime").val()
                },
                // success:function(data){
                //     alert(1);
                // }

            });
        }
    });

    // 发布文章结束
    // 删除文章开始
    $("body").on('click', '.delete', function() {
        var myid = $(this).attr("mid");
        var flag = confirm("是否要删除文章");//如果点击确定则认定为true就是执行下面的事件，点击取消则什么都不做。。。
        if (flag) {
            //这里的this是有作用域，具体是什么我也不知道
            var self = this;
            $.ajax({
                type: "GET",
                dataType: "text",
                url: "./admin/delete.php",
                data: {
                    mynewsid: myid
                },
                success: function() {
                    alert("删除成功");
                    $(self).parent().parent().remove();
                }
            });
        }
        // alert($("#mydeleteid").text());
    });
    // 删除文章结束
});
