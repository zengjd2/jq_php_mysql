$(document).ready(function() {
    $.ajax({
        // type: "GET",
        url: "./admin/get.php",
        data: { class: $("#dianwo").attr("tndex") },
        //dataType: "json",
        success: function(data) {
            var container = $(".container");
            var data = JSON.parse(data);
            $.each(data, function(index, value) {
                var div = $("<div>").addClass("content_main");
                var mydiv = $("<div>").addClass("content");
                var span = $("<span>").text(value.newscontent);
                var p = $("<p>").text(value.newsaddtime);
                var imgDiv = $("<div>").addClass("content");
                var img = $("<img>").addClass("content_img").attr("src", value.newsimg);
                img.appendTo(imgDiv);
                imgDiv.appendTo(div);
                mydiv.appendTo(div);
                span.appendTo(mydiv);
                p.appendTo(mydiv);
                container.append(div);
            })
        }
    });
        $(".turn-to-back").click(function() {
        window.location.href = "baiducell_manage.html";
    });
});
$(document).ready(function() {
    $(".select_one .dianwo").each(function() {
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
                    var container = $(".container");
                    var data = JSON.parse(data);
                    $.each(data, function(index, value) {
                        var div = $("<div>").addClass("content_main");
                        var mydiv = $("<div>").addClass("content");
                        var span = $("<span>").text(value.newscontent);
                        var p = $("<p>").text(value.newsaddtime);
                        var imgDiv = $("<div>").addClass("content");
                        var img = $("<img>").addClass("content_img").attr("src", value.newsimg);
                        img.appendTo(imgDiv);
                        imgDiv.appendTo(div);
                        mydiv.appendTo(div);
                        span.appendTo(mydiv);
                        p.appendTo(mydiv);
                        container.append(div);
                    })
                }
            });
        });
    });
});



