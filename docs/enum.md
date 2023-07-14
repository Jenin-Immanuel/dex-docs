---
sidebar_position: 3
---

# Enum

The Enum module consists of functions to work with collections
List and Maps are examples of enumerables.

## Enum functions

> map(enumerable, fn)

Returns a list where each element is the result of invoking `fun` on each corresponding element of `enumerable`.

```
> Enum.map([4, 5, 3], fn x -> x * 2 end)
[8, 10, 6]
```

> reverse(enumerable)

Takes in a list and returns the list of reverse order

```
> Enum.reverse([2,4,5])
[5, 4, 2]
```

> sort(enumerable)

Sorts the `enumerable` by the given function.

```
> Enum.sort([6,2,7,1])
[1, 2, 6, 7]
```

> sum(enumerable)

Takes in a `list` of numbers and returns its total sum

```
> Enum.sum([1, 2, 3, 4])
10
```
