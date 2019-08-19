import React from 'react';

import './homepage.styles.scss'

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>SOMBREROS</h1>
                        <span className='subtitle'>COMPRAR AHORA</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>CHAMARRAS</h1>
                        <span className='subtitle'>COMPRAR AHORA</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>ZAPATOS</h1>
                        <span className='subtitle'>COMPRAR AHORA</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>MUJERES</h1>
                        <span className='subtitle'>COMPRAR AHORA</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>HOMBRES</h1>
                        <span className='subtitle'>COMPRAR AHORA</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;