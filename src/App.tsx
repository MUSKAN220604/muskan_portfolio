import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { Konami } from "@/components/konami";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { TechStack } from "@/sections/TechStack";
import { GithubActivity } from "@/sections/GithubActivity";
import { Contact } from "@/sections/Contact";
import { useClickSound } from "@/hooks/use-click-sound";

export function App() {
  useClickSound();

  return (
    <ThemeProvider>
      <ScrollProgress />
      <Konami />
      <div className="min-h-screen bg-[var(--bg)] font-sans text-[var(--fg)] antialiased">
        <Nav />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <TechStack />
          <GithubActivity />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
