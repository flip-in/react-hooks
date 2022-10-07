// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

//Extra Credit: remove props✅

function Name() {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      {/*extra credit: add the onChange handler ✅*/}
      <input
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component ✅
function FavoriteAnimal({animal, onAnimalChange}) {
  // 💣 delete this, it's now managed by the App ✅
  // const [animal, setAnimal] = React.useState('')
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange} />
    </div>
  )
}

// 🐨 uncomment this ✅
// Extra credit: Comment this ✅
// function Display({name, animal}) {
//   return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
// }

//Extra credit: need new component to show just animal text ✅
function Display({animal}) {
  return <div>{`Your favorite animal is: ${animal}!`}</div>
}

// 💣 remove this component in favor of the new one ✅
// function Display({name}) {
//   return <div>{`Hey ${name}, you are great!`}</div>
// }

function App() {
  // 🐨 add a useState for the animal ✅
  // Extra Credit: colocate name to it's component ✅
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      {/*extra credit: move onChange to name component✅*/}
      <Name />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) ✅*/}
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={event => setAnimal(event.target.value)}
      />
      {/* 🐨 pass the animal prop here ✅ */}
      {/* Extra Credit: Don't need name prop here✅*/}
      <Display animal={animal} />
    </form>
  )
}

export default App
