# Wordice 🎲
#### Simply grab some random words from an array!

Got an array if items and need something randomly selected? Wordice generates a random word (or even words) from an array!

Installation:

    yarn add wordice

Usage:

        wordice(['Bird', 'Is', 'The', 'Word']);


Example:

    import wordice from "wordice";

    const coolArray = ['This', 'Is', 'An', 'Array', 'Of', 'Words'];
    const myRandomWord = wordice(coolArray);
    console.log(myRandomWord);
    // Of


You can also supply options for minimum characters, max characters and length of words you want returned

Example:

    import wordice from "wordice";

    const coolArray = ['This', 'Is', 'An', 'Array', 'Of', 'Some', 'More', 'Words'];
    const myRandomWords = wordice(coolArray, { minCharacters: 3, maxCharacters: 4, wordCount: 3 });
    console.log(myRandomWords);
    // Word, Some, This

Currently WIP, so don't use this for anything serious.
