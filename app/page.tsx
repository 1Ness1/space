import { Hero } from '@/components/main/Hero';
import Skills from '@/components/main/Skills';
const Home = () => {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
      </div>
    </main>
  )
}

export default Home;