function countDown(count) {
  let i = 0;
  while (i < count) {
    alert(count-i);
    i++;
  }
  alert('펑');
}

function sayHello() {
  console.log('안녕');
}

function double(input) {
  console.log(input*2);
}

function countTen() {
  for (let i=1 ; i<11; i++) {
    console.log(i);
  }
}

function countDouble(number) {
  for (let i=0; i<10; i++) {
    console.log((number*i)+2);
  }
} 