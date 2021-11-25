const prompt = require("prompt");

prompt.start();

const logStar1 = (n) => {
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
};

const logStar2 = (n) => {
  let size = n;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(" ");
    }

    for (let j = 1; j <= size * 2 - 1; j++) {
      if (j === 1 || j === size * 2 - 1 || i === 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    size -= 1;
    process.stdout.write("\n");
  }
};

prompt.get(["n"], function (err, result) {
  console.log("Command-line input received:");
  console.log("n: " + result.n);

  const n = Number(result.n);

  logStar1(n);

  logStar2(n);
});
