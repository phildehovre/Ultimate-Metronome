import React from 'react'
import './Metronome.css'

export default function Metronome(props) {

const {
  bpm,
  setBpm
} = props

  return (
    <div className="metronome-body">
      <div className="metronome-header-container">
        <h1 className="header">
          Metronome
        </h1>
      </div>
      <div className="bpm-controls">
        <div className="bpm-display">
          <input type="number" value={Number(bpm)} onChange={e => {setBpm(Number(e.target.value))}}/>
        </div>
        <div className="bpm-slider">
          <input type="range" onChange={e => {setBpm(e.target.value)}} min="20" max="300"/>
        </div>
        <div className="buttons-container">
          <div className="bpm-buttons">
            <button onClick={(e) => {setBpm(Number(bpm)-1)}}>-</button>
            <button onClick={(e) => {setBpm(Number(bpm)+1)}}>+</button>
          </div>
          <div className="play-tap-buttons">
            <button>Play</button>
            <button>Tap</button>
          </div>
        </div>
      </div>
    </div>
  )
}
