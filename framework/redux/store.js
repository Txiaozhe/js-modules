/**
 * 
 */
const thunkMiddleware = require('redux-thunk');
const { createLogger } = require('redux-logger');
const { createStore, applyMiddleware } = require('redux');
const { todo } = require('./reducer');

const loggerMiddleware = createLogger()
// console.log(thunkMiddleware);
const store = createStore(
    todo,
    applyMiddleware(
        // thunkMiddleware,
        loggerMiddleware
    )
);

const { addTodo, redTodo, asyncTodo } = require('./actions');

const unsub = store.subscribe(() => {
    console.log('unsub: ', store.getState());
});
console.log('init: ', store.getState());

store.dispatch(addTodo(2));
console.log('step1: ', store.getState());

store.dispatch(redTodo(3));
console.log('step2: ', store.getState());

// store.dispatch(asyncTodo(10));

unsub();
