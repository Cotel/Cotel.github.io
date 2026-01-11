import Header from './components/Header'
import Summary from './components/Summary'
import Skills from './components/Skills'
import Experience from './components/Experience'

function App() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Summary />
        <Skills />
        <Experience />
      </div>
    </main>
  )
}

export default App
