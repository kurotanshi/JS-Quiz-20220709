// 目前顯示的圖片索引
var imgCurrPos = 0;

// .img-window 的長度由圖片數量決定
$('.img-window').css('width', $('.img-window img').length * 400 + 'px');

// 下一張
$('.img-list-handler .next').on('click', function (e) {
  e.preventDefault();

});

// 前一張
$('.img-list-handler .prev').on('click', function (e) {
  e.preventDefault();

});