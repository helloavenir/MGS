// else if문이 있는 조건부 연산자
// 조건부 연산자를 사용해 아래 코드를 변행해 보기
// let message;
// 
// if (login == '직원') {
//   message = '안녕하세요.';
// } else if (login == '임원') {
//   message = '환영합니다.';
// } else if (login == '') {
//   message = '로그인이 필요합니다.';
// } else {
//   message = '';
// }



let message;

let login = '행인';
message = (login == '직원')? 
  '안녕하세요.' : ((login == '임원')? '환영합니다.':((login == '')? '로그인이 필요합니다.':'' ));
