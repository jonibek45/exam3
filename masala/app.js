// 1-chi masala
const count = Number(prompt('nechta son kiritmoqchisiz?'));
const array = [];
let sum = 0;

for (let i = 0; i < count; i++) {
   const number = Number(prompt(`${i + 1}-raqamni kiriting`));

if (!isNaN(number)){
    array.push(number);
    sum += number;

}
}

console.log(array, sum);


//2-chi masala



let salaries = {
   "Akmal": 1200,
   "Salim": 5200,
   "Karima": 1800
}

function sumSalaries(salaries) {

  let answer = 1200 + 5200 + 1800;
  console.log(answer);
}
sumSalaries(salaries)


