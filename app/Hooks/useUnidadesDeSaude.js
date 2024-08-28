import { useState, useEffect } from 'react';

const useUnidadesDeSaude = (nome = '') => {
    const [unidades, setUnidades] = useState([]);
    const [unidadesPeloNome, setUnidadesPeloNome] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUnidades = async () => {
            try {
                const url = 'https://api-web-saude.vercel.app/unidades-de-saude/aprovadas/';
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados');
                }
                const data = await response.json();
                setUnidades(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUnidades();
    }, []);

    useEffect(() => {
        if (nome.trim() === '') return; 

        const fetchUnidadesPeloNome = async () => {
            try {
                const url = `https://api-web-saude.vercel.app/aprovadas/${nome}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados');
                }
                const data = await response.json();
                setUnidadesPeloNome(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUnidadesPeloNome();
    }, [nome]);

    return { unidades, unidadesPeloNome, loading, error };
};

export default useUnidadesDeSaude;
