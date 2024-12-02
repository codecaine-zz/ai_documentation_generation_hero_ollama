Algorithms and Data Structures
To implement a sorting algorithm in Bun, you can use JavaScript's built-in capabilities since Bun is compatible with JavaScript. Below is a simple example of how to implement the Bubble Sort algorithm using Bun.

### Step-by-Step Implementation

1. **Setup Bun Environment**: Make sure you have Bun installed and set up. You can create a new Bun project if you haven't done this yet.

   ```bash
   bun init my-sort-app
   cd my-sort-app
   ```

2. **Create a Sorting Function**: Open the main JavaScript file (e.g., `index.js`) and implement the Bubble Sort algorithm. Here’s a simple implementation:

```javascript
// index.js

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap the elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted array:", array);
const sortedArray = bubbleSort(array);
console.log("Sorted array:", sortedArray);
```

3. **Run the Code in Bun**: Now that we have our sorting function implemented, you can run your application using:

```bash
bun index.js
```

### Explanation of the Bubble Sort Algorithm
- The function `bubbleSort` takes an array as input.
- It uses a loop to traverse the array multiple times.
- For each pair of adjacent items, it checks if they are in the wrong order (the first one is greater than the second).
- If they are, it swaps them.
- This process repeats until no swaps are needed, indicating that the array is sorted.

### Additional Sorting Algorithms
You can also implement other sorting algorithms like Quick Sort, Merge Sort, or Selection Sort in a similar manner. Just replace the logic inside your sorting function with that of the desired algorithm.

### Conclusion
This implementation of Bubble Sort in Bun shows how you can define functions and use JavaScript syntax seamlessly. You can expand on this by creating more complex sorting algorithms or optimizing this one. Happy coding!

Below are code examples demonstrating the implementation of a binary search algorithm using Bun JavaScript v1.1.37. The examples include both iterative and recursive approaches.

### Iterative Binary Search

```javascript
function binarySearchIterative(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;
const result = binarySearchIterative(sortedArray, target);

console.log(`Target ${target} found at index: ${result}`);
```

### Recursive Binary Search

```javascript
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Target found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right); // Search in the right half
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1); // Search in the left half
    }
}

// Example usage
const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const target = 10;
const result = binarySearchRecursive(sortedArray, target);

console.log(`Target ${target} found at index: ${result}`);
```

### Key Points

- Both functions require a sorted array to work correctly.
- The iterative approach uses a while loop, while the recursive approach makes function calls to itself.
- If the target is found, the index is returned; otherwise, `-1` is returned, indicating the target is not in the array.

You can run these examples directly in the Bun JavaScript runtime environment.

Certainly! Below is an example implementation of a singly linked list in JavaScript that should run in the Bun JavaScript runtime v1.1.37. This implementation includes basic operations such as adding, removing, and displaying elements.

### Singly Linked List Implementation

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Initialize the next node as null
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Start with an empty list
    this.size = 0; // Track the size of the linked list
  }

  // Add a new node at the end of the list
  add(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode; // If list is empty, make the new node the head
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next; // Traverse to the end of the list
      }
      current.next = newNode; // Append the new node to the end
    }
    this.size++; // Increment the size
  }

  // Remove a node by value
  remove(value) {
    if (!this.head) return false; // List is empty
    if (this.head.value === value) {
      this.head = this.head.next; // Remove the head
      this.size--;
      return true;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        current.next = current.next.next; // Skip the node to be removed
        this.size--;
        return true;
      }
      current = current.next; // Move to the next node
    }
    return false; // Value not found
  }

  // Display the list
  display() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.value);
      current = current.next; // Move to the next node
    }
    console.log(elements.join(' -> '));
  }

  // Get the size of the list
  getSize() {
    return this.size;
  }
}

// Example usage:

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.display(); // Output: 10 -> 20 -> 30
console.log('Size:', linkedList.getSize()); // Output: Size: 3

linkedList.remove(20);
linkedList.display(); // Output: 10 -> 30
console.log('Size:', linkedList.getSize()); // Output: Size: 2

linkedList.remove(10);
linkedList.display(); // Output: 30
console.log('Size:', linkedList.getSize()); // Output: Size: 1

linkedList.remove(30);
linkedList.display(); // Output: (nothing)
console.log('Size:', linkedList.getSize()); // Output: Size: 0
```

### Explanation
- **Node Class**: Represents a single node in the linked list with a `value` and a pointer to the `next` node.
- **LinkedList Class**: Manages the linked list operations.
  - **add(value)**: Adds a node with the given value at the end of the list.
  - **remove(value)**: Removes the first node with the specified value.
  - **display()**: Outputs the linked list elements in a readable format.
  - **getSize()**: Returns the current size of the linked list.

### Running the Code
You can copy this code into any JavaScript environment that supports Bun, such as a Bun REPL or a project using Bun, and it should work as intended.

Certainly! Below are examples of using a stack data structure in Bun JavaScript runtime v1.1.37. A stack follows the Last In First Out (LIFO) principle.

### Stack Implementation

First, let's create a simple stack class:

```javascript
class Stack {
    constructor() {
        this.items = [];
    }

    // Add an element to the stack
    push(element) {
        this.items.push(element);
    }

    // Remove the top element from the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    }

    // View the top element
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }
}
```

### Example Usage

Now, we will demonstrate how to use the `Stack` class:

```javascript
// Create a new stack instance
const stack = new Stack();

// Push elements onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack after pushes:", stack.items); // Output: [1, 2, 3]

// Peek the top element
console.log("Top element:", stack.peek()); // Output: 3

// Pop an element from the stack
const poppedElement = stack.pop();
console.log("Popped element:", poppedElement); // Output: 3
console.log("Stack after pop:", stack.items); // Output: [1, 2]

// Check the size of the stack
console.log("Stack size:", stack.size()); // Output: 2

// Check if the stack is empty
console.log("Is stack empty?", stack.isEmpty()); // Output: false

// Clear the stack
stack.clear();
console.log("Stack after clear:", stack.items); // Output: []
```

### Summary

In this example, we created a simple stack implementation in Bun JavaScript and demonstrated its basic operations including push, pop, peek, size, and clear. You can easily extend this stack implementation to include more functionalities as needed.

To implement a queue data structure in Bun using JavaScript, you can create a simple class that uses an array to manage the elements of the queue. Below is a straightforward implementation of a queue with basic operations such as `enqueue`, `dequeue`, `peek`, and `isEmpty`.

### Queue Implementation in Bun JavaScript

```javascript
class Queue {
  constructor() {
    this.items = []; // Initialize an empty array to hold the queue elements
  }

  // Adds an element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Removes and returns the first element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty"; // Handle underflow
    }
    return this.items.shift(); // Remove the first element
  }

  // Returns the first element of the queue without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty"; // Handle empty case
    }
    return this.items[0]; // Return the first element
  }

  // Checks if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the size of the queue
  size() {
    return this.items.length;
  }

  // Prints the elements of the queue
  print() {
    console.log(this.items.join(" <- "));
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Dequeued:", queue.dequeue()); // 1
console.log("Peek:", queue.peek()); // 2
console.log("Is the queue empty?", queue.isEmpty()); // false
queue.print(); // 2 <- 3
```

### Explanation of the Code

1. **Constructor**: The `Queue` class initializes an empty array called `items` to store the elements of the queue.

2. **enqueue**: This method adds an element to the end of the queue using `Array.push()`.

3. **dequeue**: This method removes the first element from the queue using `Array.shift()` and returns it. It also checks if the queue is empty before performing the operation to avoid underflow.

4. **peek**: This method returns the first element of the queue without modifying it. If the queue is empty, it returns a message indicating this.

5. **isEmpty**: This method checks if the queue has no elements by evaluating the length of the `items` array.

6. **size**: This method returns the number of elements currently in the queue.

7. **print**: This method logs the elements of the queue in a readable format.

You can utilize this `Queue` class in your Bun application to manage a FIFO (First In, First Out) sequence of data. This implementation is straightforward and demonstrates the basic characteristics of a queue data structure.

Control Structures
Here are some examples of using `if-else` statements in Bun JavaScript Runtime v1.1.37:

### Example 1: Basic If-Else Statement

```javascript
const number = 10;

if (number > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is not positive.");
}
```

### Example 2: If-Else Ladder

```javascript
const grade = 85;

if (grade >= 90) {
  console.log("You received an A.");
} else if (grade >= 80) {
  console.log("You received a B.");
} else if (grade >= 70) {
  console.log("You received a C.");
} else {
  console.log("You need to work harder.");
}
```

### Example 3: Checking Even or Odd

```javascript
const number = 7;

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
```

### Example 4: Using Boolean Conditions

```javascript
const isRaining = true;
const hasUmbrella = false;

if (isRaining && !hasUmbrella) {
  console.log("Don't forget to take an umbrella!");
} else if (isRaining && hasUmbrella) {
  console.log("You are prepared for the rain.");
} else {
  console.log("It's a nice day!");
}
```

### Example 5: Nested If-Else Statements

```javascript
const age = 20;

if (age >= 18) {
  if (age >= 21) {
    console.log("You can legally drink alcohol.");
  } else {
    console.log("You are an adult but cannot drink alcohol.");
  }
} else {
  console.log("You are a minor.");
}
```

These examples utilize basic control flow to demonstrate how `if-else` statements can make decisions in your code. You can run these snippets in the Bun JavaScript Runtime environment.

In the Bun JavaScript runtime, you can use `switch` statements just like you would in any other JavaScript environment. The `switch` statement allows you to execute different blocks of code based on the value of an expression. It provides an efficient way to handle multiple conditions without needing multiple `if-else` statements.

Here’s a basic structure of a `switch` statement:

```javascript
switch (expression) {
    case value1:
        // Code to be executed if expression === value1
        break;
    case value2:
        // Code to be executed if expression === value2
        break;
    // You can have any number of case statements
    default:
        // Code to be executed if none of the cases match
}
```

### Example Usage

Here’s a simple example that demonstrates how to use a `switch` statement in Bun:

```javascript
const day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
```

### Key Points

1. **Expression Evaluation**: The `switch` statement evaluates the expression once and compares its value against each case.
  
2. **Case Values**: The `case` values can be of any type, but they should be of the same type as the evaluated expression for strict equality comparison.

3. **Break Statement**: The `break` statement is used to terminate a case in the switch block. If omitted, the execution will continue to the next case (known as "fall-through").

4. **Default Case**: The `default` case is optional and can be used to execute code if none of the `case` values match.

5. **Type Handling**: Like with regular JavaScript, type comparisons in `switch` statements use strict equality (`===`).

You can use switch statements in Bun the same way you would in any JavaScript environment. This means you can leverage Bun's performance characteristics while still adhering to standard JavaScript syntax and behavior.

Certainly! Below are a few examples of how to use `for` loops in the Bun JavaScript runtime (version 1.1.37).

### Example 1: Basic For Loop
This example demonstrates a simple `for` loop that iterates through numbers from 1 to 5 and logs them to the console.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

### Example 2: For Loop with Array
Here, we have an array of fruits, and we use a `for` loop to iterate over the array and print each fruit.

```javascript
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### Example 3: Nested For Loop
This example illustrates a nested `for` loop to create a multiplication table for numbers 1 to 5.

```javascript
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
```

### Example 4: For Loop with Break and Continue
In this example, we use `break` to exit the loop when a certain condition is met and `continue` to skip an iteration.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Breaking at 5');
        break; // Exit loop when i is 5
    }
    
    if (i % 2 === 0) {
        console.log(`${i} is even, continuing...`);
        continue; // Skip even numbers
    }
    
    console.log(i); // This will only log odd numbers
}
```

### Example 5: For Loop with Reverse Iteration
This example demonstrates how to use a `for` loop to iterate through an array in reverse order.

```javascript
const colors = ['Red', 'Green', 'Blue', 'Yellow'];

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
}
```

### Example 6: Using `forEach` with a Callback Function
Although not a traditional `for` loop, you can use a `forEach` method for iteration, which is often more idiomatic in JavaScript.

```javascript
const animals = ['Dog', 'Cat', 'Elephant'];

animals.forEach((animal) => {
    console.log(animal);
});
```

These examples should give you a good understanding of how to use various forms of `for` loops within the Bun JavaScript runtime. You can run this code directly in a Bun environment.

Sure! Here are some examples of using `while` loops in Bun JavaScript runtime v1.1.37:

### Example 1: Basic While Loop
This example demonstrates a simple `while` loop that counts from 1 to 5.

```javascript
let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}
```

### Example 2: Summing Numbers Using a While Loop
In this example, we'll sum numbers from 1 to 10.

```javascript
let sum = 0;
let number = 1;

while (number <= 10) {
    sum += number;
    number++;
}

console.log(`The sum is: ${sum}`);
```

### Example 3: User Input with While Loop
This example shows how to use a `while` loop to repeatedly ask for user input until a valid input is received.

```javascript
const prompt = require('prompt-sync')();

let input = '';

while (input !== 'exit') {
    input = prompt("Type 'exit' to stop the loop: ");
    console.log(`You typed: ${input}`);
}
```

### Example 4: Infinite Loop with Break Condition
This example demonstrates creating an infinite loop that breaks when a certain condition is met.

```javascript
let i = 0;

while (true) {
    if (i > 10) {
        break;
    }
    console.log(i);
    i++;
}
```

### Example 5: Using a While Loop to Process an Array
This example processes elements of an array using a `while` loop.

```javascript
const fruits = ['apple', 'banana', 'cherry'];
let index = 0;

while (index < fruits.length) {
    console.log(fruits[index]);
    index++;
}
```

These examples provide a variety of ways you can utilize `while` loops in Bun JavaScript. You can replace the logic inside the loop with whatever functionality suits your needs!

Sure! Here are some examples of using `do-while` loops in the Bun JavaScript runtime (v1.1.37). 

### Example 1: Basic `do-while` Loop
This example demonstrates a basic `do-while` loop that counts from 1 to 5.

```javascript
let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 5);
```

### Example 2: User Input until a Specific Condition
In this example, we will keep prompting the user for a number until they enter zero.

```javascript
let number;

do {
    number = prompt("Enter a number (0 to exit):");
    console.log(`You entered: ${number}`);
} while (number !== '0');
```

### Example 3: Summing Numbers
This example shows how to sum up numbers until the user decides to stop (by entering zero).

```javascript
let sum = 0;
let number;

do {
    number = parseInt(prompt("Enter a number to add to the sum (0 to exit):"));
    sum += number;
} while (number !== 0);

console.log(`The total sum is: ${sum}`);
```

### Example 4: Validating User Input
Here, we will prompt the user to enter a specific string until they enter "yes".

```javascript
let response;

do {
    response = prompt("Please enter 'yes' to continue:");
} while (response !== 'yes');

console.log("Thank you for agreeing!");
```

### Example 5: Generating Random Numbers
This example will generate random numbers until a number greater than 0.9 is generated.

```javascript
let randomNum;

do {
    randomNum = Math.random();
    console.log(`Generated number: ${randomNum}`);
} while (randomNum <= 0.9);

console.log('A number greater than 0.9 has been generated.');
```

These examples illustrate various practical uses of `do-while` loops in JavaScript. You can run these snippets in a Bun environment to see how the `do-while` loop operates.

In the Bun JavaScript runtime (as well as in standard JavaScript), `break` and `continue` are control flow statements that can be used within loops to alter the flow of execution. Here's how to use each:

### `break` Statement

The `break` statement is used to terminate the current loop iteration and exit from the loop altogether. Once `break` is executed, control passes to the first statement following the loop.

**Example of `break`:**

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i); // This will log 0, 1, 2, 3, 4
}
```

In this example, the loop iterates from 0 to 9, but when `i` equals 5, the `break` statement is executed, and the loop terminates.

### `continue` Statement

The `continue` statement skips the current iteration of the loop and proceeds with the next iteration. It doesn't terminate the loop; instead, it just skips to the next iteration based on the loop’s condition.

**Example of `continue`:**

```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip the rest of the loop body for even numbers
    }
    console.log(i); // This will log 1, 3, 5, 7, 9
}
```

In this example, when `i` is even, the `continue` statement is executed, and the `console.log(i)` line is skipped. As a result, only odd numbers are logged.

### Usage in Other Loop Structures

Both `break` and `continue` can be used in other types of loops, such as `while` and `do...while` loops:

**Example with `while`:**

```javascript
let i = 0;
while (i < 10) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    console.log(i);
    i++;
}
```

**Example with `do...while`:**

