# Wordice 🎲
#### Generate random words, or pick some from an array from an array!

Got an array of words and need something randomly selected? Wordice picks a random word (or words) from an array with ease!

Don't have an array, and just need a random word? We got you.

**Demo: [here](https://codesandbox.io/s/wordice-9mmjm?file=/src/App.js)**

## Installation:
```jsx
yarn add wordice
```
## Usage:
***
```jsx
wordice(['Bird', 'Is', 'The', 'Word']); // Your own array
wordice(['Bird', 'Is', 'The', 'Word'], options); // Your own array + options!
wordice(); // Uses a default list of words
```

## Examples:
Default:
```jsx
import wordice from "wordice";

const myRandomWord = wordice();
console.log(myRandomWord);
// Duck
```
With your own array:
```jsx
import wordice from "wordice";

const coolArray = ['This', 'Is', 'An', 'Array', 'Of', 'Words'];
const myRandomWord = wordice(coolArray);
console.log(myRandomWord);
// Of
```

You can supply options for minimum characters, max characters and amount of words you want returned

Note: *If you set wordCount to a greater number of items in the array it will be capped at the length of the array, see `allowDuplicates` below.*

```jsx
import wordice from "wordice";

const coolArray = ['This', 'Is', 'An', 'Array', 'Of', 'Some', 'More', 'Words'];
const myRandomWords = wordice(coolArray, { minCharacters: 3, maxCharacters: 4, wordCount: 3 });
console.log(myRandomWords);
// More, Some, This
```
You can change also allow the return of duplicated words, allowing you to set a higher wordCount value than
length of the array.

```jsx
import wordice from "wordice";

const coolArray = ['A', 'B', 'C'];
const myRandomWords = wordice(coolArray, { allowDuplicates: true,　wordCount: ５ });
console.log(myRandomWords);
// C,B,C,A,A
```

You can change the joining character between items

```jsx
import wordice from "wordice";

const coolArray = ['This', 'Is', 'An', 'Array', 'Of', 'Some', 'More', 'Words'];
const myRandomWords = wordice(coolArray, { join: '-' wordCount: 3 });
console.log(myRandomWords);
// Words-Some-This
```

## In the wild

**[Passnip password generator](https://passnip.com)**

## Feedback:
Feel free to send us file an issue or add feedback [here](https://github.com/hachi-studio/wordice/issues/new). Feature requests are always welcome.
