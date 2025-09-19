

// var str = "gANESH booPATHY";

// function convert(str){
//     let result = "";
//     console.log(str.length,str[0])
//     for(i=0;i<str.length;i++){
//         if(str[i]==str[i].toUpperCase()){
//             result += str[i].toLowerCase();
//         }
//         else{
//             result +=str[i].toUpperCase()
//         }
//     }

// }
// console.log(convert(str))



var str = "gANESH booPATHY";
var result =''

for(i=0;i<str.length;i++){
    if(str[i]==str[i].toUpperCase()){
        result += str[i].toLowerCase()
    }
    else{
        result +=str[i].toUpperCase()
    }
}
console.log(result)
console.log(str)

console.log('1----------------------------')
function prime(num){
    if(num<2){
        return false
    }
    else{
        for(let i=2;i<num;i++){
            if(num%i==0){
                return false
            }
    }
    }
    return true

    
}
console.log(prime(10))
console.log('2----------------------------')
function primeList(num){
    let result = []
    for( let i=0;i<=num;i++){
        if(prime(i)){
            result.push(i)
        }
    }
    console.log(result)
}
primeList(10)
console.log('3----------------------------')


function isArmstrongNumber(num){
 
    let str= num.toString()
    let arr= str.split('')
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+= Math.pow(arr[i],arr.length)
    }
    return sum==num
}
console.log(isArmstrongNumber(153))

console.log('4----------------------------')

function fibonacci(n){
    let fib = [0, 1]
    for(let i=2; i<=n;i++){
      fib[i]= fib[i-1]+fib[i-2]
    }
    return fib
}
console.log(fibonacci(5))
console.log('4----------------------------')

function factorial(n){
    let result = 1
    for(let i=1; i<=n;i++){
        result*=i
    }
    return result
}
console.log(factorial(5))

console.log('5----------------------------')

function sortDescending(arr){
    return arr.sort((a,b)=>b-a)
}
let numbers = [5, 2, 9, 1, 7, 3];
console.log(sortDescending(numbers)); 

console.log('6----------------------------')

function reverseString(str){
    return str.split('').reverse().join('')
}
console.log(reverseString('hello'))

console.log('7----------------------------')

function converte(str){
    let name=''
    for(i=0;i<str.length;i++){
        if(str[i] == str[i].toUpperCase()){
            name +=str[i].toLowerCase()
    }
    else{
        name +=str[i].toUpperCase()
    }
}
return name
}
console.log(converte("gANESH booPATHY"))

console.log('8----------------------------')

function palindrome(str){
    let rev= str.split('').reverse().join('')
    return str==rev
}
console.log(palindrome('appa'))
console.log('9----------------------------')


function check(str){
    let vowels="aeiou"
    let count=0
    for(i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
          count++  
        }
    }
    return count
}
console.log(check('hello'))

console.log('10----------------------------')

function duplicate(str){
   let string =[...new Set(str)].join('')
  return string
}
console.log(duplicate('hello'))


console.log('11----------------------------')

function capitalizeWords(str) {
   return str.split(' ').map(iteam=>iteam.charAt(0).toUpperCase()+iteam.slice(1)).join(' ')
}

console.log(capitalizeWords('ganesh boopathy')); // Output: "Ganesh Boopathy"
console.log(capitalizeWords('john doe smith')); // Output: "John Doe Smith"
console.log(capitalizeWords('hello world this is test')); // Output: "Hello World This Is Test"

console.log('12----------------------------')

function anagrams(str,str1){
  string = str.split('').sort().join('')
  string1 = str1.split('').sort().join('')
  string3= str.split('').sort()
  console.log(string3)
  return string==string1
}
console.log(anagrams("listen","silent"))

console.log('13----------------------------')

function oddEven(num){
    if(num%2==0){
        return 'even'
    }
    else{
        return 'odd'
    }
}
console.log(oddEven(9))
console.log('14----------------------------')

function Reverse_the_digits(num){
    return  Number(num.toString().split('').reverse().join(''))
}
console.log(Reverse_the_digits(14228))

