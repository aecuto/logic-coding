import { start, get } from "prompt";

start();

const braces = ["(", ")", "{", "}", "[", "]"];

const checkBraces = (str: string) => {
  let firstBraces = [];
  for (let i = 0; i < str.length; i++) {
    const currStr = str[i];
    const indexStr = braces.indexOf(currStr);
    if (indexStr % 2) {
      return validateBraces(firstBraces, str);
    }
    firstBraces.push(currStr);
  }
};

const validateBraces = (firstBraces: string[], str: string) => {
  if (!firstBraces.length) {
    return {
      status: false,
    };
  }

  const lastIndex = firstBraces.length - 1;

  const secondBraces = str.slice(firstBraces.length, firstBraces.length * 2);
  const nextGroup = str.slice(firstBraces.length * 2, str.length);

  let secondIndex = 0;
  for (let index = lastIndex; index >= 0; index--) {
    const currStr = firstBraces[index];

    const indexStr = braces.indexOf(currStr);

    if (braces[indexStr + 1] !== secondBraces[secondIndex]) {
      return {
        status: false,
      };
    }
    secondIndex++;
  }

  return {
    status: true,
    nextGroup,
  };
};

get(["str"], function (err, result) {
  console.log("Command-line input received:");
  console.log("str: " + result.str);

  let str = String(result.str);

  let status = true;
  do {
    const result = checkBraces(str);
    status = result.status;
    str = result.nextGroup;

    if (!str && status) {
      break;
    }
  } while (status);

  console.log({ status });
});
