# Embedding in Win32

`WebGUI::Context` attaches the same HTML UI to an HWND that your application already owns. This is useful for debug menus, inspectors, consoles, and developer overlays.

## Attaching

`Context` does not create or own the host HWND. Attach it after creating the host window, then keep dispatching the application's normal Win32 message loop.

```cpp
WebGUI::Context gui;
if (!gui.attach(host_hwnd) || !gui.load("web/debug-menu.html")) {
    return 1;
}
```

## How it behaves

- WebGUI **subclasses the host** only to track size changes.
- The subclass is **removed** when the context is destroyed or closed.
- WebGUI **does not destroy** your HWND.
- Mouse and keyboard input are handled by the WebView2 child window in the normal Win32 input route.

## Transparency

`attach(hwnd)` enables a transparent WebView2 background by default so CSS can place panels over the host application.

```cpp
gui.attach(host_hwnd);         // transparent (default)
gui.attach(host_hwnd, false);  // opaque embedded page
```

For a transparent page, make the document background transparent and give each panel its own opaque or translucent CSS background:

```css
html, body {
  background: transparent;
  margin: 0;
}

.panel {
  background: rgba(20, 20, 24, 0.85);
  color: #fff;
  border-radius: 8px;
  padding: 12px;
}
```

## Message loop

`Context::poll_events()` and `Context::run()` are optional message-loop helpers for an embedded host. Existing applications normally use their own loop.

## Example

The [Embedded Debug Menu](/examples/embedded) example demonstrates a small HTML debug menu with several independent controls.
