import { useState, useEffect } from 'react';

const useUnidadesDeSaude = (nome = '', pesquisa = '') => {
    const [unidades, setUnidades] = useState([]);
    const [unidadesPeloNome, setUnidadesPeloNome] = useState([]);
    const [unidadesPelaPesquisa, setUnidadesPelaPesquisa] = useState([]);
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
                const url = `https://api-web-saude.vercel.app/unidades-de-saude/aprovadas/${nome}`;
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

    useEffect(() => {
        if (pesquisa.trim() === '') return;

        const fetchUnidadesPelaPesquisa = async () => {
            try {
                const url = `https://api-web-saude.vercel.app/unidades-de-saude/pesquisa/${pesquisa}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Erro ao buscar os dados');
                }
                const data = await response.json();
                setUnidadesPelaPesquisa(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUnidadesPelaPesquisa();
    }, [pesquisa]);

    return { unidades, unidadesPeloNome, unidadesPelaPesquisa, loading, error };
};

export default useUnidadesDeSaude;
