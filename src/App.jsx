import Layout from "./Layout"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Stats from "./components/Stats"
import OurEng from "./components/OurEng"

function App() {
  
  return (
    <Layout>
      <div className="w-full min-h-[100vh]">
        <Hero />
        <About />
        <Services />
        <Stats />
        <OurEng />
      </div>
    </Layout>
  )
}

export default App
