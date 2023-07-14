---
sidebar_position: 3
---

# Strings

"Hello, World"

Interpolated Strings: Using a variable inside of a string

```
x = "Hello"
print("#{x} World")
```

This will print `Hello World` on the screen

### String Operations

- `+` -> String concatenation

### String Functions

There are some useful functions we can use from the String Module on the strings

> length(string)

Returns the length of the particular string

```
> String.length("Hello")
5
```

> split(string, seperator)

Returns a list of strings after splitting on the particular value

```
> String.split("Hello,World", ",")
["Hello", "World"]
```

> to_number(string)

Convert the string into a number

```
> String.to_number("1")
1
```
