//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = 'w(ﾟДﾟ)w 糟糕！网页崩溃啦！';
        clearTimeout(titleTime);
    }
    else {
        //返回当前页面时标签显示内容
        document.title = 'q(≧▽≦q) 欸嘿？怎么又好啦！' + OriginTitile;
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});