import { useNewsStore } from '../store/store';

const borderStyle = 'border-b-2 border-accent-red';

type Props = {
  current: 'recent' | 'Notícia' | 'Release' | 'favorites'
};

function Highlighter({ current }: Props) {
  const filter = useNewsStore((state) => state.filter);

  return (
    <div
      className={ `${borderStyle} ${filter === current ? 'w-full' : 'w-0'}
transition-all` }
    />
  );
}

export default Highlighter;
