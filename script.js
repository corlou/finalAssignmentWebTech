$(document).ready(function() {
	$("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu_show");
	});
});

// Example stuffs

const jsonString = '{"cafes":[{"name":"Mocha monkeys","address":"Fortitude Valley","isGood":true,"price":"mid-range","rating":5},{"name":"Death before Decaf","address":"Newfarm","isGood":true,"price":"expensive","rating":7},{"name":"Milk Box","address":"Fortitude Valley","isGood":false,"price":"cheap","rating":3}]}';

// example 
// const cafesJson = fetch('api.imdb.com/movies');

const json = JSON.parse(jsonString);

// console.log('json (unparsed) ', jsonString);
// console.log('json (parsed) ', json);

// for (let cafe of json.cafes) {
//   // console.log('cafe name is ', cafe.name);
//   // console.log('cafe rating is ', cafe.price);
//   console.log('cafe object', cafe);
// }

// $(document).ready(function() {
//   const goodCafes = json.cafes.filter(cafe => cafe.isGood);
//   console.log('the good cafes are', goodCafes);
//   const goodCafesDom = document.getElementById('goodCafesList');
//   for (let cafe of goodCafes) {
//     const cafeLi = document.createElement("li");
//     cafeLi.innerText = cafe.name;
//     goodCafesDom.appendChild(cafeLi);
//   }
// });

const cafes = json.cafes;
$(document).ready(function() {
  const cafesDom = document.getElementById('cafes');
  for (let cafe of cafes) {
    // Creating new cafe section
    const cafeSection = document.createElement("div");
    // Creating and adding cafe title
    const cafeTitle = document.createElement("h4");
    cafeTitle.innerText = "Cafe: " + cafe.name;
    cafeSection.appendChild(cafeTitle);
    // Creating and adding cafe description
    const cafeAddress = document.createElement("p");
    cafeAddress.innerText = "Address: " + cafe.address;
    cafeSection.appendChild(cafeAddress);
    // Adding cafe section to dom
    cafesDom.appendChild(cafeSection);
  }
});