//Closure
// let count = 0;
/* function add(){
  let count = 0;
  return count += 1;
}

add();
console.log(add());
document.write(add(),br(2)); */

/* function add(){
  let count = 0;
  function plus(){
    count += 1;
  }
  plus();
  return count
} */

/* function add(){
  let count = 0;
  return function plus(){count += 1;}
} */

function temporary(){
  let count = 0;
  return function() {
    // count += 1;
    count = count+1;
  }
 
}
const add = temporary();
// console.dir(add);

// x=add();
// console.log(x);
// document.write(x,br(2))
// console.dir(add);
// add();
// console.dir(add);
// add();
// add();
// x=add()
// add()
console.log(add());  //????????
// document.write(add,br(2))





// Practice of diiferent methods

let text = "Visit W3Schools";
let result = text.match(/w3schools/i);
document.write(result);
document.write(br(3));


// Arrow fuction
//(param1, param2) => expression

// Traditional Anonymous Function

/* 
(function (a) {
    return a + 100;
  })
  
  // Arrow Function Break Down
  
  // 1. Remove the word "function" and place arrow between the argument and opening body bracket
  (a) => {
    return a + 100;
  }
  
  // 2. Remove the body braces and word "return" — the return is implied.
  (a) => a + 100;
  
  // 3. Remove the argument parentheses
  a => a + 100; 
  
  */

//--------------------

const sum = (a,b) => a+b;

document.write(sum(4,5),br(3));



//traditiona 
function multiply(x,y){
    return x*y;
}

document.write(multiply(4,5),br(3));

const x=(x,y) =>{
    return x*y;
}

document.write(x(7,5),br(3));


//advanced
([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30

//Arrow functions used as methods
/* 'use strict';

const obj = { // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c() {
    console.log(this.i, this);
  },
}

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...} */




































//------------

// function vowelCount(txt){

//     let count = 0;
//     let vowels = /[aeiou]/gi;
//     let vowelsInString = txt. match(vowels);
//     count = vowelsInString.length;
//     return sp(8)+"Ans: Number of vowels in [ "+txt+" ] => ["+vowelsInString+"] counts => "+count;
// }

// document.write(vowelCount('jOhn doe'),br(3));


// alternative 
// function vowelCount(txt){
//     let count = 0;
//     let vowels ='aeiouAIEOU'
//     let vowelsInString = txt. match(/[vowels]/gi);

//     for (let i = 0; i <txt.length; i++){
//         if (vowels.search(txt.slice(i,i+1)) != -1){
//             count++;
//         }
//     }
//     return sp(8)+"Ans: Number of vowels in [ "+txt+" ] => ["+vowelsInString+"] counts => "+count;
// }
    
// document.write(vowelCount('JOhn doe'),br(3));








//Q1. Write a function to extract all the values from {model: 'infiniti', year: '2003', type: 'sedan'}

//trying to print property vs value //not done

function objectValue(){
  let car = {model: 'infiniti', year: '2003', type: 'sedan'};
  let objProperty = Object.keys(car);
  document.write(typeof(objProperty),br(1));
  // Array.from(objProperty);
  document.write(typeof(objProperty),br(1));
  document.write(objProperty,br(2));
  
  let objValue = ''

  for (let i in car){
      // document.write(objProperty[i],br(1));
      document.write(i+' : '+car[i]+br(1));   // finally one by oneline
      document.write(i+" : '"+car[i]+"'"+br(1));
      objValue += car[i]+' ';
  }
  document.write(objValue,br(1));
  document.write(typeof(objValue),br(2));
 
  //Array.from(objValue);
  objValue.split(' ');
  document.write(typeof(objValue),br(2));
  document.write(objValue,br(1));


  for (let i =0; i < objProperty.length;i++){
      document.write(objProperty[i],br(1));
      // document.write(objValue[i],br(1));
  }
  //  return objValue;
   
   //document.write(objProperty[0],br(1));
  
 
  
  // return objProperty;
 
}

document.write('Q1. ',br(2));
objectValue();
//document.write(objectValue({model: 'infiniti', year: '2003', type: 'sedan'}),br(2));

const c={model: 'infiniti', year: '2003', type: 'sedan'};
// document.write(JSON.stringify(c));























// --------- This is a function to make space ----------------//
function sp(a){
    let s=''
    if (a >= 0){for (let i=1; i <= a; i++){s += '&nbsp';}}
    return s;
}
// ---------- This is a function to make line break ----------//
function br(a){
    let b=''
    if (a >= 0){for (let i=1; i <= a; i++){b += '<br/>';}}
    return b;
}
// End of funtions   ----------------------------------------//
