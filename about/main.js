var trigger = $('#trigger');
var por = $('.portrait');
trigger.on('click',
    function(){
        if(por.is(':visible'))
            por.slideUp();
        else
            por.slideDown();
    })
window.onload = function() {  
    var show = document.getElementById("show");
    var seconds = 0,minutes = 0, hours = 0;
    setInterval(function() {   
    var time = new Date();   // 程序计时的月从0开始取值后+1   
    var m = time.getMonth() + 1; 
    seconds += 1;
    if(seconds>=60)
    {
        minutes += 1;
        seconds -= 60;
        if(minutes>=60)
        {
            hours += 1;
            minutes -= 60;
        }
    }
    var t = time.getFullYear() + "-" + m + "-"     
    + time.getDate() + " " + time.getHours() + ":"     
    + time.getMinutes() + ":" + time.getSeconds()+ 
    '<br>'
    +"您已在当前页面停留了" + hours +'时' + minutes + '分' + seconds + '秒';   
    show.innerHTML = t;  
    }, 1000); 
    };

//页面跳转
(function(){
//获取当前网页文件名
var strUrl=window.location.href;
var arrUrl=strUrl.split("/");
var strPage=arrUrl[arrUrl.length-1];
var pageArr = strPage.match(/\d+/g);
var cur_page = pageArr[0];
var page_str = $('.cur_page');
var next = $('.next');
var front = $('.front');
function changePage(){
    window.location.href='article' + cur_page + '.html';
    page_str.text('当前页:' + '  ' + cur_page);
}
page_str.text('当前页:' + '  ' + cur_page);
next.on('click',function(){
    cur_page = parseInt(cur_page) + 1;
    changePage();
})
front.on('click',function(){
    if(cur_page>=2)
    {
        cur_page -= 1;
        changePage();
    }
})

var jumpTrigger = $('#jump-trigger');
jumpTrigger.on('click',function(){
    var num = document.getElementById('jump').value;
    if( Number.isInteger(parseFloat(num)) && num >= 1)      //整数且大于1
    {
        cur_page = num;
        changePage();
    }
})
})()