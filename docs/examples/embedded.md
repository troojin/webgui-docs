# Embedded Debug Menu

Attach an HTML debug menu to a window your application already owns.

## C++

```cpp
WebGUI::Context gui;
if (!gui.attach(host_hwnd) || !gui.load("web/debug-menu.html")) {
    return 1;
}

// Keep running your application's normal Win32 message loop.
```

## HTML

```html
<!doctype html>
<html>
<head>
  <style>
    html, body { background: transparent; margin: 0; font-family: sans-serif; }
    .panel {
      position: absolute; top: 12px; right: 12px;
      background: rgba(20, 20, 24, 0.85); color: #fff;
      padding: 12px; border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="panel">
    <h3>Debug</h3>
    <label><input type="checkbox" id="wireframe" /> Wireframe</label>
  </div>
</body>
</html>
```

The document background is transparent and the panel has its own translucent background, so the host application shows through around it.

::: tip
The WebGUI repository includes an `embedded` example with a small HTML debug menu and several independent controls.
:::

See [Embedding in Win32](/guide/embedding) for how attachment works.
