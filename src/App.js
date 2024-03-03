import React from "react"
import NavBar from "./NavBar"
import Masthead from "./Masthead"
import PortfolioSection from "./PortfolioSection"
import AboutSection from "./AboutSection"
import ContactSection from "./ContactSection"
import FooterSection from "./FooterSection"

const App = () => {
  return (
    <div>
    <NavBar />
    <Masthead />
    <PortfolioSection />
    <AboutSection />
    {/* <ContactSection />
    <FooterSection /> */}
    </div>
  )
}

export default App