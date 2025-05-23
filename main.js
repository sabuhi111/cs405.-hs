
function bolenler(eded) {
  var netice = []; 
  for (var i = 1; i <= eded; i++) {
    if (eded % i === 0) {
      netice.push(i);
    }
  }
  return netice;
}

console.log(bolenler(24));

function bolenSay(eded) {
  var say = 0;
  for (var i = 1; i <= eded; i++) {
    if (eded % i === 0) {
      say++;
    }
  }
  return say;
}


console.log(bolenSay(32)); 

function upperStr(str) {
  return str.toUpperCase();
}


console.log(upperStr("salam")); 

function quvvetUstune(ed1, ed2) {
  return Math.pow(ed1, ed2);
}

var say1 = parseFloat(prompt("Birinci ədədi daxil et:"));
var say2 = parseFloat(prompt("İkinci ədədi daxil et:"));

console.log(quvvetUstune(say1, say2));

function convert(str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (ch === ch.toUpperCase()) {
      result += ch.toLowerCase();
    } else {
      result += ch.toUpperCase();
    }
  }

  return result;
}


console.log(convert("saLamNecesen")); 
console.log(convert("code aCEdEmY")); 

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// 1. Əgər "Meat" artıq yoxdursa, əvvələ əlavə et
if (!shoppingCart.includes('Meat')) {
  shoppingCart.unshift('Meat');
}

// 2. Əgər "Sugar" artıq yoxdursa, sona əlavə et
if (!shoppingCart.includes('Sugar')) {
  shoppingCart.push('Sugar');
}

// 3. "Honey" varsa, sil
const honeyIndex = shoppingCart.indexOf('Honey');
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}

// 4. "Tea" varsa, onu "Green Tea" ilə əvəz et
const teaIndex = shoppingCart.indexOf('Tea');
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = 'Green Tea';
}

console.log(shoppingCart);

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

// 1. Reverse array
countries.reverse();

// 2. "Canada" və "Denmark" silinsin, yerinə "Azerbaijan" gəlsin
// Qeyd: Array artıq tərsinə olduğu üçün əvvəlcə indekslərini tapmalıyıq

const canadaIndex = countries.indexOf('Canada');
if (canadaIndex !== -1 && countries[canadaIndex + 1] === 'Denmark') {
  countries.splice(canadaIndex, 2, 'Azerbaijan');
}

console.log(countries);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

// Birləşdirmə:
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 1. İlk 3 şirkət
const firstThree = itCompanies.slice(0, 3);
console.log("First 3 companies:", firstThree);

// 2. Son 3 şirkət
const lastThree = itCompanies.slice(-3);
console.log("Last 3 companies:", lastThree);

// 3. Ortadakı şirkət(lər)
const midIndex = Math.floor(itCompanies.length / 2);
const middle = itCompanies.length % 2 === 0
  ? itCompanies.slice(midIndex - 1, midIndex + 1)
  : itCompanies.slice(midIndex, midIndex + 1);
console.log("Middle company(ies):", middle);

// 4. Şirkətləri sırala
const sortedCompanies = [...itCompanies].sort();
console.log("Sorted companies:", sortedCompanies);

// 5. Hər bir şirkət adını böyük hərflərlə çap et
console.log("Companies in uppercase:");
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

// 6. "Google" varsa çap et, yoxdursa mesaj ver
if (itCompanies.includes('Google')) {
  console.log('Google');
} else {
  console.log('Company is not found');
}

// 7. İçində bir neçə 'o' olan şirkətləri filterlə (filter metodu olmadan)
console.log("Companies with more than one 'o':");
for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i];
  let oCount = 0;
  
  for (let j = 0; j < company.length; j++) {
    if (company[j].toLowerCase() === 'o') {
      oCount++;
    }
  }

  if (oCount > 1) {
    console.log(company);
  }
}

for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

const products = [
  { id: 1, title: "Smartphone", price: 799.99 },
  { id: 2, title: "Laptop", price: 1299.99 },
  { id: 3, title: "Coffee Maker", price: 99.99 },
  { id: 4, title: "Headphones", price: 199.99 },
  { id: 5, title: "Smart TV", price: 699.99 }
];

// Qiymətlərin cəmi
const total = products.reduce((sum, product) => sum + product.price, 0);

// Qiymətlərin ortalaması
const average = total / products.length;

console.log("Cəm:", total.toFixed(2));       // Məsələn: 3099.95
console.log("Orta qiymət:", average.toFixed(2)); // Məsələn: 619.99