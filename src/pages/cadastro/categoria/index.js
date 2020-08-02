import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/button';
import Loading from '../../../components/Loading';
import Logo from '../../../assets/Logo.png';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const categoria = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(categoria);

  const [categorias, setCategorias] = useState([]);
  function Load() {
    setTimeout(() => {
      const URL_TOP = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://elitgaming.herokuapp.com/categorias';
      fetch(URL_TOP).then(async (Response) => {
        const response = await Response.json();
        setCategorias([
          ...response,
        ]);
      });
    }, 10 * 1000);
  }
  useEffect(Load, []);
  return (
    <PageDefault descricao="New Video">
      <h1>
        Cadastro de categorias:
        {values.nome}
      </h1>
      <form
        style={{ backgroundColor: '#000' }}
        onSubmit={function HandleSubmit(submit) {
          submit.preventDefault();
          setCategorias([
            ...categorias,
            values,
          ]);
          clearForm();
        }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          value={values.nome}
          name="nome"
          onChange={handleChange}
        />
        <FormField
          label="Descricao"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleChange}
        />
        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleChange}
        />
        <Button>
          Cadastrar
        </Button>
      </form>
      {categorias.length === 0
      && (
      <Loading duration="0.8s" delay="0.2s">
        <img className="Logo" src={Logo} alt="Elit Gaming edition" />
      </Loading>
      )}
      <ul>
        {categorias.map((item) => (
          <li key={`${item.nome}`}>
            {item.nome}
          </li>
        ))}
      </ul>
      <Link to="/">
        Retornar
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
