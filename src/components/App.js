import { Provider } from 'react-redux'
import BooksList from './BooksList'
import store from './store'
import React from "react";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <BooksList />
      </Provider>
    </div>
  )
}

export default App
