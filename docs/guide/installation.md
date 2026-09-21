# Installation

## Download

Download the latest release, **WebGUI 1.0.3**:

<a href="http://end.lat/cdn/webgui-libary/releases/1.0.3.rar" target="_blank" rel="noopener">⬇ Download WebGUI 1.0.3 (.rar)</a>

The release is a `.rar` archive, so you will need a tool that can extract it, such as [7-Zip](https://www.7-zip.org/) or WinRAR.

Extract it and place the resulting `WebGUI/` folder in your project. A release is the contents of the `library/` directory directly.

::: tip
Older and newer versions follow the same URL pattern: `http://end.lat/cdn/webgui-libary/releases/<version>.rar`
:::

## Project layout

```text
MyApp/
├── WebGUI/
│   ├── include/
│   ├── src/
│   ├── web/
│   └── CMakeLists.txt
├── src/
├── web/
│   └── index.html
└── CMakeLists.txt
```

## CMake setup

Add WebGUI as a subdirectory and link your executable against `WebGUI::WebGUI`:

```cmake
cmake_minimum_required(VERSION 3.24)
project(MyApp LANGUAGES CXX)

add_subdirectory(WebGUI)

add_executable(MyApp src/main.cpp)
target_link_libraries(MyApp PRIVATE WebGUI::WebGUI)
webgui_copy_runtime(MyApp)
```

### What `webgui_copy_runtime()` does

`webgui_copy_runtime()` places `WebView2Loader.dll` beside the executable. Without it your application will not be able to start WebView2.

## WebView2 SDK

On the first configure, CMake downloads the WebView2 SDK automatically. This requires internet access the first time you configure the project.

## WebView2 Runtime

Your users need the [WebView2 Runtime](https://developer.microsoft.com/microsoft-edge/webview2/). It is included with current Windows 11 and Microsoft Edge installations, so most users will already have it.

## Verify your setup

Create `src/main.cpp` and `web/index.html` as shown in the [Quick Start](/guide/quick-start), then configure and build:

```bash
cmake -S . -B build
cmake --build build --config Release
```

Run the resulting executable from a directory where `web/index.html` is reachable, or use an absolute path in `load()`. See [Loading Pages](/guide/loading-pages).