```javascript
let i = 0;
do {
    i++;
    if (i % 2 === 0) {
        continue; // Skip logging even numbers
    }
    console.log(i); // This will log odd numbers
} while (i < 10);
```

### Conclusion

- Use `break` to exit a loop entirely.
- Use `continue` to skip the current iteration and proceed to the next one.

These statements are straightforward and can help manage the control flow effectively within loop constructs in Bun JavaScript runtime or any JavaScript environment.

In JavaScript, the use of labels and the `goto`-like behavior can be emulated using labeled statements and `break` or `continue` statements. However, JavaScript does not have a native `goto` statement. 

Here's a simple example of using labels and `break` to create a flow similar to `goto`:

```javascript
// Using labels and break to mimic a goto-like behavior
outerLoop: for (let i = 0; i < 3; i++) {
  console.log(`Outer Loop: ${i}`);

  innerLoop: for (let j = 0; j < 3; j++) {
    console.log(`  Inner Loop: ${j}`);

    if (j === 1) {
      console.log('  Breaking out to outerLoop');
      break outerLoop; // This breaks out of the outer loop
    }
  }
}

console.log('Finished execution.');
```

In this example:
- We have an outer loop and an inner loop.
- If `j` equals `1`, the `break outerLoop` statement is executed, which exits both the inner and outer loop, similar to how a `goto` might work by jumping to a different part of the code.

Another example using labels with `continue`:

```javascript
// Using labels and continue to skip iterations
outerLoop: for (let i = 0; i < 3; i++) {
  console.log(`Outer Loop: ${i}`);

  innerLoop: for (let j = 0; j < 3; j++) {
    if (j === 1) {
      console.log('  Skipping to next iteration of outerLoop');
      continue outerLoop; // This skips the rest of the outer loop iteration
    }
    console.log(`  Inner Loop: ${j}`);
  }
}

console.log('Finished execution.');
```

In this second example:
- If `j` equals `1`, the `continue outerLoop` statement is executed, which skips the rest of the current iteration of the outer loop and starts the next iteration.

### Note
While labels can provide clear structure in some cases, they can also make code harder to read and maintain. It is generally recommended to use them sparingly and consider alternative control flow methods such as functions, early returns, or flags.

Data Types and Variables
In the Bun JavaScript runtime, declaring and using variables is similar to how it's done in standard JavaScript. Here are examples showcasing variable declarations using `let`, `const`, and `var`, along with their usage:

### Example 1: Using `let`
```javascript
let name = "Alice";
console.log(name); // Output: Alice

name = "Bob"; // Reassigning the variable
console.log(name); // Output: Bob
```

### Example 2: Using `const`
```javascript
const age = 30;
console.log(age); // Output: 30

// age = 31; // This will throw an error because you cannot reassign a const variable
```

### Example 3: Using `var`
```javascript
var city = "New York";
console.log(city); // Output: New York

var city = "Los Angeles"; // Redeclaring and reassigning a var variable
console.log(city); // Output: Los Angeles
```

### Example 4: Block Scope with `let` and `const`
```javascript
if (true) {
  let blockScoped = "I am block scoped";
  const anotherBlockScoped = "I am also block scoped";
  console.log(blockScoped); // Output: I am block scoped
  console.log(anotherBlockScoped); // Output: I am also block scoped
}

// console.log(blockScoped); // This will throw a ReferenceError
// console.log(anotherBlockScoped); // This will also throw a ReferenceError
```

### Example 5: Using Variables in Functions
```javascript
function greet() {
  let greeting = "Hello";
  console.log(greeting);
}

greet(); // Output: Hello
// console.log(greeting); // This will throw a ReferenceError
```

### Conclusion
In Bun, like in standard JavaScript, you can declare variables using `let`, `const`, and `var`, with `let` and `const` providing block scope. Make sure to choose the appropriate variable declaration based on whether you need to reassign the variable later.

In the Bun JavaScript runtime (v1.1.37), you can work with integers, floats, and strings using standard JavaScript operations and functions. Here's a brief overview of how to handle each of these data types.

### Working with Integers

Integers in Bun can be handled just like in standard JavaScript. You can perform basic arithmetic operations and use built-in methods.

#### Example:
```javascript
// Integer operations
let a = 10;
let b = 20;

let sum = a + b;        // Addition
let difference = a - b; // Subtraction
let product = a * b;    // Multiplication
let quotient = b / a;   // Division
let remainder = b % a;  // Modulus

console.log(sum);       // Output: 30
console.log(difference); // Output: -10
console.log(product);    // Output: 200
console.log(quotient);   // Output: 2
console.log(remainder);   // Output: 0
```

### Working with Floats

Floats (or floating-point numbers) can also be manipulated similarly. Be cautious with precision due to how floats are represented.

#### Example:
```javascript
// Float operations
let x = 5.5;
let y = 2.2;

let floatSum = x + y;        // Addition
let floatDifference = x - y; // Subtraction
let floatProduct = x * y;    // Multiplication
let floatQuotient = x / y;   // Division

console.log(floatSum);        // Output: 7.7
console.log(floatDifference);  // Output: 3.3
console.log(floatProduct);     // Output: 12.1
console.log(floatQuotient);    // Output: 2.5
```

### Working with Strings

Strings can be created using single quotes, double quotes, or backticks (for template literals). You can concatenate strings, access substrings, and perform various string methods.

#### Example:
```javascript
// String operations
let str1 = "Hello";
let str2 = "World";

// Concatenation
let greeting = str1 + ", " + str2 + "!"; // "Hello, World!"

// Template literals
let name = "John";
let welcomeMessage = `Hello, ${name}!`; // "Hello, John!"

// String methods
let length = str1.length; // Get length
let upperCase = str1.toUpperCase(); // "HELLO"
let lowerCase = str2.toLowerCase(); // "world"
let substring = str1.substring(1, 4); // "ell"

console.log(greeting);        // Output: Hello, World!
console.log(welcomeMessage);   // Output: Hello, John!
console.log(length);           // Output: 5
console.log(upperCase);        // Output: HELLO
console.log(lowerCase);        // Output: world
console.log(substring);        // Output: ell
```

### Summary

- **Integers** can be manipulated using arithmetic operators.
- **Floats** also support arithmetic operations, but be mindful of precision issues.
- **Strings** allow for concatenation and various methods to manipulate and retrieve information.

These fundamental operations on integers, floats, and strings are consistent with standard JavaScript and can be used seamlessly in the Bun JavaScript runtime.

In the Bun JavaScript runtime, you can use enumerated types (enums) similarly to how you would in TypeScript or other languages that support this feature. While JavaScript does not have built-in support for enums, you can implement them using objects. Here are a few examples to demonstrate how to create and use enumerated types in Bun:

### Example 1: Basic Enum Definition

You can create a simple enum using an object:

```javascript
const ColorEnum = {
    RED: 'RED',
    GREEN: 'GREEN',
    BLUE: 'BLUE',
};

// Usage
function getColorMessage(color) {
    switch (color) {
        case ColorEnum.RED:
            return 'You selected red!';
        case ColorEnum.GREEN:
            return 'You selected green!';
        case ColorEnum.BLUE:
            return 'You selected blue!';
        default:
            return 'Unknown color!';
    }
}

console.log(getColorMessage(ColorEnum.RED)); // Output: You selected red!
```

### Example 2: Numeric Enum

You might want to use numeric values for your enum:

```javascript
const StatusEnum = {
    PENDING: 0,
    IN_PROGRESS: 1,
    COMPLETED: 2,
};

// Usage
function getStatusMessage(status) {
    switch (status) {
        case StatusEnum.PENDING:
            return 'Status is pending.';
        case StatusEnum.IN_PROGRESS:
            return 'Status is in progress.';
        case StatusEnum.COMPLETED:
            return 'Status is completed.';
        default:
            return 'Unknown status!';
    }
}

console.log(getStatusMessage(StatusEnum.COMPLETED)); // Output: Status is completed.
```

### Example 3: Enum with a Function

You can also include functions within your enum for more advanced functionality:

```javascript
const LogLevelEnum = {
    INFO: { value: 'INFO', log: () => console.log('Info level log.') },
    WARN: { value: 'WARN', log: () => console.log('Warning level log.') },
    ERROR: { value: 'ERROR', log: () => console.log('Error level log.') },
};

// Usage
function logMessage(level) {
    level.log();
}

logMessage(LogLevelEnum.INFO); // Output: Info level log.
logMessage(LogLevelEnum.ERROR); // Output: Error level log.
```

### Example 4: Read-only Enum

To make your enum properties read-only, you can use `Object.freeze()`:

```javascript
const DirectionEnum = Object.freeze({
    NORTH: 'NORTH',
    SOUTH: 'SOUTH',
    EAST: 'EAST',
    WEST: 'WEST',
});

// Usage
const direction = DirectionEnum.NORTH;

if (direction === DirectionEnum.NORTH) {
    console.log('Heading north!');
}

// The following line would throw an error if trying to modify the enum properties:
// DirectionEnum.NORTH = 'UP'; // This would not work due to Object.freeze
```

### Conclusion

While Bun does not provide built-in support for enums, you can effectively use JavaScript objects to create enumerated types that can be used in a similar manner to enums found in other programming languages. You can create both string and numeric enums and even enrich them with additional functionalities.

In Bun JavaScript runtime v1.1.37, you can define and use arrays similarly to how you would in standard JavaScript. Here are some examples showcasing how to create arrays, manipulate them, and access their elements.

### Defining an Array
You can define an array using square brackets:

```javascript
// Defining an array
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // Output: ['apple', 'banana', 'orange']
```

### Accessing Array Elements
You can access elements of an array using their index (starting from 0):

```javascript
const firstFruit = fruits[0];
console.log(firstFruit); // Output: 'apple'

const secondFruit = fruits[1];
console.log(secondFruit); // Output: 'banana'
```

### Modifying an Array
You can modify elements of an array directly:

```javascript
fruits[2] = 'grape';
console.log(fruits); // Output: ['apple', 'banana', 'grape']
```

### Adding Elements
You can use the `push` method to add elements to the end of an array:

```javascript
fruits.push('mango');
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'mango']
```

### Removing Elements
You can use the `pop` method to remove the last element of an array:

```javascript
const lastFruit = fruits.pop();
console.log(lastFruit); // Output: 'mango'
console.log(fruits); // Output: ['apple', 'banana', 'grape']
```

### Iterating Over an Array
You can use a `for` loop or the `forEach` method to iterate through an array:

```javascript
// Using a for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Using forEach method
fruits.forEach(fruit => {
    console.log(fruit);
});
```

### Array Methods
You can utilize various array methods such as `map`, `filter`, and `reduce`:

```javascript
// Using map to create a new array with modified values
const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercaseFruits); // Output: ['APPLE', 'BANANA', 'GRAPE']

// Using filter to get fruits with more than 5 letters
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits); // Output: ['banana', 'orange'] (if you had it in the original array)

// Using reduce to concatenate fruit names
const concatenatedFruits = fruits.reduce((acc, fruit) => acc + fruit, '');
console.log(concatenatedFruits); // Output: 'applebananagrape'
```

### Conclusion
These examples demonstrate the basic operations you can perform with arrays in the Bun JavaScript runtime. You can create, modify, and manipulate arrays using various built-in methods, just as you would in any JavaScript environment.

In Bun, JavaScript's built-in list handling typically uses arrays. Below are some code examples demonstrating how to work with lists (arrays) in the Bun JavaScript runtime (v1.1.37).

### Example 1: Creating and Initializing a List

```javascript
// Creating a list (array) in Bun
const fruits = ["apple", "banana", "cherry"];

// Logging the list
console.log(fruits); // Output: ['apple', 'banana', 'cherry']
```

### Example 2: Adding Items to a List

```javascript
const numbers = [1, 2, 3];

// Adding an item to the end of the list
numbers.push(4);
console.log(numbers); // Output: [1, 2, 3, 4]

// Adding an item to the beginning of the list
numbers.unshift(0);
console.log(numbers); // Output: [0, 1, 2, 3, 4]
```

### Example 3: Removing Items from a List

```javascript
const colors = ["red", "green", "blue"];

// Removing the last item
const lastColor = colors.pop();
console.log(colors); // Output: ['red', 'green']
console.log(lastColor); // Output: 'blue'

// Removing the first item
const firstColor = colors.shift();
console.log(colors); // Output: ['green']
console.log(firstColor); // Output: 'red'
```

### Example 4: Iterating Over a List

```javascript
const animals = ["dog", "cat", "bird"];

// Using forEach to iterate
animals.forEach((animal, index) => {
  console.log(`${index}: ${animal}`);
});
// Output: 
// 0: dog
// 1: cat
// 2: bird
```

### Example 5: Finding Items in a List

```javascript
const numbers = [10, 20, 30, 40, 50];

// Finding an item
const found = numbers.find(num => num > 25);
console.log(found); // Output: 30
```

### Example 6: Mapping Over a List

```javascript
const original = [1, 2, 3, 4, 5];

// Doubling each number in the list
const doubled = original.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

### Example 7: Filtering a List

```javascript
const ages = [18, 21, 16, 25, 30];

// Filtering to find eligible ages
const adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [18, 21, 25, 30]
```

### Example 8: Sorting a List

```javascript
const scores = [30, 10, 50, 20, 40];

// Sorting the scores in ascending order
scores.sort((a, b) => a - b);
console.log(scores); // Output: [10, 20, 30, 40, 50]
```

### Example 9: Joining Items in a List

```javascript
const elements = ["Hydrogen", "Helium", "Lithium"];

// Joining elements into a string
const joined = elements.join(", ");
console.log(joined); // Output: 'Hydrogen, Helium, Lithium'
```

### Example 10: Using Array Destructuring

```javascript
const points = [10, 20, 30];

// Destructuring the array
const [x, y, z] = points;
console.log(x, y, z); // Output: 10 20 30
```

These examples cover various operations you can perform with lists (arrays) in the Bun JavaScript runtime. You can use these snippets in your applications to manipulate and work with data effectively.

In Bun, as in standard JavaScript, dictionaries are generally implemented using objects or the `Map` class. Below are the details on how to work with both:

### Using Objects as Dictionaries

In JavaScript, you can use plain objects as dictionaries. Here’s how you can do it:

#### Creating an Object

```javascript
const dictionary = {};
```

#### Adding Key-Value Pairs

```javascript
dictionary['key1'] = 'value1';
dictionary['key2'] = 'value2';

// or using dot notation
dictionary.key3 = 'value3';
```

#### Accessing Values

```javascript
console.log(dictionary['key1']); // Output: value1
console.log(dictionary.key2); // Output: value2
```

#### Checking for a Key

```javascript
console.log('key1' in dictionary); // Output: true
console.log(dictionary.hasOwnProperty('key2')); // Output: true
```

#### Iterating Over the Dictionary

```javascript
for (const key in dictionary) {
    console.log(`${key}: ${dictionary[key]}`);
}

// Using Object.entries for better iteration
Object.entries(dictionary).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

#### Deleting a Key

```javascript
delete dictionary['key1'];
console.log(dictionary); // Output: { key2: 'value2', key3: 'value3' }
```

### Using Maps as Dictionaries

The `Map` object can also be utilized as a dictionary, and it allows for more flexibility with key types.

#### Creating a Map

```javascript
const map = new Map();
```

#### Adding Key-Value Pairs

```javascript
map.set('key1', 'value1');
map.set('key2', 'value2');
```

#### Accessing Values

```javascript
console.log(map.get('key1')); // Output: value1
console.log(map.get('key2')); // Output: value2
```

#### Checking for a Key

```javascript
console.log(map.has('key1')); // Output: true
```

#### Iterating Over the Map

```javascript
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Using for-of loop
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
```

#### Deleting a Key

```javascript
map.delete('key1');
console.log(map.has('key1')); // Output: false
```

### Summary

Both objects and `Map`s can serve as dictionaries in Bun JavaScript runtime. Objects are great for simple key-value pairs, especially when keys are strings, while `Map`s provide more versatility with key types and maintain the insertion order. Choose the one that best fits your use case!

Here's a basic example of using Sets in the Bun JavaScript runtime. A Set is a built-in object that lets you store unique values of any type, whether primitive values or object references.

### Example 1: Creating a Set

```javascript
// Create a new Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate value, will be ignored
mySet.add('Hello');
mySet.add({ a: 1 });

// Display the Set
console.log(mySet); // Output: Set(4) { 1, 2, 'Hello', { a: 1 } }
```

### Example 2: Checking for Values

