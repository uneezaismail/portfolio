import About from "./components/about/page";
import Contact from "./components/contact/page";
import Hero from "./components/hero/page";
import Portfolio from "./components/project/page";


export default function Home() {
  return (
   <div>
   
    <Hero/>
    <About/>
    <Portfolio/>
    <Contact/>
    
   </div>
  );
}
