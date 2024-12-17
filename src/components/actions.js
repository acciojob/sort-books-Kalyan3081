const apiKey = "rAvXryI9LWM1BvjU0jEGebeZ5ujmEG4h";
const listName = "hardcover-fiction";

export const FETCH_BOOKS_LOADING = "FETCH_BOOKS_LOADING";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

export const fetchBooks = () => {
    return async (dispatch) => {
        dispatch({ type: FETCH_BOOKS_LOADING });

        try {
            //fetching data from url
            const res = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=${apiKey}`)
            // converting res data into json format
            const data = await res.json()

            dispatch({ type: "FETCH_BOOKS_SUCCESS", payload: data.results.books })
        } catch (error) {
            dispatch({ type: FETCH_BOOKS_FAILURE, payload: error.message })
        }
    }
}
