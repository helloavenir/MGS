const original = [1, 5, 2, 3];
const mapFunction = (item) => { 
  const elem = (item); 
 
	return elem; }                            
// original.map 을 호출시 매개변수로 넣은 callback함수가 반환하는 값을 모아서 // original 배열과 같은 길이의 새로운 배열을 만들어줌
const a = original.map(mapFunction); 
console.log(a);
