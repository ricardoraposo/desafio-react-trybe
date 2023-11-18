import { differenceInDays, differenceInHours, parse } from 'date-fns';
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

export const getDaysUntilToday = (date: string) => {
  const pastDate = parse(date, 'dd/MM/yyyy HH:mm:ss', new Date());
  const today = new Date();

  const diffInHours = differenceInHours(today, pastDate);
  const diffInDays = differenceInDays(today, pastDate);

  switch (true) {
    case diffInDays < 1:
      if (diffInHours <= 1) {
        return `${diffInHours} hora atrás`;
      }
      return `${diffInHours} horas atrás`;
    case diffInDays === 1:
      return `${diffInDays} dia atrás`;
    default:
      return `${diffInDays} dias atrás`;
  }
};
