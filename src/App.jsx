import { useState } from 'react';
import Navbar from './components/Navbar';
import Events from './components/Events';
import SignUpForm from './components/SignUpForm';
import './App.css'

function App() {
  const [searchedEvent, setSearchedEvent] = useState('')
  const handleNavBarSearch = (eventName) => {
    setSearchedEvent(eventName);
  }

  return (
    <>
      <SignUpForm />
      {/* <Navbar onSearchEvent={handleNavBarSearch} />
      <Events searchedEvent={searchedEvent} /> */}
      
    </>
  )
}

export default App
