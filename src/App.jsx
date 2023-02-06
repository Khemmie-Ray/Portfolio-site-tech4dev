import './App.css'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'

function App() {

  return (
    <div className="App">
      <header>
        <p>MyLogo</p>
        <div className='navLinks'>
        <a href="#for-home">Home</a>
        <a href="#for-about">About</a>
        <a href="#for-contact">Contact</a>
        <a href="#for-projects">Project</a>
        </div>
      </header>
      <main>
      <Home />
      <About />
      <Project />
      <Contact />
      </main>
      <footer>
        <div className="social">
        <a href="">Linkedin</a>
        <a href="">Twitter</a>
        </div>
        <p>&copy; My name</p>
      </footer>
    </div>
  )
}

export default App
