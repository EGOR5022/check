/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
setTimeout(function(){
  document.body.classList.add('body_visible');
}, 200);

$(function() {
 jQuery.scrollSpeed(100, 800, 'easeOutCubic');
})
function disablecontext(e) {
  var clickedEl = (e==null) ? event.srcElement.tagName : e.target.tagName;
  if (clickedEl == "IMG") {
      alert(errorMsg);
      return false;
  }
}
var errorMsg = "Вы не можете сохранять изображения с этого сайта.";
document.oncontextmenu = disablecontext;

canvas.oncontextmenu = function (e) {
  e.preventDefault();
};