import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Jobs from './components/Jobs'
function App() {
  const [count, setCount] = useState(0)

  return (
    <><Header name={"The Job Board"} />
  <Jobs/>
  <Footer />
  </>
    )
}

export default App
