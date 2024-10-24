import Header from './components/Header'
import About from './components/About/index'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      
      <main>
        <About>
          <About.Intro
            name="Terry"
            userIcon={'../public/images/profilepic.JPG'}
          >
            I'm mostly doing this for thesis huhuhuhu but i wanna learn broskidesu.
          </About.Intro>
        </About>
      </main>

      <Footer />
    </>
  )
}

export default App
