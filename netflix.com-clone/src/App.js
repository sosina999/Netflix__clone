import './App.css';
import Banner from './Banner/Banner';
import Row from './Row/Row';
import requests from './requests'
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import MyList from './MyList';


function App() {
  return (
    <div className="App">
			<Nav />
			<Banner />
      		<Row title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow arrow />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} /> 
		    <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row
				title="Documentaries Movies"
				fetchUrl={requests.fetchDocumentaries}
			/>
			<MyList />
			<Footer />
    </div>
  );
}

export default App;
