const prompt = require("prompt");

prompt.start();

const firstIndex = (size) => {
  for (let index = 0; index < size; index++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
};

const indexEqualN = (size) => {
  for (let index = 0; index < size; index++) {
    index % 2 === 0 ? process.stdout.write("*") : process.stdout.write(" ");
  }
  process.stdout.write("\n");
};

const eventIndex = (index, size) => {
  const star = index / 2;
  let countEmpty = 0;

  for (let index = 0; index < star * 2; index++) {
    process.stdout.write(index % 2 ? " " : "*");
    countEmpty += 1;
  }

  const empty = size - countEmpty * 2;
  for (let index = 0; index < empty; index++) {
    process.stdout.write(" ");
  }

  for (let index = 0; index < star * 2; index++) {
    process.stdout.write(index % 2 ? "*" : " ");
  }
  process.stdout.write("\n");
};

const oddIndex = (index, size) => {
  const center = Math.round(index / 2);
  let used = 0;
  for (let k = 1; k <= index; k++) {
    if (k === center) {
      const moreStar = size - used * 2;
      for (let index = 0; index < moreStar; index++) {
        process.stdout.write("*");
      }
    } else if (k < center) {
      process.stdout.write("* ");
      used += 2;
    } else {
      process.stdout.write(" *");
    }
  }
  process.stdout.write("\n");
};

prompt.get(["n"], function (err, result) {
  console.log("Command-line input received:");
  console.log("n: " + result.n);

  const n = Number(result.n);
  let size = n + (n - 1);

  for (let index = 1; index <= n; index++) {
    if (index === 1) {
      firstIndex(size);
    } else if (index === n) {
      indexEqualN(size);
    } else if (index % 2 === 0) {
      eventIndex(index, size);
    } else {
      oddIndex(index, size);
    }
  }
  for (let index = n - 1; index >= 1; index--) {
    if (index === 1) {
      firstIndex(size);
    } else if (index % 2 === 0) {
      eventIndex(index, size);
    } else {
      oddIndex(index, size);
    }
  }
});
