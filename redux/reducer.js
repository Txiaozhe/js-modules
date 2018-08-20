/**
 * 
 * @param {*} state 
 * @par
 */

const initState = {
    count: 6
}

exports.todo = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            console.log('ADD_TODO', state, action);
            return {
                count: state.count + action.count
            }
        }
        case 'RED_TODO': {
            console.log('RED_TODO', state, action);
            return Object.assign({}, {
                count: state.count - action.count
            })
        }
        default: {
            return state;
        }
    }
}