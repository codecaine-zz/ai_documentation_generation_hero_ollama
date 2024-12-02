Algorithms and Data Structures
To implement a sorting algorithm in Python 3.13, you first need to choose a sorting algorithm. There are several popular algorithms, such as Bubble Sort, Merge Sort, Quick Sort, and others. Here's a basic example of how to implement the Bubble Sort algorithm.

### Bubble Sort Implementation in Python 3.13

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

Here’s how you can implement it:

```python
def bubble_sort(arr):
    n = len(arr)
    # Traverse through all array elements
    for i in range(n):
        # Last i elements are already in place
        for j in range(0, n - i - 1):
            # Traverse the array from 0 to n-i-1
            # Swap if the element found is greater than the next element
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

# Example usage
if __name__ == "__main__":
    sample_array = [64, 34, 25, 12, 22, 11, 90]
    print("Original array:", sample_array)
    bubble_sort(sample_array)
    print("Sorted array:", sample_array)
```

### Explanation:

1. **Function Definition**: We define a function named `bubble_sort` that takes a list `arr` as its parameter.

2. **Length Calculation**: We calculate the length of the array using `len(arr)`.

3. **Outer Loop**: The outer loop runs from `0` to `n`, where `n` is the length of the array. It keeps track of how many times we've gone through the array.

4. **Inner Loop**: The inner loop runs from `0` to `n - i - 1`. This means with each complete pass through the list, we can ignore the last `i` elements, as they are already sorted.

5. **Comparison and Swap**: Inside the inner loop, we compare each pair of adjacent items. If the current item is greater than the next item, we swap them.

6. **Example Usage**: Finally, we demonstrate the sorting with an example array. The original and sorted arrays are printed out.

### Conclusion

This example illustrates the basic concept of implementing a sorting algorithm in Python. You can explore more efficient algorithms like Merge Sort or Quick Sort for larger datasets. Each algorithm has its own advantages and scenarios where it works best.

Certainly! Below are some examples of using a binary search algorithm in Python 3.13.

### Example 1: Iterative Binary Search

```python
def binary_search_iterative(arr, target):
    low, high = 0, len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        mid_value = arr[mid]

        if mid_value < target:
            low = mid + 1
        elif mid_value > target:
            high = mid - 1
        else:
            return mid  # Target found at index mid

    return -1  # Target not found

# Example usage
arr = [1, 3, 5, 7, 9, 11, 13]
target = 7
result = binary_search_iterative(arr, target)
print(f'Target {target} found at index: {result}')
```

### Example 2: Recursive Binary Search

```python
def binary_search_recursive(arr, target, low, high):
    if low > high:
        return -1  # Target not found

    mid = (low + high) // 2
    mid_value = arr[mid]

    if mid_value == target:
        return mid  # Target found at index mid
    elif mid_value < target:
        return binary_search_recursive(arr, target, mid + 1, high)
    else:
        return binary_search_recursive(arr, target, low, mid - 1)

# Example usage
arr = [1, 3, 5, 7, 9, 11, 13]
target = 7
result = binary_search_recursive(arr, target, 0, len(arr) - 1)
print(f'Target {target} found at index: {result}')
```

### Example 3: Binary Search with Custom Comparison

If you want a binary search implementation that can handle custom comparison logic, here's an example:

```python
def binary_search_custom(arr, target, compare):
    low, high = 0, len(arr) - 1

    while low <= high:
        mid = (low + high) // 2
        comparison_result = compare(arr[mid], target)

        if comparison_result < 0:  # arr[mid] < target
            low = mid + 1
        elif comparison_result > 0:  # arr[mid] > target
            high = mid - 1
        else:
            return mid  # Target found

    return -1  # Target not found

# Custom comparison function
def compare(a, b):
    return (a > b) - (a < b)  # Returns 1 if a > b, -1 if a < b, 0 if equal

# Example usage
arr = [1, 3, 5, 7, 9, 11, 13]
target = 10
result = binary_search_custom(arr, target, compare)
print(f'Target {target} found at index: {result}')  # Returns -1 since 10 is not present
```

These examples demonstrate how to implement binary search using both iterative and recursive approaches, as well as a version that allows for custom comparison logic. Each function returns the index of the target value if found or `-1` if the target is not found in the array.

Certainly! Below is a simple implementation of a singly linked list in Python 3.13, along with methods to add nodes, remove nodes, and display the list.

```python
class Node:
    """A node in a linked list."""

    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    """A simple implementation of a singly linked list."""

    def __init__(self):
        self.head = None

    def append(self, data):
        """Add a node with the given data to the end of the list."""
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return

        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

    def prepend(self, data):
        """Add a node with the given data to the beginning of the list."""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def delete_with_value(self, data):
        """Remove the first node with the given data."""
        if self.head is None:
            return

        if self.head.data == data:
            self.head = self.head.next
            return

        current_node = self.head
        while current_node.next:
            if current_node.next.data == data:
                current_node.next = current_node.next.next
                return
            current_node = current_node.next

    def display(self):
        """Display the list."""
        current_node = self.head
        elements = []
        while current_node:
            elements.append(current_node.data)
            current_node = current_node.next
        print(" -> ".join(map(str, elements)))


# Example usage of LinkedList

if __name__ == "__main__":
    linked_list = LinkedList()
    linked_list.append(1)
    linked_list.append(2)
    linked_list.prepend(0)
    linked_list.append(3)

    print("Initial linked list:")
    linked_list.display()

    linked_list.delete_with_value(2)
    print("Linked list after deleting 2:")
    linked_list.display()

    linked_list.delete_with_value(0)
    print("Linked list after deleting 0:")
    linked_list.display()
```

### Explanation:
- **Node Class**: Represents a single node in the linked list. It has two properties: `data`, which holds the value, and `next`, which points to the next node in the list.
  
- **LinkedList Class**: Contains methods to manipulate the linked list, such as `append`, `prepend`, `delete_with_value`, and `display`.
  
- **append**: Adds a new node to the end of the list.
  
- **prepend**: Adds a new node to the start of the list.
  
- **delete_with_value**: Removes the first occurrence of a node that contains the specified value.
  
- **display**: Prints the linked list in a readable format.

### Example Usage:
- The `LinkedList` is created, nodes are appended and prepended, and then nodes are deleted from the list. Finally, the linked list is displayed at various stages.

Certainly! Below are some examples illustrating how to use a stack data structure in Python 3.13 using the built-in `list` type, as well as a custom stack class.

### Example 1: Using a List as a Stack

```python
# Using a list to implement a stack
stack = []

# Pushing elements onto the stack
stack.append(1)
stack.append(2)
stack.append(3)

print("Stack after pushes:", stack)  # Output: [1, 2, 3]

# Popping elements from the stack
top_element = stack.pop()
print("Popped element:", top_element)  # Output: 3
print("Stack after pop:", stack)        # Output: [1, 2]

# Peeking at the top element
top_element = stack[-1] if stack else None
print("Top element:", top_element)      # Output: 2
```

### Example 2: Custom Stack Class

```python
class Stack:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return len(self.items) == 0

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        raise IndexError("pop from empty stack")

    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        raise IndexError("peek from empty stack")

    def size(self):
        return len(self.items)

# Using the custom Stack class
my_stack = Stack()

# Pushing elements
my_stack.push(10)
my_stack.push(20)
my_stack.push(30)

print("Stack size:", my_stack.size())        # Output: 3
print("Top element:", my_stack.peek())        # Output: 30

# Popping elements
print("Popped element:", my_stack.pop())      # Output: 30
print("Popped element:", my_stack.pop())      # Output: 20
print("Stack size after pops:", my_stack.size())  # Output: 1
```

### Example 3: Using Stack to Check Balanced Parentheses

```python
def is_balanced(expression):
    stack = []
    bracket_map = {')': '(', '}': '{', ']': '['}

    for char in expression:
        if char in bracket_map.values():
            stack.append(char)
        elif char in bracket_map.keys():
            if stack == [] or bracket_map[char] != stack.pop():
                return False
            
    return stack == []

# Testing the balanced parentheses function
expr_1 = "{[()()]}"
expr_2 = "{[(])}"

print(f"Is '{expr_1}' balanced? {is_balanced(expr_1)}")  # Output: True
print(f"Is '{expr_2}' balanced? {is_balanced(expr_2)}")  # Output: False
```

These examples demonstrate how to implement and use a stack in Python 3.13, including basic operations, creating a custom stack class, and using the stack to solve a common problem such as checking for balanced parentheses.

To implement a queue data structure in Python 3.13, you can use a variety of methods, but one of the most straightforward approaches is by using the `collections.deque` class, which is optimized for fast appends and pops from both ends.

Here’s a step-by-step guide on how to implement a basic queue class using `collections.deque`:

1. **Import the necessary module**: You'll need to import `deque` from the `collections` module.

2. **Define the Queue Class**: Create a class that will represent the queue.

3. **Initialize the Queue**: In the initializer method (`__init__`), create an instance of `deque` to store the elements of the queue.

4. **Implement Queue Operations**:
   - **Enqueue**: Add an element to the back of the queue.
   - **Dequeue**: Remove an element from the front of the queue.
   - **Peek**: View the front element without removing it.
   - **Check if empty**: Method to check if the queue is empty.
   - **Size**: Method to return the number of elements in the queue.

Here's a complete implementation:

```python
from collections import deque

class Queue:
    def __init__(self):
        self.queue = deque()

    def enqueue(self, item):
        """Add an item to the back of the queue."""
        self.queue.append(item)

    def dequeue(self):
        """Remove and return the item from the front of the queue."""
        if not self.is_empty():
            return self.queue.popleft()
        raise IndexError("dequeue from an empty queue")

    def peek(self):
        """Return the item at the front of the queue without removing it."""
        if not self.is_empty():
            return self.queue[0]
        raise IndexError("peek from an empty queue")

    def is_empty(self):
        """Check if the queue is empty."""
        return len(self.queue) == 0

    def size(self):
        """Return the size of the queue."""
        return len(self.queue)

# Example usage:
if __name__ == "__main__":
    q = Queue()
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    print(q.peek())    # Output: 1
    print(q.dequeue()) # Output: 1
    print(q.size())    # Output: 2
    print(q.is_empty()) # Output: False
```

### Key Points:
- **Efficiency**: The `deque` class allows O(1) time complexity for appending and popping from both ends, making it suitable for implementing a queue.
- **Error Handling**: It's important to handle cases where `dequeue` or `peek` is called on an empty queue to avoid runtime errors.
- **Extensibility**: You can easily extend this class to include additional functionalities, such as tracking items or implementing a maximum size limit for the queue.

Control Structures
Here are some examples of using if-else statements in Python 3.13:

### Example 1: Basic if-else Statement
```python
age = 18

if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")
```

### Example 2: Elif Statement
```python
temperature = 25

if temperature > 30:
    print("It's a hot day.")
elif 20 <= temperature <= 30:
    print("It's a pleasant day.")
else:
    print("It's a cold day.")
```

### Example 3: Nested if Statements
```python
number = 10

if number > 0:
    print("The number is positive.")
    if number % 2 == 0:
        print("It is also an even number.")
    else:
        print("It is an odd number.")
else:
    print("The number is not positive.")
```

### Example 4: Using Logical Operators
```python
score = 85

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")
```

### Example 5: Ternary Conditional Operator
```python
is_raining = True
outfit = "Bring an umbrella!" if is_raining else "You're good to go!"

print(outfit)
```

### Example 6: Checking Multiple Conditions
```python
light_color = "green"

if light_color == "red":
    print("Stop!")
elif light_color == "yellow":
    print("Caution!")
elif light_color == "green":
    print("Go!")
else:
    print("Invalid light color.")
```

These examples showcase the use of if-else statements in various conditions and scenarios in Python 3.13.

In Python 3.13, there isn't a traditional switch statement like in other programming languages. However, you can achieve similar functionality using the `match` statement, which is part of Python's structural pattern matching introduced in Python 3.10. 

Here’s how you can use the `match` statement in Python 3.13:

### Basic Example

```python
def switch_example(value):
    match value:
        case 1:
            return "You selected option 1."
        case 2:
            return "You selected option 2."
        case 3:
            return "You selected option 3."
        case _:
            return "Invalid option."

# Usage
result = switch_example(2)
print(result)  # Output: You selected option 2.
```

### Explanation

- The `match` statement is used to start the pattern matching.
- Each `case` checks for a specific value. If the value matches, the corresponding block of code will execute.
- The `_` (underscore) acts as a wildcard, catching any value that doesn't match previous cases, similar to a default case in traditional switch statements.

### Matching with Patterns

You can also match more complex patterns, such as tuples or lists:

```python
def match_coordinates(coord):
    match coord:
        case (0, 0):
            return "Origin"
        case (0, y):
            return f"Y-Axis at {y}"
        case (x, 0):
            return f"X-Axis at {x}"
        case (x, y):
            return f"Point at ({x}, {y})"
        case _:
            return "Not a valid coordinate."

# Usage
result = match_coordinates((3, 5))
print(result)  # Output: Point at (3, 5)
```

### Benefits of `match`

- **Readability**: It makes the code cleaner and more readable, especially when there are multiple conditions.
- **Patterns**: It allows for matching against data structures and can destructure them directly in the matching process.

In summary, while Python does not have a built-in switch statement, you can use the `match` statement introduced in Python 3.10 for similar functionality, providing a powerful way to handle conditional logic.

Here are some examples of using for loops in Python 3.13:

### Example 1: Basic For Loop
```python
# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

### Example 2: For Loop with Range
```python
# Using range() to iterate over a sequence of numbers
for i in range(5):
    print(i)
```

### Example 3: For Loop with Enumerate
```python
# Using enumerate to get index and value
colors = ["red", "green", "blue"]
for index, color in enumerate(colors):
    print(f"Index {index}: {color}")
```

### Example 4: Nested For Loops
```python
# Nested loops to generate a multiplication table
for i in range(1, 4):  # Outer loop
    for j in range(1, 4):  # Inner loop
        print(f"{i} * {j} = {i * j}")
```

### Example 5: For Loop with Conditional
```python
# Using a for loop with a conditional statement
numbers = [1, 2, 3, 4, 5, 6]
print("Even numbers:")
for number in numbers:
    if number % 2 == 0:
        print(number)
```

### Example 6: For Loop to Create a List
```python
# Using a for loop to create a new list
squares = []
for i in range(10):
    squares.append(i ** 2)
print(squares)
```

### Example 7: For Loop with String
```python
# Iterating over a string
word = "hello"
for letter in word:
    print(letter)
```

These examples illustrate various ways to use for loops in Python 3.13 to iterate over data structures like lists, strings, and ranges.

Certainly! Here are some examples of using while loops in Python 3.13:

### Example 1: Basic While Loop
```python
count = 0
while count < 5:
    print("Count is:", count)
    count += 1
```
**Output:**
```
Count is: 0
Count is: 1
Count is: 2
Count is: 3
Count is: 4
```

### Example 2: Using Break Statement
```python
num = 0
while True:
    print("Current number:", num)
    if num >= 3:
        break
    num += 1
```
**Output:**
```
Current number: 0
Current number: 1
Current number: 2
Current number: 3
```

### Example 3: Using Continue Statement
```python
count = 0
while count < 5:
    count += 1
    if count == 3:
        continue
    print("Count is:", count)
```
**Output:**
```
Count is: 1
Count is: 2
Count is: 4
Count is: 5
```

### Example 4: User Input in While Loop
```python
user_input = ""
while user_input.lower() != "exit":
    user_input = input("Type 'exit' to quit: ")
    print("You typed:", user_input)
```

### Example 5: Summing Numbers Until a Condition is Met
```python
total = 0
number = 1
while number != 0:
    number = int(input("Enter a number (0 to stop): "))
    total += number
print("Total sum:", total)
```

These examples illustrate different ways to utilize while loops, including counting, breaking out of the loop, continuing to the next iteration, getting user input, and running until a specific condition is met.

Python does not have a native `do-while` loop construct like some other programming languages. However, you can mimic the behavior of a `do-while` loop using a `while` loop with an initial run. Below are examples demonstrating how to create a `do-while` loop-like functionality in Python 3.13.

### Example 1: Basic Usage

```python
# Emulating a do-while loop
count = 0

while True:
    print(f"Count: {count}")
    count += 1
    if count >= 5:
        break  # Breaks after the condition is met
```

### Example 2: User Input

```python
# Emulating a do-while loop for user input
user_input = ""

while True:
    user_input = input("Enter 'exit' to stop: ")
    print(f"You entered: {user_input}")
    if user_input == 'exit':
        break  # Breaks after user chooses to exit
```

### Example 3: Validating Input

```python
# Emulating a do-while loop for input validation
num = -1

