---
sidebar_position: 3
---

# User Defined Functions

Functions are defined using the `def` keyword. In Dark Elixir, functions are defined using the following syntax:

```
def function_name(parameters) do
	// Statements
end
```

- `def`: The `def` keyword is used to declare a function.
- `function_name`: This is the name assigned to the function, which should be unique and descriptive.
- `parameters`: These are the input values passed to the function. Parameters are enclosed in parentheses and separated by commas.
- `do`: The `do` keyword signifies the start of the function body.
- `end`: The `end` keyword denotes the end of the function definition.

## Function Parameters

Function parameters are placeholders for values that are passed into the function when it is called. They allow you to provide input to the function and make it more flexible and reusable.

```
def greet(name) do
	// Statements
end
```

## Function Return Value

Functions in Dark Elixir can return values using the `return` statement. The returned value can be assigned to a variable or used directly in the calling code.

```
def multiply(a, b) do
	return a * b
end
```

## Function Invocation

To execute a function in Dark Elixir, you need to invoke or call it by using its name followed by parentheses enclosing the required arguments.

```
> a = multiply(2, 3)
> print(a)
6
```
