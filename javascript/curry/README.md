### Key Aspect of curry
Trasnform a function with mutiple parameters into nested functions,
each functions take

### Basic Curry in Frontend Development

#### React

1. Higher-Order Components

```javascript
const withLogging = (Component) => (props) => {
  console.log("Props:", props);
  return <Component {...props} />;
};

const MyComponentWithLogging = withLogging(MyComponent);
```

2. Custom Hook

```javascript
const useInputChange = (setter) => (event) => {
  setter(event.target.value);
};

const Component = () => {
  const [value, setValue] = React.useState("");
  const handleChange = useInputChange(setValue);

  return <input onChange={handleChange} />;
};
```

#### Redux

1. Redux-Thunk Actions

```javascript
const fetchData = (endpoint) => (dispatch) => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => dispatch({ type: "DATA_LOADED", payload: data }));
};
```

2. Custom Middleware

```javascript
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  return next(action);
};

const nextHandler = loggerMiddleware({
    dispatch: () => console.log("this function call is action");
    getState: () => ({
       "data": "value"
    })
})

nextHandler(() => console.log("this function call is next"))

```

### Loadash Curry in Frontend Development

1. API Request Wrapping

```javascript
import { curry } from "lodash";
import axios from "axios";

const makeRequest = curry((baseUrl, endpoint, params) =>
  axios.get(`${baseUrl}${endpoint}`, { params })
);

const requestToAPI = makeRequest("https://api.example.com");

requestToAPI("/users", { id: 123 }).then((response) =>
  console.log(response.data)
);
requestToAPI("/posts", { category: "tech" }).then((response) =>
  console.log(response.data)
);
```

2. Form Validation

```javascript
import { curry } from "lodash";

const validate = curry((rule, errorMessage, value) => {
  if (!rule(value)) {
    return errorMessage;
  }
  return null;
});

const isRequired = validate(
  (value) => value.trim() !== "", // rule
  "This field is required" //errorMessage
);
const isEmail = validate(
  (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), //rule
  "Invalid email" //errorMessage
);

console.log(isRequired("")); // Output: 'This field is required'
console.log(isEmail("test@domain")); // Output: 'Invalid email'
console.log(isEmail("test@domain.com")); // Output: null
```

3. Logger

```javascript
import { curry } from "lodash";

const log = curry((level, prefix, message) => {
  console[level](`${prefix}: ${message}`);
});

const infoLogger = log("info", "[INFO]");
const errorLogger = log("error", "[ERROR]");

infoLogger("This is an informational message."); // Output: [INFO]: This is an informational message.
errorLogger("This is an error message."); // Output: [ERROR]: This is an error message.
```

4. Filtering Data

```javascript
import { curry } from "lodash";

const filterByProperty = curry((property, value, array) =>
  array.filter((item) => item[property] === value)
);

const filterByStatus = filterByProperty("status");
const activeItems = filterByStatus("active", [
  { id: 1, status: "active" },
  { id: 2, status: "inactive" },
  { id: 3, status: "active" },
]);

console.log(activeItems);
// Output: [ { id: 1, status: 'active' }, { id: 3, status: 'active' } ]
```

5. Internationalization (i18n)

```javascript
import { curry } from "lodash";

const translate = curry((translations, lang, key) =>
  translations[lang] && translations[lang][key] ? translations[lang][key] : key
);

const translations = {
  en: { hello: "Hello", goodbye: "Goodbye" },
  es: { hello: "Hola", goodbye: "Adiós" },
};

const translateToEnglish = translate(translations, "en");
const translateToSpanish = translate(translations, "es");

console.log(translateToEnglish("hello")); // Output: 'Hello'
console.log(translateToSpanish("goodbye")); // Output: 'Adiós'
```

### Reference

https://juejin.cn/post/6844903882208837645
https://lodash.com/
