import Filters from './components/Filters';
import Header from './components/Header';
import MainNews from './components/MainNews';
import News from './components/News';

function App() {
  return (
    <div className="w-screen">
      <Header />
      <div
        className="w-11/12  mx-auto flex flex-col items-center
        md:w-4/5"
      >
        <MainNews />
        <Filters />
        <News />
      </div>
    </div>
  );
}

export default App;
