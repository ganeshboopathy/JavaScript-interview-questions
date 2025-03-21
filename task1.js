var low = "gAnEsh BoOpAtHy"

var low1= low.toUpperCase()
console.log(low)
console.log(low1)
var low2= low1.split('')
console.log(low2)
var low3=low2.map((iteam,index)=>{
    if(index%2===0){
        return(iteam.toUpperCase())
    }
    else{
        return(iteam.toLowerCase())
    }
})
console.log(low3.join(''))


// Convert a given string to uppercase.
// Input: "GaNeSh" → Output: "GANESH"

console.log('1________________________________')
var name ='GaNeSh'
var name1=name.toUpperCase()
console.log(name1)

console.log('2________________________________')
// Convert a given string to lowercase.
// Input: "BoOpAtHy" → Output: "boopathy"
var my_nam = "BoOpAtHy"
var my_nam1 = my_nam.toLowerCase()
console.log(my_nam1)
console.log('3________________________________')

// Reverse a given string.
// Input: "hello" → Output: "olleh"

var  Reverse = "hello"
var Reverse1 = Reverse.split('')
var Reverse2 = Reverse1.reverse()
console.log(Reverse2.join(''))

console.log('4________________________________')


// Check if a string is a palindrome.
// Input: "madam" → Output: true

var palindrome = "madamgfg"
var palindrome1 = palindrome.split('')
var palindrome2 = palindrome1.reverse().join('')
if(palindrome2==palindrome){

    console.log(true)
}
else{
    console.log(false)
}
console.log('5________________________________')
// Count the number of vowels in a string.
// Input: "javascript" → Output: 3

var vowels= "javascript"
var vowels1 = "aeiou"
var vowels2 = 0
for(i=0;i<vowels.length;i++){
    if(vowels1.includes(vowels[i])){
        vowels2+=1
    }
}
console.log(vowels2)

console.log('6________________________________')
// Remove duplicate characters from a string.
// Input: "aabbcc" → Output: "abc"
var duplicate = "aabbcc"
var duplicate1 = [...new Set(duplicate)]
console.log(duplicate1.join(''))
console.log('7________________________________')
// Find the first non-repeating character in a string.
// Input: "swiss" → Output: "w"

var non_repeating ="swiss"
var non_repeating1 = [...new Set(non_repeating)]
var non_repeating2 = non_repeating.split('')
var non_repeating3 = []
for(i=0;i<non_repeating1.length;i++){
    if(non_repeating2.indexOf(non_repeating1[i]) == non_repeating2.lastIndexOf(
        non_repeating1[i])){
            non_repeating3.push(non_repeating1[i])
            }
}
console.log(non_repeating3[0])

console.log('8________________________________')

// Capitalize the first letter of each word in a sentence.
// Input: "hello world" → Output: "Hello World"
var sentence = "hello world"
var sentence1 = sentence.split(' ')
console.log(sentence1)
var sentence2 = []
for(i=0;i<sentence1.length;i++){
   var con= sentence1[i].split('')
   con[0]=con[0].toUpperCase()
   sentence2.push(con.join(''))

}
console.log(sentence2.join('  '))

console.log('9________________________________')

// Check if two strings are anagrams.
// Input: "listen", "silent" → Output: true

var anagram1 = "listen"
var anagram2 = "silent"
var anagram3 = anagram1.split('').sort().join('')
var anagram4 = anagram2.split('').sort().join('')
console.log(anagram3 == anagram4)

console.log('10________________________________')

// Find the frequency of each character in a string.
// Input: "apple" → Output: {a:1, p:2, l:1, e:1}

var  frequency = "apple"
var frequency1 = [...new Set(frequency)]
var frequency2 = []
for(i=0;i<frequency1.length;i++){
    var count = 0
    for(j=0;j<frequency.length;j++){
        if(frequency1[i] == frequency[j]){
            count++
            }
            }
            frequency2.push({[frequency1[i]]:count})
            }
            console.log(frequency2)
            
console.log('11________________________________')
// Check if a number is prime.
// Input: 7 → Output: true
function prime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

console.log('12________________________________');