```javascript
const mySet = new Set([1, 2, 3]);

// Check if a value exists in the Set
console.log(mySet.has(1)); // Output: true
console.log(mySet.has(4)); // Output: false
```

### Example 3: Iterating Over a Set

```javascript
const mySet = new Set(['apple', 'banana', 'cherry']);

// Using forEach to iterate over the Set
mySet.forEach(item => {
    console.log(item);
});

// Using for...of to iterate over the Set
for (const item of mySet) {
    console.log(item);
}
```

### Example 4: Removing Values

```javascript
const mySet = new Set([1, 2, 3]);

// Remove a value from the Set
mySet.delete(2);
console.log(mySet); // Output: Set(2) { 1, 3 }

// Clear all values from the Set
mySet.clear();
console.log(mySet); // Output: Set(0) {}
```

### Example 5: Set Size

```javascript
const mySet = new Set([1, 2, 3, 4]);

// Get the size of the Set
console.log(mySet.size); // Output: 4

// Example of a Set with duplicate values
const anotherSet = new Set([1, 1, 2, 2]);
console.log(anotherSet.size); // Output: 2
```

### Example 6: Converting Set to Array

```javascript
const mySet = new Set([1, 2, 3]);

// Convert Set to an Array
const myArray = [...mySet];
console.log(myArray); // Output: [1, 2, 3]
```

These examples demonstrate basic operations you can perform with Sets in Bun JavaScript runtime v1.1.37. Feel free to modify or expand these examples based on your needs!

In Bun, you can work with tuples using JavaScript arrays, as JavaScript does not have a built-in tuple type like some other languages. A tuple can be represented as an array with a fixed number of elements, where each element can be of a different type.

Here are some code examples demonstrating how to create and manipulate tuples using arrays in Bun:

### Example 1: Creating a Tuple

```javascript
// Creating a tuple with different types
const tuple = [42, "Hello", true];

console.log(tuple); // Output: [42, "Hello", true]
```

### Example 2: Accessing Tuple Elements

```javascript
const tuple = [42, "Hello", true];

// Accessing elements
const number = tuple[0]; // 42
const string = tuple[1]; // "Hello"
const boolean = tuple[2]; // true

console.log(number, string, boolean); // Output: 42 Hello true
```

### Example 3: Destructuring a Tuple

```javascript
const tuple = [42, "Hello", true];

// Destructuring the tuple
const [number, string, boolean] = tuple;

console.log(number); // Output: 42
console.log(string); // Output: Hello
console.log(boolean); // Output: true
```

### Example 4: Using Functions with Tuples

```javascript
// Function that returns a tuple
function getPersonInfo() {
    return ["Alice", 30, "Engineer"]; // Tuple
}

const [name, age, profession] = getPersonInfo();

console.log(`Name: ${name}, Age: ${age}, Profession: ${profession}`);
// Output: Name: Alice, Age: 30, Profession: Engineer
```

### Example 5: Tuples in Arrays

```javascript
// Array of tuples
const tupleArray = [
    [1, "One"],
    [2, "Two"],
    [3, "Three"]
];

// Iterating through the array of tuples
tupleArray.forEach(([num, word]) => {
    console.log(`Number: ${num}, Word: ${word}`);
});
// Output:
// Number: 1, Word: One
// Number: 2, Word: Two
// Number: 3, Word: Three
```

### Example 6: Type Checking with Tuples

To add a sense of type safety, you can use JSDoc comments to indicate the expected types of a tuple.

```javascript
/**
 * @typedef {[number, string, boolean]} MyTuple
 */

/**
 * @returns {MyTuple}
 */
function createTuple() {
    return [12, "Sample", false];
}

const tuple = createTuple();
console.log(tuple); // Output: [12, "Sample", false]
```

### Conclusion

While Bun JavaScript runtime does not have a separate tuple type, you can effectively use arrays to mimic tuple behavior. You can access elements, destructure them, and even use them in functions just like you would with tuples in languages that support them natively.

Databases
To connect to a database in Bun JavaScript runtime v1.1.37, you typically follow these general steps. Note that the exact method can vary depending on the type of database you are using (e.g., MongoDB, PostgreSQL, MySQL, etc.). Below is a general approach using popular libraries as examples:

### 1. Install the Database Driver
First, you need to install the appropriate database driver/package. Use Bun's package manager to add the necessary database client. For example:

- For PostgreSQL, you would run:
  ```bash
  bun add pg
  ```
  
- For MySQL, you could run:
  ```bash
  bun add mysql
  ```

- For MongoDB, you would run:
  ```bash
  bun add mongodb
  ```

### 2. Import the Database Client
Import the necessary database client in your Bun script. Here is how to do this for different databases:

#### PostgreSQL Example
```javascript
import { Client } from 'pg';

const client = new Client({
  user: 'yourUsername',
  host: 'localhost',
  database: 'yourDatabase',
  password: 'yourPassword',
  port: 5432,
});
```

#### MySQL Example
```javascript
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'yourUsername',
  database: 'yourDatabase',
  password: 'yourPassword'
});
```

#### MongoDB Example
```javascript
import { MongoClient } from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');
```

### 3. Connect to the Database
You then need to connect to the database using the appropriate method for the client you chose.

#### PostgreSQL Example
```javascript
await client.connect();
console.log('Connected to PostgreSQL');
```

#### MySQL Example
```javascript
await connection.connect();
console.log('Connected to MySQL');
```

#### MongoDB Example
```javascript
await client.connect();
console.log('Connected to MongoDB');
```

### 4. Perform Database Operations
After establishing a connection, you can perform your desired operations, such as queries, inserts, updates, etc.

### 5. Disconnect from the Database
Finally, remember to close the connection when you are done:

#### PostgreSQL Example
```javascript
await client.end();
```

#### MySQL Example
```javascript
await connection.end();
```

#### MongoDB Example
```javascript
await client.close();
```

### Example of Full Connection to PostgreSQL
Here’s a complete example using PostgreSQL:

```javascript
import { Client } from 'pg';

async function main() {
  const client = new Client({
    user: 'yourUsername',
    host: 'localhost',
    database: 'yourDatabase',
    password: 'yourPassword',
    port: 5432,
  });

  await client.connect();
  console.log('Connected to PostgreSQL');

  // Perform database operations here...

  await client.end();
}

main().catch(err => console.error('Error connecting to the database', err));
```

### Note
Make sure to handle errors appropriately and keep sensitive information secure (such as by using environment variables). This example serves as a basic guide, and you might want to customize it based on your project's specific requirements.

Certainly! In Bun, you can interact with SQLite databases to create and query tables. Below are examples that demonstrate how to create a table and execute queries against it.

### Step 1: Setting Up the Database

First, ensure you have Bun installed and set up for SQLite. You can start a new project with `bun init`.

### Step 2: Creating a Table

Here's how you can create a new SQLite database and a table within it.

```javascript
// Import the bun database module
import { Database } from 'bun:sqlite';

// Create a new database (or connect to an existing one)
const db = new Database('example.db');

// Create a table
db.run(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  )
`);
```

### Step 3: Inserting Data

You can insert data into the newly created table like this:

```javascript
// Insert data into the table
const insertStmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
insertStmt.run('John Doe', 'john.doe@example.com');
insertStmt.run('Jane Smith', 'jane.smith@example.com');
```

### Step 4: Querying Data

To query data from the table, you can do the following:

```javascript
// Query all users
const users = db.query('SELECT * FROM users').all();

// Output the results
console.log(users);
```

### Step 5: Cleanup (Optional)

If you want to close the database connection when you're done, you can call:

```javascript
db.close();
```

### Full Example Combined

Here’s the full script with all the parts combined:

```javascript
import { Database } from 'bun:sqlite';

// Create a new database
const db = new Database('example.db');

// Create a table
db.run(`
  CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  )
`);

// Insert data into the table
const insertStmt = db.prepare('INSERT INTO users (name, email) VALUES (?, ?)');
insertStmt.run('John Doe', 'john.doe@example.com');
insertStmt.run('Jane Smith', 'jane.smith@example.com');

// Query all users
const users = db.query('SELECT * FROM users').all();
console.log(users);

// Close the database
db.close();
```

### Running the example

Save the code above in a file (e.g., `database.js`), and then run it using Bun:

```bash
bun run database.js
```

After running the script, you should see the output of the users you inserted into the database.

### Note
Make sure that you handle errors in a production scenario, such as checking if the table already exists before creating it or catching any database errors during insertion or querying.

Sure! Below are some examples of SQL queries using JOINs and subqueries, adapted for a JavaScript environment such as the Bun runtime. For this purpose, we'll use a hypothetical database with two tables: `users` and `orders`.

### Example 1: Using JOINs

This example uses an inner join to retrieve user data along with their corresponding orders.

```javascript
import { sql } from 'bun:sql'; // Assuming we have a SQL utility

// Example function to fetch user info with their orders
async function fetchUsersWithOrders(db) {
    const query = sql`
        SELECT users.id, users.name, orders.id AS order_id, orders.amount
        FROM users
        JOIN orders ON users.id = orders.user_id
    `;

    const results = await db.query(query);
    return results;
}

// Usage
const db = /* initialize your database connection */;
fetchUsersWithOrders(db).then(usersWithOrders => {
    console.log(usersWithOrders);
});
```

### Example 2: Using LEFT JOIN

This example shows how to use a LEFT JOIN to retrieve all users, even if they do not have any orders.

```javascript
async function fetchUsersWithOptionalOrders(db) {
    const query = sql`
        SELECT users.id, users.name, orders.id AS order_id, orders.amount
        FROM users
        LEFT JOIN orders ON users.id = orders.user_id
    `;

    const results = await db.query(query);
    return results;
}

// Usage
fetchUsersWithOptionalOrders(db).then(users => {
    console.log(users);
});
```

### Example 3: Using Subqueries

This example demonstrates a subquery to find users who have placed orders greater than a specific amount.

```javascript
async function fetchUsersWithOrdersAboveAmount(db, amount) {
    const query = sql`
        SELECT * FROM users
        WHERE id IN (
            SELECT user_id FROM orders WHERE amount > ${amount}
        )
    `;

    const results = await db.query(query);
    return results;
}

// Usage
const amountThreshold = 100;
fetchUsersWithOrdersAboveAmount(db, amountThreshold).then(users => {
    console.log(users);
});
```

### Example 4: Subquery with JOIN

This example combines JOINs and subqueries to fetch user names along with the maximum order amount they have placed.

```javascript
async function fetchUsersMaxOrderAmount(db) {
    const query = sql`
        SELECT users.name, MAX(orders.amount) AS max_order_amount
        FROM users
        JOIN orders ON users.id = orders.user_id
        GROUP BY users.id
    `;

    const results = await db.query(query);
    return results;
}

// Usage
fetchUsersMaxOrderAmount(db).then(usersMaxOrders => {
    console.log(usersMaxOrders);
});
```

### Conclusion

The above examples illustrate how to use SQL queries involving JOINs and subqueries within the Bun JavaScript runtime. Adjust the database connection and query structure as per your actual database schema and connection setup.

In the Bun JavaScript runtime, you can use prepared statements with databases like SQLite. Below are examples demonstrating how to use prepared statements in Bun.

### Example: Using SQLite with Prepared Statements in Bun

First, you need to ensure you have the SQLite package available in your Bun environment. You can use the built-in SQLite support provided by Bun.

Here’s how to use prepared statements in Bun:

1. **Install SQLite if required** (this step may vary based on your Bun setup):

   ```bash
   bun add sqlite
   ```

2. **Create a Database and Use Prepared Statements**:

```javascript
// Import the sqlite package
import sqlite3 from 'sqlite3';

// Open a database file
const db = new sqlite3.Database('example.db');

// Create a table
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
)`);

// Function to insert a user using a prepared statement
const insertUser = (name, email) => {
    const stmt = db.prepare(`INSERT INTO users (name, email) VALUES (?, ?)`);
    stmt.run(name, email);
    stmt.finalize(); // Finalize the statement
};

// Function to retrieve users
const getUsers = () => {
    db.all(`SELECT * FROM users`, [], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log(rows); // Output the rows
    });
};

// Insert a new user
insertUser('Alice', 'alice@example.com');
insertUser('Bob', 'bob@example.com');

// Retrieve and display users
getUsers();

// Close the database
db.close();
```

### Explanation of the Code

1. **Importing SQLite**: We import the SQLite library.
2. **Database Initialization**: We open a database file named `example.db` (it creates one if it doesn't exist).
3. **Table Creation**: We create a `users` table if it doesn't already exist.
4. **Prepared Statements**: 
   - The `insertUser` function shows how to create a prepared statement with placeholders (`?`).
   - We then run the statement with `stmt.run(name, email)` to safely insert user data.
5. **Finalizing the Statement**: After executing the statement, we finalize it with `stmt.finalize()`.
6. **Retrieving Data**: The `getUsers` function retrieves all users and logs them to the console.
7. **Closing the Database**: We close the database connection after finishing operations.

This way, you can safely handle database operations in Bun using prepared statements, helping prevent SQL injection attacks and improving performance with repeated queries.

In Bun JavaScript runtime v1.1.37, you can use transactions to manage your database operations effectively. Transactions help ensure that a series of database operations are executed as a single unit of work, meaning that either all of the operations succeed, or none of them do. This is crucial for maintaining data integrity.

Here’s how you can use transactions with database operations in Bun:

### Step 1: Set Up Your Database Connection

First, make sure you have a database connection set up. Bun uses various database libraries, so ensure you are using the appropriate one (like SQLite or PostgreSQL).

```javascript
import { Database } from 'bun:sqlite'; // For SQLite
// or
import { Client } from 'bun:pg'; // For PostgreSQL

const db = new Database('my-database.db');
// or
const client = new Client({ /* connection config */ });
await client.connect();
```

### Step 2: Begin a Transaction

To start a transaction, you typically call a method on your database connection to begin. Note that transaction methods may vary depending on the database you are using.

For example, with SQLite:

```javascript
const db = new Database('my-database.db');
db.exec('BEGIN TRANSACTION;');
```

And with PostgreSQL:

```javascript
await client.query('BEGIN;');
```

### Step 3: Execute Your Database Operations

After starting the transaction, you can perform your database operations (like inserts, updates, or deletes). 

For example:

```javascript
try {
  db.exec('INSERT INTO users (name) VALUES ("Alice");');
  db.exec('INSERT INTO users (name) VALUES ("Bob");');
  
  // If using PostgreSQL
  await client.query('INSERT INTO users (name) VALUES ($1)', ['Alice']);
  await client.query('INSERT INTO users (name) VALUES ($1)', ['Bob']);
  
  // If all operations are successful
  db.exec('COMMIT;'); 
  // or
  await client.query('COMMIT;'); 
} catch (error) {
  // If there is any error, rollback the transaction
  db.exec('ROLLBACK;');
  // or
  await client.query('ROLLBACK;');
  console.error('Transaction failed:', error);
}
```

### Step 4: Commit or Rollback

After executing your operations, you need to either commit the transaction if everything was successful or roll back if any operation failed.

```javascript
// Commit
db.exec('COMMIT;');

// Rollback
db.exec('ROLLBACK;');
```

For PostgreSQL, it would be similar:

```javascript
await client.query('COMMIT;');
// or
await client.query('ROLLBACK;');
```

### Conclusion

Using transactions in Bun for database operations ensures your data remains consistent, especially in scenarios where multiple related operations must succeed or fail together. Make sure to handle errors appropriately to guarantee Rollbacks in case of failures. Always refer to your specific database driver documentation for more detailed transaction handling methods that might vary.

Error Handling
Here are a few examples illustrating the use of `try-catch` blocks in Bun JavaScript runtime v1.1.37.

### Example 1: Basic Try-Catch

```javascript
try {
    // Code that may throw an error
    let result = riskyOperation();
    console.log("Operation result:", result);
} catch (error) {
    console.error("An error occurred:", error.message);
}

function riskyOperation() {
    throw new Error("Something went wrong!");
}
```

### Example 2: Handling Specific Errors

```javascript
try {
    let jsonString = '{"name": "John", "age": 30}';
    let parsedData = JSON.parse(jsonString);
    console.log("Parsed data:", parsedData);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("There was a syntax error in the JSON string:", error.message);
    } else {
        console.error("An unexpected error occurred:", error.message);
    }
}
```

### Example 3: Nested Try-Catch

```javascript
try {
    let number = getNumberFromUser(); // Assume this function gets input from the user
    try {
        let result = 100 / number;
        console.log("Result:", result);
    } catch (innerError) {
        console.error("Inner error: Division by zero or invalid number.", innerError.message);
    }
} catch (outerError) {
    console.error("Outer error: Could not get a valid number.", outerError.message);
}

function getNumberFromUser() {
    return 0; // Simulating user input
}
```

### Example 4: Finally Block

```javascript
try {
    console.log("Trying to read a file...");
    let data = readFile("nonexistent.txt"); // Assume this function reads a file
    console.log("File data:", data);
} catch (error) {
    console.error("Error reading file:", error.message);
} finally {
    console.log("Cleanup actions can be performed here.");
}

function readFile(filename) {
    throw new Error("File not found");
}
```

### Example 5: Asynchronous Operation with Try-Catch

```javascript
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        console.log("Data fetched:", data);
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
}

fetchData();
```

These examples demonstrate various ways to utilize `try-catch` blocks to handle errors in your Bun JavaScript applications effectively.

In Bun, a modern JavaScript runtime, working with exceptions is similar to how you'd handle them in other JavaScript environments like Node.js or browsers. However, here are key points specific to Bun and general best practices for working with exception types:

### Throwing Exceptions

You can throw exceptions using the `throw` statement followed by an instance of the `Error` object (or its subclasses). This can be used to indicate different types of errors.

```javascript
throw new Error("This is a generic error.");
throw new TypeError("This is a type error.");
throw new RangeError("This is a range error.");
```

### Catching Exceptions

You typically catch exceptions using the `try...catch` statement. You can handle different types of exceptions using instance checks or type assertions.

```javascript
try {
    // Some code that may throw
} catch (err) {
    if (err instanceof TypeError) {
        console.error("Type error occurred:", err.message);
    } else if (err instanceof RangeError) {
        console.error("Range error occurred:", err.message);
    } else {
        console.error("An error occurred:", err.message);
    }
}
```

### Custom Error Types

You can create your own custom error types by extending the built-in `Error` class. This helps in differentiating your errors more easily.

```javascript
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("This is a custom error.");
} catch (err) {
    if (err instanceof CustomError) {
        console.error(err.name + ": " + err.message);
    } else {
        console.error("General error:", err.message);
    }
}
```

### Best Practices

1. **Specificity**: Always use specific error types where possible, such as `TypeError`, `ReferenceError`, `RangeError`, or your custom errors, to provide clearer error handling.

2. **Logging**: Implement proper logging in your error handling to track issues effectively.

3. **Graceful Degradation**: Ensure that your application can recover from errors gracefully, providing fallback options or user-friendly messages.

4. **Avoid Overusing Exceptions**: Exceptions should not be used for control flow (e.g., to manage optional conditions). They are best reserved for exceptional circumstances that disrupt the normal operation of your code.

5. **Async/Await Error Handling**: If you're working with asynchronous code, remember to use try/catch within async functions or handle rejections from promises using `.catch()`.

```javascript
async function fetchData() {
    try {
        const data = await someAsyncOperation();
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}
```

By following these practices, you can effectively handle exceptions in your applications running on the Bun JavaScript runtime, ensuring better robustness and stability.

In Bun, you can create custom error classes by extending the built-in `Error` class. Below are examples demonstrating how to create and use custom error classes in the Bun JavaScript runtime.

### Example of Custom Error Class

```javascript
// Define a custom error class
class ValidationError extends Error {
  constructor(message) {
    // Call the parent constructor
    super(message);
    // Set the name to the custom error class name
    this.name = 'ValidationError';
  }
}

// Function that might throw a ValidationError
function validateInput(input) {
  if (!input || input.length < 5) {
    throw new ValidationError('Input must be at least 5 characters long.');
  }
  return 'Input is valid!';
}

// Using the custom error class
try {
  console.log(validateInput('abc'));
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Validation Error: ${error.message}`);
  } else {
    console.error('An unexpected error occurred:', error);
  }
}

