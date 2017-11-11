# React
## Before we begin
[React Cheatsheet](https://devhints.io/react)

[ES6 Cheatsheet](https://devhints.io/es6)

[Cool boilerplate](https://github.com/jetmate/react-boilerplate)

[Online React editor](https://codesandbox.io)

[Editor with cool boilerplate](https://codesandbox.io/s/github/jetmate/react-boilerplate/tree/master/boilerplate)
## Intro
React is a way to break down a webpage into several smaller **components**.
```html
<div>
  <button>Follow me on MySpace!</button>
  <h1>Top 10 JS innovations of 2017</h1>
  <h2>the definitave guide</h2>
  <p>This is a boring tech article</p>
  <button>Follow me on MySpace!</Button>
</div>
```
```
<div>
  <AnnoyingButton />
  <Content />
  <AnnoyingButton />
</div>
```
This allows you to not repeat yourself and thus code better.

### JSX
This is a special type of Javascript that allows you to write "html". There are some differences:
{% raw %}
```
<Image />   // must always close tags
<Canvas />    // even for double tag elements

<MyComponent />   // user defined types must be capitalized

<p>{1+1}</p>  // javascript expressions must be wrapped in curly brackets

{/* pointless comment */}   // comments too
<p style={{color: 'black'}} />	  // style attribute is a js object (notice the curly brackets)
<p className='myclass' />         // the class attribute is className
```
{% endraw %}

### Defining components
React components are classes with several special methods.

```
import React from 'react'

export class CoolText extends React.Component {
  render () {     // it's good practice to always wrap JSX in parentheses
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
You can then actually render a component by using ReactDOM:
```
import React from 'react'
import ReactDOM from 'react-dom'

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

ReactDOM.render(
  <Main />
  , document.getElementById('root')
)
```
`ReactDOM.render` takes a component and renders it at the specified place in the html document.
```html
<html>
  <head>
    <title>da best program</title>
  </head>
  <body>
    <div id="root"></div>
    <script src='path/to/react/script'></script>
  </body>
</html>
```

### Component lifecycle
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
State essentially allows you to rerender a Component upon a variable change. [demo](https://codesandbox.io/s/github/codeday-chicago/react-example-1/tree/master/)
```this.setState({})``` modifies the current state object and rerenders. **State is immutable**, so this is bad.
```
class Component extends React.Component {
  constructor (props) {
    super (props)

    this.state = { names: [] }    // you should always set state in the constructor
  }

  randomMethod () {
    this.state.names.push('Andy')   // this will not update the component
  }
}
```

### Props
Props allow you to pass data down the Component tree
{% raw %}
```
class MyButton extends React.Component {
  render () { // onClick is the standard click event attribute
    return (
      <button onClick={this.props.onClick} style={{
        backgroundColor: this.props.color
      }} />
    )
  }
}

class Main extends React.Component {
  render () {
    // notice how all of those elements are enclosed in a div - you have to
    // only return one element, and so enclosing with a div is common practice
    return (
      <div>
        <MyButton onClick={() => console.log(1)} color={'red'}>
        <MyButton onClick={() => console.log(2)} color={'blue'}>
        {*/
        What is wrong with this?
        <MyButton onClick={console.log(2)} color={'blue'}>
        */}
      </div>
    )
  }
}
```
{% endraw %}

You can pass "arguments" to customize the Component or pass functions to [help passing data](https://www.andrewhfarmer.com/component-communication/).
All of the passed props get put into the `this.props` object.
Changing the props will cause the Component to rerender.

## Controlled vs Uncontrolled elements
Input elements in React can be either controlled (preffered) or uncontrolled
### Controlled
With controlled elements, you store the state of the element inside of the Component
You need to:
* Define an `onChange` function to update the stored state
* Passed the stored state back into the element with the value attribute
```
class Main extends React.Component {
  state = { value: '' }

  render () {
    return (
      <div>
        <input
          onChange={(event) => this.setState({value: event.target.value})}
          value={this.state.value}
        />
        {this.state.value}
      </div>
    )
  }
}
```
To get the value out of an `event` object:
* Use `event.target.checked` with checkboxes.
* Use `event.target.value` with everything else.

### Uncontrolled
With uncontrolled elements, you access the state of the element from the rendered element.
This is done through `ref`, which is a special React attribute that takes a function that is called with the rendered element as the argument.
```
class Main extends React.Component {
  render () {
    return (
      <div>
        <input
          ref={this.initializeElement}
        />
        {this.element && this.element.value}
      </div>
    )
  }

  initializeElement = (element) => {
    // all non-special methods must be arrow functions
    // because `this` in javascript is weird
    if (element) this.element = element
    // it is important to check if `element` exists because
    // `ref` is called on both mounting and unmounting
  }
}
```

## Advanced JSX
### Rendering conditionally
`&&` and the `bool ? exp : exp` are used for JSX conditionals.
```
class Main extends React.Component {
  render () {
    return (
      <div>
        {this.props.isChecked && (
          checked!
        )}

        {
          this.props.starred ? (
            <image src='/starred.png' />
          ) : (
            <image src='/unstarred.png' />
          )
        }
        {/* or even better */}
        <image src={`/${this.props.starred ? 'starred' : 'unstarred'}.png`} />
      </div>
    )
  }
}
```

### Loops
`.map` is used for displaying a list. **Each list item must have a `key` attribute**
```
class PeopleView extends React.Component {
  render () {
    // the enclosing with a div rule still applies
    // inside of list map statements
    return (
      <div>
        {this.props.people.map((element) => (
          <div key={element.id}>
            {/* `key` is a unique identifier, usually part of element */}
            <h1>{element.firstName}</h1>
            <p>{element.bio}</p>
          </div>
        ))}
      </div>
    )
  }
}
```

## Further concepts
* Glamor CSS-in-JS
* React Router
* React Native
* GraphQL and Apollo
