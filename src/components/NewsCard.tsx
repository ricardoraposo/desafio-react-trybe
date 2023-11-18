import { News } from '../types';
import BlankHeart from '../assets/blankHeart.svg';
import RedHeart from '../assets/redHeart.svg';

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
          <p>{item.data_publicacao}</p>
          <button
            className="font-poppins font-bold bg-accent-green py-3 px-5 rounded-lg"
          >
            Leia a notícia aqui
          </button>
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
