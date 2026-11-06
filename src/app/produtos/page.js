'use client';
import { useEffect, useState } from "react";

export default function Produtos() {

    const [prods, setProds] = useState(null);

    useEffect(() => {
        const fetchProds = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos');
                if (!response.ok) {
                    throw new Error(`Erro ao buscar Produtos ${response.statusText}`);
                }
                const data = await response.json(); // converte os dados (json) para lista de objetos
                console.log(data);
                setProds(data);
            } catch (e) {
                console.log(`${e.message}`);
            }
        }
        fetchProds();
    }, []);

    return (
        < div >
            <h1>Produtos</h1>
            {prods === null ?
                <p>Carregando lista de produtos...</p> :
                <div>
                    {prods.map((prod) => (
                        <p key={prod.id}>{prod.nome}</p>
                    ))}
                </div>
            }

        </div >
    )
}