import { useQuery } from '@tanstack/react-query';
import { newsByQntUrl } from '../helpers/endpoints';
import { getNews } from '../helpers/helpers';
import { News as NewsType } from '../types';
import NewsCard from './NewsCard';

const url = newsByQntUrl(10);

function News() {
  const { data, isLoading } = useQuery<NewsType[]>({
    queryKey: ['news'],
    queryFn: () => getNews(url),
  });

  if (isLoading) return <p>carregando...</p>;

  return (
    <div
      className="mt-8 flex flex-wrap justify-center gap-4
      md:justify-around"
    >
      {data && data.map((item) => (
        <NewsCard key={ item.id } item={ item } isFavorite />
      ))}
    </div>
  );
}

export default News;
