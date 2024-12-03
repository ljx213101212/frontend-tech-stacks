### Closure

A function that "remembers" the variables from its outer scope even after that scope has exited. (Lexical Scoping)

### Closure in Redux-thunk

```js
// A Redux action creator using a closure
function fetchUserData(userId) {
  return function (dispatch, getState) {
    console.log("Current state:", getState());
    // Async API call
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "USER_FETCH_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "USER_FETCH_ERROR", error });
      });
  };
}

// Dispatching the action
store.dispatch(fetchUserData(42));
```

### Closure in Axios

```js
const axios = require("axios");

// Function to create a custom Axios instance
function setupAxios(authToken) {
  // Create a new Axios instance
  const instance = axios.create();

  // Add an interceptor to modify request headers
  instance.interceptors.request.use((config) => {
    // Closure: `authToken` is remembered from `setupAxios`
    config.headers.Authorization = `Bearer ${authToken}`;
    console.log(`Added Authorization header: ${authToken}`);
    return config; // Return the modified config
  });

  return instance; // Return the customized Axios instance
}

// Create an Axios instance with a token
const axiosWithAuth = setupAxios("my-secret-token");
// Make a request using the customized instance
axiosWithAuth
  .get("https://api.example.com/data")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```
