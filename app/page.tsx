import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Tools } from "./components/Tools";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Tools />
                <Contact />
            </main>
            <Footer />
        </>
    );
}