try {
  console.log(validateInput('validInput'));
} catch (error) {
  if (error instanceof ValidationError) {
    console.error(`Validation Error: ${error.message}`);
  } else {
    console.error('An unexpected error occurred:', error);
  }
}
```

### Explanation

1. **Custom Error Class**: The `ValidationError` class extends the built-in `Error` class. We set the `name` property to differentiate it from standard errors.

2. **Throwing the Custom Error**: In the `validateInput` function, we throw a `ValidationError` if the input is invalid.

3. **Catching the Error**: When calling `validateInput`, we use a try-catch block. In the catch, we check if the caught error is an instance of `ValidationError` and handle it accordingly.

### Another Example: Custom Type Error Class

```javascript
// Custom type error class
class TypeErrorCustom extends Error {
  constructor(message) {
    super(message);
    this.name = 'TypeErrorCustom';
  }
}

// Function that checks for types
function checkType(value) {
  if (typeof value !== 'string') {
    throw new TypeErrorCustom('Expected a string type.');
  }
  return 'Value is a string!';
}

// Example usage of the custom type error class
try {
  console.log(checkType(123)); // This will throw an error
} catch (error) {
  if (error instanceof TypeErrorCustom) {
    console.error(`Type Error: ${error.message}`);
  } else {
    console.error('An unexpected error occurred:', error);
  }
}

try {
  console.log(checkType('Hello'));
} catch (error) {
  if (error instanceof TypeErrorCustom) {
    console.error(`Type Error: ${error.message}`);
  } else {
    console.error('An unexpected error occurred:', error);
  }
}
```

### Conclusion

Creating custom error classes allows for better error handling and more informative error messages in your code. You can define specific error types that can help with debugging and maintenance. In Bun 1.1.37, the usage of custom error classes works the same way as in standard JavaScript environments.

In Bun, as in standard JavaScript, a `finally` block can be used to execute code after a `try` and `catch` block, regardless of whether an error was thrown or caught. Here are some examples demonstrating the use of `finally` blocks in the Bun JavaScript runtime.

### Example 1: Basic Usage of `finally`

```javascript
function example1() {
  try {
    console.log("Trying to execute code...");
    throw new Error("An error occurred!");
  } catch (error) {
    console.log(`Caught an error: ${error.message}`);
  } finally {
    console.log("This will always execute, whether an error occurred or not.");
  }
}

example1();
```

**Output:**
```
Trying to execute code...
Caught an error: An error occurred!
This will always execute, whether an error occurred or not.
```

### Example 2: Using `finally` Without `catch`

```javascript
function example2() {
  try {
    console.log("Executing code that may throw an error...");
    // Uncomment the next line to simulate an error
    // throw new Error("Oops, something went wrong!");
  } finally {
    console.log("Clean up actions can be performed here.");
  }
}

example2();
```

**Output:**
```
Executing code that may throw an error...
Clean up actions can be performed here.
```

### Example 3: Using `finally` with Asynchronous Code

```javascript
async function example3() {
  try {
    console.log("Starting asynchronous operation...");
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        // Uncomment the next line to simulate an error
        // reject(new Error("An async error occurred!"));
        resolve("Async operation completed successfully!");
      }, 1000);
    }).then(result => {
      console.log(result);
    });
  } catch (error) {
    console.log(`Caught an error: ${error.message}`);
  } finally {
    console.log("This will always execute after the try/catch.");
  }
}

example3();
```

**Output (when no error occurs):**
```
Starting asynchronous operation...
Async operation completed successfully!
This will always execute after the try/catch.
```

### Example 4: Nested Try-Catch-Finally

```javascript
function example4() {
  try {
    console.log("Outer try block.");
    try {
      console.log("Inner try block.");
      throw new Error("Error in inner block!");
    } catch (innerError) {
      console.log(`Caught inner error: ${innerError.message}`);
    } finally {
      console.log("Inner finally block.");
    }
  } catch (outerError) {
    console.log(`Caught outer error: ${outerError.message}`);
  } finally {
    console.log("Outer finally block.");
  }
}

example4();
```

**Output:**
```
Outer try block.
Inner try block.
Caught inner error: Error in inner block!
Inner finally block.
Outer finally block.
```

These examples illustrate how `finally` blocks can be employed to ensure that specific code runs after `try` and `catch` blocks, regardless of whether an error occurred or not. This is particularly useful for performing clean-up actions, closing resources, or logging actions.

In Bun JavaScript runtime, you can handle error messages and logs using standard JavaScript practices along with Bun's built-in capabilities for enhanced performance. Below are examples demonstrating how to log error messages and track regular logs within the Bun environment.

### Example 1: Basic Error Logging

```javascript
try {
  // Simulate a function that might throw an error
  function riskyOperation() {
    throw new Error("Something went wrong!");
  }
  
  riskyOperation();
} catch (error) {
  // Log the error message
  console.error("Error occurred:", error.message);
}
```

### Example 2: Logging with Timestamps

```javascript
function logWithTimestamp(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

try {
  // Another risky operation
  throw new Error("Another error!");
} catch (error) {
  logWithTimestamp("Error occurred: " + error.message);
}
```

### Example 3: Custom Logging Function

```javascript
function log(level, message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${level}] ${message}`);
}

try {
  // Risky operation here
  undefinedFunction(); // This will throw a ReferenceError
} catch (error) {
  log("ERROR", error.message);
}
```

### Example 4: Using Bun’s File System to Log Errors

You can also log errors to a file using Bun's File System module.

```javascript
const fs = require('fs');

function logErrorToFile(error) {
  const message = `[${new Date().toISOString()}] ERROR: ${error.message}\n`;
  fs.writeFileSync('error.log', message, { flag: 'a' });
}

try {
  // Code that may throw an error
  throw new Error("Failed to load resource!");
} catch (error) {
  logErrorToFile(error);
}
```

### Example 5: Asynchronous Error Handling

Handling asynchronous operations and logging errors:

```javascript
async function fetchData() {
  throw new Error("Network failure!");
}

(async () => {
  try {
    await fetchData();
  } catch (error) {
    console.error("Async error occurred:", error.message);
  }
})();
```

### Summary

In these examples, you can see how to:

1. Use `try...catch` to handle errors.
2. Log messages with timestamps for better tracking.
3. Create a custom logging function to standardize the logging format.
4. Write error messages to a file using Bun's file system capabilities.
5. Handle errors in asynchronous code.

These practices ensure robust error handling and logging in your Bun applications.

File Input/Output
In Bun, reading and writing text files can be done using the built-in `fs` (file system) module. Here’s how to read from and write to text files in the Bun JavaScript runtime v1.1.37:

### Reading a Text File

To read a text file, you can use the `Bun.file` method in conjunction with `text()` to obtain the content of the file.

Here's an example of reading a text file:

```javascript
(async () => {
  try {
    const filePath = 'path/to/your/file.txt';
    const file = Bun.file(filePath);
    const content = await file.text();
    
    console.log(content); // Output the content of the file
  } catch (error) {
    console.error('Error reading the file:', error);
  }
})();
```

### Writing to a Text File

To write text to a file, you can use the `write` method of `Bun.file`. If the file does not exist, it will be created; if it does exist, the content will be replaced.

Here's an example of writing to a text file:

```javascript
(async () => {
  try {
    const filePath = 'path/to/your/output.txt';
    const textToWrite = 'Hello, this is a sample text!';

    await Bun.write(filePath, textToWrite);
    console.log('File written successfully');
  } catch (error) {
    console.error('Error writing to the file:', error);
  }
})();
```

### Summary

- Use `Bun.file` to access a file.
- Use `.text()` to read the contents of a file.
- Use `Bun.write()` to write text to a file, replacing its current content if it exists.

These methods provide a straightforward approach to handling text files in Bun.

In Bun, working with binary files can be done using built-in APIs. Below are some code examples that demonstrate how to read and write binary files.

### Example 1: Writing a Binary File

```javascript
// Import necessary functions from the Bun API
const fs = require('fs');

// Create a new binary file and write some data
async function writeBinaryFile() {
  // Creating a buffer with some sample binary data
  const data = new Uint8Array([0, 1, 2, 3, 4, 5, 255]);
  
  // Write the buffer to a file
  await fs.writeFile('example.bin', data);
  console.log('Binary file written: example.bin');
}

writeBinaryFile().catch(console.error);
```

### Example 2: Reading a Binary File

```javascript
const fs = require('fs');

// Read a binary file and log its contents
async function readBinaryFile() {
  const data = await fs.readFile('example.bin');
  
  // Convert the binary data to an array of numbers
  const uint8Array = new Uint8Array(data);
  
  console.log('Binary file contents:', uint8Array);
}

readBinaryFile().catch(console.error);
```

### Example 3: Appending to a Binary File

```javascript
const fs = require('fs');

// Append data to an existing binary file
async function appendToBinaryFile() {
  const additionalData = new Uint8Array([6, 7, 8, 255]);
  
  // Append the new data
  await fs.appendFile('example.bin', additionalData);
  console.log('Binary data appended to: example.bin');
}

appendToBinaryFile().catch(console.error);
```

### Example 4: Reading and Processing Binary Data

```javascript
const fs = require('fs');

// Read a binary file and process its data
async function processBinaryFile() {
  const data = await fs.readFile('example.bin');
  const uint8Array = new Uint8Array(data);
  
  // Process the binary data (for example, print each byte)
  uint8Array.forEach(byte => {
    console.log('Byte:', byte);
  });
}

processBinaryFile().catch(console.error);
```

### Summary

In these examples, we demonstrated how to work with binary files in the Bun JavaScript runtime by:
- Writing binary data to a file using `fs.writeFile()`.
- Reading binary data from a file using `fs.readFile()`.
- Appending binary data to an existing file using `fs.appendFile()`.
- Processing binary data after reading it.

You can run these scripts in a Bun environment to see how they work with binary files.

Sure! Below are examples demonstrating how to work with CSV and JSON file formats in the Bun JavaScript runtime (v1.1.37).

### Example 1: Working with CSV

In this example, we'll read a CSV file, parse its content, and then write a new CSV file.

#### Reading a CSV File

1. **Creating a CSV file (`data.csv`)**:

```csv
name,age,city
Alice,30,New York
Bob,25,Los Angeles
Charlie,35,Chicago
```

2. **Reading and parsing the CSV file in Bun**:

```javascript
import { readFile } from "bun";

async function readCSV(filePath) {
    const data = await readFile(filePath, "utf-8");
    const rows = data.split("\n").map(row => row.split(","));
    
    const headers = rows[0];
    const jsonData = rows.slice(1).map(row => {
        return headers.reduce((acc, header, index) => {
            acc[header] = row[index];
            return acc;
        }, {});
    });

    return jsonData;
}

const csvData = await readCSV("data.csv");
console.log(csvData);
```

#### Writing to a CSV File

3. **Writing a modified JSON data back to CSV**:

```javascript
import { writeFile } from "bun";

async function writeCSV(filePath, jsonData) {
    const headers = Object.keys(jsonData[0]);
    const rows = jsonData.map(row => headers.map(header => row[header]).join(","));
    const csvContent = [headers.join(","), ...rows].join("\n");

    await writeFile(filePath, csvContent);
}

const modifiedData = [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Bob", age: 25, city: "Los Angeles" },
    { name: "Charlie", age: 35, city: "Chicago" },
    { name: "David", age: 28, city: "Boston" }
];

await writeCSV("modified_data.csv", modifiedData);
```

### Example 2: Working with JSON

In this example, we will read a JSON file, manipulate its contents, and then write it back to a new JSON file.

#### Reading a JSON File

1. **Creating a JSON file (`data.json`)**:

```json
[
    { "name": "Alice", "age": 30, "city": "New York" },
    { "name": "Bob", "age": 25, "city": "Los Angeles" },
    { "name": "Charlie", "age": 35, "city": "Chicago" }
]
```

2. **Reading and parsing the JSON file in Bun**:

```javascript
import { readFile } from "bun";

async function readJSON(filePath) {
    const data = await readFile(filePath, "utf-8");
    return JSON.parse(data);
}

const jsonData = await readJSON("data.json");
console.log(jsonData);
```

#### Writing to a JSON File

3. **Modifying the data and writing it back to JSON**:

```javascript
import { writeFile } from "bun";

async function writeJSON(filePath, jsonData) {
    const jsonContent = JSON.stringify(jsonData, null, 2);
    await writeFile(filePath, jsonContent);
}

const modifiedJsonData = jsonData.map(person => {
    return { ...person, age: person.age + 1 }; // Increment age by 1
});

await writeJSON("modified_data.json", modifiedJsonData);
```

### Conclusion

These examples show how to read and write CSV and JSON files using the Bun JavaScript runtime. You can easily adapt these examples for your specific needs!

In Bun, you can work with file streams using the built-in `fs` module. Below are some examples demonstrating how to read from and write to files using streams in the Bun JavaScript runtime.

### Example 1: Reading from a File Stream

```javascript
import { open } from 'fs';

async function readFileStream(filePath) {
  const file = await open(filePath, 'r');
  const stream = file.createReadStream();

  stream.on('data', (chunk) => {
    console.log('Received chunk:', chunk.toString());
  });

  stream.on('end', () => {
    console.log('Finished reading file.');
  });

  stream.on('error', (err) => {
    console.error('Error reading file:', err);
  });
}

// Usage
readFileStream('./example.txt');
```

### Example 2: Writing to a File Stream

```javascript
import { open } from 'fs';

async function writeFileStream(filePath, data) {
  const file = await open(filePath, 'w');
  const stream = file.createWriteStream();

  stream.write(data);
  stream.end();

  stream.on('finish', () => {
    console.log('Finished writing to file.');
  });

  stream.on('error', (err) => {
    console.error('Error writing to file:', err);
  });
}

// Usage
writeFileStream('./output.txt', 'Hello, Bun file stream!');
```

### Example 3: Piping Streams

You can also pipe a readable stream into a writable stream. Here’s how to copy the contents of one file to another:

```javascript
import { open } from 'fs';

async function copyFile(sourcePath, destinationPath) {
  const sourceFile = await open(sourcePath, 'r');
  const destFile = await open(destinationPath, 'w');

  const readStream = sourceFile.createReadStream();
  const writeStream = destFile.createWriteStream();

  readStream.pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('File copied successfully.');
  });

  writeStream.on('error', (err) => {
    console.error('Error writing to destination file:', err);
  });

  readStream.on('error', (err) => {
    console.error('Error reading source file:', err);
  });
}

// Usage
copyFile('./example.txt', './copy_of_example.txt');
```

### Notes:
- Make sure to replace `example.txt` and `output.txt` with the actual paths of the files you want to read from or write to.
- Error handling is implemented to log any issues that may arise while reading or writing the files.

These examples provide a basic understanding of how to handle file streams in Bun. You can expand upon them or modify them according to your specific requirements.

In Bun JavaScript runtime v1.1.37, you can perform file input/output (I/O) operations using the built-in `bun` module. When handling file I/O, it's important to manage exceptions to ensure your application can gracefully handle errors, such as files not being found or permission issues.

Here's how to use file I/O along with exception handling in Bun:

### Reading a File

To read a file, you can use `bun.file(filename)` or the built-in `Deno.readTextFile()` function. Wrapping these operations in a try-catch block will help you catch any exceptions that may arise.

#### Example: Reading a File

```javascript
async function readFile(filename) {
  try {
    const data = await bun.file(filename).text(); // Using bun.file()
    console.log('File content:', data);
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
}

readFile('./example.txt');
```

### Writing to a File

To write to a file, you can use `Deno.writeTextFile()`. You should also wrap this in a try-catch block for error handling.

#### Example: Writing to a File

```javascript
async function writeFile(filename, content) {
  try {
    await Deno.writeTextFile(filename, content);
    console.log('File written successfully');
  } catch (error) {
    console.error('Error writing file:', error.message);
  }
}

writeFile('./output.txt', 'Hello, Bun!');
```

### Summary of Exception Handling

- **Try-Catch Blocks:** Always use try-catch when performing file I/O to catch any errors and handle them gracefully.
- **Error Logging:** Use `console.error()` to log error messages to facilitate debugging.
- **Check File Existence:** Optionally, you can check if a file exists before performing read/write operations using `Deno.stat()` or similar methods.

### Example Usage

Here's an example function that combines reading from one file and writing the content to another file, demonstrating full file I/O with exception handling:

```javascript
async function copyFile(source, destination) {
  try {
    const content = await bun.file(source).text();
    await Deno.writeTextFile(destination, content);
    console.log(`Copied content from ${source} to ${destination}`);
  } catch (error) {
    console.error('Error during file copy:', error.message);
  }
}

copyFile('./source.txt', './destination.txt');
```

By following these examples, you can effectively manage file input/output operations along with exception handling in the Bun JavaScript runtime.

Functions and Methods
In Bun, the JavaScript runtime, you can define and call functions in a manner similar to standard JavaScript. Here are some examples:

### Example 1: Basic Function Definition and Call

```javascript
// Define a simple function
function greet(name) {
  return `Hello, ${name}!`;
}

// Call the function
console.log(greet("Alice")); // Output: Hello, Alice!
```

### Example 2: Function Expressions

```javascript
// Define a function using a function expression
const add = function(a, b) {
  return a + b;
};

// Call the function
console.log(add(5, 3)); // Output: 8
```

### Example 3: Arrow Functions

```javascript
// Define a function using an arrow function
const multiply = (x, y) => x * y;

// Call the function
console.log(multiply(4, 7)); // Output: 28
```

### Example 4: Function with Default Parameters

```javascript
// Define a function with default parameters
function introduce(name, age = 25) {
  return `My name is ${name} and I am ${age} years old.`;
}

// Call the function with and without the second parameter
console.log(introduce("Bob"));      // Output: My name is Bob and I am 25 years old.
console.log(introduce("Carol", 30)); // Output: My name is Carol and I am 30 years old.
```

### Example 5: Function Returning Another Function

```javascript
// Define a function that returns another function
function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier;
  };
}

// Create a function that doubles the input
const double = createMultiplier(2);

// Call the returned function
console.log(double(5)); // Output: 10
```

### Example 6: IIFE (Immediately Invoked Function Expression)

```javascript
// Define and immediately call a function
(function() {
  console.log("This function runs immediately!");
})(); // Output: This function runs immediately!
```

These examples demonstrate various ways to define and call functions in the Bun JavaScript runtime, showcasing the flexibility of JavaScript function syntax.

In Bun JavaScript runtime v1.1.37, working with function arguments is similar to how you would handle function arguments in standard JavaScript. Here’s a breakdown of how to define and work with function arguments:

### 1. Defining Functions

You can define functions using the standard syntax, which can include parameters. Here’s a simple example:

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!
```

### 2. Default Parameters

You can also set default values for your function parameters. If the argument is not provided, the default value will be used.

```javascript
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet('Bob')); // Output: Hello, Bob!
```

### 3. Rest Parameters

If you want to accept an indefinite number of arguments, you can use the rest parameter syntax (`...`). This allows you to gather all remaining arguments into an array.

```javascript
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30
```

### 4. Using `arguments` Object

In non-arrow functions, you can access an `arguments` object, which is an array-like object that holds all arguments passed to the function.

```javascript
function showArgs() {
    console.log(arguments);
}

