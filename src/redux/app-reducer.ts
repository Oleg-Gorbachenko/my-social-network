import {ActionsTypes, ThunkDispatchType} from "./store";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "app/INITIALIZED_SUCCESS"

export type initialStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false,
}

export const appReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

//action creator
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)

//thunk
export const initializeApp = () => async (dispatch: ThunkDispatchType) => {
    await dispatch(getAuthUserData())
    dispatch(initializedSuccess())
}