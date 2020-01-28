
const Panel = ({ num }) => `<li>${num}</li>`;

let panelArray = [1,2,3,4,5,6,7,8,9,10,11,12];

// 画面の読み込みが完了したら（画面が表示されたら）
$(function () {
  // 画面が表示されたら、ここの処理が実行される

  // 1 〜 12のパネルを表示する
  panelArray.forEach(number => {

    $('#puzzle-container').append(
      Panel({ num: number })
    );

  })

  // パネルを動かせるようにする
  $('#puzzle-container').sortable();
  $( "#puzzle-container" ).disableSelection();

 })