while True:
    num = int(input("Enter a positive number: "))
    if num > 0:
        break  # Breaks if the number is valid
    print("That's not a positive number. Please try again.")
```

### Example 4: Menu Selection

```python
# Emulating a do-while loop for a menu
choice = 0

while True:
    print("Menu:")
    print("1. Option 1")
    print("2. Option 2")
    print("3. Exit")
    choice = int(input("Select an option: "))
    if choice == 3:
        print("Exiting...")
        break  # Breaks if the user chooses to exit
    print(f"You selected option {choice}.")
```

These examples demonstrate how to replicate the `do-while` loop logic in Python using a `while True` loop combined with an explicit break condition based on the necessary criteria.

In Python, `break` and `continue` statements are used to control the flow of loops (`for` and `while` loops). Here’s how to use them:

### 1. `break` Statement

The `break` statement is used to exit a loop prematurely. When a `break` statement is encountered, the loop terminates and the program continues with the next statement following the loop.

**Example of `break`:**

```python
for number in range(10):
    if number == 5:
        break  # Exit the loop when number is 5
    print(number)
```
**Output:**
```
0
1
2
3
4
```

In this example, the loop will stop executing when the `number` reaches 5.

### 2. `continue` Statement

The `continue` statement is used to skip the current iteration of a loop and move to the next iteration. When a `continue` statement is encountered, the rest of the code inside the loop for that iteration is skipped.

**Example of `continue`:**

```python
for number in range(10):
    if number % 2 == 0:
        continue  # Skip even numbers
    print(number)
```
**Output:**
```
1
3
5
7
9
```

In this example, whenever `number` is even, the `continue` statement skips the `print` function, so only odd numbers are printed.

### Key Points

- Use `break` to exit a loop when a specific condition is met.
- Use `continue` to skip the remainder of the current iteration and move to the next iteration when a specific condition is met.
- Both statements can be used in `for` and `while` loops.

These statements help to manage loop execution based on specific conditions effectively.

Python does not have a built-in `goto` statement like some other programming languages. However, you can mimic similar behavior using functions and loops. While the use of `goto` is generally discouraged in modern programming due to readability and maintainability concerns, here's how you might create a simple alternative using a loop and a label concept:

### Example Using Loops as a Goto Replacement

```python
def example_with_loop():
    label = 'start'

    while True:
        if label == 'start':
            print("At start. Going to intermediate.")
            label = 'intermediate'
        elif label == 'intermediate':
            print("At intermediate. Going to end.")
            label = 'end'
        elif label == 'end':
            print("At end. Exiting loop.")
            break  # Exit the loop

example_with_loop()
```

### Example Using Functions to Mimic Gotos

You can define functions that represent different code segments that can be "jumped" to:

```python
def start():
    print("At start.")
    intermediate()

def intermediate():
    print("At intermediate.")
    end()

def end():
    print("At end. Exiting.")

# Main execution
start()
```

In these examples, we used functions and loops to simulate the flow control that `goto` might provide in other languages. This approach maintains readability and adheres to Python's design philosophy. 

If you still want to have a behavior similar to `goto`, using loops and conditional statements is the recommended way in Python.

Data Types and Variables
Sure! Here are some examples of declaring and using variables in Python 3.13:

```python
# Example 1: Declaring and using integer variables
age = 25  # Declaring an integer variable
print("Age:", age)  # Using the variable

# Example 2: Declaring and using floating point variables
temperature = 23.5  # Declaring a float variable
print("Temperature:", temperature)  # Using the variable

# Example 3: Declaring and using string variables
name = "Alice"  # Declaring a string variable
print("Name:", name)  # Using the variable

# Example 4: Declaring and using boolean variables
is_student = True  # Declaring a boolean variable
print("Is student:", is_student)  # Using the variable

# Example 5: Declaring a list variable
fruits = ["apple", "banana", "cherry"]  # Declaring a list variable
print("Fruits:", fruits)  # Using the variable
print("First fruit:", fruits[0])  # Accessing an element in the list

# Example 6: Declaring a dictionary variable
person = {"name": "Bob", "age": 30}  # Declaring a dictionary variable
print("Person:", person)  # Using the variable
print("Person's name:", person["name"])  # Accessing a value in the dictionary

# Example 7: Updating a variable
age += 1  # Incrementing the age variable
print("Updated Age:", age)  # Using the updated variable

# Example 8: Using multiple variable assignment
x, y, z = 1, 2, 3  # Multiple variable assignment
print("x:", x, "y:", y, "z:", z)  # Using the variables
```

These examples cover various types of variables and how to use them in Python 3.13.

In Python 3.13, working with integers, floats, and strings is straightforward and intuitive. Below is an explanation of how to work with each data type, including basic operations and examples.

### 1. Integers
Integers are whole numbers, both positive and negative, including zero.

#### Basic Operations:
- **Addition:** `+`
- **Subtraction:** `-`
- **Multiplication:** `*`
- **Division:** `/` (results in a float)
- **Floor Division:** `//` (results in an integer)
- **Modulus:** `%` (remainder after division)
- **Exponentiation:** `**` (power)

#### Example:
```python
a = 10
b = 3

# Basic operations
sum_result = a + b          # 13
difference = a - b          # 7
product = a * b             # 30
quotient = a / b            # 3.333...
floor_division = a // b     # 3
remainder = a % b           # 1
power = a ** b              # 1000
```

### 2. Floats
Floats are numbers with decimal points or in exponential form.

#### Basic Operations:
Similar to integers, you can use the same operators.

#### Example:
```python
x = 10.5
y = 3.2

# Basic operations
sum_float = x + y           # 13.7
difference_float = x - y    # 7.3
product_float = x * y       # 33.6
quotient_float = x / y      # 3.28125
```

### 3. Strings
Strings are sequences of characters enclosed in either single quotes or double quotes.

#### Common String Operations:
- **Concatenation:** Using `+`
- **Repetition:** Using `*`
- **Slicing:** Accessing parts of the string using indexing
- **Length:** Using `len()`
- **Methods:** Strings have many built-in methods (e.g., `.upper()`, `.lower()`, `.strip()`)

#### Example:
```python
str1 = "Hello"
str2 = "World"

# Concatenation
greeting = str1 + " " + str2  # "Hello World"

# Repetition
repeated = str1 * 3            # "HelloHelloHello"

# Slicing
first_char = str1[0]           # 'H'
substring = str1[1:4]          # "ell"

# Length
length = len(str1)             # 5

# String Methods
upper_case = str1.upper()      # "HELLO"
lower_case = str1.lower()      # "hello"
stripped = "   Hello   ".strip()  # "Hello"
```

### Type Conversion
You can convert between these types using functions:
- `int()`, `float()`, and `str()`

#### Example of Conversion:
```python
# Converting strings to integers and floats
num_str = "123"
int_value = int(num_str)       # 123
float_value = float(num_str)   # 123.0

# Converting integers and floats to strings
int_as_str = str(int_value)    # "123"
float_as_str = str(float_value) # "123.0"
```

### Summary
In Python 3.13, you can easily work with integers, floats, and strings using simple operators and built-in functions. Understanding these basic operations will help you handle numerical and textual data effectively.

In Python 3.13, you can use the `enum` module to create enumerated types. Below are some code examples demonstrating how to define and use enumerated types using the `Enum` class.

### Example 1: Basic Enum Definition

```python
from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

# Accessing Enum members
print(Color.RED)         # Output: Color.RED
print(Color.GREEN.value) # Output: 2

# Iterating over Enum members
for color in Color:
    print(color)
```

### Example 2: Enum with Methods

```python
from enum import Enum

class TrafficLight(Enum):
    RED = 1
    YELLOW = 2
    GREEN = 3

    def action(self):
        if self == TrafficLight.RED:
            return "Stop"
        elif self == TrafficLight.YELLOW:
            return "Prepare to stop"
        elif self == TrafficLight.GREEN:
            return "Go"

# Using the action method
light = TrafficLight.GREEN
print(light.action())  # Output: Go
```

### Example 3: Enum with Auto Values

You can use `auto()` to automatically assign values to enum members.

```python
from enum import Enum, auto

class Direction(Enum):
    NORTH = auto()
    EAST = auto()
    SOUTH = auto()
    WEST = auto()

# Displaying the enum members and their values
for direction in Direction:
    print(f"{direction}: {direction.value}")
```

### Example 4: Comparing Enum Members

```python
from enum import Enum

class Size(Enum):
    SMALL = 1
    MEDIUM = 2
    LARGE = 3

# Comparison of enum members
print(Size.SMALL == Size.MEDIUM)   # Output: False
print(Size.SMALL == Size.SMALL)     # Output: True
```

### Example 5: Enum with String Values

Enums can also have string values, which improve readability.

```python
from enum import Enum

class Status(Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"
    PENDING = "Pending"

# Accessing string values
print(Status.ACTIVE.value)  # Output: Active

# Using enum in a function
def get_status_message(status: Status):
    if status == Status.ACTIVE:
        return "The user is active."
    elif status == Status.INACTIVE:
        return "The user is inactive."
    return "The user status is pending."

print(get_status_message(Status.PENDING))  # Output: The user status is pending.
```

These examples cover basic enum creation, enumeration of members, methods in enums, automatic value assignment, comparison, and using string values for enum members.

Here are some examples of defining and using arrays in Python 3.13 using the built-in list type, which is often used as an array:

### Defining an Array

```python
# Defining an array (list) of integers
numbers = [1, 2, 3, 4, 5]

# Defining an array of strings
fruits = ["apple", "banana", "cherry"]

# Defining an array of mixed data types
mixed_array = [1, "two", 3.0, True]
```

### Accessing Elements

```python
# Accessing the first element
first_number = numbers[0]

# Accessing and printing the second fruit
second_fruit = fruits[1]
print(second_fruit)  # Output: banana
```

### Modifying Elements

```python
# Modifying the first element
numbers[0] = 10

# Appending a new element to the array
fruits.append("orange")

print(numbers)  # Output: [10, 2, 3, 4, 5]
print(fruits)   # Output: ['apple', 'banana', 'cherry', 'orange']
```

### Iterating Over an Array

```python
# Iterating over an array using a for loop
for number in numbers:
    print(number)

# Using list comprehension to create a new array with squares of numbers
squared_numbers = [num ** 2 for num in numbers]
print(squared_numbers)  # Output: [100, 4, 9, 16, 25]
```

### Array Length

```python
# Getting the length of an array
length_of_fruits = len(fruits)
print(length_of_fruits)  # Output: 4
```

### Slicing Arrays

```python
# Slicing the first three elements
sliced_numbers = numbers[:3]
print(sliced_numbers)  # Output: [10, 2, 3]
```

### Using `numpy` for Arrays

If you're working with numerical data extensively, you might want to use `numpy` arrays. Here's an example:

```python
import numpy as np

# Creating a numpy array
numpy_array = np.array([1, 2, 3, 4, 5])

# Performing operations
numpy_array_squared = numpy_array ** 2
print(numpy_array_squared)  # Output: [ 1  4  9 16 25]
```

These examples provide a good overview of defining, accessing, modifying, and working with arrays (lists) in Python 3.13. For numerical computations, consider using `numpy` for more advanced operations.

Here are some code examples demonstrating the use of lists in Python 3.13:

### 1. Creating a List
```python
# Creating a list of integers
numbers = [1, 2, 3, 4, 5]
print(numbers)

# Creating a list of strings
fruits = ["apple", "banana", "cherry"]
print(fruits)

# Creating a mixed list
mixed_list = [1, "apple", 3.14, True]
print(mixed_list)
```

### 2. Accessing List Elements
```python
# Accessing elements by index
print(fruits[0])  # Output: apple
print(fruits[1])  # Output: banana
print(fruits[-1]) # Output: cherry (last element)
```

### 3. Modifying Lists
```python
# Changing an element
fruits[1] = "blueberry"
print(fruits)  # Output: ['apple', 'blueberry', 'cherry']

# Adding elements
fruits.append("orange")
print(fruits)  # Output: ['apple', 'blueberry', 'cherry', 'orange']

# Inserting an element at a specific position
fruits.insert(1, "kiwi")
print(fruits)  # Output: ['apple', 'kiwi', 'blueberry', 'cherry', 'orange']
```

### 4. Removing Elements
```python
# Removing by value
fruits.remove("kiwi")
print(fruits)  # Output: ['apple', 'blueberry', 'cherry', 'orange']

# Removing by index
removed_fruit = fruits.pop(1)
print(removed_fruit)  # Output: blueberry
print(fruits)         # Output: ['apple', 'cherry', 'orange']

# Clearing the entire list
fruits.clear()
print(fruits)  # Output: []
```

### 5. List Comprehensions
```python
# Generating a list of squares using list comprehension
squares = [x ** 2 for x in range(10)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Filtering even numbers from a list
even_numbers = [x for x in range(20) if x % 2 == 0]
print(even_numbers)  # Output: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]
```

### 6. Iterating Over Lists
```python
# Iterating through a list using a for loop
for fruit in fruits:
    print(fruit)

# Using enumerate to get index and value
for index, fruit in enumerate(fruits):
    print(f"Index {index}: {fruit}")
```

### 7. List Functions and Methods
```python
# Length of the list
length = len(squares)
print(length)  # Output: 10

# Sorting a list
unsorted_list = [3, 1, 4, 1, 5, 9]
unsorted_list.sort()
print(unsorted_list)  # Output: [1, 1, 3, 4, 5, 9]

# Reversing a list
unsorted_list.reverse()
print(unsorted_list)  # Output: [9, 5, 4, 3, 1, 1]
```

### 8. Nested Lists
```python
# Creating a nested list
nested_list = [[1, 2, 3], ["apple", "banana"], [True, False]]
print(nested_list)

# Accessing elements in a nested list
print(nested_list[1][0])  # Output: apple
```

These examples demonstrate the versatility and functionality of lists in Python 3.13. Lists can be used to store sequences of items, be modified in size and content, and offer a variety of built-in methods for manipulation.

Working with dictionaries in Python 3.13 involves understanding how to create, access, modify, and manipulate these fundamental data structures. Here’s a comprehensive guide:

### 1. Creating a Dictionary

You can create a dictionary using curly braces `{}` or the `dict()` constructor.

```python
# Using curly braces
my_dict = {
    'name': 'Alice',
    'age': 30,
    'city': 'New York'
}

# Using dict()
my_dict2 = dict(name='Bob', age=25, city='Los Angeles')
```

### 2. Accessing Dictionary Items

Access items using square brackets `[]` with the key or the `get()` method.

```python
# Accessing values
name = my_dict['name']         # Output: 'Alice'
age = my_dict.get('age')       # Output: 30

# Accessing a non-existent key returns None with get()
country = my_dict.get('country')  # Output: None
```

### 3. Modifying a Dictionary

You can add new key-value pairs or modify existing ones.

```python
# Adding a new key-value pair
my_dict['country'] = 'USA'

# Modifying an existing value
my_dict['age'] = 31
```

### 4. Removing Items

You can remove items using the `del` statement or the `pop()` method.

```python
# Using del
del my_dict['city']

# Using pop() - returns the removed value
age = my_dict.pop('age')  # Output: 31
```

### 5. Dictionary Methods

Python dictionaries come with several useful methods:

- `keys()`: Returns a view of all the keys.
- `values()`: Returns a view of all the values.
- `items()`: Returns a view of all key-value pairs.
- `update()`: Updates the dictionary with elements from another dictionary or from an iterable of key-value pairs.

```python
# Example of dictionary methods
keys = my_dict.keys()        # Output: dict_keys(['name', 'country'])
values = my_dict.values()    # Output: dict_values(['Alice', 'USA'])
items = my_dict.items()      # Output: dict_items([('name', 'Alice'), ('country', 'USA')])

# Updating a dictionary
my_dict.update({'age': 30, 'job': 'Engineer'})
```

### 6. Iterating Through a Dictionary

You can iterate over the keys, values, or items.

```python
# Iterating over keys
for key in my_dict:
    print(key)

# Iterating over values
for value in my_dict.values():
    print(value)

# Iterating over key-value pairs
for key, value in my_dict.items():
    print(key, value)
```

### 7. Nested Dictionaries

Dictionaries can contain other dictionaries, allowing you to create complex data structures.

```python
nested_dict = {
    'person': {
        'name': 'Charlie',
        'details': {
            'age': 35,
            'city': 'San Francisco'
        }
    }
}

# Accessing nested dictionary values
city = nested_dict['person']['details']['city']  # Output: 'San Francisco'
```

### 8. Dictionary Comprehensions

You can create dictionaries using comprehensions for more concise and readable code.

```python
# Example of dictionary comprehension
squares = {x: x*x for x in range(5)}  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}
```

### 9. Handling Default Values

Use `defaultdict` from the `collections` module for dictionaries that require default values for missing keys.