console.log('15----------------------------')
function sum_of_digits(num){
    let total =1
    let mynum=num.toString()
     for(let i=0;i<mynum.length;i++){
        total*=mynum[i]
     }
     return Number(total)
}
console.log(sum_of_digits(1234))

console.log('16----------------------------')

function largest_number(arr){
    let myNum= arr.sort((a,b)=>b-a)
    return myNum[0]
}
console.log(largest_number([1,2,3,4,9,5,6,7,]))

console.log('17----------------------------')

function smallest_number(num){
    return Math.min(...num)
}
console.log(smallest_number([1,2,3,4,9,0,5,6,]))

console.log('18----------------------------')

function  reverseMethod(arr){
    let myarr=[]
    for(let i=arr.length-1;i>=0;i--){
      myarr.push(arr[i])
    }
    return myarr
}
console.log(reverseMethod([1,2,3,4,5,6,7,8]))
console.log('19----------------------------')

function removeDuplicates(arr){
    return [...new Set(arr)]
}
console.log(removeDuplicates([1,2,2,3,9,9,9,9,4,4,5,6]))

console.log('20----------------------------')
function secondLargest(arr){
    let myarr=arr.sort((a,b)=>b-a)
    return myarr[1]
}
console.log(secondLargest([1,2,3,4,9,5,6,]))
console.log('21----------------------------')

function array_is_sorted(arr){
    let myarray=[]
    myarray= arr.slice().sort((a,b)=>a-b)
    console.log(arr)
    console.log(myarray)
    for(let i=0;i<arr.length;i++){
        if(myarray[i]!=arr[i]){
            return false
        }
    }
    return true
}
console.log(array_is_sorted([2,3,4,5,6,7,9,8,1]))

console.log('22----------------------------')

function Find_the_intersection(arr,arr1){
    return  arr.filter((iteam)=>arr1.includes(iteam))
    
}
console.log(Find_the_intersection([1,2,3,4,5,6,7],[5,6,7]))

console.log('23----------------------------')


function Merge_two_sorted_arrays(arr1,arr2){
    let array=[...arr1,...arr2]
    let my_array=[...new Set(array)]
   return my_array.sort((a,b)=>a-b)
}
console.log(Merge_two_sorted_arrays([1,2,3,4,5,6,4,2,6],[1,9,6,4,7,3,5,7,5,10,8,8,8]))

console.log('24----------------------------')
function Swap_two_object_keys_and_values(obj){
    let myobj={}
    for(let key in obj){
     myobj[obj[key]]=key
     console.log(key)
    }
    return myobj
}
console.log(Swap_two_object_keys_and_values({1:'a',2:'b',3:'c'}))

console.log('25----------------------------')

function Convert_an_array_of_objects_into_a_single_object(obj){
    let new_obj={}
    for(let myobj of obj){
        Object.assign(new_obj,myobj)
    }
    return new_obj
}
console.log(Convert_an_array_of_objects_into_a_single_object([{a:1,b:2},{1:'a',2:'b',3:'c'},{6:'o',8:'p'}]))

console.log('26----------------------------')

function Filter_array_objects_based_on_a_condition(obj){
    return obj.filter((iteam)=>iteam.age<15)
}
console.log(Filter_objects_based_on_a_condition([{name:'a',age:10},{name:'b',age:40},{name:'c',age:30}]))

console.log('27----------------------------')
function Filter_objects_based_on_a_condition(obj){
    let array_obj= Object.entries(obj).filter(([key,value])=>value.age<15)
    return Object.fromEntries(array_obj)
}
console.log(Filter_objects_based_on_a_condition({
    person1: { name: 'ganesh', age: 20 },
    person2: { name: 'kumar', age: 12 },
    person3: { name: 'boopathy', age: 18 }

}))

console.log('28----------------------------')


function Merge_two_objects_into_one(obj1,obj2){
    return {...obj1,...obj2}
}
console.log(Merge_two_objects_into_one({a:1,b:2},{c:3,d:4}))
console.log('29----------------------------')

function Get_keys_of_an_object_as_an_array(obj){
    return Object.keys(obj)
}
console.log(Get_keys_of_an_object_as_an_array({ name: "Ganesh", age: 20, city: "Chennai" }))

