var prompt = require("prompt");

prompt.start();

prompt.get(["n"], function (err, result) {
  console.log("Command-line input received:");
  console.log("n: " + result.n);

  const n = Number(result.n);
  let size = n;

  for (let index = 1; index <= n; index++) {
    for (let j = 1; j <= index; j++) {
      process.stdout.write(" ");
    }

    for (let index = 1; index <= size; index++) {
      process.stdout.write("* ");
    }
    size -= 1;
    process.stdout.write("\n");
  }
});
