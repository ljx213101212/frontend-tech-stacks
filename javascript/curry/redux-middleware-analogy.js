//reference:
//https://github.com/reduxjs/redux-thunk/blob/master/test/index.test.ts

//JavaScript curry function analogy in real life project 

const loggerMiddleware = (store) => (next) => (action) => {

    console.log("Store: ",  store);
    console.log("Dispatching:", action);
    return next(action);
  };
  
  const nextHandler = loggerMiddleware({ //this is store
      dispatch: () => console.log("this function call is action"),
      getState: () => ({
         "data": "value"
      })
  })
  
  const actionHandler = nextHandler((action) => {
    action();
    console.log("this function call is next")
  });

  actionHandler(() => {
    console.log("this function call is action handler callback");
  })