import React from 'react';

import './styles.css'
import bookImage from '../../assets/book.svg'
import libraryImage from '../../assets/library.svg'
import networkImage from '../../assets/network.svg'

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Home() {
    return(
        <div>
            <header className="header">
                <NavBar />
                <div className="intro">
                    <h2>Procurando novas aventuras?</h2>
                    <p>Somos uma comunidade de leitores, sempre em busca de novas experiências que 
                        nossos queridos livros nos proporcionam
                    </p>

                    <a className="btn-books" href="/">Comece uma nova historia!</a>
                    <span>OU</span>
                    <a className="btn-blog" href="/">Compartilhe sua historia!</a>
                </div>
            </header>

            <section className="about">
                <div className="desc">
                    <h2>O que estamos lhe oferecendo?</h2>
                    <p>Somos um "clube do livro" virtual, com o objetivo de trazer novas aventuras
                        à novos públicos
                    </p>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src={ bookImage } alt="book"/>
                        <span>Se assim como nós, você é apaixonado por livros, chega mais que está
                            no lugar certo.
                        </span>
                    </div>
                    <div className="card">
                        <img src={ libraryImage } alt="library"/>
                        <span>Aqui você encontrará dos mais diversos livros e leitores para uma
                            troca de experiências mágica.
                        </span>
                    </div>
                    <div className="card">
                        <img src={ networkImage } alt="network"/>
                        <span>Sua nova aventura mais próxima do que você imaginava. a um clique de
                            distância.
                        </span>
                    </div>
                </div>

                <a href="/">Saiba mais</a>
                
            </section>

            <Footer />
        </div>
    );
}