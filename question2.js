var prompt = require("prompt");

prompt.start();

const printContent = (n, index) => {
  process.stdout.write("* ");
  for (let k = 0; k < n - index - 1; k++) {
    process.stdout.write(". ");
  }
};

const firstHalfPrint = (n) => {
  for (let index = 0; index <= n - 1; index++) {
    for (let k = 0; k < index; k++) {
      process.stdout.write(". ");
    }

    printContent(n, index);
    printContent(n, index);

    process.stdout.write("* ");
    for (let k = 0; k < index; k++) {
      process.stdout.write(". ");
    }
    process.stdout.write("\n");
  }
};

const lastHalfPrint = (n) => {
  for (let index = n - 1; index >= 0; index--) {
    for (let k = 0; k < index; k++) {
      process.stdout.write(". ");
    }

    printContent(n, index);
    printContent(n, index);

    process.stdout.write("* ");
    for (let k = 0; k < index; k++) {
      process.stdout.write(". ");
    }
    process.stdout.write("\n");
  }
};

prompt.get(["n"], function (err, result) {
  console.log("Command-line input received:");
  console.log("n: " + result.n);

  const n = Number(result.n);
  let stars = n * 2 + 1;

  firstHalfPrint(n);
  for (let index = 0; index < stars; index++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
  lastHalfPrint(n);
});
