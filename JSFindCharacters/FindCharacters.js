/**
//* LeetCode link: https://leetcode.com/problems/find-words-containing-character/submissions/

//! You are given a 0-indexed array of strings words and a character x.

//? Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.


Example 1:
//! Input: words = ["leet","code"], x = "e"
//? Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

Example 2:
//! Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
//? Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.

Example 3:
//! Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
//?Output: []
Explanation: "z" does not occur in any of the words. Hence, we return an empty array.


Constraints:

1 <= words.length <= 50
1 <= words[i].length <= 50
x is a lowercase English letter.
words[i] consists only of lowercase English letters.
 */

function findCharacters(words,x){

    //Create an empty array that results can be pushed into
    let output = [];

    //Loop through the array of words to isolate each individual word
    for(let i = 0; i < words.length; i++){

        //Create a variable isolating one word from the array
        const word = words[i];

        //Console log word to check if we are isolating correctly
        // console.log(word);

        //Loop through characters for the word isolated
        for(let j = 0; j < word.length; j++){

            //Create a variable for each character
            let char = word[j]
        
            //Use an if statement to see if the character matches the parameter that is x(//* x = "a")
            if(char === x){

                //If the character matches the parameter, push the index of word into our ouput array
                output.push(words.indexOf(word))
                break;  
            }
        }
    }

    //If there are no matches and the output array has a length of 0, return no match message
    if(output.length == 0){
        output = "There are no matches"
    }
    return output;
}


console.log(findCharacters(["giraffe","tears","crying","cbc"], "c"))

// to run javascript you must first be in the correct folder
 //then you will type  " node 'nameOfFile.js' " in the console
 // node FindCharacters.js