# get-ae-labels

Example function to retrieve After Effects label colors and names from preferences. See [index.js](index.js).

> All credit for this goes to [Justin Taylor](https://github.com/justintaylor-dev) from [HyperBrew](https://github.com/hyperbrew) who posted the original code in [this thread on the Adobe support forum](https://community.adobe.com/t5/after-effects-discussions/reading-the-label-colors-from-preferences-file/m-p/12135463)

## Usage

Calling `getLabels()` returns an array of label objects, which are the following:

```js
{ 
  // The hex color value (without the "#")
  value: string
  // The name of the label color
  name: string,
};
```

e.g. for the default labels it returns:

```js
[
  { value: "B53838", name: "Red" },
  { value: "E4D84C", name: "Yellow" },
  { value: "A9CBC7", name: "Aqua" },
  { value: "E5BCC9", name: "Pink" },
  { value: "A9A9CA", name: "Lavender" },
  { value: "E7C19E", name: "Peach" },
  { value: "B3C7B3", name: "Sea Foam" },
  { value: "677DE0", name: "Blue" },
  { value: "4AA44C", name: "Green" },
  { value: "8E2C9A", name: "Purple" },
  { value: "E8920D", name: "Orange" },
  { value: "7F452A", name: "Brown" },
  { value: "F46DD6", name: "Fuchsia" },
  { value: "3DA2A5", name: "Cyan" },
  { value: "A89677", name: "Sandstone" },
  { value: "1E401E", name: "Dark Green" },
];
```
