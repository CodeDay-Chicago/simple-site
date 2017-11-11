# React
React is a way to break down a webpage into several smaller **components**.
```html
<div>
  <button>Follow me on MySpace!</button>
  <h1>Top 10 JS innovations of 2017</h1>
  <h2>the definitave guide</h2>
  <p>This is a boring tech article</p>
  <button>Follow me on MySpace!</Button>
</div>

<div>
  <AnnoyingButton />
  <Content />
  <AnnoyingButton />
</div>
```
This allows you to not repeat yourself and thus code better.

### JSX
This is a special type of Javascript that allows you to write "html". There are some differences:
```
<Image />		  // must always close tags
<Canvas />		// even for double tag elements

<MyComponent />     // user defined types must be capitalized

<p style={% raw %}{{color: 'black'}}{% endraw %} />	  // style attribute is a js object
<p className='myclass' />         // the class attribute is className
```

### Defining components
React components are classes with several special methods.

```
import React from 'react'

export class CoolText extends React.Component {
  render () {
    return (
      <p>this is some cool text.</p>
    )
  }
}

export class Main extends React.Component {
  render () {
    return (
      <CoolText>
    )
  }
}
```
You can use the classes as tags to form more components, building up the **component heirarchy**.
`render` is just one of `React.Component`'s special methods:

![
| name | function
|-
| `componentWillMount` | called right before the component is first mounted
| `render` | should return the html to represent the component
| `componentDidMount` | called after the component is first mounted
| `componentWillReceiveProps` | called when the component recieves new props
| `shouldComponentUpdate` | should return true or false depending on whether the component should update
| `componentWillUpdate` | called before the component updates
| `componentDidUpdate` | called after the component updates
](assets/images/react-lifecycle.png)

### State
State allows you to cause the Component to rerender when a variable changes
