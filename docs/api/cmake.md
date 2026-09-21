# CMake

## Targets

### `WebGUI::WebGUI`

The library target. Link it to your executable:

```cmake
target_link_libraries(MyApp PRIVATE WebGUI::WebGUI)
```

## Functions

### `webgui_copy_runtime(target)`

Places `WebView2Loader.dll` beside the executable for `target`.

```cmake
webgui_copy_runtime(MyApp)
```

## Minimal file

```cmake
cmake_minimum_required(VERSION 3.24)
project(MyApp LANGUAGES CXX)

add_subdirectory(WebGUI)

add_executable(MyApp src/main.cpp)
target_link_libraries(MyApp PRIVATE WebGUI::WebGUI)
webgui_copy_runtime(MyApp)
```
