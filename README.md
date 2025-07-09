# Table of Contents

1. [Alogorithm](#1-Algorithm)
2. [Big-O notations](#2-big-o-notations)
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
