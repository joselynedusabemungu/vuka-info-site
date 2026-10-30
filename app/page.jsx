import About from './components/about/about';
import Home from "./components/home/home";
import Howitworks from "./components/how it works/howitworks";
import Contact from "./components/Contact/Contact";



export default function Page() {
  return (
    <div>
    <main>
      <Home />
      <Howitworks/>
      <About/>
      <Contact />
    </main>
    </div>
  );
}
