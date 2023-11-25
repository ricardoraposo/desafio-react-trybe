import Container from './components/Container';
import Filters from './components/Filters';
import Header from './components/Header';
import MainNews from './components/MainNews';
import News from './components/News';

function App() {
  return (
    <>
      <Header />
      <Container>
        <MainNews />
        <Filters />
        <News />
      </Container>
    </>
  );
}

export default App;
