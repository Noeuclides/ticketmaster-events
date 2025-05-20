import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Events from './components/Events';
import './App.css'

function App() {
  const [searchedEvent, setSearchedEvent] = useState('')
  const containerRef = useRef(null);
  const handleNavBarSearch = (eventName) => {
    console.log(containerRef.current.search)
    setSearchedEvent(eventName);
  }

  return (
    <>
      <Navbar onSearchEvent={handleNavBarSearch} ref={containerRef}  />
      <Events searchedEvent={searchedEvent} />
      
    </>
  )
}

export default App
