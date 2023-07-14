---
sidebar_position: 5
---

# Tuple

A Tuple is a fixed size container for multiple elements. A tuple is defined within curly braces and the elements are separated by commas.

```
> x = {1, 2, 3}
{1, 2, 3}
```

### Tuple Functions

There are some useful functions we can use from the Tuplele on tuples

> at(tuple, index)

Takes in a tuple and the target index and returns the element present in the target. It will raise an error if the index is invalid

```
> Tuple.at({1, 2, 3}, 1)
2
```

> append(tuple, new_element)

Takes in a tuple and the new element to be inserted at the end and returns a new tuple. This doesn't modify the existing tuple as it is immutable

```
> x = {1, 2, 3}
> Tuple.append(x, 4)
{1, 2, 3, 4}
> print(x)
{1, 2, 3}
```

> delete_at(tuple, index)

Takes in a tuple and the index to be deleted and returns the updated tuple

```
> Tuple.delete_at({1, 2, 3}, 0)
{2, 3}
```

> insert_at(tuple, index, new_element)

Takes in a tuple, index and the new value to be inserted in the tuple and returns the updated tuple

```
> Tuple.insert_at({1, 2, 3}, 1, 4)
{1, 4, 2, 3}
```

> to_list(tuple)

Converts the given tuple into a list structure

```
> Tuple.to_list({1, 2, 3})
[1, 2, 3]

```
