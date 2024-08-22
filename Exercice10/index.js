//votre code ici
function printNumbers(n) {
  let string = "";
  for(let i = 1; i <= n; i++) {
    string += string.length ? string = " " + i : i;
  }

  return string;
}

export default printNumbers
