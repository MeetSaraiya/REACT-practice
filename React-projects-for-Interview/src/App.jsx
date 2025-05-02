
import './App.css'
import { Accordian } from './components/accordian'
import {RandomColorGenerator} from './components/random colors'
import StarRating from './components/StarRating'

function App() {

  return (
    <>
      {/* <Accordian/>
       */}
       {/* <RandomColorGenerator/>
        */}
        <StarRating noOfStars={10} />
    </>
  )
}

export default App
