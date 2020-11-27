$(function () {
    var student = [
        "李梦昕",
        "董豪情",
        "庞雨晴",
        "梁文馨",
        "盛程鑫",
        "李思佳",
        "过江川",
        "张梦瑶",
        "马萌源",
        "张金博",
        "韩立勉",
        "陈耀宗",
        "王亦菲",
        "嵇鑫宇",
        "郭浩博",
        "韦青青",
        "王抗",
        "袁少文",
        "丁浩",
        "郭申振",
        "孙婷",
        "陈志明",
        "李振楠",
        "栾静依",
        "薛彦儒",
        "张硕",
        "张明杨",
        "徐思雨",
        "张纪成",
        "何嘉龙",
        "蔡勇奇",
        "刘艺祥",
        "封意森",
        "刘孟恩",
        "汪嘉怡",
        "王硕",
        "邓浩",
        "晏元帅",
        "连小想",
        "杜珂",
        "高子卓",
        "周怡姗",
        "裴鹤",
        "郑新冉",
        "邹翠凤",
        "王文波",
        "靳杭辉",
        "牛艺融",
        "徐建军",
        "陈金源",
        "马世豪",
        "张展博",
        "赵苏鹏",
        "岳鑫阳",
        "王鹏鹏",
        "刘锦涛",
        "李凯佳",
        "司春杰",
        "李豪",
        "刘飞翔",
        "黄志豪",
        "岳妍",
        "赵金彪",
        "张英杰",
        "孙炙明",
        "李晓彤",
        "李芸露",
        "郭进喜",
        "王金铭",
        "晋申奥",
        "刘卓",
        "李广辉",
        "唐光强",
        "王帅豪",
        "窦涔萌",
        "何金博",
        "朱航标",
        "杨程琨",
        "李文栋",
        "楚帅锋",
        "李明扬",
        "崔奥文",
        "王佳鑫",
        "孙士巅",
        "魏子健",
        "魏嘉诚",
        "徐高栋",
        "任国杰",
        // "89",
        // "90"
    ];
    var glasses = [];
    var tempStuArr = [];

    function initPage(num) {
        $("body").append("<div id='content' class='style_1'></div>");
        $("#content").append("<div id='action'><font>排位</font></div>");
        // $("#content").append(
        //     "<div id='teacher'><div class='stu'></div><div class='teacher'>讲师</div><div class='stu'></div></div>"
        // );
        var row =
            "<div class='row'><div class='stu_con'><div class='stu'></div><div class='stu'></div></div><div class='stu_con'><div class='stu'></div><div class='stu'></div></div><div class='stu_con'><div class='stu'></div><div class='stu'></div></div><div class='stu_con'><div class='stu'></div><div class='stu'></div></div><div class='stu_con'><div class='stu'></div><div class='stu'></div></div></div>";
        for (var i = 0; i < Math.ceil(num / 10); i++) {
            $("#content").append(row);
        }

        $("#content").append("<div id='style_con'><div id='style_1'></div><div id='style_2'></div>");
        $("#style_1").live("click", function () {
            $("body").removeClass("body_back_2").addClass("body_back_1");
            $("#content").removeClass("style_2").addClass("style_1");
        });
        $("#style_2").on("click", function () {
            $("body").removeClass("body_back_1").addClass("body_back_2");
            $("#content").removeClass("style_1").addClass("style_2");
        });

        $("#action").live("click", function () {
            function deepCopyArr(arr) {
                tempStuArr.length = 0;
                for (var i in arr) {
                    tempStuArr.push(arr[i]);
                }
            }
            deepCopyArr(student);
            switch (90 - num) {
                case 1:
                    for (var i = 0; i < $(".stu").length; i++) {
                        if (i == 0) {
                            continue;
                        } else {
                            var randomSub = Math.floor(Math.random() * student.length);
                            if (tempStuArr[randomSub] == 0) {
                                --i;
                            } else {
                                $(".stu").eq(i).text(tempStuArr[randomSub]);
                                // console.info(i + " " + tempStuArr[randomSub] + " " + randomSub);
                                tempStuArr[randomSub] = 0;
                            }
                        }
                    }
                    break;
                case 2:
                    for (var i = 0; i < $(".stu").length; i++) {
                        if (i == 0 || i == 9) {
                            continue;
                        } else {
                            var randomSub = Math.floor(Math.random() * student.length);
                            if (tempStuArr[randomSub] == 0) {
                                --i;
                            } else {
                                $(".stu").eq(i).text(tempStuArr[randomSub]);
                                // console.info(i + " " + tempStuArr[randomSub] + " " + randomSub);
                                tempStuArr[randomSub] = 0;
                            }
                        }
                    }
                    break;
                default:
                    for (var i = 0; i < $(".stu").length; i++) {
                        var randomSub = Math.floor(Math.random() * student.length);
                        if (tempStuArr[randomSub] == 0) {
                            --i;
                        } else {
                            $(".stu").eq(i).text(tempStuArr[randomSub]);
                            // console.info(i + " " + tempStuArr[randomSub] + " " + randomSub);
                            tempStuArr[randomSub] = 0;
                        }
                    }
                    break;
            }
            //灰色
            for(var i in $(".stu")){
                if($(".stu").eq(i).text() == ""){
                    $(".stu").eq(i).css("backgroundColor","gray");
                }
            }
        });
    }
    //初始化页面
    initPage(student.length);

    //气球特效
    var arrColor = ["purple", "#279DE1", "#26CDCB", "#E7F6F6", "#8EE4E8", "#27B8E7", "#FFCFFD", "#BDEDFF", "#FFE8EB", "#64AA67", "#90D793", "#678652"];
    var counter = 0;
    var randomBack;
    $(document).bind("mousemove", function (e) {
        var $span = $("<span></span>");
        var size = Math.random() * 100;
        var wh = 10 + size + "px";
        var x = e.pageX;
        var y = e.pageY;
        counter += 1;
        if (counter % 30 == 0) {
            randomBack = arrColor[Math.floor(Math.random() * arrColor.length)];
        }
        $span.css({
            width: wh,
            height: wh,
            left: x,
            top: y,
            background: randomBack
        });
        $("body").append($span);
        setTimeout(function () {
            $span.remove();
        }, 3500);
    });
});