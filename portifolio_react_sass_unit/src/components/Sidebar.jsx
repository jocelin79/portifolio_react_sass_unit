import React from 'react'
import Avatar from '../img/profile-pic.png'

import '../styles/components/sidebar.sass'

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt='Jocelin Nunes'/>
            <p className='title'>Desenvolvedor</p>
            <p>redes sociais</p>
            <p>informações de contato</p>
            <a href="" className='btn'>Doanload Currículo</a>
        </aside>
    )
}

export default Sidebar