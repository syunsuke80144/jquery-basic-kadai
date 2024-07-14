$(function(){
  // class属性がbtnの要素がクリックされたら
  $('.btn').on('click', function(){
    if($('.text-box').val()=='') {
        // テキストボックスに文字を出力する
        $('.text-box').val('クリックしました！');
      } else {
        // テキストボックスをブランクにする
        $('.text-box').val('');
      }
  });
});