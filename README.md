<h1 align="center">
  <img src="markup/img/pencil.png" width=32px>
  <strong>markup</strong>
</h1>

<p align="center">
A Google Chrome extension that replaces new tabs with a text editor. <br> Built with <a href="https://quilljs.com/">Quill.js</a>.
</p>

<figure>
  <img src="example.PNG" alt="Trulli" style="width:100%">
  <figcaption><p align="center"><a href="https://brianhung.info/markup/demo">demo</a></p></figcaption>
</figure>

## Features

- rich text editor

- code-fencing, inline & display math

- Emoji, Markdown, and LaTeX shortcuts

- collapsible sections (click slight-left of a header)

## Installation

0. Clone this repo.

```bash
git clone https://github.com/BrianHung/markup
```

1. Go to `chrome://extensions/` via the address bar.

2. Enable `developer mode` by clicking the toggle switch on the top right.

3. Click `load unpacked` and select the *internal* `markup` folder.

## Usage

- Works offline, but...

- Everything is stored in the browser cache. All notes will be deleted if `cached images and files` is cleared.

## Modules Used

- [quill-emoji](https://github.com/contentco/quill-emoji)
- [quill-image-resize-module](https://github.com/kensnyder/quill-image-resize-module)
- [quill-magic-url](https://github.com/visualjerk/quill-magic-url)
- [quill-markdown-shortcuts](https://github.com/patleeman/quill-markdown-shortcuts)
