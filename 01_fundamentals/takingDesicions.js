const age = 12;
const isAdult = age >= 18;

if (isAdult) {
  console.log(
    "You can watch adultMovies, can make girlfriends and get drunk also."
  );
} else {
  const yearsLeft = 18 - age;
  console.log(
    `You bloody are only ${age} years old, you better wait for next ${yearsLeft} years and behave like a good boy, otherwise I will come and make your life living hell.`
  );
}
let century;
let birthYear = 1998;
if (birthYear < 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
