// モーダルを開く
$('.show').modaal();

// シェアボタンを押した時の処理
$('.share_button').on('click', () =>{
    $('.show').modaal('close');
});
let modal1 = function() {
    alert('イタリアンのレシピをシェアしました♪');
}
let modal2 = function() {
    alert('フレンチのレシピをシェアしました♪');
}
let modal3 = function() {
    alert('ダイエットのレシピをシェアしました♪');
}
let modal4 = function() {
    alert('エスニックのレシピをシェアしました♪');
}