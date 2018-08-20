/**
 * 
 */

const { createStore } = require('redux');
const { todo } = require('./reducer');
const store = createStore(todo);

const { addTodo, redTodo } = require('./actions');

const unsub = store.subscribe(() => {
    console.log('unsub: ', store.getState());
});
console.log('init: ', store.getState());

store.dispatch(addTodo(2));
console.log('step1: ', store.getState());

store.dispatch(redTodo(3));
console.log('step2: ', store.getState());

unsub();
