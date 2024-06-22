import React from 'react';
import {Container} from 'reactstrap';
import './Header.css'

const navLinks[
    {
        display: 'Home',
        url:'#'
    },

    {
        display: 'About',
        url:'#'
    },

    {
        display: 'Pages',
        url:'#'
    },

    {
        display: 'Blog',
        url:'#'
    },
]

const Header = () => {
    return <section>
        <Container>
            <div className='navigation'>
                <div className="logo">
                    <h2>
                    <i class="ri-pantone-line"></i> Learners.
                    </h2>
                </div>
            

            <div className="nav">
                <div className="nav_menu">
                    <ul className='nav_list'>
                        {
                            navLinks.map((item,index)=>(
                                <li key={index} className="nav-item">
                                <a href='item.url'>{item.display}</a>
                            </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        </Container>
    </section>
};

export default Header;