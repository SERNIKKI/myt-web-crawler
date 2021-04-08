var page = require('webpage').create(),
    system = require('system'),
    t, address;
//写入文件，用来测试。正式版本可以注释掉用来提高速度。
var fs = require("fs");
//读取命令行参数，也就是js文件路径。
if (system.args.length === 1) {
    console.log('Usage: Spiders.js <some URL>');
//这行代码很重要。凡是结束必须调用。否则phantomjs不会停止
    phantom.exit();
}
page.settings.loadImages = false;  //为了提升加载速度，不加载图片
page.settings.resourceTimeout = 10000;//超过10秒放弃加载
//此处是用来设置截图的参数。不截图没啥用
page.viewportSize = {
    width: 1280,
    height: 800
};
block_urls = ['baidu.com'];//为了提升速度，屏蔽一些需要时间长的。比如百度广告
page.onResourceRequested = function(requestData, request){
    for(url in block_urls) {
        if(requestData.url.indexOf(block_urls[url]) !== -1) {
            request.abort();
            //console.log(requestData.url + " aborted");
            return;
        }
    }
}
t = Date.now();//看看加载需要多久。
address = system.args[1];
page.open(address, function(status) {
    if (status !== 'success') {
        console.log('FAIL to load the address');
    } else {
        var list = page.evaluate(function () {
            return document.querySelector("#contentinside > div.recommendcontent > div").textContent;
        });
        // console.log(list);
        var x = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[1]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[1]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[1]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }

            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log(x);

        var x1 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[2]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[2]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[2]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x1);

        var x2 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[3]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[3]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[3]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x2);

        var x3 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[4]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[4]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[4]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x3);

        var x4 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[5]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[5]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[5]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x4);

        var x5 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[6]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[6]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[6]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x5);

        var x6 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[7]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[7]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[7]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x6);

        var x7 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[8]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[8]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[8]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x7);

        var x8 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[9]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[9]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[9]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x8);

        var x9 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[10]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[10]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[10]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x9);

        var x10 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[11]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[11]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[11]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x10);

        var x11 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[12]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[12]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[12]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x11);

        var x12 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[13]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[13]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[13]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x12);
        var x13 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[14]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[14]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[14]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x13);
        var x14 = page.evaluate(function () {
            var tag = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[15]/div/div[1]/a", document).iterateNext().textContent;
            try {
                var tag1 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[15]/div/div[2]/a", document).iterateNext().textContent;
            }catch (e) {
                tag1 = "佚名";
            }
            try {
                var tag2 = document.evaluate("//*[@id=\"contentinside\"]/div[2]/div/div/div[1]/div[15]/div/div[2]/span", document).iterateNext().textContent;
                if(tag2.substring(0,2)==="喜欢"){
                    tag2 = "佚名";
                }
            }catch (e) {
                tag2 = "佚名";
            }
            return tag + "/" + tag1 + "/" + tag2;
        });
        console.log("*");
        console.log(x14);

        // var lastlog;
        // console.oldlog = console.log;
        // console.log = function(str){
        //     console.oldlog(str);
        //     lastlog = str;
        // }
        // console.log(x1);
        // document.write(lastlog);

            setTimeout(function () {
                phantom.exit();
            }, 6000);
        }
    phantom.exit();
});

