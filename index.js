import defaultWords from './defaultWords';
// No options OR array? Use a default bunch of words and pick one.
const wordice = (words, options) => {
  if(words === undefined && options === undefined) {
    return defaultWords[Math.floor(Math.random()*defaultWords.length)];
  }

  // Check if we have any options
  if(options === undefined) {
    return words[Math.floor(Math.random()*words.length)];
  }
  // Options exist? Lets check minimum character length...
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

  let multipleWords = [];

  // Check if we allow duplicate words returned or not

  if(options.allowDuplicates === true) {
    // We allow duplicates, so we can roll through the word count without issue!
    for (let i = 0; (i < options.wordCount);) {
      const randomWord = words[Math.floor(Math.random()*words.length)];
      multipleWords.push(randomWord);
      i++;
    }
  } else {
    // We cant loop if there are more wards expected to be return than
    // there are that exist in the array if we want no duplicates.
    let loopAmmount = options.wordCount;
    if(options.wordCount > words.length) {
      loopAmmount = words.length;
    }
    for (let i = 0; (i < loopAmmount);) {
      const randomWord = words[Math.floor(Math.random()*words.length)];
      if(!multipleWords.includes(randomWord)) {
        multipleWords.push(randomWord);
        i++;
      }
    }
  }


  if (typeof options.join === 'string') {
    multipleWords = multipleWords.join(options.join);
  }

  return multipleWords.toString();
}

module.exports = wordice;
