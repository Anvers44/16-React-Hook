import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import MovieList from "./Components/MovieList/MovieList";
import './Components/NavBar/Navbar.css'
import './Components/MovieList/MovieList.css'
import Footer from "./Components/Footer/Footer";



function App() {



  return (
    <div className="App">

      <NavBar/>

        <MovieList/>

        <Footer/>
    </div>
  );
}

export default App;
