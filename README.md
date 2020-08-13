# Wordice 🎲
#### Simply grab some random words from an array!

This is based on 'random-words' by [Punkave](https://github.com/punkave) with a few tweaks...

1. You pass a specific word array to the `wordice()` function.
2. There is a minLength filter

`yarn add wordice`

Example:

`import wordice from "wordice";
const wordList = ['This', 'Is', 'An', 'Array', 'Of', 'Words'];
const howManyWords = 1;
const random = wordice(howManyWords,wordList);
console.log(random);`

You can also filter specific character min/max lengths, and more.

Check the original [here](https://github.com/punkave/random-words) for more info

See

WIP