```python
from collections import defaultdict

default_dict = defaultdict(int)
default_dict['a'] += 1  # No error, initializes 'a' to 0 and then adds 1
```

### Conclusion

Dictionaries in Python 3.13 are versatile and allow for dynamic storage of data in key-value pairs. By mastering their operations, you'll be able to handle data efficiently in your applications.

Here are some examples of using sets in Python 3.13:

### 1. Creating Sets

```python
# Creating a set from a list
numbers = {1, 2, 3, 4, 5}
print(numbers)

# Creating an empty set
empty_set = set()
print(empty_set)

# Creating a set from a string
char_set = set("hello")
print(char_set)
```

### 2. Basic Set Operations

```python
# Set union
set_a = {1, 2, 3}
set_b = {3, 4, 5}
union_set = set_a | set_b
print("Union:", union_set)

# Set intersection
intersection_set = set_a & set_b
print("Intersection:", intersection_set)

# Set difference
difference_set = set_a - set_b
print("Difference:", difference_set)

# Set symmetric difference
symmetric_difference_set = set_a ^ set_b
print("Symmetric Difference:", symmetric_difference_set)
```

### 3. Adding and Removing Elements

```python
# Adding elements to a set
set_c = {1, 2, 3}
set_c.add(4)
print("After adding 4:", set_c)

# Removing elements from a set
set_c.remove(2)
print("After removing 2:", set_c)

# Discarding an element (won't raise an error if not found)
set_c.discard(5)  # no error
print("After trying to discard 5:", set_c)

# Popping an element (removes and returns an arbitrary element)
popped_element = set_c.pop()
print("Popped element:", popped_element)
print("Set after popping:", set_c)
```

### 4. Set Comprehensions

```python
# Set comprehension to create a set of squares
squares = {x**2 for x in range(10)}
print("Squares:", squares)
```

### 5. Checking Membership

```python
set_d = {1, 2, 3, 4, 5}
print(3 in set_d)  # Output: True
print(6 in set_d)  # Output: False
```

### 6. Using Sets for Uniqueness

```python
# Using a set to filter duplicates
list_with_duplicates = [1, 2, 2, 3, 4, 4, 5]
unique_numbers = set(list_with_duplicates)
print("Unique Numbers:", unique_numbers)
```

### 7. Subset and Superset

```python
set_e = {1, 2, 3}
set_f = {1, 2}

print(set_f <= set_e)  # True, set_f is a subset of set_e
print(set_e >= set_f)  # True, set_e is a superset of set_f
```

### 8. Frozenset

```python
# Creating a frozenset (immutable set)
frozen_set = frozenset([1, 2, 3, 4])
print("Frozenset:", frozen_set)

# Trying to add an element to a frozenset will raise an AttributeError
# frozen_set.add(5)  # Uncommenting this will raise an error
```

These examples demonstrate various features and operations available with sets in Python 3.13.

Sure! Here are some code examples that demonstrate how to work with tuples in Python 3.13.

### Creating a Tuple

```python
# Creating a tuple
my_tuple = (1, 2, 3, 'a', 'b', 'c')
print(my_tuple)  # Output: (1, 2, 3, 'a', 'b', 'c')
```

### Accessing Elements

```python
# Accessing elements in a tuple
first_element = my_tuple[0]
last_element = my_tuple[-1]
print(first_element)  # Output: 1
print(last_element)    # Output: 'c'
```

### Slicing a Tuple

```python
# Slicing a tuple
sliced_tuple = my_tuple[1:4]
print(sliced_tuple)  # Output: (2, 3, 'a')
```

### Tuple Concatenation

```python
# Concatenating tuples
tuple1 = (1, 2, 3)
tuple2 = ('x', 'y', 'z')
concatenated_tuple = tuple1 + tuple2
print(concatenated_tuple)  # Output: (1, 2, 3, 'x', 'y', 'z')
```

### Repeating a Tuple

```python
# Repeating a tuple
repeated_tuple = ('repeat',) * 3
print(repeated_tuple)  # Output: ('repeat', 'repeat', 'repeat')
```

### Tuple Unpacking

```python
# Tuple unpacking
a, b, c = (1, 2, 3)
print(a, b, c)  # Output: 1 2 3
```

### Checking for Existence of an Item

```python
# Checking if an item exists in a tuple
exists = 2 in my_tuple
print(exists)  # Output: True
```

### Length of a Tuple

```python
# Getting the length of a tuple
length = len(my_tuple)
print(length)  # Output: 6
```

### Looping Through a Tuple

```python
# Looping through a tuple
for item in my_tuple:
    print(item)
```

### Using Tuples as Dictionary Keys

```python
# Using tuples as dictionary keys
my_dict = {
    (1, 2): "first pair",
    (3, 4): "second pair"
}
print(my_dict[(1, 2)])  # Output: first pair
```

These examples provide a comprehensive overview of working with tuples in Python 3.13!

Databases
To connect to a database in Python 3.13, you typically use a library that corresponds to the type of database you're working with (e.g., SQLite, PostgreSQL, MySQL). Below are examples of how to connect to different types of databases.

### 1. Connecting to SQLite

SQLite is included with Python, so no additional installation is required.

```python
import sqlite3

# Connect to SQLite database (creates a new database if it doesn't exist)
connection = sqlite3.connect('my_database.db')

# Create a cursor object using the cursor() method
cursor = connection.cursor()

# You can execute SQL queries using the cursor
cursor.execute('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)')

# Commit changes and close the connection
connection.commit()
connection.close()
```

### 2. Connecting to PostgreSQL

For PostgreSQL, you'll need to install the `psycopg2` library.

```bash
pip install psycopg2
```

```python
import psycopg2

# Connect to PostgreSQL database
connection = psycopg2.connect(
    dbname='your_database_name',
    user='your_username',
    password='your_password',
    host='localhost',
    port='5432'
)

# Create a cursor object
cursor = connection.cursor()

# Execute SQL queries
cursor.execute('SELECT * FROM users;')

# Fetch results
results = cursor.fetchall()

# Close cursor and connection
cursor.close()
connection.close()
```

### 3. Connecting to MySQL

For MySQL, you can use the `mysql-connector-python` library.

```bash
pip install mysql-connector-python
```

```python
import mysql.connector

# Connect to MySQL database
connection = mysql.connector.connect(
    host='localhost',
    user='your_username',
    password='your_password',
    database='your_database_name'
)

# Create a cursor
cursor = connection.cursor()

# Execute SQL queries
cursor.execute('SELECT * FROM users;')

# Fetch results
results = cursor.fetchall()

# Close cursor and connection
cursor.close()
connection.close()
```

### Important Notes
- Always ensure you handle exceptions (e.g., using `try-except` blocks) when connecting to databases to manage errors gracefully.
- Use parameterized queries to avoid SQL injection attacks.
- Make sure to close your connections and cursor objects to free up resources.

These examples should help you get started with connecting to a database in Python 3.13.

Certainly! Below are code examples that demonstrate how to create and query tables using SQLite in Python 3.13. SQLite is a lightweight database engine that comes bundled with Python, making it easy to use for demonstration purposes.

### Example: Creating and Querying Tables

```python
import sqlite3

# Connect to the SQLite database (or create it if it doesn't exist)
connection = sqlite3.connect('example.db')

# Create a cursor object using the connection
cursor = connection.cursor()

# Create a new table
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
)
''')

# Insert some data into the table
cursor.execute('INSERT INTO users (name, age) VALUES (?, ?)', ('Alice', 30))
cursor.execute('INSERT INTO users (name, age) VALUES (?, ?)', ('Bob', 25))
cursor.execute('INSERT INTO users (name, age) VALUES (?, ?)', ('Charlie', 35))

# Commit the changes
connection.commit()

# Query the table
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()

# Print the results
for row in rows:
    print(row)

# Close the connection
connection.close()
```

### Explanation:

1. **Connecting to Database**: The `sqlite3.connect()` function creates a connection to an SQLite database file. If the file does not exist, it is created.

2. **Creating a Cursor**: A cursor is created using `connection.cursor()`, which allows for executing SQL commands.

3. **Creating a Table**: The `CREATE TABLE` SQL statement is executed to create a new table named `users` if it doesn't exist.

4. **Inserting Data**: Data is inserted into the `users` table with placeholders (`?`) for safety against SQL injection.

5. **Committing Changes**: Changes are committed to the database with `connection.commit()`. This ensures that all the changes made to the database in the session are saved.

6. **Querying Data**: The `SELECT * FROM users` query retrieves all records from the `users` table. The results are fetched using `cursor.fetchall()`.

7. **Printing Results**: The results are printed in a loop to display each row.

8. **Closing the Connection**: The database connection is closed at the end of the script to free up resources.

This code provides a simple demonstration of how to create and query tables in Python 3.13 using SQLite. Make sure to install SQLite and that it’s available in your Python installation to run this example.

Certainly! Below are examples of how to use SQL queries with JOINs and subqueries in Python 3.13. We'll be using the `sqlite3` module for these examples. First, let's assume we have two tables: `employees` and `departments`.

### Setup: Sample Database and Tables

```python
import sqlite3

# Create a connection to SQLite database
connection = sqlite3.connect('example.db')

# Create a cursor object
cursor = connection.cursor()

# Create sample tables
cursor.execute('''
CREATE TABLE IF NOT EXISTS departments (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES departments (id)
)
''')

# Insert sample data
cursor.execute("INSERT INTO departments (name) VALUES ('HR'), ('IT'), ('Sales')")
cursor.execute("INSERT INTO employees (name, department_id) VALUES ('Alice', 1), ('Bob', 2), ('Charlie', 1), ('David', 3), ('Eve', 2)")

# Commit the changes
connection.commit()
```

### Example 1: Using JOINs

```python
# Query to get employee names along with their department names using JOIN
join_query = '''
SELECT employees.name AS employee_name, departments.name AS department_name
FROM employees
JOIN departments ON employees.department_id = departments.id
'''

# Execute the query
cursor.execute(join_query)

# Fetch and display the results
results = cursor.fetchall()
for employee_name, department_name in results:
    print(f'Employee: {employee_name}, Department: {department_name}')
```

### Example 2: Using Subqueries

```python
# Query to find employees who work in departments where the department name contains 'IT' using a subquery
subquery = '''
SELECT name FROM employees
WHERE department_id IN (SELECT id FROM departments WHERE name LIKE '%IT%')
'''

# Execute the query
cursor.execute(subquery)

# Fetch and display the results
results = cursor.fetchall()
for employee_name, in results:
    print(f'Employee in IT department: {employee_name}')
```

### Clean up: Closing the Connection

```python
# Close the cursor and connection
cursor.close()
connection.close()
```

These examples demonstrate how to use JOINs and subqueries in SQL through Python's `sqlite3` module. In practice, always handle exceptions and manage resources properly, especially in production code.

Sure! Below are examples of how to use prepared statements in Python 3.13 with the `sqlite3` and `psycopg2` libraries for SQLite and PostgreSQL databases, respectively.

### Using SQLite with `sqlite3`

Here's a basic example of how to use prepared statements when working with an SQLite database.

```python
import sqlite3

# Connect to the database (or create it if it doesn't exist)
connection = sqlite3.connect('example.db')
cursor = connection.cursor()

# Create a table
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL
)
''')

# Prepare a statement using placeholders
insert_statement = 'INSERT INTO users (username, email) VALUES (?, ?)'

# Data to be inserted
user_data = [
    ('alice', 'alice@example.com'),
    ('bob', 'bob@example.com')
]

# Execute the prepared statement multiple times with different data
cursor.executemany(insert_statement, user_data)

# Commit the changes
connection.commit()

# Query to verify the inserted data
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()
for row in rows:
    print(row)

# Clean up
cursor.close()
connection.close()
```

### Using PostgreSQL with `psycopg2`

Here’s how to use prepared statements with PostgreSQL using the `psycopg2` library.

```python
import psycopg2

# Connect to the PostgreSQL database
connection = psycopg2.connect(
    dbname='example_db',
    user='your_username',
    password='your_password',
    host='localhost',
    port='5432'
)

cursor = connection.cursor()

# Create a table
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
)
''')

# Prepare a statement using placeholders
insert_statement = 'INSERT INTO users (username, email) VALUES (%s, %s)'

# Data to be inserted
user_data = [
    ('charlie', 'charlie@example.com'),
    ('dave', 'dave@example.com')
]

# Execute the prepared statement multiple times with different data
cursor.executemany(insert_statement, user_data)

# Commit the changes
connection.commit()

# Query to verify the inserted data
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()
for row in rows:
    print(row)

# Clean up
cursor.close()
connection.close()
```

### Notes:
- In both examples, we use placeholders (`?` for SQLite, `%s` for PostgreSQL) to create prepared statements. These placeholders are then replaced with actual values when executing the statements.
- Always remember to commit your changes after performing write operations, and clean up by closing the cursor and connection.

In Python 3.13, you can use transactions with database operations by leveraging the `sqlite3` module for SQLite databases or libraries like `psycopg2` for PostgreSQL, `mysql-connector-python` for MySQL, etc. Transactions ensure that a series of operations are completed successfully before being committed to the database, or rolled back if an error occurs.

Here’s a step-by-step guide using `sqlite3` as an example:

### Using sqlite3 for Transactions

1. **Import the sqlite3 module**:
   You need to import the `sqlite3` module to work with SQLite databases.

   ```python
   import sqlite3
   ```

2. **Establishing a Connection**:
   Create a connection to the database using `sqlite3.connect()`, and create a cursor object to execute SQL statements.

   ```python
   connection = sqlite3.connect('example.db')
   cursor = connection.cursor()
   ```

3. **Using Transactions**:
   You can start a transaction by executing your SQL commands. If all commands are successful, you commit the changes. If an error occurs, you roll back the transaction.

   ```python
   try:
       # Start a transaction
       cursor.execute('INSERT INTO users (name, age) VALUES (?, ?)', ('Alice', 30))
       cursor.execute('INSERT INTO users (name, age) VALUES (?, ?)', ('Bob', 25))

       # Commit the transaction
       connection.commit()
       print("Transaction committed successfully.")
   except Exception as e:
       # Rollback the transaction in case of an error
       connection.rollback()
       print(f"Transaction failed: {e}")
   ```

4. **Closing the Connection**:
   Finally, after all operations, close the cursor and connection.

   ```python
   cursor.close()
   connection.close()
   ```

### Key Points

- **Transaction**: A set of operations that are treated as a single unit. Transactions can either be committed or rolled back.
- **Commit**: Use `connection.commit()` to save changes to the database.
- **Rollback**: Use `connection.rollback()` to undo changes if an error occurs.
- **Error Handling**: Surround transaction code with a `try/except` block to catch exceptions and handle them appropriately.

### Using Other Databases

If you're using other types of databases like PostgreSQL or MySQL, the overall approach is similar, but the connection and cursor handling may differ slightly.

#### Example with psycopg2 (PostgreSQL):

```python
import psycopg2

try:
    connection = psycopg2.connect("dbname=test user=postgres password=yourpassword")
    cursor = connection.cursor()

    cursor.execute('INSERT INTO users (name, age) VALUES (%s, %s)', ('Alice', 30))
    cursor.execute('INSERT INTO users (name, age) VALUES (%s, %s)', ('Bob', 25))

    connection.commit()
    print("Transaction committed successfully.")
except Exception as e:
    connection.rollback()
    print(f"Transaction failed: {e}")
finally:
    cursor.close()
    connection.close()
```

By following these steps, you can effectively use transactions in your database operations with Python 3.13. Be sure to adapt the connection and execution methods according to the specific database library you are using.

Error Handling
Certainly! Here are a few examples of using try-catch blocks in Python 3.13.

### Example 1: Basic Exception Handling

```python
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"An error occurred: {e}")
```

### Example 2: Handling Multiple Exceptions

```python
try:
    value = int(input("Please enter a number: "))
    result = 10 / value
except ZeroDivisionError:
    print("Error: You cannot divide by zero.")
except ValueError:
    print("Error: Invalid input. Please enter a valid number.")
```

### Example 3: Using `finally`

```python
try:
    file = open("example.txt", "r")
    content = file.read()
except FileNotFoundError:
    print("Error: The file was not found.")
finally:
    if 'file' in locals():
        file.close()
        print("File has been closed.")
```

### Example 4: Nested Try-Except

```python
try:
    number = int(input("Enter a number: "))
    try:
        result = 100 / number
    except ZeroDivisionError:
        print("You can't divide by zero.")
except ValueError:
    print("That's not a valid number.")
```

### Example 5: Catching All Exceptions

```python
try:
    # Potential risky operation
    value = [1, 2, 3]
    print(value[5])  # IndexError
except Exception as e:
    print(f"An unexpected error occurred: {e}")
```

