import { REFERENDUM_TYPE, NewReferendum } from "./types"

import { ACTIONS } from "../actions/actions.createReferendum"

export interface NewReferendumState extends NewReferendum {}

const initialState: NewReferendumState = {
    name: "",
    details: "",
    type: "",
    group: "",
    choices: [],
    seeVoters: "",
    allowComments: "",
    image: ""
}

export function setNameReducer(state: NewReferendumState, payload: string): NewReferendumState {
    return { ...state, name: payload }
}

export function setDetailsReducer(state: NewReferendumState, payload: string): NewReferendumState {
    return { ...state, details: payload }
}

export function setGroupReducer(state: NewReferendumState, payload: string): NewReferendumState {
    return { ...state, group: payload }
}

export function addChoiceReducer(state: NewReferendumState, payload: string): NewReferendumState {
    return { ...state, choices: [...state.choices, payload] }
}

export function removeChoiceReducer(state: NewReferendumState, payload: string): NewReferendumState {
    return { ...state, choices: state.choices.filter(_ => _ !== payload) }
}

export function setTypeReducer(state: NewReferendumState, payload: REFERENDUM_TYPE): NewReferendumState {
    return { ...state, type: payload }
}

export function allowCommentsReducer(state: NewReferendumState, payload: string): NewReferendumState {
    return { ...state, allowComments: payload }
}

export function seeVotersReducer(state: NewReferendumState, payload: string): NewReferendumState {
    return { ...state, seeVoters: payload }
}

export function setImageReducer(state: NewReferendumState, payload: string): NewReferendumState {
    return { ...state, image: payload }
}

export function reducer(state = initialState, action: any) {
    switch (action.type) {
        case ACTIONS.RESET_NEW_REFERENDUM:
            return initialState
        case ACTIONS.ADD_CHOICE:
            return addChoiceReducer(state, action.payload)
        case ACTIONS.SET_REFERENDUM_DETAILS:
            return setDetailsReducer(state, action.payload)
        case ACTIONS.SET_REFERENDUM_GROUP:
            return setGroupReducer(state, action.payload)
        case ACTIONS.SET_REFERENDUM_NAME:
            return setNameReducer(state, action.payload)
        case ACTIONS.SET_REFERENDUM_TYPE:
            return setTypeReducer(state, action.payload)
        case ACTIONS.REMOVE_CHOICE:
            return removeChoiceReducer(state, action.payload)
        case ACTIONS.SEE_VOTERS:
            return seeVotersReducer(state, action.payload)
        case ACTIONS.ALLOW_COMMENTS:
            return allowCommentsReducer(state, action.payload)
        case ACTIONS.SET_IMAGE:
            return setImageReducer(state, action.payload)

        default:
            return state
    }
}
