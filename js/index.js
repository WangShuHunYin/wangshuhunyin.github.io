$(function () {
    var student = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "70",
        // "71",
        // "72",
        // "73",
        // "74",
        // "75",
        // "76",
        // "77",
        // "78",
        // "79",
        // "80",
        // "81",
        // "82",
        // "83",
        // "84",
        // "85",
        // "86",
        // "87",
        // "88",
        // "89",
        // "90"
        //Length Max 90 Min 80
    ];
    //固定20个
    var glasses = [
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
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
                console.info("clear content text && style");
            }
            clearAll();
            var tempStuArr = [];
            var tempGlaStuArr = [];
            //Set grayContent To Gray
            function setGray(grayList) {
                for (var i in grayList) {
                    $(".stu").eq(grayList[i].value).addClass("stu_gray");
                }
            }
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
            //Match List=ranSub?continue:break
            function matchList(grayList, ranSub) {
                var TF = true;
                for (var i in grayList) {
                    if (grayList[i].value == ranSub) {
                        TF = false;
                        break;
                    }
                }
                return TF;
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
                    } else if (tempStuArr[randomSub] != 0 && $(".stu").eq(randomDesk).text() == "" && matchList(grayList, randomDesk)) {
                        return {
                            ranSub: randomSub,
                            ranDes: randomDesk
                        };
                        break;
                    }
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
            //According Sum(Student,Glasess) To Judge GrayContentCounterNum && Numerical fixed(Max 90,Min 80)!important
            function getGrayCon(counterGrayCon) {
                var List = (counterGrayCon == 0) ? [{

                }] : (counterGrayCon == 1) ? [{
                    value: 89
                }] : (counterGrayCon == 2) ? [{
                    value: 80
                }, {
                    value: 89
                }] : (counterGrayCon == 3) ? [{
                    value: 87
                }, {
                    value: 88
                }, {
                    value: 89
                }] : (counterGrayCon == 4) ? [{
                    value: 80
                }, {
                    value: 81
                }, {
                    value: 88
                }, {
                    value: 89
                }] : (counterGrayCon == 5) ? [{
                    value: 85
                }, {
                    value: 86
                }, {
                    value: 87
                }, {
                    value: 88
                }, {
                    value: 89
                }] : (counterGrayCon == 6) ? [{
                    value: 80
                }, {
                    value: 81
                }, {
                    value: 82
                }, {
                    value: 87
                }, {
                    value: 88
                }, {
                    value: 89
                }] : (counterGrayCon == 7) ? [{
                    value: 83
                }, {
                    value: 84
                }, {
                    value: 85
                }, {
                    value: 86
                }, {
                    value: 87
                }, {
                    value: 88
                }, {
                    value: 89
                }] : (counterGrayCon == 8) ? [{
                    value: 80
                }, {
                    value: 81
                }, {
                    value: 82
                }, {
                    value: 83
                }, {
                    value: 86
                }, {
                    value: 87
                }, {
                    value: 88
                }, {
                    value: 89
                }] : (counterGrayCon == 9) ? [{
                    value: 81
                }, {
                    value: 82
                }, {
                    value: 83
                }, {
                    value: 84
                }, {
                    value: 85
                }, {
                    value: 86
                }, {
                    value: 87
                }, {
                    value: 88
                }, {
                    value: 89
                }] : [{
                    value: 80
                }, {
                    value: 81
                }, {
                    value: 82
                }, {
                    value: 83
                }, {
                    value: 84
                }, {
                    value: 85
                }, {
                    value: 86
                }, {
                    value: 87
                }, {
                    value: 88
                }, {
                    value: 89
                }];
                console.info(List);
                return List;
            }
            console.info(student.length + glasses.length);
            var grayContent = getGrayCon(90 - num);
            setChooseContent(tempStuArr, tempGlaStuArr);
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