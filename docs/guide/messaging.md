# C++ and JavaScript Messages

WebGUI leaves the message format to your application. Messages are strings.

## JavaScript to C++

Send a string with WebView2's built-in bridge:

```js
window.chrome.webview.postMessage('save');
```

Receive it in C++ with `on_message()`:

```cpp
window.on_message([](const std::string& message) {
    std::cout << "JavaScript: " << message << '\n';
});
```

## C++ to JavaScript

Send a string with `post_message()`:

```cpp
window.post_message("C++ received your message");
```

Receive it in JavaScript:

```js
window.chrome.webview.addEventListener('message', event => {
    console.log('C++ says:', event.data);
});
```

## Replying from a handler

The handler can capture the window and reply directly:

```cpp
window.on_message([&window](const std::string& message) {
    window.post_message("Message received by C++.");
});
```

## Structured messages with JSON

Use JSON when you need more than a single string:

```js
window.chrome.webview.postMessage(JSON.stringify({
    type: 'setVolume',
    value: 0.8
}));
```

In C++, parse the string with the JSON library of your choice. See the [JSON Messaging example](../examples/json-messaging.md).

## Design tips

- Give every message a `type` field so the handler can dispatch cleanly.
- Keep messages small; send identifiers rather than large blobs.
- Treat incoming strings as untrusted input and validate them.
