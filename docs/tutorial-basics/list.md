---
sidebar_position: 6
---

# List

Lists holds zero, one or more elements/values in order. A list is an enumerable data type

A list is specified within square brackets

```
> [1, 2, 3]
[1, 2, 3]
```

### List Functions

> at(list, index)

Takes in a list and the target index and returns the element present in the target. It will raise an error if the index is invalid

```
> List.at([1, 2, 3], 0)
1
```

> append(list, new_element)

Takes in a list and the new element to be inserted at the end and returns a new updated list.

```
> List.append([1, 2, 3], 4)
[1, 2, 3, 4]
```

> delete_at(list, index)

Takes in a list and the index to be deleted and returns the updated list

```
> List.delete_at([1, 2, 3], 0)
[2, 3]
```

> insert_at(list, index, value)

Takes in a list, the index and the value to be inserted and returns the updated list where the value is updated in the list

```
> List.insert_at([1, 2, 3], 0, 4)
[4, 1, 2, 3]
```

> pop(list)

Takes in the list as an argument and returns the list after removing the last element

```
> List.pop([1, 2, 3])
[1, 2]
```
