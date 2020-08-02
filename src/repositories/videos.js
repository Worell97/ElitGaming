import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/videos`;

function create(object) {
  return fetch(`${URL_CATEGORIES}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(object),
  })
    .then(async (Response) => {
      if (Response.ok) {
        const response = await Response.json();
        return response;
      }
      throw new Error(`${Response.status} - Não foi possível gravar os dados!`);
    });
}

export default {
  create,
};
