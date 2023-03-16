//quiz1 extacting chars
// Strings
// Extract the first four characters from the string below;
// "beautiful"
let b="beautiful"
let result=b.substring(0,4);
console.log(result);
console.log(b.slice(0,4))
// //quiz2 inserting
// const food="I did not have appetite today"
// console.log()
// //quiz3
// const  story="She sells sea shells at the sea shore"
// console.log(indexof.the)
// //the
// console.log(count,"the");
// //s
// //quiz4
// let word="CONfidant";
// console.log(word.toUpperCase())
// let speak="amazing"
// const string1="The lady went to the market with her sister"
// console.log(string1.find)
//quiz2
// Insert the following string at the tenth index of the below variable:
// "eat"
const food = "I did not have appetite today";
console.log(food.charAt(10))
console.log(food.slice('10',"eat"));
//quiz3
// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."s"
const story= "She sells sea shells at the sea shore"
console.log(story.match(/the/g).length)
console.log(story.match(/s/g).length)
// //quiz4
// Convert the following strings into the specified format:
// 1. UpperCase: "CONfidant"
const upp="CONfidant"
console.log(upp.toUpperCase())
// 2. LowerCase: "amazing", "beautiFUL"
const amaze=("amazing")
console.log(amaze.toLowerCase())
const beauty="beautiFUL"
console.log(beauty.toLowerCase())
// 3. Title case "A busy office"
let words="A busy office"
console.log(words.split(" "))
console.log(words.toUpperCase[0])
// 
//quiz5
// Using JavaScript, find the following words from the following strings:
// 1. "market"
const string1 = "The lady went to the market with her sister";
if (string1.includes("market")){
    console.log("market")
}
// 2. "season"
const string2 = "My favorite season is spring"
console.log(string2.includes("season"))
console.log("season")
// if (string2.includes("season")){
//     console.log("season")
// }
//Strings
const string="I am a lady lady"
console.log(string.indexOf("lady"))
console.log(string.startsWith("I"))
console.log(string.endsWith("lady"))
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.includes("am"))
console.log(string.repeat( 2))
console.log(string.charAt(3))

