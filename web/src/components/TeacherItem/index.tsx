import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="" alt="" />
                <div>
                    <strong></strong>
                    <span></span>
                </div>
            </header>

            <p>

            </p>

            <footer>
                <p>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
              </button>
            </footer>
        </article>
    )
}

export default TeacherItem;