import { useQuery } from '@tanstack/react-query';
import { newsByQntUrl } from '../helpers/endpoints';
import { getNews } from '../helpers/helpers';
import { News as NewsType } from '../types';
import NewsCard from './NewsCard';
import { useNewsStore } from '../store/store';
import useLocalStorage from '../hooks/useLocalStorage';
import Loading from './Loading';

function News() {
  let qnt = 10;
  const filter = useNewsStore((state) => state.filter);
  const [favorites, setFavorites] = useLocalStorage<NewsType[]>('favoriteNews', []);
  const { data, isLoading, refetch } = useQuery<NewsType[]>({
    queryKey: ['news'],
    queryFn: () => getNews(newsByQntUrl(qnt)),
  });

  const toggleFavorites = (item: NewsType) => {
    const isFavorite = favorites.find((news) => item.id === news.id);
    if (isFavorite) {
      setFavorites(favorites.filter((news) => item.id !== news.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const handleScroll = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
    if (filter !== 'favorites' && (scrollTop + clientHeight + 1 >= scrollHeight)) {
      qnt += 10;
      refetch();
    }
  };

  window.addEventListener('scroll', handleScroll);

  if (isLoading) return <Loading />;

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
      {data
        && (filter === 'recent' ? data.map((item) => (
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
