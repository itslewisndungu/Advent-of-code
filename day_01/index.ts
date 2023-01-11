const input = await Deno.readTextFile("./main_input.txt");

const maxValue = input
  .split("\n\n")
  .map((miniArr) => miniArr.split("\n"))
  .flatMap((miniArr) => {
    return miniArr.map((val) => +val).reduce((a, b) => a + b, 0);
  })
  .reduce((a, b) => {
    return Math.max(a, b);
  });

console.log(maxValue);
