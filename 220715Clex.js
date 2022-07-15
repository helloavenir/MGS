// 프로퍼티 선언하는 법 1

let user = {
  ID: "Tom",
  age: 35,
};


// 프로퍼티 선언하는 법 2(computed property)
// 변수를 사용하여 선언할 때 유용하다.

const myKey = 'name';
const student = {
  ['age']: 15,
  [myKey]: 'Jane',
}

console.log(student);    // {age: 15, name: 'Jane'}


// 프로퍼티 선언하는 법 3

const subject = 'Physics';
const teacher = {
  subject: subject,
}

console.log(teacher);      // {subject: 'Physics'}


const teacher2 = {
  subject,                 // 위의 변수명 subject와 프로퍼티명이 동일할 경우에는 위의 : subject가 생략가능하다.
}
console.log(teacher2);     // {subject: 'Physics'}


// 객체에 저장된 value에 접근하는 법 2: 객체["프로퍼티명"]
// 변수를 사용하여 접근할 때 유용

let player = {
  sports: "baseball",
  position: "left",
}

console.log(player['sports']);   // baseball

const keyTwo = 'position';

console.log(player[keyTwo]);    // left


// 구조분해할당

let obj = {
  a: 1,
  b: 2,
  c: 3,
}

let d = obj.a
let e = obj.b
let f = obj.c

// 콘솔창에서 입력시
// d      // 1
// e      // 2
// f      // 3

let { a: g, b: h, c: i } = obj;

// 콘솔창에서 입력시
// g      // 1
// h      // 2
// i      // 3

