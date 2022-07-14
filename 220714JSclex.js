// 별찍기 코드를 lineCount를 매개변수로 받는 함수로 수정해보기

function printStars(n) {
  for (let i = 0; i < n; i++) {
    let a='';
    for (let j = 0; j < i + n; j++) {
      let x = n - 2 -i;
      if (j <= x) {
        a += ' '
      } else {
        a += '*'
      }
    }
    console.log(a);
  }
}


// 1부터 100사이 숫자 중, 7로 나누었을 때 나머지가 2 혹은 5인 숫자만 출력하기 

for (i=1; i<101; i++) {
  if (i % 7 == 2 || i % 7 == 5) {
    console.log(i);
  }
  continue;    
}
  

// 코드 최적화

for (i = 2; i <= 100; i += 4) {
  let a = i % 7;
  if (a == 2 || a == 5) {
    console.log(a);
    i += 3;
  }
}


//a와 b 중 작은 값을 반환해주는 함수, min(a, b)을 만들기

function min (a, b) {
  if (a > b) {
    return b;
  }
  else  return a;
}


  
  
// 함수 선언식으로 작성한 함수를 함수 표현식으로 바꾸어보기
  
let min = function (a, b) {
  if (a > b) {
    return b;
  }
  else  return a;
}


// 별찍기 코드를 lineCount를 매개변수로 받는 함수로 수정해보기

function printStars(n) {
  for (let i = 0; i < n; i++) {
    let a='';
    for (let j = 0; j < i + n; j++) {
      let x = n - 2 -i;
      if (j <= x) {
        a += ' '
      } else {
        a += '*'
      }
    }
    console.log(a);
  }
}


// 매개변수인 boolean이 true이면 두번째 매개변수로 받은 함수 1 실행하고 false 이면 세번째 매개변수로 받은 함수 2 실행

function checkBoolean(boolean, func1, func2) {
  if (boolean) {
    func1(); 
  } else func2(); 
}

checkBoolean( true, function() {console.log('Hello')}, {console.log('Avenir')})
    

  

// 위의 callback 함수를 화살표 함수로 표현하기
checkBoolean(boolean, func1, func2) => {
  if (boolean) {
    func1(); 
  } else func2(); 
}

