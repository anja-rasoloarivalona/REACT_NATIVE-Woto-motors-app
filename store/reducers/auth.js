import * as actionTypes from '../actions/actionsType';
import { updatedObject} from '../utility'


const initialState = {
    auth: false,
    token: null,
    userId: null,
}

const loginSucced = (state, action) => {
    return updatedObject( state, {
        auth: true,
        token: action.token,
        userId: action.userId,
    
    })
}

const setLoginStateToTrue = (state, action) => {
    return updatedObject(state, {
        auth: action.isAuth,
        token: action.token,
        userId: action.userId,
    })
}

const setLoginStateToFalse = state => {
    return updatedObject(state, {
        auth: false,
        token: null,
        userId:  null,
        connectionId: null
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.LOGIN_SUCCEDED: return loginSucced(state, action);
        case actionTypes.LOGIN_FAILED: return;
        case actionTypes.SET_LOGIN_STATE_TO_TRUE: return setLoginStateToTrue(state, action);
        case actionTypes.SET_LOGIN_STATE_TO_FALSE: return setLoginStateToFalse(state);
        case actionTypes.SET_CONNECTION_ID: return updatedObject(state, {connectionId: action.connectionId})

        default: return state 
    }
}

export default reducer