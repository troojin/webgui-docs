# Requirements

| Requirement | Details |
| --- | --- |
| Operating system | Windows 10 or 11, x64 |
| Build system | CMake 3.24 or newer |
| Compiler | Visual Studio 2019 or newer with C++17 support |
| Network | Internet access for the first CMake configure |
| End-user runtime | [WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/) |

## Notes

- The WebView2 SDK is downloaded automatically by CMake on first configure.
- The WebView2 Runtime is included with current Windows 11 and Microsoft Edge installations.
- `WebView2Loader.dll` must sit beside your executable. `webgui_copy_runtime()` handles this.
