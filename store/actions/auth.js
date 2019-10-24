import * as actionTypes from './actionsType'

export const loginSucceeded = data => {
    return {
        type: actionTypes.LOGIN_SUCCEDED,
        token: data.token,
        userId: data.userId,
    }
}

export const loginFailed = () => {
    return {
        type: actionTypes.LOGIN_FAILED
    }
}

export const setLoginStateToTrue = data => {
    return {
        type: actionTypes.SET_LOGIN_STATE_TO_TRUE,
        isAuth: data.isAuth,
        token: data.token,
        userId: data.userId, 
    }
}

export const setLoginStateToFalse = () => {
    return {
        type: actionTypes.SET_LOGIN_STATE_TO_FALSE
    }
}

export const setConnectionId = data => {
    return {
        type: actionTypes.SET_CONNECTION_ID,
        connectionId: data
    }
}
