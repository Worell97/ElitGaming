import React from 'react';
import PageDefault from './../../../components/PageDefault';
import { Link } from 'react-router-dom';


function CadastroCategoria() {
    return (
        <PageDefault>
            <h1>Cadastro de categorias</h1>
            <Link to="/">
                Retornar
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;