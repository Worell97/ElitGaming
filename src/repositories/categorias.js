import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (Response) => {
      if (Response.ok) {
        const response = await Response.json();
        return response;
      }
      throw new Error(`${Response.status} - Não foi possível carregar os dados!`);
    });
}

export default {
  getAllWithVideos,
};
