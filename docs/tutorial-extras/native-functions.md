---
sidebar_position: 1
---

# Native Functions

## Introduction

Functions contain a block of code that perform a specific task

There are two types of functions in Dark Elixir

- Native Functions
- Lambda Function
- User Defined Functions

## Native Functions

There are some functions that are built into Dark Elixir natively

> input(prompt)

Asks the user for input

```
> x = input("What's your name: ")
What's your name:
Steve
> x
"Steve"
```

> print(value)

Prints the value on the screen

```
> print("Hello, World")
Hello, World
```

> date()

Prints the current date on the screen

```
> date()
Fri Jul 14 00:41:20 IST 2023
```

> is_boolean(value)

Returns `true` if the value is a boolean and `false` if it is not a boolean

```
> is_boolean(false)
true
```

> is_atom(value)

Returns `true` if the value is an atom and `false` if it is not an atom

```
> is_atom(:hello)
true
```

> is_number(value)

Returns `true` if the value is a number and `false` if it is not a number

```
> is_number(70)
true
```

> is_list(value)

Returns `true` if the value is a list and `false` if it is not a list

```
> is_list([1, 2, 3])
true
```

> is_tuple(value)

Returns `true` if the value is tuple and `false` if it is not a tuple

```
> is_tuple({1, 2, 3})
true
```

> len(value)

Takes a string, map, tuple or list and returns its size

```
> len("Hello, World")
12
```
