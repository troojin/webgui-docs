# Running Scripts

Besides messaging, C++ can run JavaScript directly in the loaded page with `execute_script()`.

```cpp
window.execute_script("document.body.classList.add('ready')");
```

## When to use it

`execute_script()` is intended for one-off C++-initiated JavaScript, such as toggling a class or calling a single function.

```cpp
window.execute_script("updateStatus('Connected')");
```

## When to use messages instead

For ongoing communication or anything with structure, prefer [messages](./messaging.md). They give your page a clear entry point and keep C++ from depending on the names of DOM elements.

| Use `execute_script()` for | Use messages for |
| --- | --- |
| One-off tweaks | Regular updates |
| Simple calls | Structured data |
| Quick experiments | Long-lived application protocols |
