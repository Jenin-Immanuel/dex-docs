---
sidebar_position: 6
---

# Map

Maps are the go to data structure for key - value pairs

Maps in dark elixir can be created with `%{}` syntax. And the key value pairs are denoted by `=>`

```
x = %{ a => "Hello", 9 => :hello }
print(x)
```

Here the Identifiers in the keys are assumed as atoms

### Map Functions

Takes in a list and the target index and returns the element present in the target. It will raise an error if the index is invalid

> delete(map, key)

Takes in a map and the key to delete from the map and returns the map after deleting the particular key in the map

```
> Map.delete(%{ a => "hello", b => "world"}, b)
%{ :a => "hello" }
```

> fetch(map, key)

Takes in a map and the key to get from the map and returns the particular value. It returns null if the value is not present

```
> Map.fetch(%{ a => "hello", b => "world"}, b)
world
```

> replace(map, key, value)

Takes in a map, the key to modify and the value to update the value and returns the updated map. It raises an error if the key is not present

```
> Map.replace(%{ a => "hello", b => "world"}, b, "value")
%{ :a => "hello", :b => "value" }
```

> to_list(map)

Takes in a map and convert it into a list of pairs of key value pairs in the format `{key, value}`

```
> Map.to_list(%{ a => "hello", b => "world"})
[{:a, "hello"}, {:b, "world"}]
```
