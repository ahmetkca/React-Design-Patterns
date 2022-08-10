# React-Design-Patterns

[Layout Components Design pattern](https://github.com/ahmetkca/React-Design-Patterns/tree/layout-components)
> React components that deal primarily with arranging other components on the page

[Container Components Design pattern](https://github.com/ahmetkca/React-Design-Patterns/tree/container-components)
> Components that take care of loading and managing data for their child components

[Controlled-Uncontrolled Design pattern](https://github.com/ahmetkca/React-Design-Patterns/tree/controlled-uncontrolled-components)
> ***Uncontrolled Component:*** Components that keep track of their own states and release data only when some event occurs (that is, the submit for the HTML forms)

> ***Controlled Component:*** Components that do not keep track of their own state--all state is passed in as props (that is, when we use the useState Hook with text inputs)

[Higher-Order Components Design pattern](https://github.com/ahmetkca/React-Design-Patterns/tree/higher-order-components)
> A component that returns another component instead of JSX. Their use case could be sharing complex behavior between multiple components (much like with container components). Another use case could be adding <u>extra functionality</u> to existing components

[Custom Hooks Design pattern](https://github.com/ahmetkca/React-Design-Patterns/tree/custom-hooks)
> Special hooks that we define ourselves and that usually combine the functionality of one or more existing React hooks like `useState` or `useEffect`. They are used for <u>sharing complex behavior</u> between multiple components (much like HOCs and Container components)

[Functional Programming and React](https://github.com/ahmetkca/React-Design-Patterns/tree/functional-programming-and-react)
> A method of organizing code in a way that: 
>1. Minimizes mutation and state change
>2. Keeps functions independent of external data (Pure Functions)
>3. Treats functions as first-class citizen