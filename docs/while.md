---
sidebar_position: 5
---

# While

The while statement is a control flow statement in Dark Elixir that allows you to repeatedly execute a block of code as long as a specified condition remains true.

## Syntax

The general syntax for the while statement in Dark Elixir is as follows:

```
while <condition> do
  // Code block to be executed while the condition is true
end
```

- `while`: The `while` keyword marks the start of the while statement.
- `<condition>`: This represents the expression or condition that is evaluated before each iteration. If the condition is true, the code block is executed. If the condition is false, the loop is exited, and program execution continues after the while statement.
- `do`: The `do` keyword denotes the start of the code block to be executed while the condition is true.
- `end`: The `end` keyword marks the end of the while statement.

### Example

Here's an example of how the while statement can be used in Dark Elixir:

```
counter = 0
while counter < 5 do
  // Code block executed while the condition is true
  print("Counter: " + counter)
  counter = counter + 1
end
```

## Break Statement

The `break` statement allows you to exit a loop prematurely, regardless of whether the loop condition is still true. It is often used when a specific condition is met and you want to immediately exit the loop. Here's an example:

```
counter = 0
while true do
  // Code block executed indefinitely
  if counter == 3 do
    break
  end
  counter = counter + 1
end
```

In this example, the break statement is used to exit the loop when the counter variable reaches the value of 3.

## Continue Statement

The `continue` statement allows you to skip the rest of the current iteration and move to the next iteration of the loop. It is often used when you want to bypass certain code within the loop based on a specific condition. Here's an example:

```
counter = 0
while counter < 5 do
  // Code block executed while the condition is true
  counter = counter + 1
  if (counter == 3) do
    continue
  end
  print("Counter: " + counter)
end
```

## Usage Recommendations

- Ensure that the `condition` within the while statement evaluates to a boolean value (true or false).
- Use the `break` statement when you need to prematurely exit a loop based on a specific condition.
- Use the `continue` statement when you want to skip the rest of the current iteration and move to the next iteration.
