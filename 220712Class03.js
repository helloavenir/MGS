// 아래 코드를 switch문으로 변환해 보기

// let a = +prompt('a','');

// if (a == 0) {
//   alert(0);
// }

// if (a == 1) {
//   alert(1);
// }

// if (a == 2 || a == 3) {
//   alert('2,3');
// }



let a = 3;
switch(a) {
  case 0:
    console.log(0);
    break;
  case 1:
    console.log(1);
    break;
  case 2:
  case 3:
    console.log('2,3');  
}

