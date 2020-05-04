import React, { Component } from 'react';

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

import api from '../../services/api';
import './styles.css'

export default class Books extends Component {
    state = {
        books: [],
    }

    async componentDidMount() {
        const response = await api.get('books');

        this.setState({ books: response.data });
    }

    render(){
        return(
            <div className="container">
                <NavBar />
                <section className="books" >
                    { this.state.books.map(book => (
                        <article key={ book.id }>
                            <div className="title">
                                <h3>{ book.title }</h3>
                                <span>{ book.author }</span>
                            </div>

                            <img src={ `http://easybook-eb.herokuapp.com/files/${book.image}` } alt="Capa do livro"/>
                        </article>
                    )) }
                </section>
                <Footer />
            </div>
        )
    }
}