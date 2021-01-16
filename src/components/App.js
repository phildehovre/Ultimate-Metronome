import React, {useEffect, useState} from 'react'
import Metronome from './Metronome'

export default function App() {
  const [bpm, setBpm] = useState(120)


  return (
    <div>
      <Metronome 
        bpm={bpm}
        setBpm={setBpm}
        />
    </div>
  )
}
