const original = [1, 5, 2, 3];
const mapFunction = (item) => { 
  const elem = ( item * 2 ); 
  return elem; 
}                            

const a = original.map(mapFunction); 
console.log(a);

