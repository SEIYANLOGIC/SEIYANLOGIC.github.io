$(function(){
  // ここに「#@@@-show」要素に対するclickイベント（＝jQuery処理）を作成します
  $('#order-show').click(function(){
  $('#order-modal').fadeIn();
  });
// 「.close-modal」要素にclickイベントを設定してください
  $('.close-modal').click(function() {
    $('#order-modal').fadeOut();
  });

//  restaurant-sushi3の内容
//  indexページ内のリンクにより、ヘッダー、フッターのメニューリストから移動可能
//  モーダル機能により、予約ボタンをクリックするとモーダル開く
//　ホームページがスクロールしてもモーダルは固定,背景色暗くして見易く
//  モーダルの右上をクリックするとモーダルが消える
//  ホームページの選択ボタンをクリックすると詳細の説明ファイルJPGに移動
//  ヘッダー部はホームページをスクロールしても固定
//　アニメーション処理はしていない
//  jpg,pngのデータを使用する事とした。webpはグーグルのデータ形式のようですがjpgへ形式変換して使用

// restaurant-sushi4の追加項目
//  銀座店をhtmlで表現 ginza.html
//  index.htmlからginza.htmlへ移動、逆も移動出来るようにした
//  銀座店からも予約ボタンでmodal表示可能にした
//  同様に、六本木店と赤坂店についても htmlで表現 roppongi.html,akasaka.html
//  index.htmlから@@@.htmlへ移動、逆も移動出来るようにした
//  六本木店と赤坂店からも予約ボタンでmodal表示可能にした
//  六本木店の説明img部分は独自にクラス設定などして修正
//  赤坂店のchefのimg及び名前は独自にクラス設定などして修正

//　レスポンシブ対応したが、こだわりの部分が未完
//　タブレット時、マグロと鯛の写真の高さにずれ
//　スマートフォン時、アピール写真とマグロが重なる。




//以下にページ内リンクのアニメーション処理を記入する。header部とfooter部
//  $('header a').click(){
//    var id = $(this).attr('href');
//    var position = $(id).offset().top;

//    $('html , body').animate({
//      'scrollTop':position
//    },1000);
//  }

//  $('footer a').click(){
//    var id = $(this).attr('href');
//    var position = $(id).offset().top;

//    $('html , body').animate({
//      'scrollTop':position
//    },1000);
//  }


});
