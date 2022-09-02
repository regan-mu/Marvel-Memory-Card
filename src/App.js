import './App.css';
import characters from "./characters.js"
import shuffleArray from './shuffle';
import {useState, useEffect} from "react"
import Header from './components/header';
import CharacterCard from './components/characterCard';
const uniqid = require("uniqid")


function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clicked, setClicked] = useState([])
  let isClicked = false
  const handleScore = (e) => {
    if (clicked.length > 0) {
      clicked.forEach(click => {
        if (click === e.target.id) {
          isClicked = true
        }
      })
    }

    if (!isClicked) {
      setClicked(prevClicks => {
        return [...prevClicks, e.target.id]
      })
      setScore(score+1)
    }
    else {
      if (score >= highScore) {
        setHighScore(score)
      }
      setScore(0)
      setClicked([])
      isClicked = false
    }
  }

  useEffect(
    () => {
      shuffleArray(characters)
    }, [score]
  )

  return (
    <div className="App">
      <Header currentScore={score} bestScore={highScore} />
      <div className="characters">
        {characters.map(character => {
          return <CharacterCard key={uniqid()} cardId={character.id} characterImg={character.img} name={character.name} handleClick={handleScore}/>
        })}
      </div>
    </div>
  );
}

export default App;
