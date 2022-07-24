var swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var btn = document.getElementById("btn")
btn.addEventListener("click", function () {
  if (btn.classList.contains("active") === true) {
    this.classList.add("close");
    this.classList.remove("active");
  } else {
    this.classList.add("active");
    this.classList.remove("close");
  }
});

var offsetValue;

$(document).ready(function () {    //頁面一進來就會跑的程式
  detectionWidow();            //偵測螢幕的function，第40行

  $(window).resize(function () {   //當螢幕調整過尺寸（左右拖拉時），跑的程式
    detectionWidow();        //偵測螢幕的function，第40行
  });
});

function detectionWidow() {
  if ($(window).width() > 576) {
    offsetValue = 134;
  }
  else {
    offsetValue = 0;
  }
}

$('li>a').on('click', function (e) {// 監聽 nav 下的每個 a
  e.preventDefault();
  const anchor = $(this).attr('href');//取得個別點擊時的href，就是個別id的區塊 e.g #zone1
  const linkScroll = $(anchor).offset().top;// 每個區塊的最上方距離 document 最上方有多遠
  $('html,body').stop().animate({ // 加入stop() 讓選單滑動時不用等到動畫全程跑完就可以點選其他選單
    scrollTop: linkScroll - offsetValue // 43 是此範例 header 的高度，因為 header 設定 fixed 所以扣掉，
    // 但 zone1 要設定 padding-top 空間才不會被蓋掉
  }, 100)
});
