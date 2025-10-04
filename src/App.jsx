import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Templates from './components/Templates'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <Features />
      <Templates />
      <Footer />
    </div>
  )
}

export default App
