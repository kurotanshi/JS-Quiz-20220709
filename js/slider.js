// 目前顯示的圖片索引
const imgCurrPos = 0;
const Window = $('.img-list-window'),
      Img = $('.img-list-window img'),
      Nxt = $('.next'),
      Prev = $('.prev'),
      ImgCount = Img.length;

// .img-list-window 的長度由圖片數量決定
const www = Window.css('width', ImgCount * 400 + 'px');

let idx = 0;

// 下一張
Nxt.on('click', function (e) {
  e.preventDefault();
  idx++;
  if(idx > ImgCount - 1){
    idx = 0;
  }
  Window.animate({left: idx * -400 + 'px'}, 500);
});

// 前一張
Prev.on('click', function (e) {
  e.preventDefault();
  idx--;
  if(idx < 0){
    idx = ImgCount - 1;
  }
  Window.animate({left: idx * -400 + 'px'}, 500);
});