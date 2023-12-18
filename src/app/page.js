
import Hero from '@/components/Hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Skills from '@/components/skills';

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
