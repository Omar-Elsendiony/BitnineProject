There are three approaches to tackle this problem:
- Iterative bottom up approach
	It's time complexity is O(n) as it has to iterate for almost n times
	Iterative approach is better in the aspect that it does not overflow the stack with function calls which 	drains the memory
	and also it is the best option
- Basic recursive approach
	It is the worst of the three because it does not remember it's previous results and re-compute previously 	computed results , it's time complexity is O(2^n) which is exponential 
- Memoization (top down approach)
	It checks if the value was previously computed, if that is the case, it will return the value. However, it wastes time in function calls not like the iterative approach. Also , it has to store array of size n


To run the file(Q2) , use c compiler, then you are asked to enter a value for n, then press enter , and voila, the result is there for the three approaches which ensures that they reach the same answer