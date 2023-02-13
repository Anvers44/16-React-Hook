import React, {useState} from 'react';
import logo1 from "../../Assets/pic/avatar2.jpg"
import logo2 from "../../Assets/pic/acouteautires.jpg"
import logo3 from "../../Assets/pic/Top-Gun-Maverick-affiche-1.jpg"
import inception from '../../Assets/pic/inception.jpg'
import The_Dark_Knight from '../../Assets/pic/The Dark Knight.jpg'
import The_Lord_of_the_Rings from '../../Assets/pic/The Lord of the Rings.jpg'
import The_Matrix  from '../../Assets/pic/The_Matrix.jpg'
import FORREST_GUMP from '../../Assets/pic/FORREST_GUMP.jpg'
import MovieCard from "../MovieCard/MovieCard";




const MovieList = () => {

    const [Movies,setMovies]=useState([
        {id:1,title:"Avatar 2",des:"Jake Sully et Ney'tiri ont formé une famille et font tout pour rester aussi soudés que possible...",posterURL:logo1,rating:10},
        {id:2,title:"A Couteau Tiré",des:"Célèbre auteur de polars, Harlan Thrombey est retrouvé mort, le soir de ses 85 ans.. ",posterURL:logo2,rating:8},
        {id:3,title:"Top Gun",des:"Après plus de 30 ans de service en tant que l'un des meilleurs aviateurs de la Marine...",posterURL:logo3,rating:9},
        {id:4,title: "Inception",des: "A thief who steals corporate secrets through the use of dream-sharing...",posterURL:inception,rating:9.5},
        {id:5,title: "The Dark Knight",des: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham... ",posterURL:The_Dark_Knight,rating:9.3},
        {id:6,title: "The Lord of the Rings", des: "A meek Hobbit from the Shire and eight companions set out on a journey...",posterURL:The_Lord_of_the_Rings,rating:9},
        {id:7,title: "The Matrix",des: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role...",posterURL:The_Matrix , rating:8.7},
        {id:8,title: "Forrest Gump",des: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate...", posterURL:FORREST_GUMP, rating:8.5},
    ])


    const [tri,setTri]=useState(false)
    const [sort,setSort]=useState(false)
    const HandleClick =()=>{

        if (tri === true){
        const MovieUpdate = [...Movies].sort((a,b)=>(a.title>b.title ? 1:-1))
        setMovies(MovieUpdate)
        setTri(false)}
        else{
            const MovieUpdate = [...Movies].sort((a,b)=>(a.title>b.title ? -1:1))
            setMovies(MovieUpdate)
            setTri(true) ;
        }
    }

    const Handlesort =()=>{

        if (sort === true){
            const MovieUpdate = [...Movies].sort((a, b) => a.rating - b.rating)
            setMovies(MovieUpdate)
            setSort(false)}
        else{
            const MovieUpdate = [...Movies].sort((a, b) => b.rating - a.rating)
            setMovies(MovieUpdate)
            setSort(true) ;
        }
    }


    return (
        <div className="main">


            <div className="filter">
                {tri? <button className="btn-filter" onClick={()=> HandleClick()}>Z -> A</button> :
                    <button className="btn-filter" onClick={()=> HandleClick()}>A -> Z</button>}

                {sort? <button className="btn-filter" onClick={()=> Handlesort()}>- > +</button> :
                    <button className="btn-filter" onClick={()=> Handlesort()}> + > -</button>}

            </div>



            <div  className="movie-list">
                {Movies.map((movie)=>
                {
                    <MovieCard key={movie.id} movie={movie} />

                    return <div className="movie" key={movie.id} >
                        <div className="border">
                            <div className="up">
                                <img src={movie.posterURL} alt={movie.title} className="img"/>
                            </div>
                            <div className="cir">
                                <div className="rating">{movie.rating}</div>
                            </div>
                            <div className="down">
                                <h1 className="Title">{movie.title}</h1>
                                <div className="des">{movie.des}</div>
                            </div>
                        </div>
                    </div>
                })}


            </div>



        </div>
    );
};

export default MovieList;