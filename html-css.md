---
layout: page
---

# HTML/CSS Workshop

## HTML

### Before we begin...

Remember that Google is an excellent tool for looking up *anything*.
A good website for all-things HTML/CSS is the [Mozilla Developer Network](developer.mozilla.org/en-US/docs).

Also the web development world is [one of the biggest communities out there](https://coggle.it/diagram/Vz9LvW8byvN0I38x), which is one of the reasons why it's so great.

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

CSS stands for Cascading Style Sheets, and is the language that tells html elements what to look like, where to show up, and how they display on the screen. CSS can be tedious to "develop" and is more of a trial-and-error process, but it's modularity allows CSS to be used in multiple sites and can be copied from place to place, which makes the process easier.

**We'll add some css to the Codepen to make your website look a little bit nicer.**

### Stylesheets

CSS is written in disparate stylesheets -- you make a .css file and then import it into the website with a `<link>` tag. Luckily, Codepen will do this automatically if you enter CSS in the CSS box, so don't worry about stylesheets for now.

### Selectors

Good CSS follows good HTML, and it's important to understand how html elements and CSS instructions relate.

#### Classes

The most commonly used selector is the class. You specify a class in html as ```<element class="className">```, just as you would any other element.

In the corresponding stylesheet, a class is selected with a ".":

```css
.class {
  /* css goes here */
}
```
**Add a class to one of your `<p>` or `<h>` elements.** You can call it whatever you want:

```html
<h1 class="DUCK">Some fun text!</h1>
```

But, ideally, it should be descriptive:

```html
<h1 class="titleText">Less fun text :(</h1>
```

Then in the CSS box, add the following CSS:

```css
.titleText{
  font-family: sans-serif; /*this sets the font family to your browser's default sans font.*/
  font-style: oblique; /*this adds an italics effect.*/
  font-size: 30px; /*This sets the size of the text.*/
  text-align: center /*This centers the text in the element.*/
}
```

There are literally hundreds of possible attributes that can be added to a text element, and more still that can be added to other types of elements. A lot of CSS involves looking to reference docs for information about these selectors.

For example, we can add:

```css
.titleText{
  color: blue;
}
```

Which will make the text blue! We could also use a hex code like `#11d8ad` to customize outside the normal colors.

#### The Element Selector

Another option for selecting elements in CSS is the global element selector. Instead of having to add attributes to each html element.

This works like this:

```css
h1{
  /* styling goes here */
}
```

The selector doesn't include a period! In the above example, the styling between the brackets would be applied to all `h1` level headers. This can also be applied to other elements, including area tags like `<div>`:

```css
div{
  /* stylng goes here */
}
```

**Try selecting all your `<p>` elements in your codepen,** and then add some styling to them -- change up the font, make them bigger/smaller, add some color, or perhaps some background-color.

That's CSS basics -- not too bad, right? CSS starts to get really complicated when there are a lot of elements on the screen arranged in complex patterns, but the fundamentals will always be the same. Dive deep into CSS documentation if you can, and take a look at some guides to more obscure attributes and techniques.

## User Interaction

Basic interaction in html

### Links

As mentioned above, one of the key tags in html is the `<a>` tag. `<a>` is used with a variety of attributes inside the tag to direct it.

Here's an example:

```html
<a href="othersite.com" target="_blank">I'm a link!</a>
```

In the above example, the `href` attribute signifies where the link should actually go to -- every `<a>` will include a href tag.

`Target` specifies where the media will open -- in this case, "_blank" will open the media in a new window/tab. 

**Add a link to one of your `<p>` elements in your codepen.**

### Link Button

We're going to combine the `<a>` element and some css styling to create a clickable button. We'll also use a `<div>` element for styling.

Start by adding this code to your codepen html: 

```html
<a href="www.google.com"><div class="button">Link Text</div></a>
```

Then, in your CSS, add a `button` class:

```css
.button{
  /* todo */
}
```

Take a minute and try to figure out what css attributes we'll use to make a button. There's lots of ways to do this -- here's my rendition:

```css
.button {
    border: none;
    background-color: #4CAF50; /* Green */
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-face: sans;
    display: inline-block;
    font-size: 16px;
}