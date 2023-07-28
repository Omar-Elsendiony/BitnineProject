function reverseString(str,lengthString){
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr
}

function palindrome(myString){
    lengthString = myString.length
    let isPalindrome = true
    for (i =0;i<lengthString;i++){
        let isEqual = myString[i] == myString[lengthString-1-i]
        isPalindrome = isEqual==true? true:false;break
    }
    if (!isPalindrome) 
        myString = reverseString(myString,lengthString)
    return [isPalindrome,myString]

}
var str ="nevent"
const [isPalindrome,returnedString] = palindrome(str)
console.log(returnedString)