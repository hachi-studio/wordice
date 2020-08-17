# Wordice 🎲
#### Simply grab some random words from an array!

Got an array of words and need something randomly selected? Wordice picks a random word (or even words) from an array with ease!

Playground: [here](https://codesandbox.io/s/long-snowflake-0py2e?file=/src/App.js)

Installation:

    yarn add wordice

Usage:
        wordice(); // Uses a default list of words
        wordice(['Bird', 'Is', 'The', 'Word']); // Your own array
        wordice(['Bird', 'Is', 'The', 'Word'], options); // Your own array + options!


Example:
    import wordice from "wordice";
    const myRandomWord = wordice();
    console.log(myRandomWord);
    // Duck

With your own array

Example:
    import wordice from "wordice";
    const coolArray = ['This', 'Is', 'An', 'Array', 'Of', 'Words'];
    const myRandomWord = wordice(coolArray);
    console.log(myRandomWord);
    // Of


You can supply options for minimum characters, max characters and amount of words you want returned

Note: *If you set wordCount to a greater number of items in the array it will be capped at the length of the array, see `allowDuplicates` below.*


Example:
    import wordice from "wordice";
    const coolArray = ['This', 'Is', 'An', 'Array', 'Of', 'Some', 'More', 'Words'];
    const myRandomWords = wordice(coolArray, { minCharacters: 3, maxCharacters: 4, wordCount: 3 });
    console.log(myRandomWords);
    // Word, Some, This

You can change also allow the return of duplicated words, allowing you to set a higher wordCount value than
length of the array.


Example:
    import wordice from "wordice";
    const coolArray = ['A', 'B', 'C'];
    const myRandomWords = wordice(coolArray, { allowDuplicates: true,　wordCount: ５ });
    console.log(myRandomWords);
    // C,B,C,A,A


You can change the joining character between items


Example:
    import wordice from "wordice";
    const coolArray = ['This', 'Is', 'An', 'Array', 'Of', 'Some', 'More', 'Words'];
    const myRandomWords = wordice(coolArray, { join: '-' wordCount: 3 });
    console.log(myRandomWords);
    // Word-Some-This



Currently WIP, so don't use this for anything serious.
