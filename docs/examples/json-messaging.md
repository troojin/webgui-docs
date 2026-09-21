# JSON Messaging

WebGUI messages are strings, so JSON is a natural way to send structured data.

## JavaScript

```js
function send(type, payload = {}) {
  window.chrome.webview.postMessage(JSON.stringify({ type, ...payload }));
}

send('setVolume', { value: 0.8 });

window.chrome.webview.addEventListener('message', event => {
  const msg = JSON.parse(event.data);
  if (msg.type === 'status') {
    console.log('Status:', msg.text);
  }
});
```

## C++

Parse the incoming string with the JSON library of your choice, then dispatch on `type`:

```cpp
window.on_message([&window](const std::string& raw) {
    // parse `raw` with your JSON library, then:
    // if (type == "setVolume") { ... }

    window.post_message(R"({"type":"status","text":"ok"})");
});
```

## Tips

- Always include a `type` field.
- Validate every field before using it.
- Keep payloads small.

See [C++ and JavaScript Messages](/guide/messaging) for more.
