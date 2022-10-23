// // 1
// const suma = (num1, num2) => num1 + num2;

// console.log(suma(5, 4));

// //2
// const stringLength = (str) => {
//     console.log(`the length of "${str}" is:`, str.length)
// }

// let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";
// stringLength(longestCityNameInTheWorld);

//3
// const stringLength = (str) => {
//     let length = str.length;
//     console.log(`the length of "${str}" is:`, length);
//     return str.length;
// }

// stringLength("willynilly");

//4
// let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"];

// const showAlert = (name) => {
//     alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`);
// }

// showAlert("you ball of fluff");

//5
// const oneTwoThreeRotate = () => {
//     Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(tag){
//             tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
//         });
// }

// oneTwoThreeRotate();

//6

//7
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);