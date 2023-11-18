export const newsByQntUrl = (qnt: number) => {
  return `https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=${qnt}`;
};

export const newsByQueryUrl = (query: string) => {
  return `https://servicodados.ibge.gov.br/api/v3/noticias/?busca=${query}`;
};

export const getImageUrl = (path: string) => {
  return `https://www.ibge.gov.br/${path}`;
};
