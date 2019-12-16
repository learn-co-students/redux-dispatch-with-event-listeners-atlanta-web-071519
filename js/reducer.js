// add code snippets from README
let state; 
const button = document.getElementById('button'); 

const reducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREASE_COUNT': 
            return {count: state.count + 1}
        default: 
            return state; 
    }
}

const dispatch = (action) => {
    state = reducer(state, action); 
    render(); 
}

const render = () => {
    let container = document.getElementById('container'); 
    container.textContent = state.count; 
}

// displays the default state on the page ...
// '@@INIT' can be any string
dispatch({type: '@@INIT'})

button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
})