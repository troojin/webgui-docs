# Getting Started

WebGUI is a small C++ library for native Windows applications with HTML, CSS, and JavaScript user interfaces. It owns the Win32 and WebView2 setup, so your application only needs to create a window, load a page, and run it.

## What is WebGUI?

Traditional native UI toolkits require you to learn a widget system, a layout system, and a styling system. If you already know HTML, CSS, and JavaScript, WebGUI lets you reuse that knowledge for the interface of a native C++ application.

Under the hood WebGUI uses Microsoft's [WebView2](https://developer.microsoft.com/microsoft-edge/webview2/) control. You do not need to configure WebView2 yourself; WebGUI takes care of that.

## Two ways to use it

### 1. A standalone window

Use `WebGUI::Window` when you want WebGUI to create and manage the native window for you. This is the fastest way to build an application whose entire interface is a web page.

```cpp
WebGUI::Window window("My App", 800, 600);
window.load("web/index.html");
window.show();
window.run();
```

### 2. Embedded in an existing window

Use `WebGUI::Context` when your application already owns an HWND. This is useful for debug menus, inspectors, consoles, and developer overlays. WebGUI supplies the WebView2 integration while HTML, CSS, and JavaScript remain the UI layer.

```cpp
WebGUI::Context gui;
gui.attach(host_hwnd);
gui.load("web/debug-menu.html");
```

See [Embedding in Win32](./embedding.md) for details.

## How it fits together

1. Your **C++ application** creates a `Window` (or attaches a `Context`).
2. WebGUI **loads your HTML file** and maps its folder so relative assets resolve.
3. Your **page** runs in WebView2 like a normal web page.
4. C++ and JavaScript **exchange string messages** whenever they need to talk.

## Next steps

- [Download and install WebGUI](./installation.md) into your project
- Follow the [Quick Start](./quick-start.md)
- Learn how [messaging](./messaging.md) works
