# Alberto's Portfolio
Just me while having fun making some stuff
### About Alberto 
just some info about me and my job role.
### Code
a collections of code snippets
### Bloodsucker
Bloodsucker is a logo I created in 2015 and it's accompanying me everywhere. I've created t-shirts, hats, stickers, NFTs... a lot of stuff! It's not a real e-commerce but it would like to become one, a tiny online shop not for profit but to integrate and test new web technologies in the e-commerce field.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and react 18.2.0.

### Using [MUI](https://mui.com/material-ui/getting-started/overview/) because it is well known, easy to use, customizable and full of utils.

### Using SCSS constants as variables into the functional component:

To access an SCSS constant into the functional component you should `import vars from '@src/styles/variables.scss';` (it is quite literal).
and use them as `vars['variable-name']`. Since their name is retained from SCSS variables they are most likely dashed.
There is an alternative: use CSS variables which unfortunately requires a polyfill for Internet Explorer.

### Using [Rive](https://rive.app/) for interactive graphics.

### Using [D3](https://d3js.org/) 7.7.0 for manipulating documents based on data:

D3 gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation. For example, you can use D3 to generate an HTML table from an array of numbers. Or, use the same data to create an interactive SVG bar chart with smooth transitions and interaction.

### Using [Ramda](https://ramdajs.com/docs/) can help you get the job done with simple, elegant code.

### Using [Axios](https://axios-http.com/docs/intro) to fetch data.

## Hooks corner
### **useGlobalLoader** is a hook that helps you to handle the loader visibility state on redux store
### **useOnScreen** let you know if an element in in the viewport
### **useWindowDimension** let you know the size of the viewport width and height
## Utils corner
#### **GenerateClassName** is a simple util that helps you to use classes conditionally.
#### **IsNotNullOrEmpty** trought *ramda* it helps you to detect if Object is empty or null