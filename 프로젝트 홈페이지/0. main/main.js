var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);
 
function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}
 
var listItems = document.querySelectorAll("#main_brand_new_text");
 
function scrolling(e) { 
    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];
 
        if (isPartiallyVisible(listItem)) {
            listItem.classList.add("active");
        } 
        else {
        listItem.classList.remove("active");
        }
    }
}
 
function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
 
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
 
    return ((top + height >= 0) && 
        (height + window.innerHeight >= bottom));
}