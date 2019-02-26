/*Что-то совсем не получается своей головой привести к разумному виду...
//Задание 1//
console.log('-----Задание 1-----');
var i = 2;
while (i != 101){
	if (i / 1 == i && i % i == 0){

		console.log(i++);
	}
}
console.log('все');*/

//Задание 2//
console.log('-----Задание 2-----');
//Прошу прощения за названия переменных. Было мало времени на обдумывания.

var korzina = [];
var Sum;
var arr = [];
var arr1 = [];
var arr2 = [];

var a = + prompt('Хотите добавить товар в корзину? 1 - Да. 2 - Нет.');

if (a == 1){
	while (true){
		var vibor = + prompt('Какой товар добавить в корзину? 1 - Шапка(500 рублей). 2 - Футболка(1000 рублей). 3 - Сапоги(1700 рублей). Введите что угодно, если хотите закончить.');
		if (vibor == 1){
			korzina.push('Шапка');
		}else if (vibor == 2){
			korzina.push('Футболка');
		}else if (vibor == 3){
			korzina.push('Сапоги');
		}else{
			alert('Спасибо');
			break;
		}
	}
	var searchHat = 'Шапка';
	var abc = korzina.indexOf(searchHat);
	while (abc != -1) {
	  arr.push(abc);
	  abc = korzina.indexOf(searchHat, abc + 1);
	}
	priceHat = arr.length * 500;


	var searchShirt = 'Футболка';
	var idx = korzina.indexOf(searchShirt);
	while (idx != -1) {
	  arr1.push(idx);
	  idx = korzina.indexOf(searchShirt, idx + 1);
	}
	priceShirt = arr1.length * 1000;


	var searchBoots = 'Сапоги';
	var index = korzina.indexOf(searchBoots);
	while (index != -1) {
	  arr2.push(index);
	  index = korzina.indexOf(searchBoots, index + 1);
	}
	priceBoots = arr2.length * 1700;


	Sum = priceShirt + priceHat + priceBoots;
	console.log('Общая сумма ' + Sum + ' рублей.');

}else if (a == 2){
	alert('Спасибо и всего доброго!');
}else{
	alert('Вы ввели неверные данные.');
}

//Задание 3//
//По сути, код тот же самый, просто я сделал 2 задание, не прочитав 3, а они, оказались, одинаковыми... 

console.log('-----Задание 3-----');

var korzinaa = [];
var Sum;
var arr = [];
var arr1 = [];
var arr2 = [];

	while (true){
		var viborr = + prompt('Какой товар добавить в корзину? 1 - Шапка(50 рублей). 2 - Футболка(100 рублей). 3 - Сапоги(70 рублей). Введите что угодно, если хотите закончить.');
		if (viborr == 1){
			korzinaa.push('Шапка');
		}else if (viborr == 2){
			korzinaa.push('Футболка');
		}else if (viborr == 3){
			korzinaa.push('Сапоги');
		}else{
			alert('Спасибо');
			break;
		}
	}

	console.log(korzinaa);

	var countBasketPrice = function (){
		var searchHat = 'Шапка';
		var abc = korzinaa.indexOf(searchHat);
		while (abc != -1) {
		  arr.push(abc);
		  abc = korzinaa.indexOf(searchHat, abc + 1);
		}
		priceHat = arr.length * 50;


		var searchShirt = 'Футболка';
		var idx = korzinaa.indexOf(searchShirt);
		while (idx != -1) {
		  arr1.push(idx);
		  idx = korzinaa.indexOf(searchShirt, idx + 1);
		}
		priceShirt = arr1.length * 100;


		var searchBoots = 'Сапоги';
		var index = korzinaa.indexOf(searchBoots);
		while (index != -1) {
		  arr2.push(index);
		  index = korzinaa.indexOf(searchBoots, index + 1);
		}
		priceBoots = arr2.length * 70;


		Sum = priceShirt + priceHat + priceBoots;
		console.log('Общая сумма ' + Sum + ' рублей.');
	}
	countBasketPrice();

//Задание 4//
console.log('-----Задание 4-----');

for (var i = 0; i < 10; i++) {
	console.log(i);	
}

//Задание 5//
console.log('-----Задание 5-----');
//Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов

var c = '';
for(var i = 0; i <= 20; i++) {
  c +='x';
  console.log(c);
}

