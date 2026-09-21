---
layout: home

hero:
  name: WebGUI
  text: HTML, CSS, and JavaScript UIs for native Windows apps
  tagline: A small C++ library that owns the Win32 and WebView2 setup so you can just create a window, load a page, and run it.
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: API Reference
      link: /api/window

features:
  - title: Tiny surface area
    details: Create a Window, call load(), then run(). WebGUI handles Win32 and WebView2 initialization for you.
  - title: Plain web files
    details: Your HTML, CSS, JavaScript, images, and fonts work with normal relative paths. WebGUI does not copy or modify them.
  - title: Simple messaging
    details: Send strings between C++ and JavaScript with on_message() and post_message(). Use JSON if you need structure.
  - title: Embed anywhere
    details: Attach the same HTML UI to an HWND you already own for debug menus, inspectors, consoles, and overlays.
  - title: CMake friendly
    details: Drop the WebGUI folder into your project, add_subdirectory, and link WebGUI::WebGUI.
  - title: Transparent overlays
    details: Embedded contexts default to a transparent background so CSS panels can float over your host application.
---
