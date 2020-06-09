window.onload = function () {
  var bannerArr = document.getElementsByTagName("img");
  var currentIndex = 0;
  var bannerImg = document.getElementById("bannerImg");
  var leftBtn = document.getElementById("leftBtn");
  var rightBtn = document.getElementById("rightBtn");
  var dot = document.getElementById("dot");
  var dotList = dot.getElementsByTagName("li");

  for (const i of dotList) {
    i.onmousemove = selected;
  }
  //   for (const i of dotList) {
  //     i.onmouseout = cancleSelected;
  //   }
  for (const i of dotList) {
    i.onclick = dotClick;
  }
  function selected() {
    this.style.backgroundColor = "white";
    this.style.border = "4px solid black";
  }
  function cancleSelected() {
    this.style.backgroundColor = "rgba(77, 77, 77, 0.3)";
    this.style.border = "4px solid transparent";
  }
  rightBtn.onclick = rightChangeImage;
  leftBtn.onclick = leftChangeImage;
  function rightChangeImage() {
    bannerArr[currentIndex].className = "";
    bannerArr[currentIndex].style.zIndex = "0";
    dotList[currentIndex].onmouseout = cancleSelected;
    dotList[currentIndex].onmouseout();
    currentIndex++;
    if (currentIndex > 4) {
      currentIndex = 0;
    }
    dotList[currentIndex].onmousemove();
    bannerArr[currentIndex].style.zIndex = "1";
    bannerArr[currentIndex].className = "active";
  }
  function leftChangeImage() {
    bannerArr[currentIndex].className = "";
    bannerArr[currentIndex].style.zIndex = "0";
    dotList[currentIndex].onmouseout = cancleSelected;
    dotList[currentIndex].onmouseout();
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 4;
    }
    dotList[currentIndex].onmousemove();
    bannerArr[currentIndex].style.zIndex = "1";
    bannerArr[currentIndex].className = "active";
  }

  function dotClick() {
    bannerArr[currentIndex].className = "";
    dotList[currentIndex].onmouseout = cancleSelected;
    dotList[currentIndex].onmouseout();
    currentIndex = [...dotList].indexOf(this);
    bannerArr[currentIndex].style.zIndex = "1";
    bannerArr[currentIndex].className = "active";
    dotList[currentIndex].onmousemove();
    dotList[currentIndex].onmouseout = null;
  }
  dotList[0].onmousemove();
};
