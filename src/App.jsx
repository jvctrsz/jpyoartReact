import React from "react"
import CardSection from "../public/Pages/CardSection"
import AboutSection from "../public/Pages/AboutSection"
import WorksSection from "../public/Pages/WorksSection"
import ContactsSection from "../public/Pages/ContactsSection"
import '../public/CSS/style.css'
import '../public/CSS/mediaquery.css'
import '../public/CSS/animations.css'
import 'animate.css';

function App() {

  return (
    <>
      <section id="card-content" className="active">
        <CardSection />
      </section>

      <section id="about-content" className="section-visibility">
        <AboutSection/>
      </section>

      <section id="works-content" className="section-visibility">
        <WorksSection/>
      </section>

      <section id='contacts-content' className="section-visibility">
        <ContactsSection/>
      </section>
    </>
  )
}

export default App
