const wordice = (words, options) => {
  // Check if we have any options
  if(options === undefined) {
    return words[Math.floor(Math.random()*words.length)];
  }
  // Options exist? Lets char minimum character length...
  if(options.minCharacters && options.minCharacters > 1) {
    words = words.filter( function( element ) {
      return element.length >= options.minCharacters;
    });
  }

  // And maximum character length...

  if(options.maxCharacters && options.maxCharacters > 1) {
    words = words.filter( function( element ) {
      return element.length <= options.maxCharacters;
    });
  }

  // No word length set? Let's just return one item!

  if(options.wordCount === undefined) {
    return words[Math.floor(Math.random()*words.length)];
  }

  // Ok it seems like we have a specific ammount of words want...
  // Lets create a seperate array and push them there!

  const multipleWords = [];

  for (var i = 0; (i < options.wordCount); i++) {
    multipleWords.push(
      words[Math.floor(Math.random()*words.length)]
    );
  }

  return multipleWords.toString();
}

module.exports = wordice;
