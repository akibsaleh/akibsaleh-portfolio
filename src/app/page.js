import Hero from '@/components/Hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import Projects from '@/components/projects';

function page() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}

export default page;
