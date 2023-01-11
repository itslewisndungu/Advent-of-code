const input = await Deno.readTextFile("./main_input.txt");

const maxCalories = input
  .split("\n\n")
  .map((miniArrStr) => miniArrStr.split("\n"))
  .flatMap((miniArr) => {
    const arr = miniArr.map((num) => +num).reduce((a, b) => a + b, 0);
    return arr;
  })
  .reduce((a, b) => {
    return Math.max(a, b);
  });

console.log(maxCalories);

const caloriesByThreeElves = input
  .split("\n\n")
  .map((miniArrStr) => miniArrStr.split("\n"))
  .flatMap((miniArr) => {
    const arr = miniArr.map((num) => +num).reduce((a, b) => a + b, 0);
    return arr;
  })
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, b) => {
    return a + b;
  }, 0);

console.log(caloriesByThreeElves);
