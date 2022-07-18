// Function 
// - fundamental building block in the program
// - subprogram can be used multi times
// - performs a task or calculates a value

// 1. Function declaration 
// function name(param1, param2) { body ... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint 
// function is object in JS
function log(message) {
  console.log(message);
}

log('Hello!');
log(1357);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder'; 
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);    // { name: "coder"}

// 3. Default parameters (added in ES6)
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');    // Hi! by undefined

function showMessage(message, from = 'unknown') {          // from의 default 값을 unknown으로 지정
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');    // Hi! by unknown

// 4. Rest parameters (added in ES6)
function printAll(...args) {    // ...args : Rest parameters, 배열 형태로 전달됨
  for (let i = 0; i <args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {    // 위의 for문을 이렇게 간단하게 작성할 수도 있다 !
    console.log(arg);
  }
}
printAll('dream', 'coding', 'ellie');

// 5. Local Scope
let globalMessage = 'global';    // global variable
function printMessage() {
  let message = 'goodbye';
  console.log(message);    // local variable, (함수)밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다 !
  console.log(globalMessage);
  function printAnother() {
    console.log(message);           // 자식은 부모에게서 정의된 것을 볼 수 있지만, 
    let childMessage = 'goodbye';
  }
  console.log(childMessage);       // 자식에게서 정의된 것을 부모(상위)에서 볼 수는 없다 ! 에러 발생
}
printMessage();
console.log(message);    // 지역변수인 message를 함수 밖에서 실행했기 때문에, (정의되지 않은 변수로) 에러 발생 !

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(2, 3);    // 5
console.log(`sum: %{sum(2, 3)}`);    //sum: 5

// 7. Early return, early exit
// bad
function upgraseUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgraseUser(user) {
  if (user.point <= 10) {    // 조건이 맞지 않을 때 빨리 리턴을 하도록 작성하면, 조건이 맞을 때의 긴 로직을 거치지 않아도 되는 효율 !
    return;
  }
  //long upgrade logic...
}
