
import './index.css'
import Navbar from './componants/navbar'
import Home from './componants/home'
import About from './componants/aboutme'
import Project from './componants/project'
import Contact from './componants/contact'
import Footer from './componants/footer'
function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Home/>
        <About />
        <Project/>
        <Contact/>
        <Footer/>
        <Navbar />         
        </div>

    </>
  )
}

export default App
