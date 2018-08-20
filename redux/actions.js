/**
 * 
 */

const { ADD_TODO, RED_TODO } = require('./actionTypes');

exports.addTodo = (count) => {
    return {
        type: ADD_TODO,
        count
    }
}

exports.redTodo = (count) => {
    return {
        type: RED_TODO,
        count
    }
}
