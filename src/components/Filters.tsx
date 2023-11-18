import { useNewsStore } from '../store/store';
import Highlighter from './Highlighter';

function Filters() {
  const setFilter = useNewsStore((state) => state.setFilter);

  return (
    <div
      className="w-screen font-poppins text-sm font-semibold bg-white py-4 px-6 flex gap-4
      shadow-sm md:w-full md:text-base md:mt-16"
    >
      <div>
        <button onClick={ () => setFilter('recent') }> Mais recentes </button>
        <Highlighter current="recent" />
      </div>
      <div>
        <button onClick={ () => setFilter('Notícia') }>Notícia</button>
        <Highlighter current="Notícia" />
      </div>
      <div>
        <button onClick={ () => setFilter('Release') }>Release</button>
        <Highlighter current="Release" />
      </div>
      <div>
        <button onClick={ () => setFilter('favorites') }>Favoritas</button>
        <Highlighter current="favorites" />
      </div>
    </div>
  );
}

export default Filters;
