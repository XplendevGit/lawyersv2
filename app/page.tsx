"use client"
import Inicio from "./components/Inicio";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BannerStats from "./components/BannerStats";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (

    <>
    <Header>
    </Header>
    
    <section className="" id="home">
    <Inicio>
    </Inicio>
    </section>

    <section className="" id="trust">
    <Hero>
    </Hero>
    </section>


    <section className="" id="banner">
    <BannerStats>
    </BannerStats>
    </section>


    <section className="" id="support">
    <ExperienceSection>
    </ExperienceSection>
    </section>


    <section className="" id="contact">
    <ContactSection>
    </ContactSection>
    </section>


    <section className="" id="footer">
    <Footer>
    </Footer>
    </section>

    
    </>
  );
}
