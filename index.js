const BUY_CAKE = 'BUY_CAKE' //same value as in action is common practice
//action: must have property type. It can have other properties as well(optional)
/*
//commented out because we are using it in action creator
{
    type: BUY_CAKE,
    info: 'First redux action'
}
*/

//action creator: function that returns an action

const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//reducer: (previousState, action) => newState
//reducer is a pure function: output is only determined by input. No side effects

//1st principle: state in an object 

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
        return {        //return new state object instead of mutating the old state
            ...state,  //copy the state object and then change the numOfCakes property only
            numOfCakes: state.numOfCakes - 1 }
        default: return state
    }
}

// 