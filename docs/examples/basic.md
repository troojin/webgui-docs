# Basic Window

The smallest complete WebGUI application: create a window, load a page, exchange a message.

## `main.cpp`

```cpp
#include <WebGUI/WebGUI.hpp>

#include <iostream>

int main() {
    WebGUI::Window window("WebGUI", 1024, 768);
    if (!window.valid() || !window.load("web/index.html")) {
        std::cerr << "Failed to create WebGUI window.\n";
        return 1;
    }

    window.on_message([&window](const std::string& message) {
        std::cout << "JavaScript: " << message << '\n';
        window.post_message("Message received by C++.");
    });
    window.show();
    window.run();
}
```

## What it does

1. Creates a 1024×768 window titled "WebGUI".
2. Prints an error and exits if creation or loading fails.
3. Logs every message from JavaScript and replies with a fixed string.
4. Shows the window and runs until it is closed.

## Matching page

```html
<!doctype html>
<html>
<body>
  <button onclick="window.chrome.webview.postMessage('hello')">Say hello</button>
  <pre id="out"></pre>
  <script>
    window.chrome.webview.addEventListener('message', e => {
      document.getElementById('out').textContent = e.data;
    });
  </script>
</body>
</html>
```
