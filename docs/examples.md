---
sidebar_position: 7
---

# Example Programs

## Nth Fibonacci term

```
def fibo(n) do
    if (n == 1) do
        return 0
    end
    if (n == 2) do
        return 1
    end
    return fibo(n - 1) + fibo(n - 2)
end

print(fibo(5))
```
