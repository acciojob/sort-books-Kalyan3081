import { FETCH_BOOKS_LOADING, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from "./actions"

const intialState = {
    loading: false,
    books: [],
    error: null,
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_LOADING':
            return { ...state, loading: true, books: [], error: null }
        case 'FETCH_BOOKS_SUCCESS':
            return { ...state, loading: false, books: action.payload, error: null }
        case 'FETCH_BOOKS_FAILURE':
            return { ...state, loading: false, books: [], error: action.payload }
        default:
            return state
    }
}

export default reducer
