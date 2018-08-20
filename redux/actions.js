/**
 * 
 */

const { ADD_TODO, RED_TODO, ASYNC_TODO } = require('./actionTypes');

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

const asyncTest = function (count) {
    return {
        type: ASYNC_TODO,
        count
    }
}

exports.asyncTodo = (count) => {
    const sleep = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });

    return function (dispatch, getState) {
        dispatch(asyncTest(count));
        return sleep.then(() => {
            dispatch(asyncTest(count * 10));
        });
    }
}
