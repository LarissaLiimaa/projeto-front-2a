'use client'; // informa que o conteúdo será renderizado do lado do cliente
import { useEffect, useState } from 'react';  // importa o estado
import styles from './page.module.css';

export default function Sobre() {
    // declare um estado booleano inicializado com true 'show'

    const [show, setShow] = useState(false);  // declara um estado booleano
    const nomes = ['João', 'Maria', 'Ana', 'Arthur', 'Marcela', 'Ana'];

    useEffect(() => {
        document.title = 'Página sobre';
        console.log('componente carregado!');
    }, []); // lista de dependência vazia indica que o efeito será executado durante o carregamento do componente


    return (
        <main>
            <h1>Sobre</h1>
            <button type='button' onClick={() => setShow(!show)}>{show ? 'Esconder' : 'Aparecer'}</button>

            {show &&  // renderização condicional
                <div>
                    <h2>Estudos</h2>
                    <p>Formação técnica em andamento no ifro</p>
                </div>
            }

            <table className={styles.tbl}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nomes.map((nome, id) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{nome}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </main>
    )
}