showArgs(1, 2, 3); // Output: [1, 2, 3]
```

### 5. Destructuring Arguments

You can also destructure an object passed as an argument, which can make it easier to work with multiple parameters.

```javascript
function displayInfo({ name, age }) {
    return `${name} is ${age} years old.`;
}

console.log(displayInfo({ name: 'Alice', age: 30 })); // Output: Alice is 30 years old.
```

### 6. Accessing Arguments in Arrow Functions

In arrow functions, the `arguments` object is not available. However, you can still use rest parameters.

```javascript
const multiply = (...args) => {
    return args.reduce((acc, num) => acc * num, 1);
};

console.log(multiply(2, 3, 4)); // Output: 24
```

### Conclusion

Working with function arguments in Bun JavaScript runtime v1.1.37 is straightforward and leverages the same principles as standard JavaScript. You can use default parameters, rest parameters, destructuring, and access via the `arguments` object when applicable. These tools allow for flexible and robust function definitions.

In Bun JavaScript runtime, you can use default and optional function arguments in a similar way as in standard JavaScript. Below are code examples illustrating both concepts.

### Default Function Arguments

Default function arguments allow you to specify default values for parameters if no value or `undefined` is passed. Here's an example:

```javascript
// Function with default value for the parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet());        // Output: Hello, Guest!
```

### Optional Function Arguments

Optional function arguments can be achieved by checking if the argument is provided or not, and you can handle it within the function:

```javascript
// Function with optional parameter
function calculateArea(length, width) {
    // If width is not provided, use length as width for a square
    width = width !== undefined ? width : length;
    return length * width;
}

console.log(calculateArea(5, 10)); // Output: 50 (rectangle)
console.log(calculateArea(5));      // Output: 25 (square)
```

### Combining Default and Optional Arguments

You can also combine default and optional arguments in a single function:

```javascript
function createUser(name, age = 18, email) {
    const user = {
        name,
        age,
        email: email !== undefined ? email : 'no-email@example.com',
    };
    return user;
}

console.log(createUser("John")); // Output: { name: 'John', age: 18, email: 'no-email@example.com' }
console.log(createUser("Jane", 25, "jane@example.com")); // Output: { name: 'Jane', age: 25, email: 'jane@example.com' }
```

In these examples, you can see how to effectively use default and optional parameters in functions using the Bun JavaScript runtime.

In Bun, just like in standard JavaScript, functions can return values that can be used in various ways. Here are some examples demonstrating the use of return values.

### Example 1: Basic Function Returning a Value

```javascript
// A simple function that returns the sum of two numbers
function add(a, b) {
  return a + b;
}

// Using the return value
const result = add(5, 3);
console.log(result); // Output: 8
```

### Example 2: Returning an Object

```javascript
// Function that returns an object
function createUser(name, age) {
  return {
    name: name,
    age: age
  };
}

// Using the returned object
const user = createUser('Alice', 30);
console.log(user); // Output: { name: 'Alice', age: 30 }
```

### Example 3: Returning an Array

```javascript
// Function that returns an array of numbers
function getEvenNumbers(limit) {
  const evens = [];
  for (let i = 0; i <= limit; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    }
  }
  return evens;
}

// Using the returned array
const evenNumbers = getEvenNumbers(10);
console.log(evenNumbers); // Output: [0, 2, 4, 6, 8, 10]
```

### Example 4: Returning Promises

```javascript
// Function returning a Promise
function fetchData(url) {
  return fetch(url).then(response => response.json());
}

// Using the returned Promise
fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### Example 5: Returning from Arrow Functions

```javascript
// Using an arrow function to return a value
const multiply = (x, y) => x * y;

// Using the return value
const product = multiply(4, 7);
console.log(product); // Output: 28
```

### Example 6: Returning Early from a Function

```javascript
// Function that checks if a number is even
function isEven(num) {
  if (num % 2 !== 0) {
    return false; // Return early if the number is odd
  }
  return true; // Return true if the number is even
}

// Using the return value
const checkNumber = isEven(10);
console.log(checkNumber); // Output: true
```

These examples illustrate how to use return values in functions within the Bun JavaScript runtime, demonstrating different scenarios such as returning primitive values, objects, arrays, promises, and using arrow functions.

In Bun, which is a modern JavaScript runtime, you can use lambda functions (also known as arrow functions) just like in JavaScript. Here are some examples illustrating how to use them effectively in Bun:

### 1. Basic Arrow Function

```javascript
const add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8
```

### 2. Array Mapping

You can use lambda functions for array manipulation, such as mapping:

```javascript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);

console.log(squared); // Output: [1, 4, 9, 16, 25]
```

### 3. Filtering an Array

Arrow functions can also be used for filtering:

```javascript
const ages = [15, 22, 31, 12, 45];
const adults = ages.filter(age => age >= 18);

console.log(adults); // Output: [22, 31, 45]
```

### 4. Reducing an Array

You can write complex logic using arrow functions with reduce:

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 15
```

### 5. Event Handling in Bun

If you are building a server or apps using Bun, you can handle events with arrow functions:

```javascript
import { serve } from "bun";

serve({
    fetch(req) {
        return new Response("Hello from Bun!", {
            headers: { "Content-Type": "text/plain" },
        });
    },
});

console.log("Server is running on http://localhost:3000");
```

### 6. Using Arrow Functions with Promises

You can also use arrow functions with promises:

```javascript
const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
};

fetchData().then(data => console.log(data)); // Output: Data fetched!
```

### 7. Using Arrow Functions in Classes

Arrow functions are also useful in class methods to preserve `this` context:

```javascript
class Counter {
    constructor() {
        this.count = 0;
    }
    
    increment = () => {
        this.count++;
        console.log(this.count);
    }
}

const counter = new Counter();
counter.increment(); // Output: 1
counter.increment(); // Output: 2
```

These examples showcase how versatile lambda functions (arrow functions) can be in Bun JS, making your code cleaner and easier to work with.

Networking and Web Development
Here are a few examples of performing HTTP requests using the Bun JavaScript runtime (version 1.1.37).

### Example 1: GET Request
```javascript
// Simple GET request to fetch data from an API
const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
```

### Example 2: POST Request
```javascript
// Sending data using a POST request
const postData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error posting data:', error);
  }
};

postData();
```

### Example 3: PUT Request
```javascript
// Updating data using a PUT request
const updateData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 1,
        title: 'updated title',
        body: 'updated body',
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error updating data:', error);
  }
};

updateData();
```

### Example 4: DELETE Request
```javascript
// Deleting data using a DELETE request
const deleteData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    console.log('Data deleted successfully');
  } catch (error) {
    console.error('Error deleting data:', error);
  }
};

deleteData();
```

### Example 5: Handling Query Parameters
```javascript
// Fetching data with query parameters
const fetchWithQuery = async () => {
  const queryParams = new URLSearchParams({
    userId: 1,
  });

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${queryParams}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data with query parameters:', error);
  }
};

fetchWithQuery();
```

These examples demonstrate common HTTP operations like GET, POST, PUT, and DELETE using the `fetch` API in Bun. You can use these patterns to interact with RESTful APIs or any other web services.

To work with WebSockets in Bun JavaScript runtime v1.1.37, you can follow these general steps. Bun provides built-in support for WebSockets similar to the browser's WebSocket API. Here’s a simple guide on how to set up a WebSocket client and server:

### WebSocket Server

1. **Creating a WebSocket Server**:
   You can create a WebSocket server using the `WebSocket` class from the `bun` global object.

   ```javascript
   const { WebSocketServer } = require('ws'); // If you're using a particular library for WebSockets

   const wss = new WebSocketServer({ port: 8080 });

   wss.on('connection', (ws) => {
       console.log('A new client connected!');

       ws.on('message', (message) => {
           console.log(`Received: ${message}`);
           // Echo the received message back to the client
           ws.send(`You said: ${message}`);
       });

       ws.on('close', () => {
           console.log('Client disconnected');
       });

       ws.send('Welcome to the WebSocket server!');
   });

   console.log('WebSocket server is running on ws://localhost:8080');
   ```

### WebSocket Client

2. **Creating a WebSocket Client**:
   You can connect to a WebSocket server using the `WebSocket` constructor available in Bun:

   ```javascript
   const ws = new WebSocket('ws://localhost:8080');

   ws.onopen = () => {
       console.log('Connected to the server');
       ws.send('Hello, server!');
   };

   ws.onmessage = (event) => {
       console.log(`Message from server: ${event.data}`);
   };

   ws.onclose = () => {
       console.log('Disconnected from the server');
   };

   ws.onerror = (error) => {
       console.error(`WebSocket error: ${error.message}`);
   };
   ```

### Summary of Events

- **onopen**: Triggered when the connection is successfully established.
- **onmessage**: Triggered when a message is received from the server.
- **onclose**: Triggered when the connection is closed.
- **onerror**: Triggered if an error occurs.

### Running Your Application

- Ensure your WebSocket server is running first, then run your WebSocket client.
- Make sure you handle network errors and exceptions robustly to ensure a smoother user experience.

### Notes

- Bun’s WebSocket implementation is similar to the browser's but may have specific features or improvements in performance due to Bun's architecture.
- Be sure to check Bun’s documentation for any updates or changes to WebSocket handling in newer versions.

With this knowledge, you should be able to implement WebSocket functionality in your Bun applications effectively!

Here's a brief overview of how to use FTP, SFTP, and SSH in Bun JavaScript runtime v1.1.37, along with code examples for each.

### 1. FTP Example

To use FTP, you can rely on a library like `basic-ftp`. Here's how you could do it in Bun:

```javascript
import { FTPClient } from 'basic-ftp';

async function uploadFile() {
    const client = new FTPClient();
    try {
        await client.access({
            host: 'yourftpserver.com',
            user: 'yourusername',
            password: 'yourpassword',
            secure: false, // Set to true for FTPS
        });
        console.log('Connected to FTP server.');

        await client.ensureWorkingDir('/path/to/dir'); // Ensure you're in the right directory
        await client.uploadFrom('localfile.txt', 'remotefile.txt');
        console.log('File uploaded successfully.');
    }
    catch (err) {
        console.error(err);
    }
    client.close();
}

