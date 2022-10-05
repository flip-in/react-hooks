// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {useEffect} from 'react'

// write a custom hook to abstract the code into a reusable chunk
//updated the previous code to be more generic
// instead of setting just a 'name', it is updated to set local storage with any
// kind of variable

function useLocalStorageState(key, defaultValue = '') {
  // using a function to serve as a lazy initializer
  // use inline function with implicit return to simplify the code

  const [state, setState] = React.useState(() => {
    const items = window.localStorage.getItem(key)
    if (items) {
      return JSON.parse(items)
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorageState('name', initialName)
  function handleChange(event) {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting initialName="dave" />
}

export default App
