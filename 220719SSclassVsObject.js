// class person{
//   name;      - 속성
//   age;       (field)
//   speak();   - 행동
// }            (method)  cf. 속성만 있는 클래스는 데이터 클래스라고 부름.

// class              vs           object
// - template                      - instance of a class
// - declare once                  - created many times
// - no data in                    - data in
// 클래스는 정의만 한 것이라 실제 메모리에 올라가지 않지만,
// 오브젝트는 실제 데이터가 들어가면서 메모리에 올라가게 된다.

'use strict';
// Object-oriented programming
// JavaScript classes
// - introduced in ES6, 클래스 도입 전에는 함수를 이용해 바로 오브젝트를 만들었다.
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {              // class 키워드를 통해 Person이라는 클래스를 만듬
  // construcor
  constructor(name, age) {    // 생성자(constructor)를 통해 오브젝트를 만들때, 필요한 데이터(파라미터를 통해)를 전달
    // fields
    this.name = name;    // 전달받은 데이터를 클래스에 존재하는 속성(필드)에 할당해준다.
    this.age = age;
  }

  // method
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// 오브젝트 생성
const ellie = new Person('ellie', 25);   // 오브젝트를 만들 때는 new라는 키워드를 사용, 컨스트럭터의 name과 age라는 데이터가 전달된다.
console.log(ellie.name);        // ellie
console.log(ellie.age);         // 25
ellie.speak();                  // ellie: hello!

// 2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

//   get age() {              // get이라는 키워드를 이용하여 (age)값을 리턴
//     return this.age;       // age라는 getter를 정의하는 순간, this.age가 메모리에 올라간 데이터를 읽어오는 것이 아니라,
//   }                        // 이 getter를 호출하게 된다.

//   set age(value) {         // set이라는 키워드를 이용하여 값을 설정
//     this.age = value;      // age라는 setter를 정의하는 순간, = age 즉 바로 메모리에 값을 할당하는 것이 아니라, 
//   }                        // 이 setter를 호출하게 된다.
// }                          // 이 때, 함수 이름과 변수의 이름이 같아 변수에 할당된 뒤, 다시 같은 이름의 함수가 재귀적으로 호출되는 문제를
//                            // 해결하기 위해 함수 안의 변수명을 함수명과 아래처럼 다르게 설정해줘야 한다 !

  get age() {              
    return this._age;         // 따라서, User 클래스 안에는 총 3개의 필드가 있게 된다. firstName, lastName, _age
  }                        

  set age(value) {     
    if (value < 0) {
      throw Error('age can not be negative');
    }   
    this._age = value;        // this._age = value < 0 ? 0 : value; 위의 if문 대신 더 젠틀하게 이렇게 작성할 수도 있다.   
  }                       
}   

const user1 = new User('Steve', 'Jobs', -1);     // 사용자가 입력한 -1이라는 나이는 말이 되지 않는다.
                                                 // 이를 방지하기 위해 getter와 setter를 도입
console.log(user1.age);                          // .age를 호출하거나 설정할 수 있는 것은 내부적으로 getter와 setter 때문이다.

// 3. Fields (public, private)
// added in too soon!
class Experiment {          // constuctor 생성자를 쓰지 않고 필드를 정의할 수 있게 됨
  publicField = 2;          // 그냥 쓰면 퍼블릭
  #privateField = 0;        // 해시 기호를 쓰면 프라이빗 
}
const experiment = new Experiment();
console.log(experiment.publicField);     // 2
console.log(experiment.privateField);    // undefined

// 4. Static properties and methods
// added in too soon!
class Article {
  static publisher = 'Dream Coding';    // 데이터(오브젝트)와 상관없이 주어지는 클래스의 값과 메소드를 동일하게 사용할 때 static로 지정
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);   // undefined,    static을 사용하지 않았다면 object의 메소드 publisher를 사용할 수 있었을 것.
                                   // static 지정으로 article1이라는 오브젝트의 publisher는 값이 지정되지 않았다고 여겨진다.
                                   // static이 붙으면 오브젝트마다 publisher의 값이 지정되는 것이 아니라, Article이라는 클래스 자체에 값이 정해진 것.
console.log(Article.publisher);    // Dream Coding
Article.printPublisher();          // Dream Coding
                                   // 오브젝트에 상관없이, 들어오는 데이터와 상관없이 공통적으로 클래스에서 쓸 수 있는 것이라면 static을 사용하는 것이 
                                   // 메모리의 사용을 좀 더 줄일 수 있을 것

// 5. Inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}    // extends 키워드를 사용하여 Shape의 클래스를 Rectangle로 확장함
class Triangle extends Shape {      // extends 키워드를 사용하여 Shape의 클래스를 Triangle로 확장함
  getArea() {                       // 필요한 함수만 재정의해서 사용할 수 있다.(오버라이딩), 재정의된 것은 원래 클래스에서 호출되지 않음 !
    return this.width * this.height / 2;
  }
}     

const rectangle = new Rectangle(20, 20, 'yellow');
rectangle.draw();    // drawing yellow color of
const triangle = new Triangle(10, 10, 'red');
triangle.draw();    // drawing red color of
console.log(rectangle.getArea());    // 400

// 6. Class checking: instanceOf operator
// 왼쪽의 인스턴스가 오른쪽 클래스의 인스턴스인지 아닌지 불리언 값으로 반환
console.log(rectangle instanceof Rectangle);    // true
console.log(triangle instanceof Rectangle);     // false
console.log(triangle instanceof Triangle);      // true
console.log(triangle instanceof Shape);         // true
console.log(triangle instanceof Object);        // true, 모든 클래스는 자바스크립트의 Object 클래스를 상속한 것이다.
                                                // 그래서, toString도 쓸 수 있고, constructor도 사용할 수 있는 것


                                                