These examples illustrate how to use try-catch blocks in various scenarios to handle exceptions and errors effectively in Python 3.13.

In Python 3.13, working with exception types involves understanding how to raise, catch, and define exceptions effectively. Here's a guide on how to handle exceptions in Python:

### 1. Basic Exception Handling

You can use `try` and `except` blocks to handle exceptions:

```python
try:
    # Code that might raise an exception
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Caught an exception: {e}")
```

### 2. Catching Multiple Exceptions

You can catch multiple exceptions using a tuple:

```python
try:
    value = int(input("Enter a number: "))
    result = 10 / value
except (ZeroDivisionError, ValueError) as e:
    print(f"Caught an exception: {e}")
```

### 3. Catching All Exceptions

It's also possible to catch all exceptions with a bare `except`, but this is generally discouraged as it can make debugging harder:

```python
try:
    # Risky code here
    ...
except Exception as e:  # Catching all exceptions
    print(f"Caught an exception: {e}")
```

### 4. The `else` Clause

The `else` clause can be used to execute code that should run only if the `try` block does not raise an exception:

```python
try:
    result = 10 / 2
except ZeroDivisionError:
    print("Division by zero!")
else:
    print(f"Result is {result}")
```

### 5. The `finally` Clause

The `finally` clause will always execute, regardless of whether an exception was raised or not. This is useful for cleanup actions:

```python
try:
    f = open('file.txt', 'r')
    content = f.read()
except FileNotFoundError:
    print("File not found!")
finally:
    f.close()  # Ensures the file is closed whether an exception occurred or not
```

### 6. Raising Exceptions

You can use the `raise` statement to raise an exception:

```python
def check_positive(number):
    if number < 0:
        raise ValueError("Number must be positive")
    
try:
    check_positive(-10)
except ValueError as e:
    print(f"Caught an exception: {e}")
```

### 7. Creating Custom Exceptions

You can define your own exception classes by subclassing `Exception`:

```python
class MyCustomError(Exception):
    pass

try:
    raise MyCustomError("Something went wrong!")
except MyCustomError as e:
    print(f"Caught a custom exception: {e}")
```

### Summary

- Use `try`, `except`, `else`, and `finally` for exception handling.
- Catch specific exceptions whenever possible.
- Use `raise` to throw exceptions and create custom exceptions class for specific use cases.
- Always ensure resources are cleaned up using `finally` if necessary.

This guide outlines the fundamental approach to working with exceptions in Python 3.13, which remains consistent with the principles established in earlier versions.

Here's an example of how to create and use custom error classes in Python 3.13. Custom error classes can help you define specific exceptions that are more meaningful and easier to handle in your programs.

### Example of Custom Error Class

```python
# Define a custom exception class
class CustomError(Exception):
    """Base class for other exceptions."""
    pass

class ValidationError(CustomError):
    """Raised when a validation error occurs."""
    def __init__(self, message):
        self.message = message
        super().__init__(self.message)

class CalculationError(CustomError):
    """Raised when a calculation error occurs."""
    def __init__(self, message, value):
        self.message = message
        self.value = value
        super().__init__(self.message)

# Function that raises a ValidationError
def validate_input(value):
    if value < 0:
        raise ValidationError("Input must be a non-negative number.")
    
# Function that raises a CalculationError
def divide(x, y):
    if y == 0:
        raise CalculationError("Division by zero is not allowed.", (x, y))
    return x / y

# Main function to demonstrate usage
def main():
    try:
        value = -5
        validate_input(value)
    except ValidationError as ve:
        print(f"Validation Error: {ve}")

    try:
        result = divide(10, 0)
        print(f"Result: {result}")
    except CalculationError as ce:
        print(f"Calculation Error: {ce}, Values: {ce.value}")

if __name__ == "__main__":
    main()
```

### Explanation

1. **Custom Exception Classes**:
   - `CustomError` is the base class for other custom exceptions.
   - `ValidationError` and `CalculationError` inherit from `CustomError` and provide specific error messages.

2. **Functions**:
   - `validate_input(value)` raises a `ValidationError` when the input is negative.
   - `divide(x, y)` raises a `CalculationError` when there is an attempt to divide by zero, including the values involved in the error.

3. **Error Handling**:
   - In the `main()` function, calls to `validate_input()` and `divide()` are wrapped in try-except blocks to handle the custom exceptions gracefully, allowing for specific error messages to be printed.

This pattern of creating and using custom error classes can simplify debugging and improve the readability and maintainability of your code.

In Python, the `finally` block is used in exception handling to define a block of code that will always execute, regardless of whether an exception was raised or not. Here are some examples demonstrating how to use `finally` blocks in Python 3.13:

### Example 1: Basic Usage of finally

```python
def divide_numbers(a, b):
    try:
        result = a / b
        print(f"Result: {result}")
    except ZeroDivisionError:
        print("Error: Cannot divide by zero.")
    finally:
        print("Execution of the try-except block is complete.")

divide_numbers(10, 2)
divide_numbers(10, 0)
```

### Example 2: Using finally with File Handling

```python
def read_file(file_path):
    file = None
    try:
        file = open(file_path, 'r')
        data = file.read()
        print(data)
    except FileNotFoundError:
        print("Error: File not found.")
    finally:
        if file:
            file.close()
            print("File is closed.")

read_file("existing_file.txt")
read_file("non_existing_file.txt")
```

### Example 3: Using finally with Multiple Exceptions

```python
def process_data(data):
    try:
        # Let's assume data must be a non-empty list of numbers
        if not data or not isinstance(data, list):
            raise ValueError("Data must be a non-empty list.")
        average = sum(data) / len(data)
        print(f"Average: {average}")
    except ValueError as ve:
        print(f"Value Error: {ve}")
    except TypeError:
        print("Type Error: Data contains non-numeric values.")
    finally:
        print("Data processing attempt finished.")

process_data([1, 2, 3, 4, 5])
process_data(None)
process_data("not a list")
```

### Example 4: finally with Cleanup Operations

```python
class Resource:
    def __enter__(self):
        print("Acquiring resource...")
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print("Releasing resource...")

def use_resource():
    try:
        with Resource() as resource:
            print("Using resource...")
            raise Exception("Something went wrong!")
    finally:
        print("This will always execute after the resource block.")

use_resource()
```

### Example 5: finally in a Loop

```python
def process_numbers(numbers):
    for number in numbers:
        try:
            print(f"Processing {number}...")
            if number < 0:
                raise ValueError("Negative number not allowed.")
            # Simulate processing
            print(f"Processed: {number}")
        except ValueError as ve:
            print(f"Error: {ve}")
        finally:
            print("Finished processing a number.\n")

process_numbers([1, 2, -3, 4])
```

These examples illustrate how to effectively utilize the `finally` block for cleanup and ensuring certain code runs regardless of whether an error occurred or not.

Certainly! In Python, error messages and logging can be crucial for debugging and monitoring applications. Here's how you can implement both in Python 3.13.

### Example of Error Handling with Custom Error Messages

```python
class CustomError(Exception):
    pass

def divide(a, b):
    if b == 0:
        raise CustomError("Cannot divide by zero.")
    return a / b

try:
    result = divide(10, 0)
except CustomError as e:
    print(f"Error: {e}")
```

### Example of Using Logging in Python

```python
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

def calculate_square(n):
    logging.debug(f'Starting calculation for square of {n}')
    if n < 0:
        logging.error("Negative input provided.")
        raise ValueError("Input must be a non-negative integer.")
    result = n ** 2
    logging.info(f'Successfully calculated square: {result}')
    return result

try:
    square = calculate_square(-5)
except ValueError as e:
    logging.exception("An exception occurred: %s", e)
```

### Example of Logging Exceptions

```python
import logging

# Set up logger
logging.basicConfig(level=logging.INFO)

def faulty_function():
    return 1 / 0  # This will raise a ZeroDivisionError

try:
    faulty_function()
except ZeroDivisionError as e:
    logging.exception("Exception occurred in faulty_function: %s", e)
```

### Example of Logging with Different Levels

```python
import logging

# Configure logging with different levels
logging.basicConfig(level=logging.WARNING, format='%(levelname)s: %(message)s')

def risky_operation(value):
    if value < 0:
        logging.warning("Received a negative value; continuing with absolute value.")
        value = abs(value)
    
    logging.info("Performing risky operation...")
    result = value * 10
    logging.debug(f"Result of risky operation: {result}")
    return result

risky_operation(-5)
```

### Summary

- Use `try` and `except` blocks to handle exceptions and provide meaningful error messages.
- Use the `logging` module to log messages at various severity levels (DEBUG, INFO, WARNING, ERROR, CRITICAL).
- Set up `basicConfig` to define the logging format and level.
  
With these examples, you should now have a good grasp of how to handle errors and log information in Python 3.13!

File Input/Output
In Python 3.13, reading from and writing to text files can be done using built-in functions. Here's a concise guide on how to do both:

### Reading a Text File

To read a text file, you can use the `open()` function along with methods like `read()`, `readline()`, or `readlines()`. Here’s a basic example:

```python
# Reading an entire file
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)

# Reading line by line
with open('example.txt', 'r') as file:
    for line in file:
        print(line.strip())

# Reading all lines into a list
with open('example.txt', 'r') as file:
    lines = file.readlines()
    print(lines)
```

### Writing to a Text File

To write to a text file, you can use the `open()` function with the `'w'` or `'a'` mode. The `'w'` mode will overwrite the file if it exists, while the `'a'` mode will append to the file. Here’s how to do it:

```python
# Writing to a file (overwrites existing content)
with open('output.txt', 'w') as file:
    file.write("Hello, World!\n")
    file.write("This is a text file.\n")

# Appending to a file
with open('output.txt', 'a') as file:
    file.write("Appending another line.\n")
```

### Important Tips
- Always use the `with` statement when working with files. This ensures that the file is properly closed after its suite finishes, even if an error is raised.
- Use `'r'` for reading, `'w'` for writing (overwriting), and `'a'` for appending.
- Handle exceptions appropriately for better error management, especially when dealing with file paths or permissions.

This basic outline should help you get started with file operations in Python 3.13!

Certainly! Below are some code examples demonstrating how to work with binary files in Python 3.13.

### 1. Writing to a Binary File

```python
# Writing to a binary file
data = bytearray([120, 3, 255, 0, 100])  # Sample binary data

with open('example.bin', 'wb') as binary_file:
    binary_file.write(data)

print("Data written to example.bin")
```

### 2. Reading from a Binary File

```python
# Reading from a binary file
with open('example.bin', 'rb') as binary_file:
    data = binary_file.read()

print("Data read from example.bin:", list(data))
```

### 3. Appending to a Binary File

```python
# Appending to a binary file
additional_data = bytearray([200, 100, 50])

with open('example.bin', 'ab') as binary_file:
    binary_file.write(additional_data)

print("Additional data appended to example.bin")
```

### 4. Reading Binary Data in Chunks

```python
# Reading binary data in chunks
chunk_size = 2

with open('example.bin', 'rb') as binary_file:
    while True:
        chunk = binary_file.read(chunk_size)
        if not chunk:
            break
        print("Read chunk:", list(chunk))
```

### 5. Using `struct` to Pack and Unpack Binary Data

```python
import struct

# Packing data into binary format
data_to_pack = (1, 2.5, b'hello')
packed_data = struct.pack('i f 5s', *data_to_pack)

with open('packed_data.bin', 'wb') as binary_file:
    binary_file.write(packed_data)

print("Packed data written to packed_data.bin")

# Unpacking data from binary format
with open('packed_data.bin', 'rb') as binary_file:
    packed_data = binary_file.read()

unpacked_data = struct.unpack('i f 5s', packed_data)
print("Unpacked data:", unpacked_data)
```

### 6. Handling Images as Binary Files

```python
# Reading and writing image files in binary mode
image_path = 'example_image.png'

# Writing an image file
with open(image_path, 'rb') as image_file:
    image_data = image_file.read()

print(f"Read image data from {image_path}")

# Example: Save a copy of the image
with open('copy_of_image.png', 'wb') as copy_file:
    copy_file.write(image_data)

print("Copied image to copy_of_image.png")
```

These examples cover the basics of reading, writing, appending, and manipulating binary files in Python 3.13. Feel free to adapt them to your specific use case!

Certainly! Below are examples of how to read and write data using both CSV and JSON file formats in Python 3.13.

### CSV Example

#### Writing to a CSV File

```python
import csv

# Data to be written to CSV
data = [
    ['name', 'age', 'city'],
    ['Alice', 30, 'New York'],
    ['Bob', 25, 'Los Angeles'],
    ['Charlie', 35, 'Chicago']
]

# Writing to CSV
with open('data.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)

print("Data written to data.csv")
```

#### Reading from a CSV File

```python
import csv

# Reading from CSV
with open('data.csv', mode='r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
```

### JSON Example

#### Writing to a JSON File

```python
import json

# Data to be written to JSON
data = {
    "users": [
        {"name": "Alice", "age": 30, "city": "New York"},
        {"name": "Bob", "age": 25, "city": "Los Angeles"},
        {"name": "Charlie", "age": 35, "city": "Chicago"}
    ]
}

# Writing to JSON
with open('data.json', mode='w') as file:
    json.dump(data, file, indent=4)

print("Data written to data.json")
```

#### Reading from a JSON File

```python
import json

# Reading from JSON
with open('data.json', mode='r') as file:
    data = json.load(file)
    print(json.dumps(data, indent=4))
```

### Summary

- The CSV example demonstrates how to write and read data using the CSV format, with a focus on tabular data.
- The JSON example shows how to handle structured data using JSON, which is useful for hierarchical data structures.

You can run these code snippets in a Python environment to observe how CSV and JSON files are created and read.

Certainly! Below are examples of working with file streams in Python 3.13, demonstrating how to read from and write to files.

### Writing to a File

Here's how to open a file and write text to it:

```python
# Writing to a file
file_path = 'example.txt'

# Using a context manager to open the file
with open(file_path, 'w') as file:
    file.write("Hello, world!\n")
    file.write("This is an example of writing to a file in Python 3.13.")

print(f"Data written to {file_path}.")
```

### Reading from a File

Now, let's read the contents of the file we just created:

```python
# Reading from a file
with open(file_path, 'r') as file:
    content = file.read()  # Read the entire content
    print("File Content:")
    print(content)
```

### Appending to a File

You can also append data to an existing file. Here's how to do that:

```python
# Appending to the file
with open(file_path, 'a') as file:
    file.write("\nThis line is appended to the file.")

print(f"Data appended to {file_path}.")
```

### Reading a File Line by Line

If you want to read a file line by line, you can use a loop:

```python
# Reading a file line by line
with open(file_path, 'r') as file:
    print("Reading file line by line:")
    for line in file:
        print(line.strip())  # Use strip() to remove newline characters
```

### Reading a File into a List

You can read all lines of a file into a list using `readlines()`:

```python
# Reading file lines into a list
with open(file_path, 'r') as file:
    lines = file.readlines()

print("Lines in the file:")
print(lines)  # Each line will include the newline character
```

### Using Buffered I/O

For more control over buffering, you can specify the `buffering` parameter when opening a file:

```python
# Writing to a file with specific buffering
with open(file_path, 'w', buffering=1) as file:  # Line-buffered
    file.write("Buffered I/O Example\n")
    file.write("This may be useful for performance.")

print("Buffered write complete.")
```

### Closing the File

While using a `with` statement automatically closes the file, if you open it without `with`, you should remember to close it manually:

```python
# Manually closing a file
file = open(file_path, 'r')
content = file.read()
print("Manual Close Example:")
print(content)
file.close()  # Always close the file when done
```

These examples cover basic file operations in Python 3.13. You can adapt them for more complex use cases as needed!

Certainly! In Python 3.13, you can use file I/O operations while handling exceptions to ensure that your program runs smoothly even if an error occurs during file operations. Here's a step-by-step explanation of how to do this, along with example code.

### Step 1: Using `try` and `except` blocks
When performing file operations (e.g., opening, reading, writing), you should wrap your code in `try` blocks and handle exceptions using `except`. This way, if an error occurs (like file not found, permission denied, etc.), you can catch the exception and handle it gracefully.

### Step 2: Common exceptions to handle
Some common exceptions you might encounter include:
- `FileNotFoundError`: Raised when a file or directory is requested but cannot be found.
- `IOError`: Raised when an I/O operation fails.
- `PermissionError`: Raised when trying to open a file without the correct permissions.

### Step 3: Example Code
Here’s an example that demonstrates how to read from a file, handle exceptions, and use the `with` statement to ensure that files are properly closed:

