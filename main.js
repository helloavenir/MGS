// this 

// 일반(Normal) 함수는 호출된 위치에 따라 this 정의됨!

// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this가 정의됨!



const heropy = {
  name: 'Heropy',  
  normal: function() {                       // : function 부분을 생략해 normal () { 이라고 해도 됨
    console.log(this.name)  
  },
  arrow: () => {
    console.log(this.name)
  }
}
  
  heropy.normal()     // Heropy
  
  heropy.arrow()       // undefined(선언된 함수 범위에서 this가 무엇인지 알 수 없기 때문)
  
  
  
  
  
  const amy = {
  
  name: 'Amy',
  
  normal: heropy.normal,
  
  arrow: heropy.arrow
  
  }
  
  