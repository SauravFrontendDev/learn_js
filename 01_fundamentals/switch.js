// const day = "sunday";

// switch (day) {
//   case "monday":
//     console.log("Go to Office");
//     break;

//   case "tuesday":
//     console.log("Learn a Programming Language");
//     console.log("Practice Coding");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Watch the tutorials");
//     console.log("Make some projects");
//     break;

//   default:
//     console.log("Take break and chill");
// }

const bill = 310;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
