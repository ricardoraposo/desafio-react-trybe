import { useQuery } from '@tanstack/react-query';
import { getDaysUntilToday, getImage, getImageAlt, getNews } from '../helpers/helpers';
import { getImageUrl, newsByQntUrl } from '../helpers/endpoints';
import { News } from '../types';
import NewsButton from './NewsButton';
import Loading from './Loading';

const url = newsByQntUrl(10);

function MainNews() {
  const { data, isLoading } = useQuery<News[]>({
    queryKey: ['news'],
    queryFn: () => getNews(url),
  });

  if (isLoading) return <Loading />;

  return (
    <div
      className="py-4 w-full flex flex-col justify-center items-center
      md:flex-row md:gap-4"
    >
      {data && (
        <div className="md:h-full md:w-1/2 rounded-md overflow-hidden shadow-md">
          <img
            src={ getImageUrl(getImage(data[0])) }
            alt={ getImageAlt(data[0]) }
            className="w-full"
          />
        </div>
      )}
      <div className="md:h-full md:w-1/2 xl:px-20">
        <p className="font-filter font-semibold text-accent-red pt-5 pb-1">
          Notícia mais recente
        </p>
        <div className="font-title text-4xl pb-2">
          {data && data[0].titulo}
        </div>
        <p className="font-poppins py-2 text-justify">
          {data && data[0].introducao}
        </p>
        <div className="flex flex-col gap-4">
          {data && (
            <p className="font-article text-justify">{data[0].introducao}</p>
          )}
          <div className="w-full flex justify-between items-center">
            {data && (
              <p className="font-poppins">{getDaysUntilToday(data[0].data_publicacao)}</p>
            )}
            <NewsButton path={ data ? data[0].link : '' } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNews;
