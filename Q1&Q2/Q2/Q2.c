#include <stdio.h>
#include <stdlib.h>
// #include "utility.h"


// int* myArray;

int BottomUpApproach(int n){
    int result;
    int* array = malloc(sizeof(int)*(n+1));
    array[0] = 0;array[1] = 1;array[2]= 2;
    if (n == 0 || n == 1 || n== 2) return array[n];

    int i =3;
    while (i <= n){
        array[i] =  array[i-2] + array[i-3];
        i += 1;
    }

    return array[n];
}

int recursion(int n){
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 2;

    int result = recursion(n - 2) + recursion(n -3);
    return result;
}

int memoization(int n,int* myArray){

    if (myArray[n] != -1) return myArray[n];

    
    int result = memoization(n - 2,myArray) + memoization(n - 3,myArray);
    
    return result;
}




int main(){
    int n;
    printf("Please enter value for n:");
    scanf("%d",&n);
    int* myArray = malloc(sizeof(int) * (n+1));
    myArray[0] = 0;myArray[1] = 1;myArray[2]= 2;
    for (int i = 3;i <= n;i++){
        myArray[i] = -1;
    }

    // int cache[n] = { [0 ... n-1] = -1 };


    int result = BottomUpApproach(n);
    int result2 = recursion(n);
    int result3 = memoization(n,myArray);


    printf("%d  %d  %d",result,result2,result3);
}