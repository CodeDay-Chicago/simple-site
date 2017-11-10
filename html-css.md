---
layout: page
---

# HTML/CSS Workshop
## HTML
### Before we begin...
Remember that Google is an excellent tool for looking up *anything*.
A good website for all-things HTML/CSS is the [Mozilla Developer Network](developer.mozilla.org/en-US/docs).

---
### Basics
**Tags** represent parts of a webpage. Most are paired
```html
<p></p>
```
some are not.
```html
<image>
```
You can nest tags with other tags or text
```html
<body>
  <header>
    <p>
      just some boring text
    </p>
  </header>
</body>
```
and specify tag **properties**.
```html
<a href="google.com"></a>
```

---
### Page structure
Here is the miniumum HTML needed for a page
```html
<html>
  <head>
    <title></title>
  </head>
  <body>
  </body>
</html>
```
It is split into two sections:
* the `<head>` tag contains page metadata
* the `<body>` tag contains page contents

---
### Essentials

There are only a couple of tags that are actually important. Here they are:

| tag | usage | attributes | closing tag?
|-
| `<p>` | standard text
| `<h1>...<h5>` | headings
| `<a>` | links | *href*: the URI to link to
| `<image>` | image | *src*: source of the image | no
| `<div>` | a generic tag

---

### Try it out!
Head on over to [Codepen](https://codepen.io/pen) and make a simple website with text and at least one image.
---

## CSS