```python
def read_file(file_path):
    try:
        # Using 'with' to open the file ensures it gets closed properly
        with open(file_path, 'r') as file:
            content = file.read()
            print("File content:")
            print(content)
    except FileNotFoundError:
        print(f"Error: The file '{file_path}' was not found.")
    except PermissionError:
        print(f"Error: You do not have permission to read the file '{file_path}'.")
    except IOError as e:
        print(f"An I/O error occurred: {e}")

def write_file(file_path, data):
    try:
        with open(file_path, 'w') as file:
            file.write(data)
            print(f"Data written to '{file_path}' successfully.")
    except IOError as e:
        print(f"An I/O error occurred: {e}")

# Example usage
write_file('example.txt', 'Hello world!')
read_file('example.txt')
read_file('non_existent_file.txt')  # This will trigger a FileNotFoundError
```

### Explanation
1. **Writing to a File:** The `write_file` function attempts to open a file in write mode and write data to it. If an `IOError` occurs, it is caught and a message is printed.

2. **Reading from a File:** The `read_file` function tries to open a file in read mode. Various exceptions are caught:
   - If the file is not found, a `FileNotFoundError` is raised and handled.
   - If the program lacks permission to read the file, a `PermissionError` is raised.
   - Any other I/O-related errors are caught with a general `IOError`.

3. **Using `with` Statement:** The `with` statement is used to manage file context. It automatically handles closing the file, even if an exception occurs within its block.

### Conclusion
Using file I/O with exception handling in Python 3.13 allows your program to be more robust and user-friendly by anticipating and managing potential errors. Always make sure to handle the most relevant exceptions based on the operations you are performing.

Functions and Methods
Here are examples of defining and calling functions in Python 3.13:

### Example 1: A Simple Function

```python
def greet(name):
    """Function that greets a person with their name."""
    return f"Hello, {name}!"

# Calling the function
message = greet("Alice")
print(message)  # Output: Hello, Alice!
```

### Example 2: Function with Default Arguments

```python
def multiply(x, y=1):
    """Function that multiplies two numbers with a default for y."""
    return x * y

# Calling the function with both arguments
result1 = multiply(5, 3)
print(result1)  # Output: 15

# Calling the function with the default argument
result2 = multiply(5)
print(result2)  # Output: 5
```

### Example 3: Function with Variable Number of Arguments

```python
def add_numbers(*args):
    """Function that adds an arbitrary number of numbers."""
    return sum(args)

# Calling the function with multiple arguments
result = add_numbers(1, 2, 3, 4, 5)
print(result)  # Output: 15
```

### Example 4: Function with Keyword Arguments

```python
def describe_pet(pet_name, animal_type='dog'):
    """Function that describes a pet."""
    return f"I have a {animal_type} named {pet_name}."

# Calling the function with keyword arguments
description = describe_pet(animal_type='cat', pet_name='Whiskers')
print(description)  # Output: I have a cat named Whiskers.
```

### Example 5: Function Returning Multiple Values

```python
def get_coordinates():
    """Function that returns the x and y coordinates."""
    x = 10
    y = 20
    return x, y

# Calling the function and unpacking the returned values
x_coord, y_coord = get_coordinates()
print(f"x: {x_coord}, y: {y_coord}")  # Output: x: 10, y: 20
```

### Example 6: Recursive Function

```python
def factorial(n):
    """Function that computes the factorial of a number using recursion."""
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

# Calling the recursive function
result = factorial(5)
print(result)  # Output: 120
```

These examples illustrate various ways to define and call functions in Python, demonstrating default arguments, variable arguments, keyword arguments, returning multiple values, and recursion.

In Python 3.13, function arguments can be handled in a variety of ways, allowing for flexible function definitions. Here's how you can work with them:

### 1. Positional Arguments
These are the most straightforward kind of arguments. Values are passed to the function in the order they are defined.

```python
def greet(name, age):
    print(f"Hello, my name is {name} and I am {age} years old.")

greet("Alice", 30)  # Outputs: Hello, my name is Alice and I am 30 years old.
```

### 2. Default Arguments
You can set default values for function arguments. If the caller does not provide a value for those arguments, the default is used.

```python
def greet(name, age=25):
    print(f"Hello, my name is {name} and I am {age} years old.")

greet("Bob")       # Outputs: Hello, my name is Bob and I am 25 years old.
greet("Charlie", 35)  # Outputs: Hello, my name is Charlie and I am 35 years old.
```

### 3. Keyword Arguments
You can specify arguments by their names, allowing you to skip some positional arguments or change their order.

```python
greet(age=28, name="David")  # Outputs: Hello, my name is David and I am 28 years old.
```

### 4. Variable-Length Arguments
When you don't know how many arguments might be passed to your function, you can use the `*args` and `**kwargs` syntax.

- **`*args`** allows for variable-length positional arguments.
- **`**kwargs`** allows for variable-length keyword arguments.

```python
def print_args(*args):
    for arg in args:
        print(arg)

print_args(1, 2, 3, "hello")  # Outputs: 1, 2, 3, hello

def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_kwargs(name="Eve", age=35)  # Outputs: name: Eve, age: 35
```

### 5. Combining Argument Types
You can mix and match the different types of arguments in a single function, but the order must be respected: positional arguments first, then default arguments, followed by `*args`, `**kwargs`.

```python
def example_function(pos1, pos2, default1="default", *args, kwarg1=None, **kwargs):
    print(pos1, pos2, default1, args, kwarg1, kwargs)

example_function(1, 2)  # pos1 and pos2 with default1, and no args or kwargs
```

### 6. Type Hinting
You can also use type hints to indicate what type of arguments a function should receive and what type it will return.

```python
def add(x: int, y: int) -> int:
    return x + y

result = add(5, 10)  # result will be 15
```

### Summary
In Python 3.13, working with function arguments is flexible and powerful. You can define functions that accept a variety of input styles, including positional, default, keyword, and even variable-length arguments. This allows for creating robust and reusable functions catering to various needs.

Certainly! In Python, you can define functions with default and optional arguments. Here are some examples demonstrating how to use them in Python 3.13.

### Example 1: Default Argument

In this example, we define a function `greet` with a default argument `name`. If the caller does not provide a name, it will default to "Guest".

```python
def greet(name="Guest"):
    print(f"Hello, {name}!")

# Calling with the default argument
greet()  # Output: Hello, Guest!

# Calling with a specific argument
greet("Alice")  # Output: Hello, Alice!
```

### Example 2: Optional Arguments with Varargs

You can also use optional arguments by accepting a variable number of arguments using `*args`. Here’s an example:

```python
def summarize_numbers(*numbers):
    total = sum(numbers)
    count = len(numbers)
    print(f"Total: {total}, Count: {count}")

# Calling with various number of arguments
summarize_numbers(1, 2, 3)         # Output: Total: 6, Count: 3
summarize_numbers(10, 20, 30, 40)  # Output: Total: 100, Count: 4
summarize_numbers()                 # Output: Total: 0, Count: 0
```

### Example 3: Mixing Default and Optional Arguments

You can combine default arguments with variable arguments:

```python
def order_summary(quantity=1, *items):
    item_list = ', '.join(items)
    print(f"Order Summary: {quantity} item(s) - {item_list}")

# Calling with only default quantity
order_summary("Apples")  # Output: Order Summary: 1 item(s) - Apples

# Calling with specified quantity and items
order_summary(2, "Bananas", "Grapes")  # Output: Order Summary: 2 item(s) - Bananas, Grapes
```

### Example 4: Optional Keyword Arguments

Python also allows you to use keyword arguments with defaults. Here’s an example using keyword arguments:

```python
def create_profile(name, age=18, city="New York"):
    print(f"Name: {name}, Age: {age}, City: {city}")

# Using default values
create_profile("John")  # Output: Name: John, Age: 18, City: New York

# Specifying only the age
create_profile("Jane", age=25)  # Output: Name: Jane, Age: 25, City: New York

# Specifying all parameters
create_profile("Mike", 30, "Los Angeles")  # Output: Name: Mike, Age: 30, City: Los Angeles
```

These examples demonstrate how to use default and optional function arguments effectively in Python 3.13. You can leverage these features to create flexible and user-friendly functions in your code!

Sure! Here are a few examples that illustrate how to use return values in Python 3.13.

### Example 1: Simple Function with Return Value

```python
def add(a, b):
    return a + b

result = add(3, 4)
print(result)  # Output: 7
```

### Example 2: Returning Multiple Values

```python
def calculate_stats(numbers):
    total = sum(numbers)
    average = total / len(numbers)
    return total, average

total, average = calculate_stats([10, 20, 30])
print(f"Total: {total}, Average: {average}")  # Output: Total: 60, Average: 20.0
```

### Example 3: Using Return Value in Conditional Statements

```python
def is_even(number):
    return number % 2 == 0

number = 10
if is_even(number):
    print(f"{number} is even.")  # Output: 10 is even.
else:
    print(f"{number} is odd.")
```

### Example 4: Returning Values from a Recursive Function

```python
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

result = factorial(5)
print(result)  # Output: 120
```

### Example 5: Function with No Return Value

```python
def print_message(message):
    print(message)
    return  # Explicitly returning None

result = print_message("Hello, World!")
print(result)  # Output: None
```

### Example 6: Using Return Value in a Class Method

```python
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

rect = Rectangle(5, 10)
print(rect.area())  # Output: 50
```

These examples illustrate different ways to use return values in Python functions, including single values, multiple values, and values used in conditions or method calls.

Here are several examples of using lambda functions in Python 3.13:

### 1. Basic Lambda Function
A simple lambda function that adds two numbers:

```python
add = lambda x, y: x + y
result = add(5, 3)
print(result)  # Output: 8
```

### 2. Lambda with `map()`
Using a lambda function to square each number in a list:

```python
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # Output: [1, 4, 9, 16, 25]
```

### 3. Lambda with `filter()`
Filtering even numbers from a list using a lambda function:

```python
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # Output: [2, 4, 6]
```

### 4. Lambda with `sorted()`
Sorting a list of tuples based on the second element using a lambda function:

```python
data = [(1, 'one'), (3, 'three'), (2, 'two')]
sorted_data = sorted(data, key=lambda x: x[1])
print(sorted_data)  # Output: [(1, 'one'), (3, 'three'), (2, 'two')]
```

### 5. Lambda with `reduce()`
Using `functools.reduce()` with a lambda function to compute the product of a list of numbers:

```python
from functools import reduce

numbers = [1, 2, 3, 4]
product = reduce(lambda x, y: x * y, numbers)
print(product)  # Output: 24
```

### 6. Lambda for Conditional Logic
Using a lambda function to return the maximum of two numbers:

```python
max_value = lambda x, y: x if x > y else y
result = max_value(7, 10)
print(result)  # Output: 10
```

### 7. Lambda for Event Handling in GUI
Using a lambda function in a GUI application, for example with tkinter to print on button click:

```python
import tkinter as tk

root = tk.Tk()
btn = tk.Button(root, text='Click Me', command=lambda: print('Button Clicked!'))
btn.pack()
root.mainloop()
```

These examples showcase the versatility of lambda functions in Python for various use cases, enhancing code readability and conciseness.

Networking and Web Development
Certainly! In Python, you can use the `http.client` module for low-level HTTP requests or the popular `requests` library for a higher-level interface. Below are examples using both methods.

### Using the `requests` Library

First, make sure to install the requests library if you haven't already:

```bash
pip install requests
```

#### 1. GET Request

```python
import requests

response = requests.get('https://jsonplaceholder.typicode.com/posts')
print(response.status_code)  # HTTP status code
print(response.json())       # JSON response
```

#### 2. POST Request

```python
import requests

data = {
    'title': 'foo',
    'body': 'bar',
    'userId': 1
}

response = requests.post('https://jsonplaceholder.typicode.com/posts', json=data)
print(response.status_code)
print(response.json())
```

#### 3. PUT Request

```python
import requests

data = {
    'id': 1,
    'title': 'foo updated',
    'body': 'bar updated',
    'userId': 1
}

response = requests.put('https://jsonplaceholder.typicode.com/posts/1', json=data)
print(response.status_code)
print(response.json())
```

#### 4. DELETE Request

```python
import requests

response = requests.delete('https://jsonplaceholder.typicode.com/posts/1')
print(response.status_code)  # Check if the deletion was successful
```

### Using the `http.client` Module

The `http.client` module is a bit more complex, but it is part of the standard library.

#### 1. GET Request

```python
import http.client
import json

connection = http.client.HTTPSConnection("jsonplaceholder.typicode.com")
connection.request("GET", "/posts")

response = connection.getresponse()
print(response.status)  # HTTP status code
data = response.read()
print(json.loads(data)) # JSON response

connection.close()
```

#### 2. POST Request

```python
import http.client
import json

connection = http.client.HTTPSConnection("jsonplaceholder.typicode.com")
headers = {'Content-type': 'application/json'}

data = {
    'title': 'foo',
    'body': 'bar',
    'userId': 1
}

connection.request("POST", "/posts", json.dumps(data), headers)
response = connection.getresponse()
print(response.status)
data = response.read()
print(json.loads(data))

connection.close()
```

#### 3. PUT Request

```python
import http.client
import json

connection = http.client.HTTPSConnection("jsonplaceholder.typicode.com")
headers = {'Content-type': 'application/json'}

data = {
    'id': 1,
    'title': 'foo updated',
    'body': 'bar updated',
    'userId': 1
}

connection.request("PUT", "/posts/1", json.dumps(data), headers)
response = connection.getresponse()
print(response.status)
data = response.read()
print(json.loads(data))

connection.close()
```

#### 4. DELETE Request

```python
import http.client

connection = http.client.HTTPSConnection("jsonplaceholder.typicode.com")
connection.request("DELETE", "/posts/1")

response = connection.getresponse()
print(response.status)  # Check if the deletion was successful

connection.close()
```

These examples cover basic HTTP requests with both the `requests` library and the `http.client` module. The `requests` library is generally easier to work with and is recommended for most use cases.

To work with websockets in Python 3.13, you typically use the `websockets` library, which provides an easy way to create both websocket clients and servers. Below is a step-by-step guide on how to set up a simple websocket server and client.

### 1. Installation

First, you'll need to install the `websockets` library. You can do this using pip:

```bash
pip install websockets
```

### 2. WebSocket Server

Here’s how to create a simple websocket server:

```python
import asyncio
import websockets

async def echo(websocket, path):
    async for message in websocket:
        print(f"Received message: {message}")
        await websocket.send(f"Echo: {message}")

async def main():
    async with websockets.serve(echo, "localhost", 8765):
        print("WebSocket server started on ws://localhost:8765")
        await asyncio.Future()  # Run forever

if __name__ == "__main__":
    asyncio.run(main())
```

### 3. WebSocket Client

Now, let's create a client that connects to the above server:

```python
import asyncio
import websockets

async def hello():
    uri = "ws://localhost:8765"
    async with websockets.connect(uri) as websocket:
        await websocket.send("Hello, Server!")
        response = await websocket.recv()
        print(f"Received from server: {response}")

if __name__ == "__main__":
    asyncio.run(hello())
```

### 4. Running the Examples

1. **Start the Server**: Run the server code in one terminal window. It will listen for incoming connections on `ws://localhost:8765`.
2. **Run the Client**: In another terminal window, run the client code. It will send a message to the server and print the response.

### 5. Explanation of Key Parts

- **async/await**: Python’s syntax for asynchronous programming, allowing for non-blocking calls.
- **websockets.serve**: This function creates a websocket server that listens for incoming connections.
- **websockets.connect**: This is used to create a websocket client connection to a specified URI.
- **async for**: This allows you to asynchronously wait for messages from the websocket.

### 6. Error Handling

When working with websockets, it's essential to implement error handling for network issues and connection timeouts. You can use try-except blocks in your asynchronous functions to manage exceptions properly.

### 7. Closing Connections

To ensure graceful termination of websocket connections, you can use:

```python
await websocket.close()
```

### 8. Conclusion

That's a basic introduction to working with websockets in Python 3.13! You can extend this by adding more functionality, handling different types of messages, or even building a more complex application that utilizes websockets for real-time updates.

Here's a collection of code examples for using FTP, SFTP, and SSH in Python 3.13. Each example utilizes a different library, so make sure to install the required packages using `pip` if you haven't done so.

### 1. FTP using `ftplib`

```python
from ftplib import FTP

def ftp_example():
    ftp = FTP('ftp.example.com')  # Replace with your FTP server
    ftp.login(user='username', passwd='password')  # Replace with your credentials
    
    # List files in the root directory
    ftp.retrlines('LIST')
    
    # Download a file
    with open('downloaded_file.txt', 'wb') as f:
        ftp.retrbinary('RETR file.txt', f.write)  # Replace 'file.txt' with the file you want to download
    
    # Upload a file
    with open('local_file.txt', 'rb') as f:
        ftp.storbinary('STOR uploaded_file.txt', f)  # Replace with the desired remote filename

    ftp.quit()

ftp_example()
```

### 2. SFTP using `paramiko`

