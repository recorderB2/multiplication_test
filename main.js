list = [
  //   [0, 0],
  //   [0, 1],
  //   [0, 2],
  //   [0, 3],
  //   [0, 4],
  //   [0, 5],
  //   [0, 6],
  //   [0, 7],
  //   [0, 8],
  //   [0, 9],
  //   [0, 10],
  //   [1, 0],
  //   [1, 1],
  //   [1, 2],
  //   [1, 3],
  //   [1, 4],
  //   [1, 5],
  //   [1, 6],
  //   [1, 7],
  //   [1, 8],
  //   [1, 9],
  //   [1, 10],
  //   [2, 0],
  //   [2, 1],
  ///[2, 2],
  ///[2, 3],
  ///[2, 4],
  ///[2, 5],
  ///[2, 6],
  ///[2, 7],
  ///[2, 8],
  ///[2, 9],
  //   [2, 10],
  //   [3, 0],
  //   [3, 1],
  //   [3, 2],
  ///[3, 3],
  ///[3, 4],
  ///[3, 5],
  ///[3, 6],
  ///[3, 7],
  ///[3, 8],
  ///[3, 9],
  //   [3, 10],
  //   [4, 0],
  //   [4, 1],
  //   [4, 2],
  //   [4, 3],
  ///[4, 4],
  ///[4, 5],
  ///[4, 6],
  ///[4, 7],
  ///[4, 8],
  ///[4, 9],
  //   [4, 10],
  //   [5, 0],
  //   [5, 1],
  //   [5, 2],
  //   [5, 3],
  //   [5, 4],
  ///[5, 5],
  ///[5, 6],
  ///[5, 7],
  ///[5, 8],
  ///[5, 9],
  //   [5, 10],
  //   [6, 0],
  //   [6, 1],
  //   [6, 2],
  //   [6, 3],
  //   [6, 4],
  //   [6, 5],
  ///[6, 6],
  ///[6, 7],
  ///[6, 8],
  ///[6, 9],
  //   [6, 10],
  //   [7, 0],
  //   [7, 1],
  //   [7, 2],
  //   [7, 3],
  //   [7, 4],
  //   [7, 5],
  //   [7, 6],
  [7, 7],
  [7, 8],
  [7, 9],
  //   [7, 10],
  //   [8, 0],
  //   [8, 1],
  //   [8, 2],
  //   [8, 3],
  //   [8, 4],
  //   [8, 5],
  //   [8, 6],
  //   [8, 7],
  [8, 8],
  [8, 9],
  //   [8, 10],
  //   [9, 0],
  //   [9, 1],
  //   [9, 2],
  //   [9, 3],
  //   [9, 4],
  //   [9, 5],
  //   [9, 6],
  //   [9, 7],
  //   [9, 8],
  [9, 9],
  //   [9, 10],
  //   [10, 0],
  //   [10, 1],
  //   [10, 2],
  //   [10, 3],
  //   [10, 4],
  //   [10, 5],
  //   [10, 6],
  //   [10, 7],
  //   [10, 8],
  //   [10, 9],
  //   [10, 10],
];
let counter = document.getElementById("counter");
let question = document.getElementById("question");
let answer = document.getElementById("answer");
let next = document.getElementById("next");
let correct = document.getElementById("correct");
let abox = document.getElementById("abox");
let c = 0;
let f = 0;
next.onclick = function () {
  next.style.display = "none";
  if (c != 36) {
    abox.style.backgroundColor = "white";
    abox.style.color = "black";
    correct.innerHTML = "Answer";
    answer.value = "";
    answer.focus();
    counter.innerHTML = `Question ${++c}`;
    let random = Math.floor(Math.random() * list.length);
    let rq = `${list[random][0]} x ${list[random][1]}`;
    question.innerHTML = rq;
    let a = list[random][0] * list[random][1];
    setTimeout(function () {
      abox.style.color = "white";
      if (answer.value == a) {
        abox.style.backgroundColor = "green";
      } else {
        f += 1;
        abox.style.backgroundColor = "red";
        correct.innerHTML = a;
        answer.value = "";
      }
    }, 6000);
    setTimeout(function () {
      next.click();
    }, 8500);
    list.splice(random, 1);
  } else {
    document.getElementsByTagName("body")[0].innerHTML = "Wrong Answers = " + f;
  }
};
