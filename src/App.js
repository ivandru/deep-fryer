import React from 'react'
import logo from './logo.svg'
import './App.css'
import ImageUpload from './components/ImageUpload'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ImageUpload title="Upload Image" />
      </header>
    </div>
  )
}

export default App
