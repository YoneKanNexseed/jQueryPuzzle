
const Panel = ({ num }) => `<li>${num}</li>`;

let panelArray = [1,2,3,4,5,6,7,8,9,10,11,12];

// 画面の読み込みが完了したら（画面が表示されたら）
$(function () {
  // 画面が表示されたら、ここの処理が実行される

  // shuffle関数を使って、配列をシャッフルする
  // 結果を変数shuffledArrayに保存する
  let shuffledArray = shuffle(panelArray);

  // 1 〜 12のパネルを表示する
  shuffledArray.forEach(number => {

    $('#puzzle-container').append(
      Panel({ num: number })
    );

  })

  // パネルを動かせるようにする
  $('#puzzle-container').sortable();
  $( "#puzzle-container" ).disableSelection();

})

// 配列をシャッフルしてくれる関数
function shuffle(array) {
    let copyArray = [...array];
    for (let i = copyArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = copyArray[i];
        copyArray[i] = copyArray[j];
        copyArray[j] = temp;
    }
    return copyArray;
}


$('.btn-check').on('click', () => {

  // 空の配列を用意
  let userAnswer = [];

  //1. 画面のliタグを全部取ってきて、配列に入れる
  $('li').each(function () {
    // console.log($(this).text())
    userAnswer.push($(this).text());
  })

  //2. liタグの配列と、正解の配列を比較する
  console.log(userAnswer.toString())
  console.log(panelArray.toString())

  if (userAnswer.toString() == panelArray.toString()) {
    alert('正解')
  } else {
    alert('不正解');
  }

})