import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const { values, handleChange } = useForm({
    titulo: 'Video de teste',
    url: 'https://www.youtube.com/watch?v=Shj7CPITRmo',
    categoria: 'Front End',
  });
  const history = useHistory();
  return (
    <PageDefault>
      <h1>Pagina de cadastro de videos</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: 1,
        })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Titulo do video"
          type="text"
          value={values.nome}
          name="titulo"
          onChange={handleChange}
        />
        <FormField
          label="URL"
          type="text"
          value={values.url}
          name="url"
          onChange={handleChange}
        />
        <FormField
          label="Categoria"
          type="text"
          value={values.categoria}
          name="categoria"
          onChange={handleChange}
        />
        <Button as="Button" type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