console.log('30----------------------------')
function Get_values_of_an_object_as_an_array(obj){
    return Object.values(obj)
}
console.log(Get_values_of_an_object_as_an_array({ name: "Ganesh", age: 20, city: "Chennai" }))
console.log('31----------------------------')

function Convert_an_object_into_a_query_string(obj){
    let querystring = new URLSearchParams(obj).toString()
    return querystring
}
console.log(Convert_an_object_into_a_query_string({ name: "Ganesh", age:25}))

console.log('32----------------------------')

// Find the most frequent element in an object.
function Most_frequent_element(obj){

    let fer= Object.values(obj).reduce((acc,value)=>{
     acc[value] = (acc[value]||0)+1
     return acc
    },{}) 
    return Object.keys(fer).reduce((a,b)=>{
        return fer[a]>fer[b]?a:b
    })
}
const obj = { a: "apple", b: "banana", c: "apple", d: "banana", e: "banana" ,f:'orange',g:'orange',h:'orange',i:'orange'};
console.log(Most_frequent_element(obj));
console.log('33----------------------------')

function leapyears(num){
  if(num%4==0){
    return'leap year'
  }
  else{
    return 'not a leap year'
  }
}
console.log(leapyears(2001))
// Implement a function to reverse a string without using .reverse().
console.log('34----------------------------')

function reverse_string(str){
    let string=''
    for(i=str.length-1;0<=i;i--){
       string+=str[i]
    }
    return string
}
console.log(reverse_string('hello'))
console.log('35----------------------------')
//Here's a JavaScript function to find the most frequent element in an array:

function mostFrequentElement(arr) {
    let frequencyMap = {};
    let maxCount = 0;
    let mostFrequent = null;

    for(let num of arr){
        frequencyMap[num]= (frequencyMap[num]||0)+1
    
    if(frequencyMap[num]>maxCount){
        maxCount=frequencyMap[num]
        mostFrequent=num
    }
    }
    return mostFrequent;
}

// Example usage:
console.log(mostFrequentElement([1, 3, 2, 3, 4, 3, 5, 3, 2, 1])); // Output: 3
console.log(mostFrequentElement(["apple", "banana", "apple", "orange", "apple", "banana"])); // Output: "apple"


console.log('35----------------------------')
// Check if an array contains at least one even number using some().

function least_one_even_number(arr){
    return arr.some((num,index,arr)=>{
       return num%2==0
    })
}
console.log(least_one_even_number([1, 3, 5, 7,8]))

console.log('36----------------------------')
// Verify if all elements in an array are greater than 10 using every().

function all_greater_than_10(arr){
    return arr.every((num,ind,arr)=>{
        return num>10
    })
}
console.log(all_greater_than_10([2, 15, 20, 25]))

console.log('37----------------------------')
// Check if at least one person in an array is an adult (age ≥ 18) using some().

function person_in_an_array_is_an_adult(arr){
    return arr.some((person,ind,arr)=>{
          return person.age>18
    })
} 
console.log(person_in_an_array_is_an_adult([{ name: "John", age: 16 }, { name: "Anna", age: 22 }]))

console.log('38----------------------------')
//Determine if all strings in an array have a length greater than 5 using every().

function all_strings_longer_than_five(arr){
    return arr.every((str,ind,arr)=>{
        return str.length>5
    })
}
console.log(all_strings_longer_than_five(["elephant", "giraffe", "zebra "]))

console.log('39----------------------------')
//Check if at least one student has failed (score < 40) using some().

function least_one_student_has_failed(arr){
    return arr.some((score,ind,arr)=>{
        return score<40
    })
}
console.log(least_one_student_has_failed([85, 90, 78, 35, 50]))

console.log('40----------------------------')
//Ensure all elements in an array are positive numbers using every().

function all_elements_in_an_array_are_positive_numbers(arr){
    return arr.every((num,ind,arr)=>{
        return num>0
    })
}
console.log(all_elements_in_an_array_are_positive_numbers([3, 5, 2, -8, 10]))

console.log('41----------------------------')
// Use some() to check if an array contains at least one palindrome word.

