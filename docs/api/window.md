# Window

`WebGUI::Window` creates a native window and a WebView2 instance.

```cpp
#include <WebGUI/WebGUI.hpp>
```

## Constructor

```cpp
Window(title, width, height)
```

Creates a native window and WebView2 instance.

```cpp
WebGUI::Window window("My App", 800, 600);
```

## Methods

### `valid()`

Reports whether initialization succeeded. Check this before using the window.

### `load(path)`

Loads an HTML file and maps its folder for assets. Accepts an absolute path or a path relative to the process working directory. See [Loading Pages](../guide/loading-pages.md).

### `show()`

Makes the native window visible.

### `poll_events()`

Processes pending window and WebView2 events. Returns `false` after the window closes. Use this when you need your own loop:

```cpp
while (window.poll_events()) {
    // your per-frame work
}
```

### `run()`

Runs the event loop until the window closes.

### `close()`

Closes the window.

### `on_message(handler)`

Sets the JavaScript-to-C++ message handler. The handler receives a `const std::string&`.

```cpp
window.on_message([](const std::string& message) { /* ... */ });
```

### `post_message(message)`

Sends a string to JavaScript.

### `execute_script(script)`

Runs JavaScript in the loaded page.

## Summary

| Method | Purpose |
| --- | --- |
| `Window(title, width, height)` | Creates a native window and WebView2 instance. |
| `valid()` | Reports whether initialization succeeded. |
| `load(path)` | Loads an HTML file and maps its folder for assets. |
| `show()` | Makes the native window visible. |
| `poll_events()` | Processes pending events; returns `false` after close. |
| `run()` | Runs the event loop until the window closes. |
| `close()` | Closes the window. |
| `on_message(handler)` | Sets the JavaScript-to-C++ message handler. |
| `post_message(message)` | Sends a string to JavaScript. |
| `execute_script(script)` | Runs JavaScript in the loaded page. |
