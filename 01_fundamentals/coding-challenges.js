const marksHeight = 1.88;
const johnsHeight = 1.76;

const marksWeight = 95;
const johnsWeight = 85;

const marksBMI = marksWeight / marksHeight ** 2;
const johnsBMI = johnsWeight / (johnsHeight * johnsHeight);
const markHigherBMI = marksBMI > johnsBMI;
console.log(markHigherBMI);
