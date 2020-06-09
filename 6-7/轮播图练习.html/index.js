window.onload = function () {
  var currentIndex = 0;
  var images = document.getElementsByTagName("img");
  var dotUl = document.getElementById("dot");
  var dotList = dotUl.getElementsByTagName("li");
  var banner = document.getElementById("bannerPicture");
  var rightBtn = document.getElementById("rightBtn");
  var leftBtn = document.getElementById("leftBtn");

  banner.onclick = function (event) {
    if (event.target === rightBtn) {
      changeImage(currentIndex + 1);
    } else if (event.target === leftBtn) {
      changeImage(currentIndex - 1);
    } else if (event.target.parentNode.parentNode === dotUl) {
      changeImage(+event.target.parentNode.dataset.index);
    }
  };
  function changeImage(index) {
    if (index < 0) {
      index = images.length - 1;
    } else if (index >= images.length) {
      index = 0;
    }

    var a = document.querySelector("#dot .active");
    a.className = "";
    dotList[index].className = "active";
    images[currentIndex].style.opacity = 0;

    images[currentIndex].style.zIndex = 0;
    currentIndex = index;
    images[currentIndex].style.opacity = 1;

    images[currentIndex].style.zIndex = 1;
  }
};
