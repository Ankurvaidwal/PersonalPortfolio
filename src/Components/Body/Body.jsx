import React from 'react'
import Header from './Header/Header'
import About from './About/About.jsx'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import Home from './Home/Home'

const Body = () => {
    return (
        <div className="body">
            <section id="header"><Header /></section>
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="contact"><Contact /> </section>
        </div>
    )
}

export default Body
