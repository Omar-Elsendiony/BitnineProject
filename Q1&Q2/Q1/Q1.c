#include <stdio.h>
#include <stdlib.h>

typedef enum TypeTag{
    ADD,
    SUB,
    MUL,
    FIB // fibonacci
} TypeTag;

typedef struct Node{
    TypeTag type;
    long result;  // result may be of large size
} Node;

typedef Node* (*ptr)();
// typedef ptr (*pm)();



Node* addFunc(int a,int b){
    Node * n = malloc(sizeof(Node)); 
    int res = a+b;
    n->result = res;
    n->type = ADD;
    return n;
}


Node* fibFunc(Node* a){  // iterative bottom up solution using dynamic programming
    int result;
    int n = a->result - 1;  // fibonacci sequence is index zero so we decrease the value by one
    Node* res = malloc(sizeof(res)); 
    res->type = FIB;
    int* array = (n > 2) ? malloc(sizeof(int)*(n+1)):malloc(sizeof(int)*(3));
    array[0] = 0;array[1] = 1;array[2] = 1;
    if (n == 0 || n == 1 || n== 2){
     res->result=array[n];return res;
    }

    int i = 3;
    while (i <= n){
        array[i] =  array[i-1] + array[i-2];
        i += 1;
    }

    res->result = array[n];
    return res;
}



Node* subFunc(Node* a,Node* b){
    Node * n = malloc(sizeof(Node)); 
    int firstArg = a == NULL? 0:a->result;

    int secondArg = b == NULL? 0:b->result;
    
    int res = secondArg - firstArg;
    n->result = res;
    n->type = SUB;

    if (b == NULL){
        n = fibFunc(n);
    }
    return n;
}


Node* mulFunc(int a,int b){
    Node * n = malloc(sizeof(Node)); 
    int res = a*b;
    n->result = res;
    n->type = MUL;
    return n;
}


ptr makeFunc(TypeTag t){
    switch(t){
        case ADD:
            return &addFunc;
        case SUB:
            return &subFunc;
        case MUL:
            return &mulFunc;
    }
}






int main(void){

    
    int add1,add2,mul1,mul2;
    printf("Enter the first number of add function:");
    scanf("%d", &add1);


    printf("Enter the second number of add function:");
    scanf("%d", &add2);
    
    printf("Enter the first number of mul function:");

    scanf("%d", &mul1);
    
    printf("Enter the second number of mul function:");

    scanf("%d", &mul2);


    // int n;

    
    Node* add = ((makeFunc(ADD))(add1,add2));
    Node* mul = ((makeFunc(MUL))(mul1,mul2));
    Node* sub = ((makeFunc(SUB))(mul,add));
    Node* fibo = ((makeFunc(SUB))(sub,NULL));
    // fib(2)


    // n->result = 45;
    // n->type = SUB;
    printf("add : %li\n",add->result);
    printf("mul : %li\n",mul->result);
    printf("sub : %li\n",sub->result);
    printf("fibo : %li\n",fibo->result);

}