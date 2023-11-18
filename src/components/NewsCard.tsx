import { News } from '../types';
import BlankHeart from '../assets/blankHeart.svg';
import RedHeart from '../assets/redHeart.svg';
import NewsButton from './NewsButton';
import { getDaysUntilToday } from '../helpers/helpers';

type Props = {
  item: News;
  favorites: News[];
  toggleFavorites: (item: News) => void;
};

function NewsCard({ item, favorites, toggleFavorites }: Props) {
  const checkFavorite = (id: number) => !!favorites.find((news) => news.id === id);

  return (
    <div
      className="pt-10 pb-4 px-5 bg-white w-full h-96 shadow-lg
      flex flex-col justify-between gap-2 rounded-md
      lg:w-[500px]"
    >
      <p className="font-title text-lg">{item.titulo}</p>
      <div className="flex flex-col gap-4">
        <p className="font-article text-justify">{item.introducao}</p>
        <div className="w-full flex justify-between items-center">
          <p className="font-poppins">{getDaysUntilToday(item.data_publicacao)}</p>
          <NewsButton path={ item.link } />
        </div>
      </div>
      <button
        className="self-end"
        onClick={ () => toggleFavorites(item) }
      >
        <img
          src={ checkFavorite(item.id) ? RedHeart : BlankHeart }
          alt="favorite heart"
          className="w-6"
        />
      </button>
    </div>
  );
}

export default NewsCard;
