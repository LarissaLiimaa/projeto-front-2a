
'use client'; // informa que o conteúdo será renderizado do lado do cliente
import { useState } from 'react';  // importa o estado
import styles from './page.module.css';

export default function Sobre() {
    // declare um estado booleano inicializado com true 'show'

    const [show, setShow] = useState(false);  // declara um estado booleano
    return (
        <main>
            <h1>Sobre</h1>
            <button type='button' onClick={() => setShow(!show)}>{show ? 'Esconder': 'Aparecer'}</button>

            {show &&  // renderização condicional
                <div>
                    <h2>Estudos</h2>
                    <p>Formação técnica em andamento no ifro</p>
                </div>
            }
        </main>
    )
}