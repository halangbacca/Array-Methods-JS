//  splice() - substitui um elemento entre o índice informado

const series = [
  "House",
  "Doctor Who",
  "Another Life",
  "Sense 8",
  "Sex Education",
];

series.splice(0, 2, "Heartstopper");

console.log(series); // [ 'Heartstopper', 'Another Life', 'Sense 8', 'Sex Education' ]
