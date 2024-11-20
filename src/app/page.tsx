import Hero from "@/components/Hero"
import About from "./About/page"
import Services from "./Services/page"
import Contactus from "./Contact-us/page"
export default function Home (){
  return(
    <div>
      <div>
        <Hero/>
        <About/>
        <Services/>
        <Contactus/>

      </div>
    </div>
  )
}