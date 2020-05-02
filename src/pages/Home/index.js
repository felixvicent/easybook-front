import React from 'react';

import './styles.css'
import NavBar from '../components/NavBar/NavBar';

export default function Home() {
    return(
        <header className="header">
            <NavBar />
            <div className="intro">
                <h2>Procurando novas aventuras?</h2>
                <p>Somos uma comunidade de leitores, sempre em busca de novas experiências que 
                    nossos queridos livros nos proporcionam
                </p>

                <a href="/">Comece a sua nova historia!</a>
            </div>
        </header>
    );
}