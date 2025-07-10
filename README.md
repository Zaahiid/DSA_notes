# Table of Contents

1. [Alogorithm](#1-Algorithm)
2. [Big-O notations](#2-big-o-notations)
   1. [Time complexity](#21-big-o-time-complexity)
      1. [Linear](#211-linear-on)
      2. [Constant](#212-constant-o1)
3. [Arrays](#2-arrays)
   1. [Array Basics](#21-array-basics)
   2. [Array Operations](#22-array-operations)

---

# 1. Algorithm

### An Algorithm is a set of well-defined instructions to solve a particular problem.

### Characteristics:
- Well defined inputs and outputs
- Each step should be clear and unambiguous
- Language independent

### Analysis:

- There are multiple ways to solve one problem,not single perfect solution.
- The absolute running time of an algorithm cannot be predicted, since it depends on a number of factors,
   - Programming language
   - Machine
   - Other programs running at the same time
   - Quality of the operating system
- We evaluate the performence of an algorithm in <u>terms of it's input size.</u>
   - <b>Time Complexity</b>
   - <b>Space Complexity</b>

   <b>Time Complexity:</b>
   - Amount of <i>time taken</i> by an algorithm to run, as a function of input size.

   <b>Space Complexity:</b>
   - Amount of <i>memory taken</i> by an algorithm to run, as a function of input size.

- By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate.
- There is no one solution that works every single time. It is always good know multiple ways to solve the problem and use the best solution, given your constraints.
   - If the App needs to be quick and has plenty of memory then don't bother about the space complexity.
   - If there is less memory then go for the solution which is relatively slower but needs less space.
- Complexity is represented using <b>Asymptotic notations</b> which are mathematical tolls used to describe time and space complexity.
   - Types,
      1. Big-O Notation (O-notation) ---> Worst case complexity
      2. Omega Notation (Ω-notation) ---> Best case complexity
      3. Theta Notation (Θ-notation) ---> Average case complexity 
# 2. Big-O notations

- The worst case complexity of an algorithm is represented using the Big-O notation.
- Big-O notation describes the complexity of an algorithm using algebraic terms.
- It has two important characteristics,
   - It is expressed in terms of the input.
   - It focuses on the bigger picture without getting caught up in the minute details. 

   ## 2.1 Big-O Time complexity

   ### 2.1.1 Linear **O(n)**

   The function `summation(n)` calculates the sum of numbers from 1 to `n` using a loop.

   - The loop runs exactly `n` times.
   - Each iteration performs a simple addition operation (which is constant time).
   - Apart from the loop, there are only a few constant-time steps (initialization and return).
   - So, the total time taken grows linearly with `n`.

   ```javascript
   function summation(n) {
      let sum = 0;
      for(let i = 1; i <= n; i++){
         sum += i;
      }
      return sum
   }
   ```
   - This means:
      - If `n` doubles, the time taken also roughly doubles.
      - Efficient for small to medium input sizes.
      - Not the best for very large values of `n`, where a mathematical formula could be used for improvement.
   
   **💡 Note:**
   Although technically the function performs `n + 2` operations (initialization + `n` additions + return), **Big-O ignores constant factors**, so we write **O(n)**.

   ### 2.1.2 Constant **O(1)**

    ```javascript
   function summation(n) {
      return (n * (n + 1)) / 2;
   }
   ```

   This version of the `summation(n)` function uses a **mathematical formula** to calculate the sum of the first `n` natural numbers:

   \[\text{Sum} = \frac{n(n + 1)}{2}\]

- No loops or iterations are used.
- Regardless of the value of `n`, the calculation is done in a **single step**.
- Whether `n` is 10 or 10 million, the time taken stays **constant**.

- This means:
  - The execution time does **not** grow with the size of `n`.
  - It is extremely fast and efficient, even for very large values of `n`.

  **💡 Note:**
Even though the formula has multiple arithmetic operations (`*`, `+`, `/`), they are all performed in **constant time**, so the overall complexity is **still O(1)**.
