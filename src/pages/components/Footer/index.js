import React from 'react';
import { FaFacebookSquare, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

import logo from '../../../assets/logo.png';
import './styles.css'

export default function Footer() {
    return(
        <footer>
            <div className="social">
                <img src={ logo } alt="EasyBook"/>
                <ul>
                    <li><a href="/"><FaFacebookSquare /></a></li>
                    <li><a href="/"><FaInstagram /></a></li>
                    <li><a href="/"><FaWhatsapp /></a></li>
                    <li><a href="/"><FaEnvelope /></a></li>
                </ul>
            </div>
            <p>©EasyBook 2020 - Alguns diretos reservados</p>
        </footer>
    )
}