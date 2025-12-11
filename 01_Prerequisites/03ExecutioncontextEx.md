# `Execution Context`

```js
let val1 =10
let val2=5
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addnum(20,3)
```

## Steps of Execution 
- STEP 1: Global Execution created first and allocated in `this` variable.
- STEP 2: `PHASE 1` Memory Phase , memory allocated to varaibles and functions defination is 
     
     1. Val1  = uninitialized(TDZ)
     2. val2  = uninitialized(TDZ)
     3. addNum = function object (entire function stored)
     4. result1 = uninitialized(TDZ)
     5. result2 = uninitialized(TDZ)

- STEP 3: `PHASE 2` Code Execution phase
    
     1. Now js executes the code line by line
     2. `line 1` let val1 = 10 (val1 gets value 10)
     3. `line 2` let val2 = 5 (val2 gets value 5)
     4. `line 3-7` function declaration (JS skips it as it was already in memory)
     5. `line 8` let result = addNum(val1,val2) - this is the first function call so Js create function Execution context(FEC) for addNum.
     
- STEP 4: Creating function execution context for result1
     
     1. `Memory phase for addNum` 
          - Num1  =     val1->10
          - Num2  =     val2->5
          - total =     uninitialized
     2. `Execution phase`
          - `line 1`: let total = num1 + num2
             - total = 10 + 5
             - return total
     3. This value assign to result1
     4. `now the function execution context get deleted and removed from call stack.`


- STEP 5: Creating function execution context for result2
     1. `Memory phase for addNum` 
          - Num1  =     20
          - Num2  =     3
          - total =     uninitialized
     2. `Execution phase`
          - `line 1`: let total = 20+3
             - return total
     3. This value assign to result2
     4. `now the function execution context get deleted and removed from call stack.`
