// Sukurkite masyvą a, b, c. Parodykite masyvą naudodami console.log funkciją.

let arr0 = ['a', 'b', 'c'];
console.log(arr0);
	
// Naudodamiesi ankstesnės užduoties masyvu, parodykite pirmojo, antrojo ir trečiojo elementų turinį.
// 	Sukurkite masyvą a, b, c, d ir naudodami jį parodykite eilutė a + b, c + d.
	
console.log(arr0[0]);
console.log(arr0[1]);
console.log(arr0[2]);

let arr1 = ['a', 'b', 'c', 'd'];
console.log(arr1[0] + ' + ' + arr1[1] + ', ' + arr1[2] + ' + ' + arr1[3]);

// Sukurkite masyvą su elementais 2, 5, 3, 9.
// 	Pirmąjį masyvo elementą padauginkite iš antrojo, o trečiąjį elementą iš ketvirtojo.
// 	Sudėkite rezultatus, priskirkite kintamąjam. Parodykite šio kintamojo reikšmę.
	
let arr2 = [2, 5, 3, 9];
let mult1 = arr2[0]*arr2[1];
let mult2 = arr2[2]*arr2[3];
console.log(mult1);
console.log(mult2);

// Yra pateiktas masyvas [[1, 2, 3], [4, 5, 6], [7,8,9]]. Parodykite skaičių 4 iš šio masyvo.

let arr3 = [[1, 2, 3], [4, 5, 6], [7,8,9]];
console.log(arr3[1][0]);
	
// Duoti du masyvai: 1, 2, 3 ir 4, 5, 6. Sujunkite juos.
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
let arrMerge = arr4.concat(arr5);
console.log(arrMerge);
	
// Duotas masyvas 1, 2, 3. Iš jo padarykite masyvą 3, 2, 1.

let arr6 = [1, 2, 3];
let arrRev = arr6.reverse();
console.log(arrRev);
	
// Duotas masyvas 1, 2, 3. Pridėkite elementus 4, 5, 6 į galą ir -1, -2, -3 į priekį.

let arr7 = [1, 2, 3];
arr7.push(4, 5, 6);
arr7.unshift(-3, -2, -1);
console.log(arr7);

	
// Duotas masyvas html, css, js. Parodykite pirmąjį ir paskutinį elementus.

let arr8 = ['html', 'css', 'js'];
console.log(arr8[0], arr8[2]);
	
// Duotas masyvas 3, 4, 1, 2, 7. Surūšiuokite jį.

let arr9 = [3, 4, 1, 2, 7];
let arrSort = arr9.sort();
console.log(arrSort);
	
// Duotas masyvas 1, 2, 3, 4, 5. Konvertuokite masyvą į 1, 2, 3.

let arr10 = [1, 2, 3, 4, 5];
arr10.pop();
arr10.pop();
console.log(arr10);