```python
import paramiko

def sftp_example():
    transport = paramiko.Transport(('sftp.example.com', 22))  # Replace with your SFTP server
    transport.connect(username='username', password='password')  # Replace with your credentials
    
    sftp = paramiko.SFTPClient.from_transport(transport)
    
    # List files in the remote root directory
    print(sftp.listdir('/'))  # Replace with your path if needed
    
    # Download a file
    sftp.get('remote_file.txt', 'downloaded_file.txt')  # Replace with your remote file and desired local filename
    
    # Upload a file
    sftp.put('local_file.txt', 'uploaded_file.txt')  # Replace with your local file and desired remote filename

    sftp.close()
    transport.close()

sftp_example()
```

### 3. SSH using `paramiko`

```python
import paramiko

def ssh_example():
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    
    client.connect('ssh.example.com', username='username', password='password')  # Replace with your SSH server and credentials
    
    # Execute a command
    stdin, stdout, stderr = client.exec_command('ls -l')  # Replace with the desired command
    print(stdout.read().decode())  # Output the command result
    
    # Close the connection
    client.close()

ssh_example()
```

### Installation of Required Libraries

To use the examples, you need to install `paramiko` for SFTP and SSH functionality:

```bash
pip install paramiko
```

The `ftplib` library is part of the Python standard library, so it doesn't require installation.

### Notes:
- Ensure you replace the hostnames, usernames, passwords, and file names with actual values based on your setup.
- Use secure methods to manage credentials, like environment variables or secure vaults, to avoid hardcoding sensitive information.

Certainly! Below are examples of how you can use XML and JSON data with web services in Python 3.13. For these examples, we will use the `requests` library to make HTTP requests. 

### Example 1: Using JSON Data with Web Services

Here’s how to make a simple POST request with JSON data.

```python
import requests
import json

# Example URL (this should be replaced with a real API endpoint)
url = "https://api.example.com/data"

# JSON data to be sent in the request
data = {
    "name": "John Doe",
    "age": 30,
    "city": "New York"
}

# Making a POST request
response = requests.post(url, json=data)

# Check if the request was successful
if response.status_code == 200:
    print("Response JSON:", response.json())
else:
    print("Error:", response.status_code, response.text)
```

### Example 2: Using XML Data with Web Services

Here’s how to make a POST request with XML data.

```python
import requests

# Example URL (this should be replaced with a real API endpoint)
url = "https://api.example.com/data"

# XML data to be sent in the request
xml_data = '''<?xml version="1.0"?>
<data>
    <name>John Doe</name>
    <age>30</age>
    <city>New York</city>
</data>'''

# Making a POST request
headers = {'Content-Type': 'application/xml'}
response = requests.post(url, data=xml_data, headers=headers)

# Check if the request was successful
if response.status_code == 200:
    print("Response XML:", response.text)
else:
    print("Error:", response.status_code, response.text)
```

### Example 3: Consuming a JSON API

Here’s how to make a GET request to consume a JSON API.

```python
import requests

# Example URL (this should be replaced with a real API endpoint)
url = "https://api.example.com/data"

# Making a GET request
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    print("Response JSON:", response.json())
else:
    print("Error:", response.status_code, response.text)
```

### Example 4: Consuming an XML API

Here’s how to make a GET request to consume an XML API.

```python
import requests

# Example URL (this should be replaced with a real API endpoint)
url = "https://api.example.com/data"

# Making a GET request
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    print("Response XML:", response.text)
else:
    print("Error:", response.status_code, response.text)
```

### Setup Notes

To run these examples, you will need to install the `requests` library if you haven't already. You can do this using pip:

```bash
pip install requests
```

### Summary

In these examples, you can see how to work with both JSON and XML data when interacting with web services in Python. You need to modify the URLs and data structures according to the specific API you are working with.

Sure! Here are simple examples of using Flask and Django in Python 3.13.

### Flask Example

```python
# Importing necessary libraries
from flask import Flask, jsonify

# Creating a Flask application
app = Flask(__name__)

# Defining a simple route
@app.route('/')
def home():
    return "Welcome to the Flask App!"

# Defining an API endpoint
@app.route('/api/data')
def get_data():
    data = {
        'message': 'Hello, World!',
        'status': 'success'
    }
    return jsonify(data)

# Running the application
if __name__ == '__main__':
    app.run(debug=True)
```

### Django Example

First, make sure to create a new Django project. Run the following commands in your terminal:

```bash
django-admin startproject myproject
cd myproject
python manage.py startapp myapp
```

After setting up the project, modify the `myapp/views.py` file:

```python
# myapp/views.py

from django.http import JsonResponse
from django.shortcuts import render

# Define a simple view
def home(request):
    return render(request, 'home.html')

# Define an API endpoint
def get_data(request):
    data = {
        'message': 'Hello, World!',
        'status': 'success'
    }
    return JsonResponse(data)
```

Next, set up the URLs for your app. Edit `myproject/urls.py`:

```python
# myproject/urls.py

from django.contrib import admin
from django.urls import path
from myapp.views import home, get_data

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    path('api/data/', get_data, name='get_data'),
]
```

Finally, create a simple HTML file in `myapp/templates/home.html`:

```html
<!-- myapp/templates/home.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1>Welcome to the Django App!</h1>
</body>
</html>
```

Run the Django server with:

```bash
python manage.py runserver
```

### Summary

In both examples, we've set up a basic web application using Flask and Django. Flask provides a straightforward way to handle routes and JSON responses, while Django offers a more structured approach with views and templates.

Object-Oriented Programming (OOP)
In Python 3.13, you can define and use classes to create objects that encapsulate data and behavior. Here's a brief guide on how to define and use classes, including attributes, methods, and object instantiation.

### Defining a Class

To define a class in Python, use the `class` keyword followed by the class name (following the CamelCase convention) and a colon. Inside the class, you can define attributes (variables) and methods (functions).

```python
class MyClass:
    # Constructor / Initializer method
    def __init__(self, attribute1, attribute2):
        self.attribute1 = attribute1  # Instance variable
        self.attribute2 = attribute2  # Instance variable

    # A method
    def my_method(self):
        return f'Attribute 1: {self.attribute1}, Attribute 2: {self.attribute2}'
```

### Creating an Instance of a Class

To create an instance (or object) of a class, call the class as if it were a function, passing the required arguments to the `__init__` method.

```python
# Create an instance of MyClass
my_object = MyClass('Value 1', 'Value 2')

# Access attributes
print(my_object.attribute1)  # Output: Value 1
print(my_object.attribute2)  # Output: Value 2

# Call a method
print(my_object.my_method())  # Output: Attribute 1: Value 1, Attribute 2: Value 2
```

### Adding Class Attributes and Methods

You can also define class attributes (shared among all instances) and class methods.

```python
class MyClass:
    class_attribute = 'Class Value'  # Class attribute

    def __init__(self, attribute1):
        self.attribute1 = attribute1

    @classmethod
    def class_method(cls):
        return cls.class_attribute  # Accessing class attribute

# Using the class attribute and class method
print(MyClass.class_attribute)  # Output: Class Value
print(MyClass.class_method())    # Output: Class Value
```

### Inheritance

You can create subclasses that inherit from a base class, allowing for code reuse and extension of functionality.

```python
class BaseClass:
    def greet(self):
        return "Hello!"

class SubClass(BaseClass):
    def greet(self):
        return "Hello from SubClass!"

# Create an instance of the subclass
sub_object = SubClass()
print(sub_object.greet())  # Output: Hello from SubClass!
```

### Summary

- Define a class using the `class` keyword.
- Use `__init__` for initialization and to define instance attributes.
- Use methods to define behaviors.
- Create instances of the class by calling it with the necessary arguments.
- Utilize class attributes and methods for shared data and behaviors.
- Inherit from other classes to create new functionality.

This allows you to structure your code in an organized manner, making it more modular and reusable.

Certainly! Below are examples demonstrating how to create classes and instantiate objects in Python 3.13.

### Example 1: Basic Class Definition and Instantiation

```python
class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def bark(self):
        return f"{self.name} says Woof!"

# Creating an instance of the Dog class
my_dog = Dog("Buddy", 3)

# Accessing attributes and methods
print(my_dog.name)  # Output: Buddy
print(my_dog.age)   # Output: 3
print(my_dog.bark())  # Output: Buddy says Woof!
```

### Example 2: Class with Class Variables

```python
class Cat:
    species = "Felis catus"  # Class variable
    
    def __init__(self, name, age):
        self.name = name
        self.age = age

# Creating instances of the Cat class
cat1 = Cat("Whiskers", 2)
cat2 = Cat("Meow", 5)

# Accessing class variable and instance variables
print(cat1.species)  # Output: Felis catus
print(cat2.name)     # Output: Meow
```

### Example 3: Class Inheritance

```python
class Animal:
    def speak(self):
        return "Animal sound"

class Cat(Animal):
    def speak(self):
        return "Meow"

class Dog(Animal):
    def speak(self):
        return "Woof"

# Instantiating objects of the subclasses
my_cat = Cat()
my_dog = Dog()

# Calling the speak method
print(my_cat.speak())  # Output: Meow
print(my_dog.speak())  # Output: Woof
```

### Example 4: Using Data Classes (Python 3.7+)

Python 3.13 supports data classes, making it easier to create classes that are primarily used to store data.

```python
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int

# Instantiating a data class
person1 = Person("Alice", 30)

# Accessing attributes
print(person1.name)  # Output: Alice
print(person1.age)   # Output: 30
```

### Example 5: Static Methods and Class Methods

```python
class MathOperations:
    @staticmethod
    def add(a, b):
        return a + b

    @classmethod
    def multiply(cls, a, b):
        return a * b

# Calling static and class methods
result_add = MathOperations.add(5, 3)
result_multiply = MathOperations.multiply(4, 2)

print(result_add)       # Output: 8
print(result_multiply)  # Output: 8
```

These examples illustrate the fundamentals of class creation and object instantiation in Python 3.13. You can create classes with instance variables, methods, inheritance, data classes, and utilize static and class methods effectively.

Sure! Here are some examples that demonstrate inheritance in Python 3.13:

### Example 1: Simple Inheritance

```python
class Animal:
    def speak(self):
        return "Animal speaks"

class Dog(Animal):
    def bark(self):
        return "Woof!"

# Usage
dog = Dog()
print(dog.speak())  # Output: Animal speaks
print(dog.bark())   # Output: Woof!
```

### Example 2: Method Overriding

```python
class Vehicle:
    def start(self):
        return "Vehicle starting"

class Car(Vehicle):
    def start(self):
        return "Car starting with key"

# Usage
car = Car()
print(car.start())  # Output: Car starting with key
```

### Example 3: Multiple Inheritance

```python
class Flyer:
    def fly(self):
        return "Flying high!"

class Swimmer:
    def swim(self):
        return "Swimming fast!"

class Duck(Flyer, Swimmer):
    def quack(self):
        return "Quack!"

# Usage
duck = Duck()
print(duck.fly())   # Output: Flying high!
print(duck.swim())  # Output: Swimming fast!
print(duck.quack()) # Output: Quack!
```

### Example 4: Inheritance with the `super()` function

```python
class Employee:
    def __init__(self, name):
        self.name = name

    def details(self):
        return f"Employee Name: {self.name}"

class Manager(Employee):
    def __init__(self, name, department):
        super().__init__(name)
        self.department = department

    def details(self):
        return f"Manager Name: {self.name}, Department: {self.department}"

# Usage
manager = Manager("Alice", "Sales")
print(manager.details())  # Output: Manager Name: Alice, Department: Sales
```

### Example 5: Abstract Base Classes with Inheritance

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def speak(self):
        pass

class Cat(Animal):
    def speak(self):
        return "Meow!"

class Dog(Animal):
    def speak(self):
        return "Woof!"

# Usage
cat = Cat()
dog = Dog()
print(cat.speak())  # Output: Meow!
print(dog.speak())  # Output: Woof!
```

These examples cover several aspects of inheritance, including simple inheritance, method overriding, multiple inheritance, using `super()`, and abstract base classes. You can modify these examples further as needed!

Polymorphism in Python allows objects of different classes to be treated as objects of a common super class. It is a core concept in Object-Oriented Programming that helps in implementing interfaces and ensures that different classes can have methods that are implemented in various ways.

Here's how to use polymorphism in Python 3.13:

### 1. Method Overriding

You can define a method in a subclass that has the same name as a method in the parent class. This is called method overriding and it allows the subclass to provide a specific implementation of the method.

```python
class Animal:
    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

class Dog(Animal):
    def speak(self):
        return "Woof!"

class Cat(Animal):
    def speak(self):
        return "Meow!"

# Demonstrating polymorphism
def animal_sound(animal):
    print(animal.speak())

dog = Dog()
cat = Cat()

animal_sound(dog)  # Output: Woof!
animal_sound(cat)  # Output: Meow!
```

### 2. Duck Typing

Python uses duck typing, which means that the type or class of an object is less important than the methods it defines. If an object behaves like a certain type (i.e., it has the methods that are expected), it can be used as that type.

```python
class Bird:
    def fly(self):
        return "Flies high!"

class Airplane:
    def fly(self):
        return "Soars through the sky!"

def let_it_fly(entity):
    print(entity.fly())

sparrow = Bird()
boeing = Airplane()

let_it_fly(sparrow)  # Output: Flies high!
let_it_fly(boeing)   # Output: Soars through the sky!
```

### 3. Using Polymorphism with Lists

Polymorphism shines when used in collections like lists. You can store different object types in a list but call the same methods on them.

```python
animals = [Dog(), Cat()]

for animal in animals:
    print(animal.speak())
# Output:
# Woof!
# Meow!
```

### Conclusion

Polymorphism promotes flexibility and reusability in your code. By adhering to an interface or abstract class, you can easily swap classes in your code without altering the overall functionality. This makes your programs easier to manage, understand, and extend.

In Python, interfaces can be defined using Abstract Base Classes (ABCs) from the `abc` module. Below is an example of how to define and use interfaces in Python 3.13.

### Step 1: Define an Interface

You can define an interface by creating an abstract base class with the `ABC` metaclass and using the `@abstractmethod` decorator for its methods.

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass
```

### Step 2: Implement the Interface

Next, you can create classes that implement this interface by providing concrete implementations of the abstract methods.

```python
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    import math

    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return self.math.pi * (self.radius ** 2)

    def perimeter(self):
        return 2 * self.math.pi * self.radius
```

### Step 3: Use the Implementations

Now you can create instances of your concrete classes and use them as per the interface.

```python
def print_shape_info(shape: Shape):
    print(f"Area: {shape.area()}")
    print(f"Perimeter: {shape.perimeter()}")

rectangle = Rectangle(10, 5)
circle = Circle(7)

print("Rectangle:")
print_shape_info(rectangle)

print("\nCircle:")
print_shape_info(circle)
```

### Full Code Example

Here’s the complete code together:

```python
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

    @abstractmethod
    def perimeter(self):
        pass

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return 2 * (self.width + self.height)

class Circle(Shape):
    import math

    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return self.math.pi * (self.radius ** 2)

    def perimeter(self):
        return 2 * self.math.pi * self.radius

def print_shape_info(shape: Shape):
    print(f"Area: {shape.area()}")
    print(f"Perimeter: {shape.perimeter()}")

rectangle = Rectangle(10, 5)
circle = Circle(7)

print("Rectangle:")
print_shape_info(rectangle)

print("\nCircle:")
print_shape_info(circle)
```

This code demonstrates how to define an interface in Python using abstract base classes and how to implement and utilize that interface through subclasses.

Regular Expressions (Regex)
Here are some examples of using regex patterns in Python 3.13. We'll use the `re` module, which provides support for regular expressions.

### Example 1: Basic Matching
```python
import re

# Match a simple pattern
pattern = r'\d+'  # Matches one or more digits
text = "There are 123 apples and 456 oranges."

matches = re.findall(pattern, text)
print(matches)  # Output: ['123', '456']
```

### Example 2: Email Validation
```python
import re

# A basic pattern for validating an email
email_pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
email = "example@test.com"

if re.match(email_pattern, email):
    print("Valid email")
else:
    print("Invalid email")
```

### Example 3: Extracting Dates
```python
import re

# Pattern to extract dates in the format YYYY-MM-DD
date_pattern = r'(\d{4})-(\d{2})-(\d{2})'
text = "The events are on 2023-10-15 and 2024-01-22."

dates = re.findall(date_pattern, text)
print(dates)  # Output: [('2023', '10', '15'), ('2024', '01', '22')]
```

### Example 4: Replacing Text
```python
import re

# Replace multiple whitespace with a single space
text = "This   is   a   sentence   with   extra   spaces."
cleaned_text = re.sub(r'\s+', ' ', text)
print(cleaned_text)  # Output: "This is a sentence with extra spaces."
```

