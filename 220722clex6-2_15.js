// 다음 코드를 { a: 5 } 객체를 출력하는 코드로 바꾸어 보기

const original = [{ a: 1 }, { a: 5 }, { a: 2 }, { a: 3 }];

const findFunction = item => {
  const obj = item; 
  if (obj.a === 5)	
  return true;
}
                        
const a = original.find(findFunction); 
console.log(a);
console.log(original);





// 주의 ! 위와 같은 방법은 기존 original 배열이 가진 값을 훼손함 



