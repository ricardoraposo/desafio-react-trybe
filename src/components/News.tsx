import { useQuery } from '@tanstack/react-query';
import { newsByQntUrl } from '../helpers/endpoints';
import { getNews } from '../helpers/helpers';
import { News as NewsType } from '../types';
import NewsCard from './NewsCard';
import { useNewsStore } from '../store/store';
import useLocalStorage from '../hooks/useLocalStorage';

const url = newsByQntUrl(10);

function News() {
  const filter = useNewsStore((state) => state.filter);
  const [favorites, setFavorites] = useLocalStorage<NewsType[]>('favoriteNews', []);
  const { data, isLoading } = useQuery<NewsType[]>({
    queryKey: ['news'],
    queryFn: () => getNews(url),
  });

  const toggleFavorites = (item: NewsType) => {
    const isFavorite = favorites.find((news) => item.id === news.id);
    if (isFavorite) {
      setFavorites(favorites.filter((news) => item.id !== news.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  if (isLoading) return <p>carregando...</p>;

  if (filter === 'favorites') {
    return (
      <div
        className="mt-8 flex flex-wrap justify-center gap-4
        md:justify-around"
      >
        {favorites.map((item) => (
          <NewsCard
            key={ item.id }
            item={ item }
            favorites={ favorites }
            toggleFavorites={ toggleFavorites }
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="mt-8 flex flex-wrap justify-center gap-4
      md:justify-around"
    >
      {data && (filter === 'recent' ? data.map((item) => (
        <NewsCard
          key={ item.id }
          item={ item }
          favorites={ favorites }
          toggleFavorites={ toggleFavorites }
        />
      )) : data.filter((item) => item.tipo === filter).map((item) => (
        <NewsCard
          key={ item.id }
          item={ item }
          favorites={ favorites }
          toggleFavorites={ toggleFavorites }
        />
      )))}
    </div>
  );
}

export default News;