function least_one_palindrome_word(arr){
    return arr.some((word,ind,arr)=>{
        return word.split('').reverse().join('').toLowerCase()==word.toLowerCase()
    })
}
console.log(least_one_palindrome_word(["hello", "madam", "world"]))

console.log('42----------------------------')
// Verify if every number in an array is a multiple of 3 using every().

function every_number_in_an_array_is_a_multiple_of_3(arr){
    return arr.every((num,ind,arr)=>{
        return num%3==0
    })
}
console.log(every_number_in_an_array_is_a_multiple_of_3([3, 9, 12, 18]))

console.log('43----------------------------')
// Check if at least one product in a cart is out of stock (stock === 0) using some()

function least_one_product_in_a_cart_is_out_of_stock(arr){
    return arr.some((product,ind,arr)=>{
        return product.stock>0
    })
}
console.log(least_one_product_in_a_cart_is_out_of_stock([{ name: "Shirt", stock: 1 }, { name: "Jeans", stock: 0 }]))

console.log('44----------------------------')
// Determine if all elements in an array are of type "string" using every().

function all_elements_in_an_array_are_strings(arr){
    return arr.every((element,ind,arr)=>{
        return typeof element === typeof " "
    })
}
console.log(all_elements_in_an_array_are_strings( ["apple", "banana", "grape",90]))

console.log('44----------------------------')

// for loop 

function loop(num){
    let myarr=[]
    let reverse =[]
    for(i=0; i<=num;i++){
     myarr.push(i)
    }
    console.log(myarr)   

    reverse= myarr.reverse()
     console.log(reverse)    
}
loop(10)
let b=10+1
for(i=0 ;i<=10;i++){
    b--
    console.log(i ,b )
    
}

console.log('44----------------------------')
// binnary code 
function binary(num){
    let a=num
    let myarr=[]
    while(a>0){
        
        myarr.push(a%2)
       a= Math.floor(a/2)
    }
    return Number(myarr.reverse().join(''))
    
}
console.log(binary(107))

console.log('45----------------------------')

//Binary to Decimal Conversion
function Binary_to_Decimal_Conversion(num){
   let a=num.split('')
   let  b= a.length-1
    let myarr=[]
    let c=0
    for(i=0;i<num.length;i++){
      myarr.push(a[i]*Math.pow(2,b))
      b--
      c+=myarr[i]
    }
    return c
}
console.log(Binary_to_Decimal_Conversion('1010'))
console.log('46----------------------------')
// Find the First Non-Repeating Character in a String
function firstNonRepeatingChar(str) {
    let freq = {};
    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    for (let ch of str) {
        if (freq[ch] === 1) {
            return ch;
        }
    }
    return null; // if no unique char
}
console.log(firstNonRepeatingChar("swiss")); // Output: "w"

console.log('47----------------------------')
//Flatten a Nested Array Without Using flat()

function flattenArray(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}
console.log(flattenArray([1, [2, [3, 4]], 5])); // Output: [1,2,3,4,5]

console.log('48----------------------------')
// Count the Occurrences of Each Word in a Sentence

function wordFrequency(sentence) {
    let words = sentence.toLowerCase().split(/\W+/);
    let freq = {};
    for (let word of words) {
        if (word) {
            freq[word] = (freq[word] || 0) + 1;
        }
    }
    return freq;
}
console.log(wordFrequency("Hello world, hello JavaScript world!"));
// Output: { hello: 2, world: 2, javascript: 1 }

console.log('49----------------------------')
// Find the Longest Word in a Sentence

function longestWord(sentence) {
    let words = sentence.split(" ");
    return words.reduce((longest, word) => 
        word.length > longest.length ? word : longest
    , "");
}
console.log(longestWord("I love programming in JavaScript"));
// Output: "programming"

console.log('50----------------------------')

//Check if Two Strings Are Rotations of Each Other

function isRotation(str1, str2) {
    if (str1.length !== str2.length) return false;
    return (str1 + str1).includes(str2);
}
console.log(isRotation("waterbottle", "erbottlewat")); // Output: true
console.log(isRotation("hello", "llohe")); // Output: true
