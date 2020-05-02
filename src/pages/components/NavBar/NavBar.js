import React from 'react';
import { FaHome, FaBook, FaBlog, FaInfoCircle, FaFacebookSquare, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

import logo from '../../../assets/logo.png';
import './styles.css'

export default function NavBar() {
    let menuClosed = true;

    const toogleMobileMenu = () => {
        let menu_icon = document.getElementById('mobile-icons');
        let menu = document.getElementById('menu');
        let menuList = document.getElementsByClassName('menu-list')[0];

        if(menuClosed) {
            addClass(menu_icon, 'mobile-menu-opened');
            menuClosed = false;
            addClass(menu, 'menu-open');
            removeClass(menu, 'menu-closed')
            menuList.setAttribute("style", "opacity:100%")
        }
        else {
            removeClass(menu_icon, 'mobile-menu-opened');
            menuClosed = true;
            removeClass(menu, 'menu-open')
            addClass(menu, 'menu-closed');
            menuList.setAttribute("style", "opacity: 0")
        }
    }

    const hasClass = (el, className) => {
        if(el.classList) {
            return el.classList.contains(className);
        }
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }

    const addClass = (el, className) => {
        if(el.classList) {
            el.classList.add(className);
        }
        else if(!hasClass(el, className)) {
            el.className += " " + className;
        }
    }

    const removeClass = (el, className) => {
        if(el.classList) {
            el.classList.remove(className);
        }
        else if(hasClass(el, className)){
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, '');
        }
    }

    return (
        <div>
            <div className="navbar">
                <img src={ logo } alt="Easy Book" />
                <div onClick={ toogleMobileMenu } id="mobile-icons" className="hamburguer-menu" >
                    <div className="hamburguer-part"></div>
                    <div className="hamburguer-part"></div>
                    <div className="hamburguer-part"></div>
                </div>

            </div>
            <nav className="menu" id='menu'>
                <ul className="menu-list">
                    <li><a href="/"><FaHome size={ 20 } /> HOME</a></li>
                    <li><a href="/"><FaBook size={ 20 } />LIVROS</a></li>
                    <li><a href="/"><FaBlog size={ 20 } />BLOG</a></li>
                    <li><a href="/"><FaInfoCircle size={ 20 } />SOBRE NÓS</a></li>
                    <li className="social">
                        <li><a href="/"><FaFacebookSquare /></a></li>
                        <li><a href="/"><FaInstagram /></a></li>
                        <li><a href="/"><FaWhatsapp /></a></li>
                        <li><a href="/"><FaEnvelope /></a></li>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
}