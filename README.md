# Food Order App

## `Summary`

In this Summary, the highlights of the project are mentioned. Corresponding documents can be investigated for further details.

The project consists of 4 main components and a ContextAPI store.

1. Components

   - Cart
   - Layout
   - Meals
   - UI

2. Store

### Cart

In CartIcon.js implementation of an `SVG` icon can be found.

Note 1: In Cart.js `styles["dashed-classname"]` is used since for dashed names styles.dashed-classname is not a valid usage.

### Layout

In HeaderCartButton.js the `useEffect()` hook is utilized to create a `bump animation`. In same JS document, built in browser functions are used such as `setTimeout()` and `clearTimeout()`.

### Meals

In Meals.js the `<React.Fragment>` is utilized for optimization since <div> is an unnecessary workload if there are tons of them. In AvailableMeals.js the `array.map()` is used to have a list of items. In MealItem.js the `useContext()` hook is utilized to reach the cart context and update it. In MealItemForm.js, the `useState()` hook is used to control if the form is valid. Also, with the help of the `&&` operator, a `Dynamic UI` is created.

Note 2: `toFixed(number)` gives that number of digits after the decimal point.

### UI

In Modal.js `ReactDOM.createPortal()` feature is used by also manipulating the index.html . In Input.js `React.forwardRef()` is utilized to reach the final input instead of tracking every keystroke by `onChange`. In Card.js `Dynamic Classes` are introduced to use Card throughout the app.

### Store

In cart-context.js a ContextAPI is created to reduce the workload of `props`, in the process `React.createContext()`is utilized. In the ContextProvider.js, the `useReducer()` hook is utilized to manage the 'REMOVE' and 'ADD' operations together.
