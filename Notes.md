# React.js

## What is React.js?

- "A JavaScript library for building user interfaces?" but what's this actually mean for us
- client-side JS library
- Allows us to create web apps that are highly reactive to user interaction without having to constantly send requests to a server and wait for it to send us the response
- SPA
  - requests of additional HTML pages is limited because React is conditionally rendering things instead of sending requests to a server
- JS is special because it allows us to run logic in a browser
  - manipulates the dom (HTML structure)
- efficient updates and rendering of components
- predictable code which allows for easier debugging
- components that manage their own state
  - can pass data among many components
- can be rendered on the server using Node

## What is a component in React?

- A component in react is Jjust a javascript function or class
  - i.e. `function ExpenseItem() { return // some code }`
- first we create the component, write the JSX, export it, and import it where it needs to be used
- wondering if it's best to make a component like this `function foo() {}` or `const foo() => {}`(this is wrong because foo will need a declaration value)
  - Max went over the syntax and it's as follows: `const foo = () => {}`
- in this project we have a Card component that isn't being configured with attributes, there's a way to prep it to be used as a wrapper, also when we have a wrapper we
  have our base css applies to it
  - every component receives a `props.children` it's a reserved name in JSX
  - also when we start applying custom components we need to develop code to allow them to take a className and have an affect as opposed to our default html elements who accept classNames out of the box
  - we need to add whatever is set as a className in the custom component to the className on the div that is being returned by the function
    - i.e. `const classes = "card " + props.className` (yes that white space after card is purposeful) `return <div className={classes}> ...`

## What are props?

- props is an object that we can use to pass data amongst components
- in the expense tracker, the data from props is flowing down, it starts from App.js where we initially set date in our array of expense objects,
  we then access props in ExpenseItem, we have the date property in the props object, so we can pass props.date to our ExpenseDate component, in
  ExpenseDate we bring in props again and access the date property.
  - I ran into an issue where my props was undefined, this was because I did not pass props into the parent component, so the flow of data stopped

# React State and Working with Events

## Listening to Events and Working with Event Handlers

- so we obviously listen to events by passing the corresponding attribute to an element
- be careful with functions in these events btw, we want our JSX to be lean, this means we make the function outside of the JSX, and then in the event attribute
  we REFER/POINT to the function in the event i.e. `onClick={eventHandler}`
  - we don't actually want to use a () when we refer to the function because it will fire the event when javascript reaches that line as opposed to when the click occurs
- functions that are fired based on an event should be camelcase and suffixed with Handler
  - i.e. const clickHandler

## How Component Functions Are Executed

- React will call a component, because under the hood they are functions, and run any functions or JSX until there is no more to be called

## Working with state

- we use the hook useState
  - must be called within the function, not outside of it or within a nested function
  - all hooks work like this except for one of them, Max will go over this later
- useState wants a default state, with it we are making a special variable, when it changes, the component gets called again, and changes occur
  - useState also returns access to our "special variable" it also returns a function we can call to assign a new value to the variable, object destructuring
  - useState specifically returns an array `["specialVariable", updatingFunction]`
  - ALWAYS returns an array with TWO elements, nothing more, nothing less
- when calling the state updating function, we tell react we want to assign a new value to a specific state, that also tells react that the component in which
  that state was registered should be re-evaluated
- it's important to state that the updating function SCHEDULES a change. that's why if I logged after the updating function it'll show the old value. the new value
  isn't immediately available

## A Closer Look at useState hook

- useState registers data for a specific INSTANCE, each item useState is called in will have it's own useState
  - so we have a bunch of `<ExpenseDate />` each of them is a separate instance, thus separate states
- initial value of state is only considered when a component function is being executed for the first time for a given component instance
