
let finalResult;

let evenOddResult;

// Add your code here
  let number1 = 1
  let number2 = 2
  let number3 = 3
  let number4 = 4

  let number5 = number1 + number2;
  let number6 = number3 - number4;



  finalResult = number5 * number6;




// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const finalResultCheck = finalResult === 48 ? `Yes, well done!` : `No, it is ${ finalResult }`;
para1.textContent = `Is the finalResult 48? ${ finalResultCheck }`;
const para2 = document.createElement('p');
const evenOddResultCheck = evenOddResult === 0 ? 'The final result is even!' : 'The final result is odd. Hrm.';
para2.textContent = evenOddResultCheck;

section.appendChild(para1);
section.appendChild(para2);
    