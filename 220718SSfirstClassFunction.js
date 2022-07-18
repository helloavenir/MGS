// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable.
// can be passed as an argument to other functions.
// can be returned by another function.

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
print();    // 밑에 보다시피 함수 표현식으로 되어진 경우에는 호이스팅 불가
const print = function () {    // anonymous function, 함수 선언 이전에 호출되는 것은 호이스팅이 됨.
  console.log('print');       // 자바스크립트 엔진이 (함수) 선언된 것을 제일 위로 올려 줌
};
print();    // print
const printAgain = print;
printAgain();    // print
const sumAgain = sum;
console.log(sumAgain(10, 20));    // 30

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {    // parameter로 전달된 함수 : callback 함수
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function print() {     // named function 은
  console.log('yes!');                  // better debugging in debugger's stack traces 할 때 필요
  print();                              // recursions 할 때 필요
};                                      

const printNo = function print() {
  console.log('no!');
};

randomQuiz('wrong', printYes, printNo);    // no!
randomQuiz('love you', printYes, printNo);    // yes!

// 3. Arrow function
// always anonymous
const simpleprint = function () {
  console.log('simplePrint!');
};

const simpleprint = () => console.log('simplePrint!');    // 위의 함수를 화살표 함수로 표현
const add = (a, b) => a + b;    // 한 줄인 경우 블록없이 표현이 가능하지만, 여러줄인 경우에는 
const simpleMultiply = (a, b) => {     // 이와 같이 블록 안으로 여러 줄로 작성, 이 때는 꼭 return 키워드를 작성해줘야 !
  // do something more
  return a * b;
}

// 4. IIFE : Immediately Invoked Function Expression
function hello() {
  console.log('IIFE');
}

(function hello() {         // 위의 함수를 이와 같이 소괄호로 묶어주면 바로 호출된다.
  console.log('IIFE');
})();


