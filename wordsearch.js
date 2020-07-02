const wordSearch = (letters, word) => {
  // Prints row as a string within array
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    let reverseH = l.split('').reverse().join('');
    if (l.includes(word) || reverseH.includes(word)) return true;
  }
  // Vertical Join
  const len = letters[0].length;
  for (let i = 0; i < len; i++) {
    const verticalJoin = horizontalJoin.map(ls => ls[i]).join('');
    let reverseV = verticalJoin.split('').reverse().join('');
    if (verticalJoin.includes(word) || reverseV.includes(word)) return true;

  }
  //Diagonal
  let diagonalWord1 = "";
  let diagonalWord2 = "";
  for (let j = 0; j < len; j++) {
    diagonalWord1 += letters[j][j];
    diagonalWord2 += letters[j][len - 1 - j];
    
  }
  let reverseDiag1 = diagonalWord1.split('').reverse().join('');
  let reverseDiag2 = diagonalWord2.split('').reverse().join('');
	
  if (diagonalWord1.includes(word) || diagonalWord2.includes(word) || reverseDiag1.includes(word) || reverseDiag2.includes(word)) return true;
		
  return false;
};

module.exports = wordSearch;