# Troubleshooting

## `valid()` returns false

Initialization failed. Common causes:

- The WebView2 Runtime is not installed on the machine.
- `WebView2Loader.dll` is not beside the executable. Make sure you call `webgui_copy_runtime(MyApp)` in CMake.

## `load()` returns false

- Check that the file exists.
- Relative paths resolve from the **process working directory**, not the executable's folder. Try an absolute path.

## The page is blank

- Open your HTML in a normal browser to check for errors.
- Confirm your relative asset paths are relative to the HTML file.

## Messages are not arriving

- Register `on_message()` before calling `run()`.
- In JavaScript, use `window.chrome.webview.postMessage(...)` and listen with `window.chrome.webview.addEventListener('message', ...)`.
- Remember messages are strings. Use `JSON.stringify` for objects.

## CMake cannot download the WebView2 SDK

The first configure needs internet access. Once downloaded, later configures do not need it.

## Embedded page has a solid background

`attach(hwnd)` is transparent by default, but your CSS must also be transparent. Set `html, body { background: transparent; }` and style panels individually.
