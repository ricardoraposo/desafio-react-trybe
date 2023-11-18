import { News } from '../types';

export const getNews = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  const { items } = data;
  return items;
};

export const getImage = (item: News) => {
  const images = JSON.parse(item.imagens);
  return images.image_intro;
};
