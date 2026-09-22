# Context

`WebGUI::Context` attaches WebView2 to an HWND your application already owns. See the [Embedding guide](../guide/embedding.md) for a full explanation.

## `attach(hwnd, transparent)`

Attaches WebView2 to an existing HWND. WebGUI does not destroy that HWND.

```cpp
WebGUI::Context gui;
gui.attach(host_hwnd);         // transparent background (default)
gui.attach(host_hwnd, false);  // opaque background
```

| Parameter | Description |
| --- | --- |
| `hwnd` | The host window to attach to. |
| `transparent` | Whether the WebView2 background is transparent. Defaults to `true`. |

## `load(path)`

Loads an HTML file into the embedded view.

```cpp
gui.load("web/debug-menu.html");
```

## `poll_events()` and `run()`

Optional message-loop helpers for an embedded host. Existing applications normally use their own loop.

## Lifetime

WebGUI subclasses the host only to track size changes, and removes that subclass when the context is destroyed or closed.
