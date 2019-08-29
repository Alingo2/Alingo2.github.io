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


//统计访问人数
    var caution=false
    function setCookie(name,value,expires,path,domain,secure) 
    {
     var curCookie=name+"="+escape(value) +
     ((expires)?";expires="+expires.toGMTString() : "") +
     ((path)?"; path=" + path : "") +
     ((domain)? "; domain=" + domain : "") +
     ((secure)?";secure" : "")
     if(!caution||(name + "=" + escape(value)).length <= 4000)
     {
     document.cookie = curCookie
     }
     else if(confirm("Cookie exceeds 4KB and will be cut!"))
     {
     document.cookie = curCookie
     }
    }
    function getCookie(name) 
    {
     var prefix = name + "="
     var cookieStartIndex = document.cookie.indexOf(prefix)
     if (cookieStartIndex == -1)
     {
     return null
     }    
     var cookieEndIndex=document.cookie.indexOf(";",cookieStartIndex+prefix.length)
     if(cookieEndIndex == -1)
     {
     cookieEndIndex = document.cookie.length
     }
     return unescape(document.cookie.substring(cookieStartIndex+prefix.length,cookieEndIndex))
    }
    function deleteCookie(name, path, domain) 
    {
     if(getCookie(name)) 
     {
     document.cookie = name + "=" + 
     ((path) ? "; path=" + path : "") +
     ((domain) ? "; domain=" + domain : "") +
     "; expires=Thu, 01-Jan-70 00:00:01 GMT"
     }
    }
    function fixDate(date) 
    {
     var base=new Date(0)
     var skew=base.getTime()
     if(skew>0)
     {
     date.setTime(date.getTime()-skew)
     }    
    }
    var now=new Date()
    fixDate(now)
    now.setTime(now.getTime()+365 * 24 * 60 * 60 * 1000)
    var visits = getCookie("counter")
    if(!visits)
    {
     visits=1;
    }  
    else
    {
     visits=parseInt(visits)+1;
    }  
    setCookie("counter", visits, now)
    var read = $('.read');
    read.text(visits);