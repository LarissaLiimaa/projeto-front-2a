'use client';
import { useEffect, useState } from "react"; // 1. Corrigido: adicionado o useState aqui

export default function Produtos() {
    const [prods, setProds] = useState(null);

    useEffect(() => {
        const fetchProds = async () => {
            try {
                const response = await fetch('https://stock.dev.vilhena.ifro.edu.br/api/produtos');

                if (!response.ok) {
                    // 2. Corrigido: statusText com "t" minúsculo
                    throw new Error(`Erro ao buscar produtos: ${response.statusText}`); 
                }
                
                const data = await response.json(); 
                console.log(data);
                setProds(data);
            } catch (e) {
                console.log(`${e.message}`);
            }
        };
            
        fetchProds();
    }, []);

    return (
        <div>
            <h1>Produtos</h1>
            {prods === null ?
            <p>carregando lista de produtos...</p> : 
            <div>
                {prods.map((prod) => (
                    <p key={prod.id}>{prod.nome}</p>
                ))}
                </div>}
        </div>
    );
}