uploadFile();
```

### 2. SFTP Example

For SFTP, you can use `ssh2-sftp-client`. Here is a sample implementation:

```javascript
import SFTPClient from 'ssh2-sftp-client';

async function uploadFileSFTP() {
    const sftp = new SFTPClient();
    try {
        await sftp.connect({
            host: 'yoursftpserver.com',
            port: '22',
            username: 'yourusername',
            password: 'yourpassword'
        });
        console.log('Connected to SFTP server.');

        await sftp.put('localfile.txt', '/path/to/remotefile.txt');
        console.log('File uploaded successfully.');
    }
    catch (err) {
        console.error(err);
    }
    finally {
        sftp.end();
    }
}

uploadFileSFTP();
```

### 3. SSH Example

For executing SSH commands, you can also use the `ssh2` library. Here's a simple command execution example:

```javascript
import { Client } from 'ssh2';

function executeSSHCommand() {
    const conn = new Client();
    conn.on('ready', () => {
        console.log('SSH Client :: ready');
        conn.exec('ls -la', (err, stream) => {
            if (err) throw err;
            stream.on('close', (code, signal) => {
                console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
                conn.end();
            }).on('data', (data) => {
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect({
        host: 'yoursshserver.com',
        port: 22,
        username: 'yourusername',
        password: 'yourpassword'
    });
}

executeSSHCommand();
```

### Note

Ensure to install the necessary libraries in your Bun environment by running:

```bash
bun add basic-ftp ssh2-sftp-client ssh2
```

These examples demonstrate basic FTP, SFTP uploads, and SSH command execution. You may need to adjust error handling and security practices based on your application's requirements.

In Bun, you can consume web services that return XML or JSON data using the built-in `fetch` API. This example will illustrate how to work with both XML and JSON data.

### Example 1: Fetching JSON Data

Here's a simple example of fetching JSON data from a web service.

```javascript
// JSON example: Fetching user data from a JSON placeholder API
async function fetchJsonData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Network response was not ok' + response.statusText);
    }
    const data = await response.json(); // Parse as JSON
    console.log(data); // Log the JSON data
  } catch (error) {
    console.error('Fetch error:', error); // Handle errors
  }
}

fetchJsonData();
```

### Example 2: Fetching XML Data

For XML, you will need to parse the response with the `DOMParser` to work with it effectively.

```javascript
// XML example: Fetching data from a hypothetical XML API
async function fetchXmlData() {
  try {
    const response = await fetch('https://www.w3schools.com/xml/note.xml');
    if (!response.ok) {
      throw new Error('Network response was not ok' + response.statusText);
    }
    const text = await response.text(); // Get the response as text
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, 'text/xml'); // Parse the XML

    // Access specific elements in the XML
    const from = xmlDoc.getElementsByTagName('from')[0].textContent;
    const to = xmlDoc.getElementsByTagName('to')[0].textContent;
    const heading = xmlDoc.getElementsByTagName('heading')[0].textContent;
    const body = xmlDoc.getElementsByTagName('body')[0].textContent;

    console.log({ from, to, heading, body }); // Log the extracted data
  } catch (error) {
    console.error('Fetch error:', error); // Handle errors
  }
}

fetchXmlData();
```

### Important Points

1. **Fetching JSON Data**:
   - You can directly use the `response.json()` method to parse the data.
   - Always check response status with `response.ok`.

2. **Fetching XML Data**:
   - Use `response.text()` to read the response as plain text.
   - Parse the text with `DOMParser` to create an XML Document.
   - You can access XML elements using `getElementsByTagName` or similar methods.

These examples illustrate the basic approach to handling JSON and XML data when consuming web services using the Bun JavaScript runtime. Make sure the URLs used for fetching data are valid and publicly accessible.

Bun is primarily a JavaScript runtime and does not natively support Python web frameworks like Flask or Django. However, you can create a web server using frameworks available in the JavaScript ecosystem, such as Express.js, or utilize Bun's built-in HTTP capabilities.

Here’s how you can create a simple HTTP server using Bun, which is analogous to what you might do with Flask or Django in Python:

### Example: Simple HTTP Server with Bun

```javascript
// Import Bun's built-in HTTP server
const { serve } = require('bun');

// Define a request handler
const handleRequest = (req) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/') {
    return new Response('Hello, World!', { status: 200 });
  } else if (method === 'GET' && url === '/about') {
    return new Response('About Page', { status: 200 });
  } else {
    return new Response('Not Found', { status: 404 });
  }
};

// Start the server
const server = serve({
  port: 3000,
  fetch: handleRequest,
});

console.log('Server is running on http://localhost:3000');
```

### Example: Using Fetcher for API-like Endpoints

Here's another example where we can simulate a basic API with Bun:

```javascript
const { serve } = require('bun');

const handleRequest = (req) => {
  const { method, url } = req;

  if (method === 'GET' && url === '/api/user') {
    return new Response(JSON.stringify({ id: 1, name: 'John Doe' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response('Not Found', { status: 404 });
};

serve({
  port: 4000,
  fetch: handleRequest,
});

console.log('API server is running on http://localhost:4000');
```

### Example: Simple Web Server with Routing

You can enhance the server to use a basic routing mechanism:

```javascript
const { serve } = require('bun');

const routes = {
  '/': () => new Response('Welcome to the Home Page!', { status: 200 }),
  '/about': () => new Response('This is the About Page!', { status: 200 }),
  '/contact': () => new Response('Contact us at contact@example.com', { status: 200 }),
};

const handleRequest = (req) => {
  const { url } = req;
  const routeHandler = routes[url] || (() => new Response('404 Not Found', { status: 404 }));

  return routeHandler();
};

serve({
  port: 5000,
  fetch: handleRequest,
});

console.log('Server with routing is running on http://localhost:5000');
```

In these examples, we demonstrate how to create web servers using Bun's capabilities. While it's not exactly like Flask or Django, it provides basic routing and request handling functionality that serves a similar purpose. For more complex applications, you might consider using Express.js or Koa.js for a more feature-rich framework in the JavaScript ecosystem.

Object-Oriented Programming (OOP)
In the Bun JavaScript runtime (similar to other JavaScript environments), defining and using classes is done using the `class` syntax introduced in ECMAScript 2015 (ES6). Here’s a brief explanation of how to define and use classes in Bun:

### Defining a Class

You can define a class using the `class` keyword. A class can have a constructor and methods.

```javascript
class Person {
  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```

### Creating an Instance of a Class

Once you have defined a class, you can create instances (objects) of that class using the `new` keyword.

```javascript
const john = new Person('John', 30);
const jane = new Person('Jane', 25);
```

### Using Class Methods

You can call the methods defined in the class using the instance you created.

```javascript
john.greet(); // Output: Hello, my name is John and I am 30 years old.
jane.greet(); // Output: Hello, my name is Jane and I am 25 years old.
```

### Inheritance

Classes in JavaScript can also inherit from other classes using the `extends` keyword. This allows you to create a subclass that inherits properties and methods from a parent class.

```javascript
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent constructor
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`I am working as a ${this.jobTitle}.`);
  }
}

const alice = new Employee('Alice', 28, 'Developer');
alice.greet(); // Output: Hello, my name is Alice and I am 28 years old.
alice.work();  // Output: I am working as a Developer.
```

### Conclusion

In summary, you can define classes in Bun JavaScript using the `class` syntax, create instances with `new`, define methods, and use inheritance with `extends`. The features and syntax are standard across modern JavaScript environments, making it straightforward to use classes in your applications.

In Bun, as with standard JavaScript, you can create objects using object literals or by using classes. Here are examples of both methods for creating objects and instancing classes.

### Creating Objects

1. **Using Object Literals:**

```javascript
const person = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // Output: Hello, my name is Alice
```

2. **Using the `new Object()` Syntax:**

```javascript
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2021;

console.log(car); // Output: { make: 'Toyota', model: 'Camry', year: 2021 }
```

### Instancing Classes

1. **Defining a Class and Creating an Instance:**

```javascript
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  speak() {
    console.log(`${this.name} says hello!`);
  }
}

const dog = new Animal("Buddy", "Dog");
dog.speak(); // Output: Buddy says hello!
```

2. **Inheritance in Classes:**

```javascript
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  honk() {
    console.log(`${this.brand} honks!`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  drive() {
    console.log(`Driving a ${this.brand} ${this.model}`);
  }
}

const myCar = new Car("Honda", "Civic");
myCar.honk(); // Output: Honda honks!
myCar.drive(); // Output: Driving a Honda Civic
```

### Summary

In the Bun JavaScript runtime, creating objects can be achieved through object literals, constructors, or classes, just like in standard JavaScript. The examples provided demonstrate how to create simple objects, define classes, and create instances in Bun, which follows the same syntax and principles as ECMAScript.

In Bun, which is a JavaScript runtime similar to Node.js or Deno, you can use inheritance just like in standard JavaScript. Below are examples of class inheritance in Bun.

### Example 1: Basic Class Inheritance

```javascript
// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Subclass
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Using the classes
const dog = new Dog('Rex');
dog.speak();  // Output: Rex barks.

const animal = new Animal('Animal');
animal.speak();  // Output: Animal makes a noise.
```

### Example 2: Inheriting Properties and Methods

```javascript
// Base class
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  displayInfo() {
    console.log(`Vehicle Info: ${this.make} ${this.model}`);
  }
}

// Subclass
class Car extends Vehicle {
  constructor(make, model, numDoors) {
    super(make, model); // Call the constructor of the parent class
    this.numDoors = numDoors;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`Number of doors: ${this.numDoors}`);
  }
}

// Using the classes
const myCar = new Car('Toyota', 'Corolla', 4);
myCar.displayInfo();
// Output:
// Vehicle Info: Toyota Corolla
// Number of doors: 4
```

### Example 3: Method Overriding

```javascript
// Base class
class Shape {
  area() {
    return 0; // Default area for a generic shape
  }
}

// Subclass
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height; // Override the area method
  }
}

// Using the classes
const rect = new Rectangle(10, 5);
console.log(`Area of rectangle: ${rect.area()}`); // Output: Area of rectangle: 50
```

### Example 4: Static Methods in Inheritance

```javascript
// Base class
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

// Subclass
class AdvancedMathUtils extends MathUtils {
  static multiply(a, b) {
    return a * b;
  }
}

// Using static methods
console.log(MathUtils.add(2, 3));             // Output: 5
console.log(AdvancedMathUtils.multiply(2, 3)); // Output: 6
```

These examples demonstrate basic class inheritance, method overriding, and the use of static methods within classes in the Bun JavaScript runtime, which behaves just like standard JavaScript.

Polymorphism in JavaScript, including when using the Bun runtime, allows you to define functions or methods that can operate on different types of data, making your code more flexible and extensible. While Bun itself doesn’t introduce new capabilities for polymorphism, you can still leverage JavaScript's prototypal inheritance and interfaces to achieve polymorphic behavior.

Here's a basic guide on how to implement polymorphism in JavaScript with Bun:

### 1. Using Object-Oriented Programming

You can define classes and methods in such a way that they can be used polymorphically. Below is an example using ES6 classes:

```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow!");
  }
}

function makeAnimalSpeak(animal) {
  animal.speak(); // Call the speak method of the passed animal
}

const dog = new Dog();
const cat = new Cat();

makeAnimalSpeak(dog); // Outputs: Woof!
makeAnimalSpeak(cat); // Outputs: Meow!
```

### 2. Using Interfaces with Duck Typing

JavaScript is dynamically typed, which allows different objects to be treated the same way based on their structure and behavior, enabling duck typing:

```javascript
function makeSound(animal) {
  if (typeof animal.speak === 'function') {
    animal.speak();
  } else {
    console.log("This animal can't speak!");
  }
}

const bird = {
  speak() {
    console.log("Tweet!");
  }
};

makeSound(dog);  // Outputs: Woof!
makeSound(cat);  // Outputs: Meow!
makeSound(bird); // Outputs: Tweet!
```

### 3. Generic Functions

You can create functions that accept different types of objects and perform operations based on the presence of certain properties or methods:

```javascript
function performAction(entity) {
  if (entity.action) {
    entity.action();
  } else {
    console.log("No action defined!");
  }
}

const robot = {
  action() {
    console.log("Robot is working!");
  }
};

const human = {
  action() {
    console.log("Human is thinking!");
  }
};

performAction(robot); // Outputs: Robot is working!
performAction(human); // Outputs: Human is thinking!
```

### Summary

In Bun or any JavaScript environment, polymorphism can be achieved through class inheritance, duck typing, and generic functions. This allows methods to be called on different objects, facilitating code that is more reusable and maintainable. By leveraging these principles, you can enhance the flexibility of your applications.

In Bun, which supports modern JavaScript and TypeScript features, you can define and use interfaces similarly to how you would in TypeScript. Below are some examples of defining and using interfaces in a TypeScript environment, which is compatible with Bun.

### Example 1: Simple Interface

```typescript
// Defining an interface
interface Person {
    name: string;
    age: number;
}

// Using the interface
const person1: Person = {
    name: "Alice",
    age: 30,
};

console.log(`${person1.name} is ${person1.age} years old.`);
```

### Example 2: Interface with Optional Properties

```typescript
// Defining an interface with an optional property
interface Employee {
    id: number;
    name: string;
    department?: string; // Optional property
}

// Using the interface
const employee1: Employee = {
    id: 101,
    name: "Bob",
};

const employee2: Employee = {
    id: 102,
    name: "Charlie",
    department: "Marketing", // Optional property provided
};

console.log(`${employee1.name} works in ${employee1.department ?? "an unknown department"}.`);
console.log(`${employee2.name} works in ${employee2.department}.`);
```

### Example 3: Interface with Function Types

```typescript
// Defining an interface with function types
interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}

// Implementing the interface
const calculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
};

// Using the calculator
console.log(`5 + 3 = ${calculator.add(5, 3)}`);
console.log(`5 - 3 = ${calculator.subtract(5, 3)}`);
```

### Example 4: Extending Interfaces

```typescript
// Defining a base interface
interface Animal {
    name: string;
    sound: () => void;
}

// Extending the base interface
interface Dog extends Animal {
    breed: string;
}

// Using the extended interface
const myDog: Dog = {
    name: "Max",
    breed: "Golden Retriever",
    sound: () => console.log("Woof!"),
};

console.log(`${myDog.name} is a ${myDog.breed}`);
myDog.sound();
```

### Example 5: Using Interfaces for Function Parameters

```typescript
// Defining an interface for function parameters
interface Book {
    title: string;
    author: string;
}

function printBookDetails(book: Book) {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
}

// Using the function with the interface
const myBook: Book = {
    title: "1984",
    author: "George Orwell",
};

printBookDetails(myBook);
```

These examples illustrate how to define and use interfaces in Bun with TypeScript, giving you a solid foundation for creating structured and type-safe code. Remember, Bun supports TypeScript natively, so you can write your files with a `.ts` extension and run them directly.

Regular Expressions (Regex)
Here are some examples of using regex patterns in the Bun JavaScript runtime v1.1.37:

### Example 1: Basic Matching

```javascript
// Check if a string contains a specific pattern
const pattern = /hello/;
const str = "Hello, world!";

if (pattern.test(str.toLowerCase())) {
    console.log("Pattern found!");
} else {
    console.log("Pattern not found.");
}
```

### Example 2: Extracting Data

```javascript
// Extracting numbers from a string
const str = "The price is $15 and the discount is $5.";
const regex = /\$\d+/g;

const matches = str.match(regex);
console.log(matches); // Output: [ '$15', '$5' ]
```

### Example 3: Replacing Text

```javascript
// Replacing all occurrences of a pattern in a string
const str = "The cat sat on the mat.";
const regex = /cat/g;

const newStr = str.replace(regex, "dog");
console.log(newStr); // Output: "The dog sat on the mat."
```

### Example 4: Splitting a String

```javascript
// Splitting a string using regex
const str = "apple,banana;orange|grape";
const regex = /[;,|]/;

const fruits = str.split(regex);
console.log(fruits); // Output: [ 'apple', 'banana', 'orange', 'grape' ]
```

### Example 5: Validating Email Address

```javascript
// Simple email validation using regex
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const email = "test@example.com";
console.log(validateEmail(email)); // Output: true
```

### Example 6: Find All Words in a String

```javascript
// Find all words in a sentence
const str = "This is an example sentence.";
const regex = /\b\w+\b/g;

