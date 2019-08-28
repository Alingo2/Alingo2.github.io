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