const original = [{ a: 1 }, { a: 5 }, { a: 2 }, { a: 3 }]; 
const mapFunction = (item) => {
  const elem = item.a; 

	return elem; }                            

const a = original.map(mapFunction); 
console.log(a);


