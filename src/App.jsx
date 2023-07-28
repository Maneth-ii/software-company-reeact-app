import Layout from "./Layout"
import Hero from "./components/Hero"
import About from "./components/About"

function App() {
  
  return (
    <Layout>
      <div className="w-full min-h-[100vh]">
        <Hero />
        <About/>
      </div>
    </Layout>
  )
}

export default App