### Example 5: Splitting a String
```python
import re

# Split a string by commas or spaces
text = "apple, orange; banana,grape; pineapple"
fruits = re.split(r'[ ,;]+', text)
print(fruits)  # Output: ['apple', 'orange', 'banana', 'grape', 'pineapple']
```

### Example 6: Using Groups
```python
import re

# Pattern with groups to capture parts of the string
phone_pattern = r'(\d{3})-(\d{3})-(\d{4})'
phone_number = "Call me at 123-456-7890."

match = re.search(phone_pattern, phone_number)
if match:
    area_code = match.group(1)
    local_number = match.group(2) + '-' + match.group(3)
    print(f"Area Code: {area_code}, Local Number: {local_number}")
```

### Example 7: Case Insensitive Matching
```python
import re

text = "Hello World!"

# Case insensitive match for the word 'hello'
pattern = r'hello'
match = re.search(pattern, text, re.IGNORECASE)
if match:
    print("Match found!")
else:
    print("No match found.")
```

### Example 8: Finding Overlapping Matches
```python
import re

# Find overlapping matches using lookahead
text = "ababcbabc"
pattern = r'(?=(ab))'

matches = re.findall(pattern, text)
print(matches)  # Output: ['ab', 'ab', 'ab']
```

These examples cover a variety of common use cases for regular expressions in Python 3.13. Adjust the patterns as necessary to fit your specific applications.

In Python, capturing groups can be used within regular expressions to extract specific portions of a matched string. This is done using the `re` module, which provides support for working with regular expressions.

Here’s a step-by-step guide on how to work with capturing groups in Python 3.13:

### Step 1: Import the `re` Module
Before you begin, you'll need to import the `re` module:

```python
import re
```

### Step 2: Define a Regular Expression with Capturing Groups
Capturing groups are created by placing parentheses around the part of the regular expression you want to capture. For example:

```python
pattern = r'(\d{3})-(\d{2})-(\d{4})'
```
In this example, the pattern captures a Social Security Number in the format `XXX-XX-XXXX`, where `XXX`, `XX`, and `XXXX` represent digits.

### Step 3: Use the `re.search()` or `re.match()` Function
You can use the `re.search()` or `re.match()` method to find the pattern in a string. The `re.search()` function searches through the entire string, while `re.match()` checks only the beginning.

```python
text = "My SSN is 123-45-6789."
match = re.search(pattern, text)
```

### Step 4: Accessing the Captured Groups
If a match is found, you can access the captured groups using the `group()` method. The first captured group is accessed with `group(1)`, the second with `group(2)`, and so on. `group(0)` returns the entire match.

```python
if match:
    full_match = match.group(0)
    area_number = match.group(1)
    group_number = match.group(2)
    serial_number = match.group(3)
    
    print(f"Full match: {full_match}")
    print(f"Area Number: {area_number}")
    print(f"Group Number: {group_number}")
    print(f"Serial Number: {serial_number}")
```

### Step 5: Using Named Capturing Groups (Optional)
Python also supports named capturing groups, which can make the code more readable. You can create named capturing groups using the syntax `(?P<name>...)`.

```python
pattern = r'(?P<area>\d{3})-(?P<group>\d{2})-(?P<serial>\d{4})'
match = re.search(pattern, text)

if match:
    area_number = match.group('area')
    group_number = match.group('group')
    serial_number = match.group('serial')
    
    print(f"Area Number: {area_number}")
    print(f"Group Number: {group_number}")
    print(f"Serial Number: {serial_number}")
```

### Summary
To work with capturing groups in Python 3.13:
1. Import the `re` module.
2. Define a regex pattern with parentheses for capturing groups.
3. Use `re.search()` or `re.match()` to search for the pattern in a string.
4. Access the captured values using `match.group(n)` or named groups with `match.group('name')`.

By following these steps, you can effectively use capturing groups in your regex operations in Python.

Here are some examples of using regular expressions (regex) for substitutions in Python 3.13:

### Example 1: Basic Substitution

In this example, we will replace all occurrences of the word "cat" with "dog" in a string.

```python
import re

text = "The cat sat on the mat. The cat is very cute."
result = re.sub(r'cat', 'dog', text)

print(result)
# Output: The dog sat on the mat. The dog is very cute.
```

### Example 2: Substitution with a Function

You can use a function to customize the substitution. Here, we will capitalize the first letter of the word "dog".

```python
import re

def capitalize(match):
    return match.group(0).capitalize()

text = "The dog sat on the mat. Another dog is very playful."
result = re.sub(r'dog', capitalize, text)

print(result)
# Output: The Dog sat on the mat. Another Dog is very playful.
```

### Example 3: Using Backreferences

In this example, we will swap the order of words using backreferences in regex.

```python
import re

text = "First name: John, Last name: Doe."
result = re.sub(r'(\w+)\s+(\w+)', r'\2 \1', text)

print(result)
# Output: First name: Doe, Last name: John.
```

### Example 4: Substituting with Count Limit

You can limit the number of substitutions using the `count` parameter.

```python
import re

text = "The cat sat on the mat. The cat is very cute."
result = re.sub(r'cat', 'dog', text, count=1)

print(result)
# Output: The dog sat on the mat. The cat is very cute.
```

### Example 5: Removing Whitespace

In this example, we will use regex to remove extra whitespace from a string.

```python
import re

text = "This   is  a   test   string.  "
result = re.sub(r'\s+', ' ', text).strip()

print(result)
# Output: This is a test string.
```

### Example 6: Replacing with Lowercase

Here we will replace a substring with its lowercase version.

```python
import re

text = "Hello World! Welcome to Python Programming."
result = re.sub(r'World', lambda m: m.group(0).lower(), text)

print(result)
# Output: Hello world! Welcome to Python Programming.
```

These examples cover basic to advanced usages of regex substitutions in Python 3.13. Adjust the patterns and replacements as needed for your specific use case!

Certainly! Below are some examples of using regular expressions (regex) for validation in Python 3.13.

### Example 1: Validate an Email Address

```python
import re

def is_valid_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

# Test the function
emails = ['test@example.com', 'invalid-email', 'user@domain..com', 'correct@domain.co.uk']
for email in emails:
    print(f"{email}: {is_valid_email(email)}")
```

### Example 2: Validate a Phone Number

```python
import re

def is_valid_phone(phone):
    pattern = r'^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{3}[-.\s]?\d{4}$'
    return re.match(pattern, phone) is not None

# Test the function
phones = ['+1-800-555-0199', '800 555 0199', '(800) 555-0199', '123456']
for phone in phones:
    print(f"{phone}: {is_valid_phone(phone)}")
```

### Example 3: Validate a URL

```python
import re

def is_valid_url(url):
    pattern = r'^(http|https)://[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$'
    return re.match(pattern, url) is not None

# Test the function
urls = ['https://example.com', 'http://example.com/path', 'ftp://example.com', 'http://.com']
for url in urls:
    print(f"{url}: {is_valid_url(url)}")
```

### Example 4: Validate a Strong Password

```python
import re

def is_strong_password(password):
    # At least 8 characters long, includes upper and lower case letters, numbers, and special characters
    pattern = r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
    return re.match(pattern, password) is not None

# Test the function
passwords = ['Password1!', 'weakpass', 'StrongPass1$', 'NoSpecialChar1']
for password in passwords:
    print(f"{password}: {is_strong_password(password)}")
```

### Example 5: Validate a Date (YYYY-MM-DD format)

```python
import re

def is_valid_date(date_str):
    pattern = r'^\d{4}-\d{2}-\d{2}$'
    return re.match(pattern, date_str) is not None

# Test the function
dates = ['2023-09-15', '2023-9-15', '2023-09-31', '2023-13-01']
for date in dates:
    print(f"{date}: {is_valid_date(date)}")
```

These examples show how to use regular expressions in Python 3.13 to validate different types of data like email addresses, phone numbers, URLs, passwords, and date formats.

In Python, you can use the `re` module to work with regular expressions, and regex callbacks are a powerful feature that allows you to process matched patterns dynamically. You can pass a callback function to `re.sub()` or `re.finditer()`, which will be called with match objects whenever a match is found. Below are examples demonstrating how to use regex callbacks in Python 3.13.

### Example 1: Using `re.sub()` with a Callback Function

In this example, we use a callback function to modify matched strings in a text:

```python
import re

def replace_callback(match):
    # Capitalize the matched word
    return match.group(0).upper()

text = "hello world, welcome to python programming."
# Replace all occurrences of "python" with its uppercase version
result = re.sub(r'\bpython\b', replace_callback, text)

print(result)  # Output: hello world, welcome to PYTHON programming.
```

### Example 2: Using `re.finditer()` with a Callback Function

In this example, we use `re.finditer()` to process matches and apply a callback function to each match:

```python
import re

def print_match_info(match):
    # Print the matched text and its position
    print(f"Found '{match.group()}' at position {match.start()}-{match.end()}")

text = "The quick brown fox jumped over the lazy dog."
# Find all words that start with 't'
matches = re.finditer(r'\bt\w*', text, re.IGNORECASE)

for match in matches:
    print_match_info(match)
```

### Example 3: Using `re.sub()` for Formatting Strings

In this example, we format phone numbers using a regex callback:

```python
import re

def format_phone(match):
    # Extract components and format them
    area_code, prefix, number = match.groups()
    return f"({area_code}) {prefix}-{number}"

text = "Contact us at 123-456-7890 or 987-654-3210."
# Match phone numbers in the format XXX-XXX-XXXX
result = re.sub(r'(\d{3})-(\d{3})-(\d{4})', format_phone, text)

print(result)  # Output: Contact us at (123) 456-7890 or (987) 654-3210.
```

### Example 4: Using `re.sub()` to Increment Numbers

In this example, we use a callback function to increment numbers found in a string:

```python
import re

def increment_callback(match):
    # Increment the matched number by 1
    number = int(match.group(0))
    return str(number + 1)

text = "I have 2 apples and 3 oranges."
result = re.sub(r'\d+', increment_callback, text)

print(result)  # Output: I have 3 apples and 4 oranges.
```

These examples illustrate how to use regex callbacks in Python 3.13 to dynamically modify or process matched patterns within strings.

Security
To demonstrate encryption and decryption in Python 3.13, we can use the `cryptography` library, which provides a simple and secure way to handle encryption. Below are examples of both symmetric (using Fernet) and asymmetric (using RSA) encryption.

### Example 1: Symmetric Encryption with Fernet

In this example, we'll use the `Fernet` symmetric encryption method provided by the `cryptography` library.

