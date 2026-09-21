# Loading Pages

Use `load()` to display an HTML file.

```cpp
window.load("web/index.html");
```

## Paths

`load()` accepts:

- an **absolute path**, or
- a path **relative to the process working directory**.

::: tip
If your executable is launched from a different working directory than you expect (for example by double-clicking it or from a debugger), relative paths may not resolve. Use an absolute path if you are unsure.
:::

## Asset mapping

WebGUI maps the page's containing directory. That means relative HTML, CSS, JavaScript, image, and font paths work normally:

```text
web/
├── index.html
├── style.css
├── app.js
└── images/
    └── logo.png
```

```html
<link rel="stylesheet" href="style.css" />
<script src="app.js"></script>
<img src="images/logo.png" />
```

## Files are not modified

WebGUI does not copy or modify your web files. Whatever is on disk is what your page uses, so you can edit your UI without rebuilding C++.

## Checking the result

`load()` returns a boolean. Always check it:

```cpp
if (!window.load("web/index.html")) {
    std::cerr << "Could not load page\n";
    return 1;
}
```

## Using a web framework

Because WebGUI loads plain files, you can use any tool that outputs static HTML, CSS, and JavaScript. Build your front end, then point `load()` at the generated `index.html`.