// Find all prime numbers up to N.
function listprime(num) {
    let array = []; // Declare array outside the loop
    for (let i = 2; i <= num; i++) { // Start from 2
        if (prime(i)) {
            array.push(i);
        }
    }
    console.log(array); // Print the array of prime numbers
}

listprime(10); // Output: [2, 3, 5, 7]
console.log('13________________________________');
// Check if a number is even or odd.
// Input: 4 → Output: "Even"
function even(num) {
    if(num%2===0){
        return "Even"
    }
    else{
        return "Odd"
    }
}
console.log(even(4)); // Output: "Even"

console.log('14________________________________');

// Find the greatest common divisor (GCD) of two numbers.
// Input: (12, 18) → Output: 6
function gcd(a, b) {
    if (!b) {
        return a;
        }
        return gcd(b, a % b);
        }
        console.log(gcd(12, 18)); // Output: 6

console.log('15________________________________');


// Find the least common multiple (LCM) of two numbers.
// Input: (4, 5) → Output: 20
function lcm(a, b) {
    return Math.abs(a*b) / gcd(a, b);
    }
console.log(lcm(4,5))
    
console.log('15________________________________');

// Reverse the digits of a number.
// Input: 1234 → Output: 4321
function reverse(num) {
var reverce = num.toString().split('').reverse().join('')
return reverce
}
console.log(reverse(1234)); // Output: 4321
console.log('16________________________________');

// Find the sum of digits of a number.
// Input: 123 → Output: 6

function digits(num){
    var total=1
    var digits = num.toString().split('').map((iteam)=>{
        return(
            total *=iteam
        )
    })
    return total
}
console.log(digits(123)); // Output: 6

console.log('17________________________________');


// Find the largest number in an array.
// Input: [1, 2, 3, 4, 5] → Output:5
function largest(arr) {
    var myarray=arr
    var total =myarray.sort((a,b)=>{
        return b-a
    })
    return total[0]

}
console.log(largest([1, 2, 3, 8, 9])); //

console.log('18________________________________');

// Find the smallest number in an array.
// Input: [1, 2, 3, 4, 5] → Output 1
function small(arr){
    var total = arr.sort((a,b)=>{return a-b})
    return total[0]
}
 console.log(small([5,8,9,3,5,1]))

 console.log('19________________________________');

//  Find the sum of all elements in an array.
function sum(arr){
    var total = 0
    for(i=0;i<arr.length;i++){
        total+=arr[i]
    }
    return total
}
console.log(sum([1,2,3,4,5,10]))
console.log('20________________________________');
// Find the average of all elements in an array.
function average(arr){
   let total=sum(arr)
   return total/arr.length
}
console.log(average([1,2,3,4,5]))
console.log('20________________________________');

// Find the average of numbers in an array.
function average(arr) {
    if (arr.length === 0) return 0; // Handle empty array case
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

console.log(average([10, 20, 30, 40, 50])); // Output: 30

console.log('21________________________________');
// Reverse an array without using .reverse().
function reverce(arr){
 let myarray=[]
 for(i=arr.length-1;i>=0;i--){
    myarray.push(arr[i])
 }
 return myarray
}
console.log(reverce([1,2,3,4,5]))
console.log('22________________________________');
// Remove duplicates from an array.


function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

console.log('23________________________________');
// Find the second largest number in an array.

function secondLargest(arr) {
    let myarray =[]
    myarray=arr.sort((a,b)=>b-a)
    console.log(myarray)
   return myarray[1]
   
}
console.log(secondLargest([1,4,6,7,9]))

console.log('24________________________________');
// Check if an array is sorted.

function sorted(arr){
    let myarray=[]
     myarray = [...arr].sort((a, b) => a - b); 
    console.log(myarray)
    console.log(arr.length)
    console.log(arr[6]===myarray[6])
    for(i=0;i<arr.length;i++){
        if(arr[i]!==myarray[i])
            return false
    }
    return true
   
}
console.log(sorted([1,2,3,4,5,9,8])); // Output: true

console.log('25________________________________');


// Find the intersection of two arrays.
function intersection(arr1, arr2) {
    return arr1.filter((element)=>arr2.includes(element))
}
console.log(intersection([1,2,3,4,5],[4,5,6]))

console.log('26________________________________');
// Merge two sorted arrays.
function merge(arr1, arr2) {
    let merged = [...arr1, ...arr2];
    return merged.sort((a, b) => a - b);
}
console.log(merge([1, 3, 5], [2, 4,]))

console.log('27________________________________');

// Swap two object keys and values.

function swap(obj){
    console.log(obj)
    let object={}
    for(let newobject in obj){
        console.log(newobject)
        console.log(obj[newobject])
        object[obj[newobject]]=newobject

    }
    console.log(object)
}
swap({1:'a',2:'b',3:'c'})

console.log('28________________________________');
// Convert an array of objects into a single object.
function converArray(ArrObj){
    let obj={}
    for(let newobj of ArrObj){
        Object.assign(obj,newobj)
    }
    console.log(obj)
}
converArray([{a:1},{b:2},{c:3}])

console.log('29________________________________');
// Find the most frequent element in an object.

function mostFrequentElement(obj) {
    let values = Object.values(obj);

    // Count occurrences using reduce
    let frequency = values.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, {});

    // Find the most frequent value
    return Object.keys(frequency).reduce((a, b) => 
        frequency[a] > frequency[b] ? a : b
    );
}

