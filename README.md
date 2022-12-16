# Alberto's Portfolio
Just me while having fun making some stuff

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
#### Using react 18.2.0 

### Using [MUI](https://mui.com/material-ui/getting-started/overview/) because it is well known, easy to use, customizable and full of utils

### Using SCSS constants as variables into the functional component:

To access an SCSS constant into the functional component you should `import vars from '@src/styles/variables.scss';` (it is quite literal).
and use them as `vars['variable-name']`. Since their name is retained from SCSS variables they are most likely dashed.
There is an alternative: use CSS variables which unfortunately requires a polyfill for Internet Explorer.

### Using [Rive](https://rive.app/) for interactive graphics