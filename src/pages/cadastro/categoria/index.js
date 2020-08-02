import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/button';

function CadastroCategoria() {
  const categoria = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(categoria);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(change) {
    setValue(
      change.target.getAttribute('name'),
      change.target.value,
    );
  }
  function Load() {
    const URL_TOP = 'http://localhost:8080/categorias/';
    fetch(URL_TOP).then(async (Response) => {
      const response = await Response.json();
      setCategorias([
        ...response,
      ]);
    });
  }
  useEffect(Load, []);
  return (
    <PageDefault>
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
          setValues(categoria);
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
      <div>
        Loading...
      </div>
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
