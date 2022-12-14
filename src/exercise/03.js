// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

//Extra Credit: remove propsβ

function Name() {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      {/*extra credit: add the onChange handler β*/}
      <input
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </div>
  )
}

// π¨ accept `animal` and `onAnimalChange` props to this component β
function FavoriteAnimal({animal, onAnimalChange}) {
  // π£ delete this, it's now managed by the App β
  // const [animal, setAnimal] = React.useState('')
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onAnimalChange} />
    </div>
  )
}

// π¨ uncomment this β
// Extra credit: Comment this β
// function Display({name, animal}) {
//   return <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
// }

//Extra credit: need new component to show just animal text β
function Display({animal}) {
  return <div>{`Your favorite animal is: ${animal}!`}</div>
}

// π£ remove this component in favor of the new one β
// function Display({name}) {
//   return <div>{`Hey ${name}, you are great!`}</div>
// }

function App() {
  // π¨ add a useState for the animal β
  // Extra Credit: colocate name to it's component β
  const [animal, setAnimal] = React.useState('')
  return (
    <form>
      {/*extra credit: move onChange to name componentβ*/}
      <Name />
      {/* π¨ pass the animal and onAnimalChange prop here (similar to the Name component above) β*/}
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={event => setAnimal(event.target.value)}
      />
      {/* π¨ pass the animal prop here β */}
      {/* Extra Credit: Don't need name prop hereβ*/}
      <Display animal={animal} />
    </form>
  )
}

export default App
