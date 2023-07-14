---
sidebar_position: 4
---

# Conditionals

In Dark Elixir, Conditionals are implemented using If statements
The if statement is a fundamental control flow statement in Dark Elixir that allows you to conditionally execute code based on a specified condition.

## Syntax

```
if (<condition>) do
    // body
end
```

`if`: The `if` keyword marks the start of the if statement.
`<condition>`: This represents the expression or condition that is evaluated. If the condition is true, the code block is executed. If the condition is false, the code block is skipped.
`do`: The `do` keyword denotes the start of the code block to be executed if the condition is true.
`end`: The `end` keyword marks the end of the if statement.

### Example

Here's an example of how the if statement can be used in Dark Elixir:

```
if (age >= 18) do
  // Code block executed if the condition is true
  print("You are an adult.")
end
```

## Else if Ladder

In addition to the if statement, Dark Elixir also supports an "else if" ladder construct to handle multiple conditions. The syntax for an "else if" ladder is as follows:

```
if <condition1> do
  // Code block executed if condition1 is true
elif <condition2> do
  // Code block executed if condition1 is false and condition2 is true
else
  // Code block executed if all previous conditions are false
end
```

## Usage Recommendations

- Ensure that the conditions within the `if` statements evaluate to boolean values (`true` or `false`).
- Properly indent the code blocks within the `if` statements for readability.
- Consider using an `else` clause to handle cases when none of the conditions are true.
