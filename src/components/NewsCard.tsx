import { News } from '../types';
import BlankHeart from '../assets/blankHeart.svg';
import RedHeart from '../assets/redHeart.svg';
import NewsButton from './NewsButton';
import { getDaysUntilToday } from '../helpers/helpers';

type Props = {
  item: News;
  isFavorite: boolean;
};

function NewsCard({ item, isFavorite }: Props) {
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
      <img
        src={ isFavorite ? RedHeart : BlankHeart }
        alt="favorite heart"
        className="w-6 fill-white self-end"
      />
    </div>
  );
}

export default NewsCard;