1. **Install the Library** (if you haven't already):

   ```bash
   pip install cryptography
   ```

2. **Code Example**:

```python
from cryptography.fernet import Fernet

# Generate a key
key = Fernet.generate_key()
cipher_suite = Fernet(key)

# Encrypt a message
message = b"Hello, World!"
cipher_text = cipher_suite.encrypt(message)
print(f"Encrypted: {cipher_text}")

# Decrypt the message
decrypted_text = cipher_suite.decrypt(cipher_text)
print(f"Decrypted: {decrypted_text.decode()}")
```

### Example 2: Asymmetric Encryption with RSA

In this example, we'll demonstrate RSA encryption and decryption using the `cryptography` library.

1. **Install the Library** (if you haven't already):

   ```bash
   pip install cryptography
   ```

2. **Code Example**:

```python
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import rsa, padding
from cryptography.hazmat.primitives import serialization, hashes

# Generate RSA keys
private_key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=2048,
    backend=default_backend()
)

public_key = private_key.public_key()

# Message to encrypt
message = b"Hello, RSA!"

# Encrypt the message
cipher_text = public_key.encrypt(
    message,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)
print(f"Encrypted: {cipher_text}")

# Decrypt the message
decrypted_text = private_key.decrypt(
    cipher_text,
    padding.OAEP(
        mgf=padding.MGF1(algorithm=hashes.SHA256()),
        algorithm=hashes.SHA256(),
        label=None
    )
)
print(f"Decrypted: {decrypted_text.decode()}")
```

### Summary

In the two examples above, we demonstrated:

- **Symmetric Encryption**: Using Fernet, where the same key is used for both encryption and decryption.
- **Asymmetric Encryption**: Using RSA, where a public key is used for encryption and a private key is used for decryption.

Make sure to securely manage your keys, especially the private keys in asymmetric encryption, to maintain the confidentiality of your data.

Working with digital signatures and certificates in Python typically involves libraries such as `cryptography` or `PyCryptodome`. Here's a basic guide on how to create, sign, and verify digital signatures and how to work with certificates.

### Step 1: Install Required Libraries

You will need to install the `cryptography` library. You can do this using pip:

```bash
pip install cryptography
```

### Step 2: Create a Key Pair

First, you need to create a private and public key pair. The private key is used for signing, and the public key is used for verification.

```python
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives.asymmetric import rsa

# Generate a private key
private_key = rsa.generate_private_key(
    public_exponent=65537,
    key_size=2048,
    backend=default_backend()
)

# Get the public key
public_key = private_key.public_key()
```

### Step 3: Sign a Message

You can sign a message using the private key. Here’s how you can do this:

```python
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.asymmetric import padding

# The message to be signed
message = b"Message to be signed"

# Sign the message
signature = private_key.sign(
    message,
    padding.PSS(
        max_length=256,
        mgf=padding.MGF1(hashes.SHA256()),
        salt_length=padding.PSS.MAX_LENGTH
    ),
    hashes.SHA256()
)
```

### Step 4: Verify the Signature

To verify the signature, use the public key and the original message:

```python
try:
    public_key.verify(
        signature,
        message,
        padding.PSS(
            max_length=256,
            mgf=padding.MGF1(hashes.SHA256()),
            salt_length=padding.PSS.MAX_LENGTH
        ),
        hashes.SHA256()
    )
    print("Signature is valid.")
except Exception as e:
    print("Signature is invalid:", e)
```

### Step 5: Load and Use Certificates

You can also work with X.509 certificates. An example of creating a self-signed certificate is shown below:

```python
from cryptography.x509 import Name, NameAttribute, CertificateBuilder
from cryptography.hazmat.primitives import serialization
from datetime import datetime, timedelta

# Generate a self-signed certificate
subject = issuer = Name([
    NameAttribute(ObjectIdentifier('commonName'), u'Example'),
])

certificate = (
    CertificateBuilder()
    .subject_name(subject)
    .issuer_name(issuer)
    .public_key(public_key)
    .serial_number(x509.random_serial_number())
    .not_valid_before(datetime.utcnow())
    .not_valid_after(datetime.utcnow() + timedelta(days=30))
    .add_extension(
        x509.SubjectAlternativeName([x509.DNSName(u'example.com')]),
        critical=False,
    )
    .sign(private_key, hashes.SHA256(), default_backend())
)

# Serialize the certificate
certificate_pem = certificate.public_bytes(encoding=serialization.Encoding.PEM)

# Save the certificate to a file
with open("certificate.pem", "wb") as cert_file:
    cert_file.write(certificate_pem)
```

### Conclusion

This guide covers the basics of creating and verifying digital signatures, as well as generating and using self-signed certificates in Python using the `cryptography` library. You can build on these concepts to implement more complex functionalities, such as certificate authorities, certificate validation, and handling revocation lists.

Certainly! Secure password storage involves hashing passwords and then storing those hashes instead of the plaintext passwords. A commonly used library for secure password hashing in Python is `bcrypt`.

Here's an example of how to use `bcrypt` for secure password storage in Python 3.13:

### Step 1: Install `bcrypt`

You need to install the `bcrypt` library if you haven't already. You can do this using pip:

```bash
pip install bcrypt
```

### Step 2: Hashing a Password

Here’s how to create a hashed password:

```python
import bcrypt

def hash_password(plain_password: str) -> str:
    # Generate a salt
    salt = bcrypt.gensalt()
    # Hash the password
    hashed_password = bcrypt.hashpw(plain_password.encode('utf-8'), salt)
    return hashed_password

# Example usage
if __name__ == "__main__":
    password = "my_secure_password"
    hashed = hash_password(password)
    print(f"Hashed Password: {hashed.decode('utf-8')}")
```

### Step 3: Verifying a Password

When a user tries to log in, you can verify the password against the stored hash:

```python
def verify_password(plain_password: str, hashed_password: str) -> bool:
    # Check if the hashed password matches the entered password
    return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))

# Example usage
if __name__ == "__main__":
    stored_hashed_password = hashed.decode('utf-8')  # from previous example
    password_to_check = "my_secure_password"
    
    if verify_password(password_to_check, stored_hashed_password):
        print("Password is valid!")
    else:
        print("Invalid password!")
```

### Summary
- Use `bcrypt` to hash passwords securely.
- Always store hashed passwords, not plaintext.
- When verifying, use `bcrypt.checkpw` to safely compare the password.

This approach ensures that users' passwords are stored securely, even if your database is compromised. Each password is hashed with a unique salt, which makes it significantly more challenging for attackers to use precomputed hash tables (rainbow tables) to crack the passwords.

To use SSL and TLS in Python 3.13, you can utilize the `ssl` module, which provides access to TLS/SSL connections. Below are examples that demonstrate how to create a secure server and client using `ssl`.

### Example 1: Secure HTTPS Server

This example demonstrates how to create a simple HTTPS server.

```python
import http.server
import ssl

class SecureHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(b"Hello, SSL/TLS World!")

# Create HTTP server
httpd = http.server.HTTPServer(('localhost', 4443), SecureHTTPRequestHandler)

# Wrap the HTTP server socket with SSL
httpd.socket = ssl.wrap_socket(httpd.socket,
                               certfile='path/to/certfile.pem',
                               keyfile='path/to/keyfile.pem',
                               server_side=True)

print("Serving on https://localhost:4443")
httpd.serve_forever()
```

### Example 2: Secure HTTPS Client

This example shows how to create an HTTPS client that connects to the server.

```python
import ssl
import http.client

# Create an SSL context
context = ssl.create_default_context()

# Create an HTTPS connection
conn = http.client.HTTPSConnection("localhost", 4443, context=context)

# Make a GET request
conn.request("GET", "/")
response = conn.getresponse()

# Read and print the response
print(f"Status: {response.status}")
print(f"Response: {response.read().decode()}")
```

### Important Notes:
- **Certificates**: In the server example, you need to provide paths to your SSL certificate and private key files (e.g., `certfile.pem` and `keyfile.pem`). You can generate a self-signed certificate for testing purposes using OpenSSL.
- **Ports**: The HTTPS server is set to listen on port 4443, which is commonly used for HTTPS in testing scenarios.
- **Error Handling**: In a production scenario, you should implement proper error handling for both the server and client.

Ensure you have `http.server` and `ssl` modules available in your Python environment to run these examples.

Access Control Lists (ACLs) are a way to manage permissions and access rights in various applications. In Python, you can implement ACLs using dictionaries or classes to define and manage permissions for different users.

Here are some examples of how to implement basic ACLs in Python 3.13:

### Example 1: Simple ACL using a Dictionary

In this example, we create a simple ACL using a dictionary to manage access rights.

```python
class ACL:
    def __init__(self):
        # Dictionary to hold permissions
        self.permissions = {}

    def grant(self, user, permission):
        if user not in self.permissions:
            self.permissions[user] = set()
        self.permissions[user].add(permission)

    def revoke(self, user, permission):
        if user in self.permissions:
            self.permissions[user].discard(permission)

    def check_permission(self, user, permission):
        return permission in self.permissions.get(user, set())

# Example usage
acl = ACL()
acl.grant('alice', 'read')
acl.grant('bob', 'write')

print(acl.check_permission('alice', 'read'))  # True
print(acl.check_permission('bob', 'read'))    # False
acl.revoke('alice', 'read')
print(acl.check_permission('alice', 'read'))  # False
```

### Example 2: ACL with Role-Based Access Control (RBAC)

In this example, we enhance the ACL to support role-based access control.

```python
class Role:
    def __init__(self, name):
        self.name = name
        self.permissions = set()

    def grant_permission(self, permission):
        self.permissions.add(permission)

    def revoke_permission(self, permission):
        self.permissions.discard(permission)

class ACL:
    def __init__(self):
        self.roles = {}
        self.user_roles = {}

    def create_role(self, role_name):
        self.roles[role_name] = Role(role_name)

    def assign_role(self, user, role_name):
        if role_name in self.roles:
            if user not in self.user_roles:
                self.user_roles[user] = set()
            self.user_roles[user].add(role_name)

    def check_permission(self, user, permission):
        roles = self.user_roles.get(user, set())
        for role_name in roles:
            role = self.roles[role_name]
            if permission in role.permissions:
                return True
        return False

# Example usage
acl = ACL()
acl.create_role('editor')
acl.create_role('viewer')

acl.roles['editor'].grant_permission('write')
acl.roles['viewer'].grant_permission('read')

acl.assign_role('alice', 'editor')
acl.assign_role('bob', 'viewer')

print(acl.check_permission('alice', 'write'))  # True
print(acl.check_permission('bob', 'write'))    # False
print(acl.check_permission('bob', 'read'))     # True
```

### Example 3: ACL with User and Permission Management

This example showcases how to manage users and their permissions directly.

```python
class User:
    def __init__(self, username):
        self.username = username
        self.permissions = set()

    def grant_permission(self, permission):
        self.permissions.add(permission)

    def revoke_permission(self, permission):
        self.permissions.discard(permission)

class ACL:
    def __init__(self):
        self.users = {}

    def add_user(self, username):
        if username not in self.users:
            self.users[username] = User(username)

    def grant_permission(self, username, permission):
        if username in self.users:
            self.users[username].grant_permission(permission)

    def revoke_permission(self, username, permission):
        if username in self.users:
            self.users[username].revoke_permission(permission)

    def check_permission(self, username, permission):
        if username in self.users:
            return permission in self.users[username].permissions
        return False

# Example usage
acl = ACL()
acl.add_user('alice')
acl.add_user('bob')

acl.grant_permission('alice', 'read')
acl.grant_permission('bob', 'write')

print(acl.check_permission('alice', 'read'))  # True
print(acl.check_permission('bob', 'read'))    # False
acl.revoke_permission('alice', 'read')
print(acl.check_permission('alice', 'read'))  # False
```

These examples illustrate how to create and manage ACLs in Python 3.13 using different approaches. You can further customize them to fit your specific application requirements.

Testing and Debugging
Certainly! Below are examples of using the `unittest` framework and `pytest`, which are two of the most common unit testing frameworks in Python.

### Example Using `unittest`

Here's a simple example that demonstrates how to use the `unittest` framework.

```python
# sample_module.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b
```

```python
# test_sample_module.py
import unittest
from sample_module import add, subtract

class TestSampleModule(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(1, 2), 3)
        self.assertEqual(add(-1, 1), 0)
        self.assertEqual(add(-1, -1), -2)

    def test_subtract(self):
        self.assertEqual(subtract(10, 5), 5)
        self.assertEqual(subtract(-1, -1), 0)
        self.assertEqual(subtract(0, 0), 0)

if __name__ == '__main__':
    unittest.main()
```

### Example Using `pytest`

Here’s a similar example using the `pytest` framework, which is simpler and often preferred for its easy-to-use syntax.

```python
# sample_module.py
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b
```

```python
# test_sample_module.py
import pytest
from sample_module import add, subtract

def test_add():
    assert add(1, 2) == 3
    assert add(-1, 1) == 0
    assert add(-1, -1) == -2

def test_subtract():
    assert subtract(10, 5) == 5
    assert subtract(-1, -1) == 0
    assert subtract(0, 0) == 0
```

### Running the Tests

To run the tests for `unittest`, you can execute the following command in the terminal:

```bash
python -m unittest test_sample_module.py
```

For `pytest`, simply run:

```bash
pytest test_sample_module.py
```

### Summary

These examples show how to create unit tests for a simple Python module using both `unittest` and `pytest`. The `unittest` framework is built into Python’s standard library, while `pytest` is a third-party library that can be installed via pip. Both frameworks allow you to assert conditions and check for expected outcomes in your code.

In Python 3.13, you can effectively work with test cases using the built-in `unittest` framework as well as other popular testing libraries like `pytest`. Below are the steps on how to create and run test cases using both `unittest` and `pytest`.

### Using `unittest`

1. **Import the `unittest` module**:
   You need to import the `unittest` module to create your test cases.

2. **Create a Test Class**:
   Your test cases should be defined in a class that inherits from `unittest.TestCase`.

3. **Define Test Methods**:
   Each test method within the class should start with the word `test`, which allows the test runner to recognize it as a test case.

4. **Use Assertions**:
   Inside your test methods, you can use various assertion methods provided by `unittest` to check for expected outcomes.

5. **Run the Tests**:
   You can run the tests using the command line or by including the test runner code in your script.

### Example of `unittest`

Here’s a simple example demonstrating how to work with `unittest`:

```python
import unittest

def add(a, b):
    return a + b

class TestAddFunction(unittest.TestCase):

    def test_add_positive_numbers(self):
        self.assertEqual(add(1, 2), 3)

    def test_add_negative_numbers(self):
        self.assertEqual(add(-1, -1), -2)

    def test_add_zero(self):
        self.assertEqual(add(0, 0), 0)

if __name__ == '__main__':
    unittest.main()
```

### Running the tests

1. Save the above code in a file named `test_add.py`.
2. Run the test using the terminal:

```bash
python test_add.py
```

### Using `pytest`

`pytest` is another popular framework that is simple to use and can handle more complex testing needs.

1. **Install `pytest`** (if not already installed):

```bash
pip install pytest
```

2. **Define Test Functions**:
   You can write test functions in a standard Python file, naming the file starting with `test_`.

3. **Use Assertions**:
   Similar to `unittest`, you can use assert statements to validate outcomes.

### Example of `pytest`

Here’s an equivalent example using `pytest`:

```python
def add(a, b):
    return a + b

def test_add_positive_numbers():
    assert add(1, 2) == 3

def test_add_negative_numbers():
    assert add(-1, -1) == -2

def test_add_zero():
    assert add(0, 0) == 0
```

### Running the tests

1. Save the above code in a file named `test_add.py`.
2. Run the tests using the terminal:

```bash
pytest test_add.py
```

### Conclusion

Both `unittest` and `pytest` are powerful tools for managing test cases in Python. The choice between them often comes down to personal preference and the specific needs of your project. `unittest` is a standard library with a more traditional approach, while `pytest` is more flexible and easier for writing complex tests.

Certainly! In Python, you can use the `unittest.mock` library to create mock objects for testing purposes. Below are some examples demonstrating how to use mock objects in Python 3.13.

### Example 1: Basic Mock Object

```python
from unittest.mock import Mock

# Create a mock object
mock_obj = Mock()

# Define return value for a method
mock_obj.method.return_value = 'mocked value'

# Call the method
result = mock_obj.method()

# Check the result
print(result)  # Output: mocked value

# Check if the method was called
mock_obj.method.assert_called_once()
```

### Example 2: Mocking Dependencies in a Class

```python
from unittest.mock import Mock

class Database:
    def get_data(self):
        # Imagine this connects to a database and fetches data
        pass

class DataService:
    def __init__(self, database: Database):
        self.database = database
    
    def fetch_data(self):
        return self.database.get_data()

# Create a mock for Database
mock_database = Mock()
mock_database.get_data.return_value = {'key': 'value'}

# Use the mock in DataService
data_service = DataService(mock_database)
result = data_service.fetch_data()

# Check the result
print(result)  # Output: {'key': 'value'}
```

### Example 3: Side Effects

```python
from unittest.mock import Mock

def add(x, y):
    return x + y

# Create a mock object
mock_add = Mock(side_effect=add)

# Call the mock
result = mock_add(2, 3)

# Check the result
print(result)  # Output: 5

# Check if the add function was called with the correct arguments
mock_add.assert_called_once_with(2, 3)
```

### Example 4: Patching with Mock

You can also use `patch` to replace an object in a module with a mock during tests.

```python
from unittest.mock import patch

# Assume we have a module `my_module` with a function `get_data`
def get_data():
    return 'real data'

# Test function
def test_get_data():
    with patch('__main__.get_data', return_value='mocked data'):
        result = get_data()
        print(result)  # Output: mocked data

test_get_data()
```

### Example 5: Creating a Mock for a Class

```python
from unittest.mock import MagicMock

class MyClass:
    def method_a(self):
        return 'real method a'

    def method_b(self):
        return 'real method b'

# Create a mock of MyClass
mock_instance = MagicMock(spec=MyClass)

# Set return values
mock_instance.method_a.return_value = 'mocked method a'

# Call the methods
print(mock_instance.method_a())  # Output: mocked method a
print(mock_instance.method_b())  # Output: <MagicMock name='mock.method_b()' id='...'> (this is still mocked)
```

These examples cover basic usage concepts of mock objects using Python's `unittest.mock` library. You can use them as is or modify them as needed for your testing scenarios!

Certainly! Debugging is an essential part of software development, and Python 3.13 offers several tools and libraries to help with it. Below are some examples using the built-in `pdb` module and logging.

### Example 1: Using `pdb` (Python Debugger)

You can use `pdb` to step through your code, set breakpoints, and inspect variables.

1. **Add Breakpoints**: You can add a breakpoint in your code where you want to start debugging.

```python
def faulty_function(x):
    import pdb; pdb.set_trace()  # Set a breakpoint
    result = x * 10
    return result

faulty_function(5)
```

When you run this code, it will pause execution at `pdb.set_trace()`, allowing you to enter debugging commands like:

- `n` (next): Go to the next line.
- `c` (continue): Continue until the next breakpoint.
- `p variable`: Print the value of `variable`.
- `q`: Quit the debugger.

### Example 2: Using the `logging` Module

The `logging` module is great for tracking events that happen during execution, especially for errors and debugging.

```python
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

def calculate_division(a, b):
    logging.debug(f"Calculating division of {a} by {b}")
    try:
        result = a / b
        logging.info(f"Result is {result}")
    except ZeroDivisionError:
        logging.error("Attempted to divide by zero!")
        return None
    return result

print(calculate_division(10, 0))
print(calculate_division(10, 2))
```

### Example 3: Using the `trace` Module

You can track program execution line by line using the `trace` module.

```python
import trace

def example_function(x):
    return x * 2

def main():
    for i in range(3):
        print(example_function(i))

# Create a Trace object to trace and report
tracer = trace.Trace(count=False, trace=True)
tracer.run('main()')
```

### Example 4: Using `ipdb` (IPython Debugger)

You can also use `ipdb`, an IPython-based debugger that offers a better interface.

1. Install `ipdb` if you haven't already:

```bash
pip install ipdb
```

2. Example usage:

```python
def example_function(x):
    import ipdb; ipdb.set_trace()  # Set a breakpoint
    return x + 5

example_function(10)
```

### Summary

- `pdb`: Built-in debugger for stepping through code.
- `logging`: For tracking events and debugging information.
- `trace`: To trace program execution.
- `ipdb`: A nicer debugger with IPython support.

These tools provide powerful mechanisms to understand and fix issues in your Python applications.

Certainly! Below are examples of how to use the built-in `logging` framework in Python 3.13. This framework is powerful and allows logging messages of different severity levels (DEBUG, INFO, WARNING, ERROR, CRITICAL).

### Basic Logging Example

```python
import logging

# Configure logging
logging.basicConfig(level=logging.DEBUG)

# Log messages of various severity levels
logging.debug('This is a debug message')
logging.info('This is an info message')
logging.warning('This is a warning message')
logging.error('This is an error message')
logging.critical('This is a critical message')
```

### Logging to a File

```python
import logging

# Configure logging to write to a file
logging.basicConfig(filename='app.log', level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Log messages
logging.info('This is an info message that will be logged to a file')
logging.error('This is an error message that will be logged to a file')
```

### Using a Logger Object

```python
import logging

# Create a logger object
logger = logging.getLogger('my_logger')
logger.setLevel(logging.DEBUG)

# Create a console handler
console_handler = logging.StreamHandler()
console_handler.setLevel(logging.WARNING)

# Create a file handler
file_handler = logging.FileHandler('my_logger.log')
file_handler.setLevel(logging.DEBUG)

# Create formatter and set it for handlers
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
console_handler.setFormatter(formatter)
file_handler.setFormatter(formatter)

# Add handlers to the logger
logger.addHandler(console_handler)
logger.addHandler(file_handler)

# Log messages
logger.debug('This debug message will not be shown in the console')
logger.info('This info message will not be shown in the console')
logger.warning('This is a warning message')
logger.error('This is an error message')
logger.critical('This is a critical message')
```

### Logging Exceptions

```python
import logging

logging.basicConfig(level=logging.ERROR)

try:
    result = 10 / 0
except ZeroDivisionError:
    logging.exception("An exception occurred")
```

### Custom Logger with Contextual Information

```python
import logging

# Create a logger with contextual information
logger = logging.getLogger('custom_logger')
handler = logging.StreamHandler()
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s [%(filename)s:%(lineno)d]')
handler.setFormatter(formatter)
logger.addHandler(handler)
logger.setLevel(logging.DEBUG)

def some_function():
    logger.info('Entering some_function')
    # Simulating some operation
    logger.debug('Performing an operation...')
    logger.info('Exiting some_function')

some_function()
```

These examples illustrate various ways to use Python's logging framework effectively. You can tailor the logging according to your needs, whether that's logging to console, files, or capturing exceptions with detailed stack traces.

