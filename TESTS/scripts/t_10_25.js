
function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById('description');
    description.firstChild.nodeValue = text;

}
//函数分３部分１．判断　２．变量命名　３．变量遍历
function prepareGallery() {
    // 1.判断
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("imagegallery")) return false;
    // 2.变量命名
    var gallery = document.getElementById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    // 3. 变量遍历
    for ( var i=0, i <links.length;i++){
        links[i].onclick = function () {
            showPic(this);
            return false;
        }

    }
}