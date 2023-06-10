const extendHex = (shortHex) => {
  // write your code here
	 shortHex = shortHex.replace('#', '');

  const red = shortHex[0];
  const green = shortHex[1];
  const blue = shortHex[2];

  const Hex = `#${red}${red}${green}${green}${blue}${blue}`;

  return Hex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