const words = str.match(regex);
console.log(words); // Output: [ 'This', 'is', 'an', 'example', 'sentence' ]
```

### Example 7: Check for Palindrome

```javascript
// Check if a string is a palindrome using regex
const isPalindrome = (str) => {
    const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
    const regex = new RegExp(`^${cleanStr}$`, 'i');
    return regex.test(cleanStr.split('').reverse().join(''));
};

console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true
```

These examples demonstrate the versatility of regex patterns in various situations using the Bun JavaScript runtime. You can adapt these patterns to meet your specific requirements!

In the Bun JavaScript runtime, capturing groups work just like they do in standard JavaScript. Capturing groups are a feature of regular expressions that allow you to extract parts of a string that match specific patterns. Here's how you can work with capturing groups in Bun:

### Basic Syntax

Capturing groups are created by placing parentheses `()` around the portion of the regex pattern you want to capture. For example:

```javascript
const regex = /(\d+)/; // Captures one or more digits
const str = "There are 42 apples";
const match = regex.exec(str);

if (match) {
  console.log(match[0]); // "42" - the full match
  console.log(match[1]); // "42" - the first capturing group
}
```

### Multiple Capturing Groups

You can have multiple capturing groups in a single regex. Each group will be indexed by the order in which it appears:

```javascript
const regex = /(\d+) apples and (\d+) oranges/;
const str = "There are 42 apples and 12 oranges";
const match = regex.exec(str);

if (match) {
  console.log(match[0]); // "42 apples and 12 oranges"
  console.log(match[1]); // "42" - first capturing group
  console.log(match[2]); // "12" - second capturing group
}
```

### Named Capturing Groups

Bun and JavaScript support named capturing groups, which allow you to name your groups instead of using numeric indices. This can make your code more readable:

```javascript
const regex = /(?<apples>\d+) apples and (?<oranges>\d+) oranges/;
const str = "There are 42 apples and 12 oranges";
const match = regex.exec(str);

if (match) {
  console.log(match.groups.apples); // "42"
  console.log(match.groups.oranges); // "12"
}
```

### Using `String.prototype.match()`

You can also use the `match()` method, which returns an array of matches. When using capturing groups with `match()`, the first element of the returned array is the full match, followed by the captured groups:

```javascript
const str = "There are 42 apples and 12 oranges";
const regex = /(\d+) apples and (\d+) oranges/;
const match = str.match(regex);

if (match) {
  console.log(match[0]); // "42 apples and 12 oranges"
  console.log(match[1]); // "42"
  console.log(match[2]); // "12"
}
```

### Summary

Capturing groups in Bun, as in standard JavaScript, allow you to extract specific parts of strings using regular expressions. You can create capturing groups using parentheses, access captured values by their indices, or use named groups for better readability. Always remember to check if there is a match before trying to access captured groups.

In Bun, you can use regex substitutions in a similar way to how you would in standard JavaScript. Below are some code examples demonstrating how to use regex substitutions with the `String.prototype.replace()` method.

### Example 1: Simple Substitution

This example shows how to replace all occurrences of a substring using a regular expression.

```javascript
const originalString = "The quick brown fox jumps over the lazy dog.";
const regex = /the/gi; // 'g' for global, 'i' for case insensitive
const newString = originalString.replace(regex, "a");

console.log(newString); // "a quick brown fox jumps over a lazy dog."
```

### Example 2: Using Capture Groups

You can use capture groups to manipulate parts of the matched string.

```javascript
const originalString = "John Doe, Jane Doe, Jim Beam";
const regex = /(\w+) Doe/g; // Capture the first word before 'Doe'
const newString = originalString.replace(regex, "$1 Smith");

console.log(newString); // "John Smith, Jane Smith, Jim Beam"
```

### Example 3: Conditional Replacement with Callback Function

With `replace()`, you can pass a function as the second argument for more complex replacements.

```javascript
const originalString = "1 apple, 2 oranges, 3 bananas";
const regex = /(\d+) (\w+)/g; // Match number followed by a word

const newString = originalString.replace(regex, (match, p1, p2) => {
  return `${p1 * 2} ${p2}`; // Double the number
});

console.log(newString); // "2 apple, 4 oranges, 6 bananas"
```

### Example 4: Replacing with an Object Map

You can map particular words to their synonyms using an object.

```javascript
const synonyms = {
    happy: "joyful",
    sad: "unhappy",
    fast: "rapid",
};

const originalString = "I am happy but sometimes sad.";
const regex = /\b(happy|sad|fast)\b/g;

const newString = originalString.replace(regex, (match) => synonyms[match]);

console.log(newString); // "I am joyful but sometimes unhappy."
```

### Example 5: Removing Unwanted Characters

Here’s how to remove unwanted characters from a string.

```javascript
const originalString = "Hello @World! #2023";
const regex = /[^\w\s]/g; // Match any non-word and non-space character
const newString = originalString.replace(regex, "");

console.log(newString); // "Hello World 2023"
```

These examples demonstrate basic to advanced usages of regex substitutions in the Bun JavaScript runtime, showcasing how to manipulate strings effectively using regular expressions.

In Bun, you can use regular expressions (regex) for validation just like you would in any other JavaScript environment. Below are several examples of how to perform regex validation using the Bun JavaScript runtime.

### Example 1: Validate Email Address

```javascript
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Usage
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false
```

### Example 2: Validate Phone Number

```javascript
function isValidPhoneNumber(phone) {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Simplified international phone number format
    return phoneRegex.test(phone);
}

// Usage
console.log(isValidPhoneNumber("+1234567890123")); // true
console.log(isValidPhoneNumber("123456")); // false
```

### Example 3: Validate Password Strength

```javascript
function isValidPassword(password) {
    // At least 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// Usage
console.log(isValidPassword("StrongP@ss1")); // true
console.log(isValidPassword("weakpass")); // false
```

### Example 4: Validate URL

```javascript
function isValidURL(url) {
    const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}([\/\w .-]*)*\/?$/i;
    return urlRegex.test(url);
}

// Usage
console.log(isValidURL("https://www.example.com")); // true
console.log(isValidURL("invalid-url")); // false
```

### Example 5: Validate Date (YYYY-MM-DD)

```javascript
function isValidDate(date) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
}

// Usage
console.log(isValidDate("2023-10-01")); // true
console.log(isValidDate("01-10-2023")); // false
```

These examples demonstrate how to create simple validation functions using regex in Bun JavaScript. You can modify the regex patterns according to the specific requirements of your application's validation logic.

In Bun, you can use regular expressions with callbacks to handle matches dynamically. Below are some examples demonstrating how to use regex callbacks in Bun JavaScript runtime v1.1.37.

### Example 1: Simple Regex Replacement

In this example, we replace all occurrences of "cat" with "dog" using a callback function.

```javascript
const input = "The cat sat on the cat mat.";
const regex = /cat/g;

const output = input.replace(regex, (match) => {
  return "dog"; // Replace match with "dog"
});

console.log(output); // The dog sat on the dog mat.
```

### Example 2: Using Capture Groups in Callback

This example demonstrates using capture groups within the regex to format matched strings.

```javascript
const input = "Item 123: Apple, Item 456: Banana, Item 789: Cherry";
const regex = /Item (\d+): (\w+)/g;

const output = input.replace(regex, (match, id, fruit) => {
  return `Fruit ID: ${id}, Name: ${fruit}`; // Format the output string
});

console.log(output); 
// Fruit ID: 123, Name: Apple, Fruit ID: 456, Name: Banana, Fruit ID: 789, Name: Cherry
```

### Example 3: Conditional Callback Logic

In this example, we use a callback to conditionally replace strings based on the matched content.

```javascript
const input = "The quick brown fox jumps over the lazy dog.";
const regex = /(quick|lazy)/g;

const output = input.replace(regex, (match) => {
  return match === "quick" ? "swift" : "active"; // Change "quick" to "swift" and "lazy" to "active"
});

console.log(output); 
// The swift brown fox jumps over the active dog.
```

### Example 4: Running Some Logic in the Callback

Here, we extract numbers from a string and calculate their sum inside the callback.

```javascript
const input = "The prices are 50 and 100 and 150.";
const regex = /(\d+)/g;
let sum = 0;

input.replace(regex, (match, number) => {
  sum += parseInt(number, 10); // Accumulate the sum
  return match; // Keep the original number in the output
});

console.log(sum); // 300
```

### Example 5: Create a Custom Formatter

In this example, we create a custom formatter for phone numbers using regex callbacks.

```javascript
const input = "Contact: 123-456-7890 or 987-654-3210.";
const regex = /(\d{3})-(\d{3})-(\d{4})/g;

const output = input.replace(regex, (match, area, prefix, line) => {
  return `(${area}) ${prefix}-${line}`; // Format as (area) prefix-line
});

console.log(output); 
// Contact: (123) 456-7890 or (987) 654-3210.
```

Each example demonstrates how to effectively use regex with callbacks in Bun JavaScript Runtime to process strings in versatile ways.

Security
In the Bun JavaScript runtime, you can use the built-in `crypto` module to perform encryption and decryption. Below are examples demonstrating symmetric encryption and decryption using the AES (Advanced Encryption Standard) algorithm.

### Example: Symmetric Encryption and Decryption

1. **Install the `crypto` module** (it comes built-in with Bun):
   You don’t need to install any external packages as `crypto` is included in Bun.

2. **Encrypting Data**:
   Here’s how to encrypt data using AES-GCM.

```javascript
import { createCipheriv, createDecipheriv, randomBytes, timingSafeEqual } from 'crypto';

// AES key and IV should be kept secret
const key = randomBytes(32); // AES-256 key
const iv = randomBytes(12); // AES-GCM standard IV size is 12 bytes

// Function to encrypt data
function encrypt(text) {
    const cipher = createCipheriv('aes-256-gcm', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const authTag = cipher.getAuthTag();
    return { 
        iv: iv.toString('hex'), 
        encryptedData: encrypted, 
        authTag: authTag.toString('hex') 
    };
}

// Example usage
const dataToEncrypt = 'Hello, Bun!';
const encryptedData = encrypt(dataToEncrypt);
console.log('Encrypted Data:', encryptedData);
```

3. **Decrypting Data**:

```javascript
// Function to decrypt data
function decrypt(encryptedData, authTag, iv) {
    const decipher = createDecipheriv('aes-256-gcm', key, Buffer.from(iv, 'hex'));
    decipher.setAuthTag(Buffer.from(authTag, 'hex'));
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// Example usage
const decryptedData = decrypt(encryptedData.encryptedData, encryptedData.authTag, encryptedData.iv);
console.log('Decrypted Data:', decryptedData);
```

### Conclusion

This example demonstrates how to use the `crypto` module in Bun to perform symmetric encryption and decryption with AES-GCM. You can store or transmit the encrypted data, but make sure to keep the key and IV secure. 

Always be cautious about cryptographic processes and best practices, as improper use can lead to security vulnerabilities.

In Bun JavaScript runtime v1.1.37, working with digital signatures and certificates can be accomplished using the built-in `crypto` module. This allows you to create and verify digital signatures, as well as manage certificates (in formats like X.509). Here's a guide on how to work with these concepts.

### 1. Digital Signatures

Digital signatures are used to verify the authenticity and integrity of a message or document. Below are the main steps to create and verify a digital signature.

#### Creating a Digital Signature

1. **Generate a Key Pair**: You need a private key to sign the data and a public key for verification.

2. **Sign the Data**: Use the private key to produce a signature.

#### Sample Code

```javascript
import { generateKeyPairSync, sign } from 'crypto';

// Step 1: Generate a key pair
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

// Step 2: Create the data that you want to sign
const data = 'This is important data.';

// Step 3: Sign the data
const signature = sign("sha256", Buffer.from(data), {
  key: privateKey,
  padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
});

// Output the signature in base64 format
console.log('Signature:', signature.toString('base64'));
```

#### Verifying a Digital Signature

To verify a signature, you need the public key and the original data.

```javascript
import { verify } from 'crypto';

// Step 4: Verify the signature
const isValid = verify(
  'sha256',
  Buffer.from(data), 
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  },
  signature
);

console.log('Signature valid:', isValid);
```

### 2. Working with Certificates

Certificates, such as X.509, are used to establish a chain of trust. You can create self-signed certificates or obtain them from a certificate authority (CA).

#### Generating a Self-Signed Certificate

```javascript
import { generateKeyPairSync, createSign, createVerify } from 'crypto';
import { X509Certificate } from 'crypto';

// Step 1: Generate a key pair
const { privateKey, publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });

// Step 2: Generate a self-signed certificate
const cert = new X509Certificate(
  Buffer.from("-----BEGIN CERTIFICATE-----...-----END CERTIFICATE-----"), // Your encoded certificate
);

// Output certificate details
console.log('Issuer:', cert.issuer);
console.log('Subject:', cert.subject);
```

### 3. Loading Certificates

If you have a PEM file or a different format, you can load and parse it:

```javascript
const fs = require('fs');

// Load a PEM certificate from a file
const certPem = fs.readFileSync('path/to/certificate.pem', 'utf-8');
const certificate = new X509Certificate(certPem);

// Now you can access properties of the certificate
console.log('Certificate Subject:', certificate.subject);
```

### Conclusion

The Bun JavaScript runtime provides a flexible approach to handling digital signatures and certificates using the `crypto` module. You can generate keys, sign data, and manage X.509 certificates easily. Be sure to check the latest Bun `crypto` documentation as new updates might introduce additional functionalities or enhancements.

To securely store passwords in a Bun JavaScript application, you typically use a combination of hashing (to transform the password into a fixed-size string that is not reversible) and salting (to add random data to the password before hashing to prevent rainbow table attacks). Below is an example of how to implement secure password storage using the built-in `crypto` module in Bun.

### Example Code

1. **Install necessary package**: Bun has a built-in `crypto` module, so there's no need to install an external library for hashing passwords.

2. **Hashing Passwords**: We can use the `crypto` module to hash passwords with a salt.

3. **Storing and Verifying Passwords**: We'll also show how to verify a password against a stored hash.

```javascript
import { createHash, randomBytes, timingSafeEqual } from 'crypto';

// Function to hash a password with a salt
function hashPassword(password) {
    // Generate a random salt
    const salt = randomBytes(16).toString('hex');
    
    // Create a hash of the password with the salt
    const hash = createHash('sha256'); // You can use 'sha256' or 'bcrypt', etc.
    hash.update(salt + password);
    
    // Return the salt and hashed password for storage
    return {
        salt,
        hash: hash.digest('hex')
    };
}

// Function to verify a password
function verifyPassword(inputPassword, storedSalt, storedHash) {
    const hash = createHash('sha256');
    // Hash the input password with the stored salt
    hash.update(storedSalt + inputPassword);
    const inputHash = hash.digest('hex');
    
    // Use a timing-safe comparison to prevent timing attacks
    return timingSafeEqual(Buffer.from(inputHash), Buffer.from(storedHash));
}

// Example usage
const password = 'mySecurePassword123!';
const { salt, hash } = hashPassword(password);
console.log('Salt:', salt);
console.log('Hash:', hash);

// Later, to verify the password
const isPasswordValid = verifyPassword('mySecurePassword123!', salt, hash);
console.log('Is password valid?', isPasswordValid); // Should log: true

const isPasswordValidWrong = verifyPassword('wrongPassword!', salt, hash);
console.log('Is password valid?', isPasswordValidWrong); // Should log: false
```

### Explanation

1. **Hashing**: 
   - We generate a random salt using `randomBytes`.
   - We then create a hash of the password concatenated with the salt.
   - The hash is then returned along with the salt.

2. **Verifying**:
   - To verify a password, we again hash the input password using the same salt and compare the result to the stored hash.
   - `timingSafeEqual` ensures that the comparison doesn't leak timing information that can be exploited.

### Note
- The example uses `sha256` hashing. For production applications, you may prefer using a more secure algorithm like `bcrypt` or `argon2`, which are designed for hashing passwords and provide additional features like adjustable work factors.
- Make sure your application follows best security practices, such as using HTTPS and keeping sensitive data such as salts and hashes secure.

In Bun, you can use the built-in `https` module to work with Secure Socket Layer (SSL) and Transport Layer Security (TLS) protocols for creating secure connections. Below are examples demonstrating how to set up an HTTPS server and make an HTTPS request using Bun.

### Example: Creating an HTTPS Server

```javascript
import { createServer } from 'https';
import { readFileSync } from 'fs';

