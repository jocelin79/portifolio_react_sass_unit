import React from 'react'
import AboutContainer from "./AboutContainer"
import TechnologiesContainer from "./TechnologiesContainer"
import ProjectsContainer from "./ProjectsContainer"
import HilightContainer from "./HilightContainer"

import '../styles/components/maincontent.sass'

const MainContent = () => {
    return (
        <main id="main-content">
            <AboutContainer/>
            <TechnologiesContainer/>
            <ProjectsContainer/>
            <HilightContainer/>
        </main>
    )
}

export default MainContent