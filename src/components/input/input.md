-The Input component is a React component that provides a user interface for inputting numerical values. 
-It is based on the Material-UI library and utilizes the TextField component to render the input field.


-Importing the Component
To use the Input component in your project, you need to import it. Here's an example of how to import it: 
import Input from "./Input";

-Component Props
The Input component accepts the following props:

-value (required): The current value of the input field. Should be a numeric value.
-onChange (required): A callback function that is invoked when the value of the input field changes. It receives the updated value as an argument.
-currencyIcon (optional): A string representing the currency icon or symbol to be displayed as a label for the input field.
-helperText (optional): A string providing additional information or context for the input field.