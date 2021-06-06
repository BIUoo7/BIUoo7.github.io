function share()
{
    alert("分享成功！");
}
var cnt = 0;
var t;
var timer_is_on = 0;

function timedCount() {
    document.getElementById("counter").value = cnt;
    cnt = cnt + 1;
    t = setTimeout(function(){ timedCount() }, 1000);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
}