//https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

function multiTable(number) {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      if(i < 10){
        table += `${i} * ${number} = ${i * number}\n`;
      }else{
        table += `${i} * ${number} = ${i * number}`;
      } 
    }
  
    return table;
}

//https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript

function greet(name){
    return `Hello, ${name} how are you doing today?`
}

//https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript

function sumStr(a,b) {
    sum = Number(a) + Number(b)
    return `${sum}`
}

//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
    if( n >= 1 && n < 13 ){
      return n-1
    }else if( n > 13 ){
      return n-2
    }else{
      return n
    }
}

//https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

function lovefunc(flower1, flower2){
    let love = flower1 + flower2 
    if (love % 2 == 0){
      return false
    }else{
      return true
    }
}