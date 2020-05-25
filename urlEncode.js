const urlEncode = function (text) {
  // Put your solution here
  let string = " ";
  text = text.trim();
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      string += "%20";
    } else {
      string += text[i];
    }
  }
  return string;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
