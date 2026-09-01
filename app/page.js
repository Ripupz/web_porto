import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import { getProjects } from "./data/projects";
import { getProfile } from "./lib/profile";

export const dynamic = "force-dynamic";

export default function Home() {
  const profile = getProfile();
  const projects = getProjects(profile);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar profile={profile} />
      <main id="main-content">
        <Header profile={profile} />
        <About profile={profile} />
        <Work projects={projects} />
        <Contact profile={profile} />
      </main>
    </>
  );
}
