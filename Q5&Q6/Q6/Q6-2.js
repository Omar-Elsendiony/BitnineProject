function missingNumber(array){
    n = array.length + 1   // we know previously that there is amissing number so the length is smaller than the actual by one
    // we do not know if it  is sorted or not so sum all elements
    theSouldBeSum = n*(n+1)/2
    theActualSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    theMissingNumber = theSouldBeSum - theActualSum
    return theMissingNumber
}

array=[1,2,3,5]
res = missingNumber(array)
console.log(res)