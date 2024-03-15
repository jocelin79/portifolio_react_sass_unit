import React from 'react'

import '../styles/components/hilightcontainer.sass'

const HilightContainer = () => {
    return (
        <section className='hilight-container'>
            <h2>Projetos em Destaque</h2>
            <div className="hilight-grid">
                <div className="hilight-card">
                    <div className="hilight-info">
                        <h3>Portfolio React</h3>
                        <p>Portfolio criado por iniciativa acadêmica e desenvolvido pelas tecnologias React e Sass</p>
                        <div className='btn-hilight'>
                        <a href="#" className="btn">Vídeo Apresentação</a>
                        </div>
                    </div>
                </div>
                <div className="hilight-card">
                    <div className="hilight-info">
                        <h3>Projetc Name</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem distinctio tempore obcaecati.</p>
                        <div className='btn-hilight'>
                        <a href="#" className="btn">Vídeo Apresentação</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HilightContainer