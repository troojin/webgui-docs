# Quick Start

This page walks through a complete minimal application.

## 1. The C++ side

```cpp
#include <WebGUI/WebGUI.hpp>
#include <iostream>

int main() {
    WebGUI::Window window("My App", 800, 600);
    if (!window.valid() || !window.load("web/index.html")) {
        return 1;
    }

    window.on_message([&window](const std::string& message) {
        std::cout << message << '\n';
        window.post_message("C++ received your message");
    });

    window.show();
    window.run();
}
```

### Walkthrough

| Line | Purpose |
| --- | --- |
| `WebGUI::Window window(...)` | Creates a native window and a WebView2 instance. |
| `window.valid()` | Confirms initialization succeeded. |
| `window.load(...)` | Loads your HTML file and maps its folder. |
| `window.on_message(...)` | Registers a handler for messages sent from JavaScript. |
| `window.post_message(...)` | Sends a string back to JavaScript. |
| `window.show()` | Makes the window visible. |
| `window.run()` | Runs the event loop until the window closes. |

## 2. The web side

Create `web/index.html`:

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>My App</title>
</head>
<body>
  <h1>Hello from WebGUI</h1>
  <button id="save">Send message</button>
  <p id="log"></p>

  <script>
    document.getElementById('save').addEventListener('click', () => {
      window.chrome.webview.postMessage('save');
    });

    window.chrome.webview.addEventListener('message', event => {
      document.getElementById('log').textContent = 'C++ says: ' + event.data;
    });
  </script>
</body>
</html>
```

## 3. Build and run

```bash
cmake -S . -B build
cmake --build build --config Release
```

Click the button. Your console prints `save`, and the page displays the reply from C++.

## Where to go next

- [Loading Pages](/guide/loading-pages)
- [C++ and JavaScript Messages](/guide/messaging)
- [Embedding in Win32](/guide/embedding)
