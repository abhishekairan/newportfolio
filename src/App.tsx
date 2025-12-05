import './App.css'
import HeroPage from './components/HeroPage'
import SkillsPage from './components/SkillsPage'

function App() {

  return (
    <>
    <div className="relative snap-y snap-mandatory overflow-x-hidden h-screen overflow-y-auto scroll-smooth">
      <section className='sticky z-10 top-0'>
        <HeroPage />
      </section>
      <section className='sticky z-20 top-0'>
        <SkillsPage />
      </section>
      <section className='sticky z-30 top-0'>
        <HeroPage />
      </section>
    </div>
    </>
  )
}

export default App
