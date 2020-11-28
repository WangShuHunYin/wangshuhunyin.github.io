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
        // "刘卓",
        // "李广辉",
        // "唐光强",
        // "王帅豪",
        // "窦涔萌",
        // "何金博",
        // "朱航标",
        // "杨程琨",
        // "李文栋",
        // "楚帅锋",
        // "李明扬",
        // "崔奥文",
        // "王佳鑫",
        // "孙士巅",
        // "魏子健",
        // "魏嘉诚",
        // "徐高栋",
        // "任国杰",
        // "89",
        // "90"
    ];
    //20个
    var glasses = [
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
        "89",
        "90"
    ];

    function initPageAndAddListenter(num) {
        $("body").append("<div id='content' class='style_1'></div>");
        $("#content").append("<div id='action'><font>排位</font></div>");
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

        //Add ActionBtn EventListenter
        $("#action").live("click", function () {
            //Clear All Contents Text && grayStyle
            function clearAll() {
                for (var i in $(".stu")) {
                    $(".stu").eq(i).removeClass("stu_gray").text("");
                }
            }
            clearAll();
            console.info("clear content text && style");
            var tempStuArr = [];
            var tempGlaStuArr = [];
            //deepCopy && aviod the same arr pointer
            function deepCopyArr(arr_par, arr_son) {
                arr_son.length = 0;
                for (var i in arr_par) {
                    arr_son.push(arr_par[i]);
                }
            }
            deepCopyArr(student, tempStuArr);
            if (!ArrIsNull(glasses)) {
                deepCopyArr(glasses, tempGlaStuArr);
            }
            //ranSub ranDes && aviod grayContent && limit myopia interval
            function ranSD(grayList, interval) {
                while (true) {
                    var randomSub = Math.floor(Math.random() * student.length);
                    var randomDesk = Math.floor(Math.random() * $(".stu").length);
                    if (interval.last != 0) {
                        if (randomSub <= interval.last && randomDesk <= interval.last && tempGlaStuArr[randomSub] != 0 && $(".stu").eq(randomDesk).text() == "") {
                            return {
                                ranSub: randomSub,
                                ranDes: randomDesk
                            };
                            break;
                        }
                    } else if (tempStuArr[randomSub] != 0 && $(".stu").eq(randomDesk).text() == "" && randomDesk != grayList.con_1 && randomDesk != grayList.con_2) {
                        return {
                            ranSub: randomSub,
                            ranDes: randomDesk
                        };
                        break;
                    }
                }
            }
            //Judge Arr Is Null?Null Return true
            function ArrIsNull(arr) {
                var TF = true;
                for (var i in arr) {
                    if (arr[i] != 0) {
                        TF = false;
                        break;
                    }
                }
                return TF;
            }
            //Set grayContent To Gray
            function setGray(grayList) {
                if (grayList.con_1 != null) {
                    $(".stu").eq(grayList.con_1).addClass("stu_gray");
                }
                if (grayList.con_2 != null) {
                    $(".stu").eq(grayList.con_2).addClass("stu_gray");
                }
            }
            //Set ranDes.ranSub
            function setChooseContent(arr_stu, arr_gla) {
                setGray(grayContent);
                console.info("begin Interval");
                var begin = setInterval(function () {
                    if (!ArrIsNull(arr_gla)) {
                        var ran = ranSD(grayContent, {
                            first: 0,
                            last: 19
                        });
                        $(".stu").eq(ran.ranDes).text(arr_gla[ran.ranSub]);
                        console.info(ran + " " + ran.ranDes + " " + ran.ranSub + " " + arr_gla[ran.ranSub]);
                        arr_gla[ran.ranSub] = 0;
                    } else if (!ArrIsNull(arr_stu)) {
                        var ran = ranSD(grayContent, {
                            first: 0,
                            last: 0
                        });
                        $(".stu").eq(ran.ranDes).text(arr_stu[ran.ranSub]);
                        console.info(ran + " " + ran.ranDes + " " + ran.ranSub + " " + arr_stu[ran.ranSub]);
                        arr_stu[ran.ranSub] = 0;
                    } else {
                        console.info("clear Interval");
                        clearInterval(begin);
                    }
                }, 100);
            }
            switch (90 - num) {
                case 1:
                    // console.info("1");
                    var grayContent = {
                        con_1: null,
                        con_2: 89
                    };
                    setChooseContent(tempStuArr, tempGlaStuArr);
                    break;
                case 2:
                    // console.info("2");
                    var grayContent = {
                        con_1: 80,
                        con_2: 89
                    };
                    setChooseContent(tempStuArr, tempGlaStuArr);
                    break;
                default:
                    // console.info("default");
                    var grayContent = {
                        con_1: null,
                        con_2: null
                    };
                    setChooseContent(tempStuArr, tempGlaStuArr);
                    break;
            }
        });
    }
    //initPage && addListenter
    initPageAndAddListenter(student.length + glasses.length);

    //bubbles Effect
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