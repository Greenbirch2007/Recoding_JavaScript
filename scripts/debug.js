function hide(e,reflow) {  // 通过javascript操作样式来隐藏元素e
    if (reflow){
        e.style.display = 'none'
    }
    else {
        e.style.visibility = 'hidden';
    } }

    // 使用jQuery重写debug函数

function debug() {
    var log = $("#debug.log"); // 找到要显示msg的元素.
    if (log.length == 0){
        log  $("<div id ='debuglog'><h1>Debug Log</h1></div>");
        log.appendTo(document.body);  // 将其追加到body里

    }
    log.append($("<pre/>").text(msg)); // 将msg包装在<pre>中，再追加到log里
}