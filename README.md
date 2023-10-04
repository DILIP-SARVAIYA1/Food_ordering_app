// # Header
// --logo
// --nav items
// # body
// --search
// --res container
// --res card
// # footer
// --Copyright
// --link
// --Address
// --Contacts

# Components

- A component is an independent, reusable bit of code which divides the UI into smaller pieces. For example, if we were building the UI of React website using React js we can break its UI into smaller parts

# What are Functional Components?

- The first, most important and recommended component type in React is a functional component. A functional component is basically a JavaScript function that returns a React element (JSX).

# Why JSX?

- Within JSX we can add JavaScript(logic, functions, variables etc) as well by using curly braces { } inside the HTML as shown in the figure.

# Config driven UI

- Config-driven UI is a technique that allows you to create dynamic and customizable UIs without hard coding them. It uses a configuration file to define the layout and content of the UI components.

# Not using key (not acceptable) <<<<<< Using Index <<<<<<<<< Using Unique ID (Recommended)

# Optional chaining

- The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

# Props

- A Prop is a way that components communicate. React uses props to transfer data from one component to another component.
- You use props to pass data and values from one component to another to get dynamic and unique outputs.
- But remember that props only transport data in a one-way flow (only from parent to child components). It is not possible for props to pass data from a child to parent, or to components at the same level.
- Props is just JS Object.

# Export/Import

- named Export/Import
- Default Export/Import
- named export import with { }

# Hooks

    (Normal JS utility function)

- useState() - Super powerful state Variable in React. (When variable updated every time components are rendered)
- useEffect() - this will call after render components is rendered.
- Optional chaining.

# ShimmerUI

# Conditional rendering

# Reconciliation

- Reconciliation is the process by which React updates the UI to reflect changes in the component state. The reconciliation algorithm is the set of rules that React uses to determine how to update the UI in the most efficient way possible. React uses a virtual DOM (Document Object Model) to update the UI.

# useEffect

    - take callback function and second arguments as dependency array
    - with only callback function useEffect call every render
    - with empty dependency array useEffect call initial render
    - with data inside dependency array useEffect call when dependency changes

# React Router DOM (Library)

    - Install command  = npm i react-router-dom
    - Import with named import {createBrowserRouter,RouterProvider} from "react-router-dom" (path:"/",element:<Component/>)
    - errorElement:<ErrorComponent /> - for own customizable error page
    - { useRouterError } Hooks for getting more control on error data return(Object)
    - create children route children:[pass object] - { Outlet } import Outlet Components
    - There are two types of routing
        - Client Side Routing - (only components will interchange)
        - Server Side Routing - (make a network call and refresh the page)
    - use {Link} components instead of anchor tag - (use [to = 'path'] instead of href attributes)

# Dynamic Routes

    - path:"/restaurant/:id = : mean this path is Dynamic
    - {useParam} Hooks for Dynamic Routing

# Class based components

    - class [name of class] extends React.Components {
        constructor(props){
            super(props);
            this.state = {
                - for creating state variable
            }
        }

        componentDidMount () {
             - is used for API call - like useEffect(cbf)
      }
        render(){
            return(JSX)
        }
    }

    - Life cycle of class based components
        - fist constructor will be called then render method will be called and then componentDidMount will be called
        - when multiple child components have React will batch the render method and execute then batch the componentDidMount batch and execute

        === Mounting ===
            * Constructor called
            * Render (dummy data)
                - <HTML dummy data>
            * ComponentDidMount called
                - <API call>
                - <this.setState> -> state variable is updated
        === Update ===
            * render(API data)
            * <HTML new data>
        === componentDidUpdate ===
        === componentWillUnmount ===

# Lifting the state up

- Basically give control to its parent
- Read more about = https://react.dev/learn/sharing-state-between-components#lifting-state-up-by-example

# React Context

- Pass data in global and access to any were in program
- import from react as named import { createContext } for creating context
- This is utility function
- import useContext hooks for use createContext

# Redux-Toolkit

- Redux is big js object and it is capt inside central global space
- Slicing in redux store for big object
- Click on add btn => Despatch ( Action ) => Call Function( Reducer ) => Reducer Fn will modify cart => Cart is subscribing to the store using ( selector ) it will automatically updated
- Subscribing to the store = Selector => read data from redux store => modify React components
- Data change in store => Header components will automatically updated

  - Install @reduxjs/toolkit and react-redux
  - Build our store
  - Connecting our store to our app
  - Slice ( cartSlice )
  - Despatch ( action )
  - Selector

- configureStore() = for creating our store
- Provider = for providing our store to app <Provider store={}>rape whole app</Provider>
- createSlice({}) = for creating slice it will have name, initialState, reducers
- Selector is react-redux Hooks
- useSelector() = hooks for subscribing to the store
- useDespatch() = hooks for despatch an action