// Example Usage
const obj = { a: "apple", b: "banana", c: "apple", d: "banana", e: "banana" };
console.log(mostFrequentElement(obj)); // Output: "banana"
console.log('30________________________________');
// Filter objects based on a condition.

function filterObjects(obj) {
let newobj=Object.entries(obj).filter(([keys,value])=>value>15)
return Object.fromEntries(newobj)
    }
    
console.log(filterObjects({ a: 10, b: 25, c: 30, d: 5 }))

console.log('31________________________________');
// Deep clone an object without using JSON methods.

function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return primitive values & null as is
    }

    let clone = Array.isArray(obj) ? [] : {}; // Handle arrays correctly

    for (let key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clone[key] = deepClone(obj[key]); // Recursively clone
        }
    }

    return clone;
}

// Example Usage
const original = { a: 1, b: { c: 2, d: [3, 4] } };
const cloned = deepClone(original);

console.log(cloned);

console.log('31________________________________');

// Merge two objects into one.
function merge(obj,obj1){
    return {...obj,...obj1}
}
console.log(merge({name:'ganesh'},{age:20}))

console.log('32________________________________');
// Get the keys of an object as an array. 

function getKeys(obj) {
    let array=[]
    for (let key in obj){
        obj[key]
        array.push(obj[key])
    }
    console.log(array)
}
getKeys( { name: "Ganesh", age: 20, city: "Chennai" })

console.log('33________________________________');
// Get the values of an object as an array.

function getvalue(obj){
    let array=[]
    for (let key in obj){
        array.push(key)
    }
    console.log(array)
}
getvalue({name:"Ganesh",age:20,city:"Chennai"})

console.log('34________________________________');

// Convert an object into a query string.

function query(obj){
    let querystring = new URLSearchParams(obj).toString()
    console.log(querystring.toString())
    console.log(typeof(querystring))
       
}
query({name:"Ganesh",age:20,city:"Chennai"})

console.log('35________________________________');

// Sort an array of objects by a specific property.
function sortanarrayOfObject(obj){
    return obj.sort((a,b)=>a.age-b.age)
}
console.log(sortanarrayOfObject([
    { name: "Ganesh", age: 25 },
    { name: "Ravi", age: 20 },
    { name: "Kumar", age: 30 }
]))

console.log('36________________________________');


// Sort an array of objects by a specific property.

function specific(obj){
    return obj.sort((a,b)=>a.name.localeCompare(b.name))
}
console.log(specific([
    { name: "Ganesh", age: 25 },
    { name: "Ravi", age: 20 },
    { name: "Kumar", age: 30 }
]))
console.log('37________________________________');

// Implement a binary search algorithm.

function binarySearch(arr, target) {
    for(let iteam of arr){
        if(iteam === target){
            return arr.indexOf(iteam)
        }
    }
}
console.log(binarySearch([1, 2, 3, 4, 5],3))