// Load SSL certificate and key
const options = {
  key: readFileSync('./path/to/private.key'),              // Your private key
  cert: readFileSync('./path/to/certificate.crt'),        // Your SSL certificate
};

const server = createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, secure world!');
});

server.listen(3000, () => {
  console.log('HTTPS server is running on https://localhost:3000');
});
```

### Example: Making an HTTPS Request

```javascript
import { request } from 'https';

// Options for the HTTPS request
const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/',
  method: 'GET',
  rejectUnauthorized: false, // Disable for testing against self-signed certs
};

const req = request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  
  res.on('data', (chunk) => {
    console.log(`BODY: ${chunk}`);
  });

  res.on('end', () => {
    console.log('Request finished.');
  });
});

// Handle errors
req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

// End the request
req.end();
```

### Notes:
1. **Certificates**: Ensure you have a valid SSL certificate and the corresponding private key. You can generate self-signed certificates for testing but will need to handle `rejectUnauthorized` with care if you do.
2. **Testing Locally**: If you're testing with self-signed certificates, you may want to set `rejectUnauthorized: false` to bypass certificate validation during development.
3. **Security**: Always ensure that production environments use valid certificates and that you handle sensitive data appropriately.

### Conclusion

These examples demonstrate how to set up an HTTPS server with SSL/TLS and how to make secure requests. You can extend this by adding more features such as routing, error handling, and middleware as per your application requirements.

Access Control Lists (ACLs) are used to manage permissions for users or groups of users in an application. Below, I'll provide examples of implementing ACLs in a Bun JavaScript runtime environment.

### Example: Simple ACL Implementation

In this example, we'll create a simple ACL system to manage permissions for different roles, such as `admin`, `editor`, and `viewer`.

```javascript
// Define a simple ACL class
class ACL {
    constructor() {
        this.permissions = {};
    }

    // Grant permission to a role
    grant(role, action) {
        if (!this.permissions[role]) {
            this.permissions[role] = new Set();
        }
        this.permissions[role].add(action);
    }

    // Check if a role has permission to perform an action
    hasPermission(role, action) {
        return this.permissions[role] && this.permissions[role].has(action);
    }

    // Revoke permission from a role
    revoke(role, action) {
        if (this.permissions[role]) {
            this.permissions[role].delete(action);
        }
    }
}

// Example usage
const acl = new ACL();

// Grant permissions
acl.grant('admin', 'create');
acl.grant('admin', 'delete');
acl.grant('editor', 'create');
acl.grant('viewer', 'read');

// Check permissions
console.log(acl.hasPermission('admin', 'create')); // true
console.log(acl.hasPermission('editor', 'delete')); // false
console.log(acl.hasPermission('viewer', 'read')); // true

// Revoke permission
acl.revoke('editor', 'create');
console.log(acl.hasPermission('editor', 'create')); // false
```

### Example: Using ACL with Middleware (for an HTTP server)

Here's how you might implement ACLs in an HTTP server context using Bun's server capabilities.

```javascript
import { serve } from "bun";

// Create an instance of ACL
const acl = new ACL();

// Define permissions
acl.grant('admin', 'GET:/admin');
acl.grant('editor', 'GET:/editor');
acl.grant('viewer', 'GET:/home');

// Middleware to check permissions
const checkPermission = (role, action) => {
    return (req, res) => {
        if (!acl.hasPermission(role, action)) {
            res.status = 403; // Forbidden
            res.end('Access Denied');
            return false;
        }
        return true;
    };
};

// Create a simple server
serve({
    fetch(req) {
        const url = req.url;
        const role = req.headers.get('role'); // Assume role is sent in headers
        
        // Check permissions based on the route
        if (url.includes('/admin') && !checkPermission(role, 'GET:/admin')(req, res)) {
            return new Response('Access Denied', { status: 403 });
        }
        if (url.includes('/editor') && !checkPermission(role, 'GET:/editor')(req, res)) {
            return new Response('Access Denied', { status: 403 });
        }
        if (url.includes('/home') && !checkPermission(role, 'GET:/home')(req, res)) {
            return new Response('Access Denied', { status: 403 });
        }

        // Handle other requests
        return new Response('Hello World');
    }
});
```

### Example: More Complex Role Management

You can extend the ACL implementation to support group permissions or hierarchical roles.

```javascript
class AdvancedACL {
    constructor() {
        this.permissions = {};
    }

    grant(role, action) {
        if (!this.permissions[role]) {
            this.permissions[role] = new Set();
        }
        this.permissions[role].add(action);
    }

    hasPermission(role, action) {
        // Check the role and any parent roles
        if (this.permissions[role] && this.permissions[role].has(action)) {
            return true;
        }
        return false; // Implement group/role hierarchy if needed
    }

    revoke(role, action) {
        if (this.permissions[role]) {
            this.permissions[role].delete(action);
        }
    }
}

// Example usage of AdvancedACL
const advancedAcl = new AdvancedACL();
advancedAcl.grant('admin', 'edit');
advancedAcl.grant('user', 'view');

console.log(advancedAcl.hasPermission('admin', 'edit')); // true
console.log(advancedAcl.hasPermission('user', 'edit')); // false
```

In these examples, we've created a simple ACL system that allows you to manage user permissions effectively. Depending on your application's complexity, you might want to extend the system to handle more advanced scenarios, such as hierarchical roles or group permissions.

Testing and Debugging
Sure! Below are examples of using some popular unit testing frameworks in the Bun JavaScript runtime (v1.1.37).

### Example 1: Using Jest

First, install Jest:

```bash
bun add jest
```

Create a basic function to test, e.g., `math.js`:

```javascript
// math.js
export function add(a, b) {
  return a + b;
}
```

Now, create a test file `math.test.js`:

```javascript
// math.test.js
import { add } from './math';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
```

Run your tests with Jest:

```bash
bun jest
```

### Example 2: Using Mocha and Chai

First, install Mocha and Chai:

```bash
bun add mocha chai
```

Create the same `math.js` file as before.

Now, create a test file `math.spec.js`:

```javascript
// math.spec.js
import { expect } from 'chai';
import { add } from './math';

describe('Math functions', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).to.equal(3);
  });
});
```

Run your tests with Mocha:

```bash
bun mocha
```

### Example 3: Using Vitest

First, install Vitest:

```bash
bun add vitest
```

Create the same `math.js` file as before.

Now create a test file `math.test.js`:

```javascript
// math.test.js
import { describe, it, expect } from 'vitest';
import { add } from './math';

describe('Math functions', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });
});
```

Run your tests with Vitest:

```bash
bun vitest
```

### Example 4: Using Tap

First, install Tap:

```bash
bun add tap
```

Create the same `math.js` file as before.

Now create a test file `math.test.js`:

```javascript
// math.test.js
import test from 'tap';

import { add } from './math';

test('add 1 + 2 equals 3', (t) => {
  t.equal(add(1, 2), 3);
  t.end();
});
```

Run your tests with Tap:

```bash
bun tap
```

### Summary

You can easily set up unit tests in Bun using various frameworks like Jest, Mocha (with Chai), Vitest, and Tap. Each framework has its own syntax and way of running tests, but the essential concept remains the same: write tests that verify the functionality of your code. Make sure you choose the one that best fits your project requirements!

In Bun JavaScript runtime v1.1.37, you can work with test cases using the built-in test runner and assertions. Here's a step-by-step guide on how to set up and run test cases in Bun:

### 1. Install Bun
Make sure you have Bun installed. You can get it from [Bun's official website](https://bun.sh/).

### 2. Create a Test File
Create a test file in your project. By convention, you might name it `test.js` or `example.test.js`.

### 3. Write Your Test Cases
Use the `Bun.test` function to define your test cases. Here’s a basic example:

```javascript
// example.test.js

Bun.test("Adding two numbers", () => {
  const result = 1 + 1;
  Bun.expect(result).toBe(2);
});

Bun.test("String concatenation", () => {
  const result = "Hello, " + "world!";
  Bun.expect(result).toBe("Hello, world!");
});
```

### 4. Run Your Tests
You can run your tests using the Bun CLI. Navigate to your project directory in the terminal and run:

```bash
bun test
```

Bun will automatically pick up the test files based on their naming conventions (like `.test.js`).

### 5. Using Assertions
Bun provides a simple assertion library. Here are some common assertions you can use:

- `Bun.expect(value).toBe(expected)`: Checks if the value is equal to expected.
- `Bun.expect(value).not.toBe(expected)`: Checks if the value is not equal to expected.
- `Bun.expect(value).toEqual(expected)`: Deep equality check.
- `Bun.expect(value).toBeTruthy()`: Checks if the value is truthy.
- `Bun.expect(value).toBeFalsy()`: Checks if the value is falsy.

### Example Test File
Here’s a complete example of a test file:

```javascript
// math.test.js

function add(a, b) {
  return a + b;
}

Bun.test("add function", () => {
  Bun.expect(add(1, 1)).toBe(2);
  Bun.expect(add(-1, -1)).toBe(-2);
  Bun.expect(add(0, 0)).toBe(0);
});

Bun.test("Another addition test", () => {
  Bun.expect(add(2, 3)).toBe(5);
  Bun.expect(add(0, 5)).not.toBe(1);
});
```

### 6. Viewing Test Results
When you run the `bun test`, the output will display the results of each test case, indicating which tests passed or failed along with any error messages.

### Conclusion
That's it! You now know how to set up and run test cases in Bun JavaScript Runtime v1.1.37. Happy testing!

In Bun, you can utilize mock objects for testing by using libraries such as `jest`, `sinon`, or by creating your own mock implementations. Here’s a basic example of how to create and use mock objects in the Bun JavaScript runtime v1.1.37.

### Using Jest for Mocking

1. **Install Jest** (if you haven't already):

   ```bash
   bun add jest
   ```

2. **Create a mock object**:

   Here’s an example of a simple function that uses an external dependency, and how you can mock that dependency in your test.

   ```javascript
   // src/dependency.js
   export const fetchData = async () => {
       // Simulating an API call
       return await fetch("https://api.example.com/data").then(res => res.json());
   };
   ```

   ```javascript
   // src/main.js
   import { fetchData } from './dependency.js';

   export const processData = async () => {
       const data = await fetchData();
       return data.map(item => item.value); // Assume the data is an array of objects with a 'value' property
   };
   ```

   ```javascript
   // src/main.test.js
   import { processData } from './main.js';
   import { fetchData } from './dependency.js';

   jest.mock('./dependency.js');

   describe('processData', () => {
       it('should process data correctly', async () => {
           // Arrange
           fetchData.mockResolvedValue([{ value: 1 }, { value: 2 }, { value: 3 }]);

           // Act
           const result = await processData();

           // Assert
           expect(result).toEqual([1, 2, 3]);
           expect(fetchData).toHaveBeenCalled();
       });
   });
   ```

### Using Sinon for Mocking

You can also use Sinon to create mocks:

1. **Install Sinon**:

   ```bash
   bun add sinon
   ```

2. **Create mocks using Sinon**:

   ```javascript
   import { fetchData } from './dependency.js';
   import sinon from 'sinon';

   describe('processData with sinon', () => {
       let fetchDataMock;

       beforeEach(() => {
           fetchDataMock = sinon.stub(fetchData);
       });

       afterEach(() => {
           fetchDataMock.restore();
       });

       it('should process data correctly', async () => {
           // Arrange
           fetchDataMock.resolves([{ value: 1 }, { value: 2 }, { value: 3 }]);

           // Act
           const result = await processData();

           // Assert
           expect(result).toEqual([1, 2, 3]);
           expect(fetchDataMock.calledOnce).toBeTruthy();
       });
   });
   ```

### Conclusion

In these examples, we used `jest` and `sinon` to create mock objects in Bun. You can choose either approach depending on your testing needs. Jest is built-in with features like mocking, making it a good choice for many test cases. Sinon provides more customizable mock and spy capabilities. Always refer to the latest library documentation for more advanced techniques and features.

Debugging in the Bun JavaScript runtime can be accomplished through several tools and techniques. Bun provides built-in capabilities for debugging, and you can also use external tools like Chrome DevTools. Below are examples of how to utilize debugging tools available in Bun v1.1.37.

### 1. Using Console Logging

The simplest way to debug is to use `console.log()` statements to observe values and flow of execution in your code.

```javascript
const add = (a, b) => {
    console.log(`Adding ${a} and ${b}`);
    return a + b;
};

const result = add(5, 10);
console.log(`Result: ${result}`);
```

### 2. Using the Bun Debugger

Bun includes a built-in debugger that you can invoke from the command line. You can run your script in debug mode:

```bash
bun run --inspect your-script.js
```

Then, open Chrome and navigate to `chrome://inspect`. You can find the Bun process listed there, allowing you to set breakpoints, step through your code, and inspect variables.

### 3. Setting Breakpoints

You can set breakpoints in your code by using the `debugger;` statement. When the execution hits this line, it will pause, enabling inspection.

```javascript
const multiply = (x, y) => {
    debugger; // Execution will pause here
    return x * y;
};

const result = multiply(3, 4);
console.log(`Result: ${result}`);
```

When you run this script with `bun run --inspect`, execution will halt on the `debugger;` line, and you can examine the state.

### 4. Inspecting Variables in Chrome DevTools

After attaching your script to Chrome DevTools, you can inspect variables, set additional breakpoints, and analyze the call stack. Use the DevTools interface to do the following:

- View the **Scope** panel to see local and global variables.
- Use the **Call Stack** to navigate through the function calls that led to the current execution point.
- Watch variables or expressions by adding them to the **Watch** panel.

### 5. Using Bun's Built-in Diagnostics

You can also enable various diagnostic options in Bun settings. For example, to report unused variables or functions, you can run:

```bash
bun run --diagnostics your-script.js
```

This will give you warnings about potential issues in your code.

### 6. Using the Bun REPL

If you're debugging pieces of code interactively, you can use the Bun REPL (Read-Eval-Print Loop) by starting it with:

```bash
bun
```

In the REPL, you can enter JavaScript statements, see the results immediately, and test snippets of your code in an interactive manner.

### 7. Viewing Stack Traces

If your code throws an exception, Bun provides a detailed stack trace which helps to trace the error back to its origin.

```javascript
const faultyFunction = () => {
    throw new Error("An error occurred!");
};

try {
    faultyFunction();
} catch (error) {
    console.error("Caught an error:", error);
}
```

When this code is executed, it will output the stack trace, highlighting where the error occurred.

### Conclusion

These techniques will help you effectively debug your JavaScript code in the Bun runtime. Remember that using breakpoints, stepping through code, and inspecting variable states are crucial parts of the debugging process, and Bun's integration with Chrome DevTools enhances your development experience.

In Bun JavaScript runtime, you can utilize logging frameworks to manage and structure logs more effectively in your applications. Here are a few examples using different logging libraries:

### Example 1: Using `winston`

```javascript
import winston from 'winston';

// Create a logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'application.log' })
  ],
});

// Logging examples
logger.info('Informational message');
logger.warn('Warning message');
logger.error('Error message');
```

### Example 2: Using `pino`

```javascript
import pino from 'pino';

// Create a logger instance
const logger = pino({
  level: 'info',
  transport: {
    target: 'pino-pretty', // Pretty print logs in development
  },
});

// Logging examples
logger.info('Informational message');
logger.debug('Debugging message');
logger.error('An error occurred');
```

### Example 3: Simple Custom Logger

You can also create a simple custom logger without any dependencies:

```javascript
class SimpleLogger {
  log(level, message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  }

  info(message) {
    this.log('info', message);
  }

  warn(message) {
    this.log('warn', message);
  }

  error(message) {
    this.log('error', message);
  }
}

// Usage
const logger = new SimpleLogger();

logger.info('Informational message');
logger.warn('Warning message');
logger.error('Error message');
```

### Example 4: Using `log4js`

```javascript
import log4js from 'log4js';

// Configure log4js
log4js.configure({
  appenders: { 
    out: { type: 'stdout' },
    app: { type: 'file', filename: 'application.log' }
  },
  categories: { 
    default: { appenders: ['out', 'app'], level: 'info' }
  }
});

// Create a logger
const logger = log4js.getLogger();

// Logging examples
logger.info('Informational message');
logger.error('Error message');
logger.warn('Warning message');
```

### Summary

These examples showcase different logging frameworks you can use in a Bun JavaScript runtime environment. Choose one based on your application needs and preferences in terms of logging levels, formats, and output options. Each framework offers unique features, so explore and select what best suits your use case.

