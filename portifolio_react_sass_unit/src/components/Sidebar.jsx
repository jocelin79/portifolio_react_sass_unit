import React from 'react'
import Avatar from '../img/profile-pic.png'
import SocialNetworks from './SocialNetworks'
import InformationContainer from './InformationContainer'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt='Jocelin Nunes'/>
            <p className='title'>Desenvolvedor</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="" className='btn'>Doanload Currículo</a>
        </aside>
    )
}

export default Sidebar