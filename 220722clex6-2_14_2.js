const original = [{ a: 1 }, { a: 5 }, { a: 2 }, { a: 3 }];
const mapFunction = (item) => {
  const obj = (item); 
  const anoObj = {a: obj.a * 2};  
  return anoObj ; }                           
const a = original.map(mapFunction); 
console.log(a);
console.log(original);





// 주의 ! 위와 같은 방법은 기존 original 배열이 가진 값을 훼손함 



