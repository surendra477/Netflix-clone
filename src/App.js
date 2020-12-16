
import './App.css';
import Row from './Row';
import requests from "./Request"
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="app">
    <Nav />
    <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}  isLargeRow={true}/>
      <Row title="Action Movies" fetchUrl={requests.fetchTrending}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
          
    </div>
  );
}

export default App;

// 57437df771a3c962731d424affde946e
