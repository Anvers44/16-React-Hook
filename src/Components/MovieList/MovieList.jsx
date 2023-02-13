import React, {useState} from 'react';
import logo1 from "../../Assets/pic/avatar2.jpg"
import logo2 from "../../Assets/pic/acouteautires.jpg"
import logo3 from "../../Assets/pic/Top-Gun-Maverick-affiche-1.jpg"




const MovieList = () => {

    const [Movies,setMovies]=useState([
        {id:1,title:"Avatar 2",des:"Jake Sully et Ney'tiri ont formé une famille et font tout pour rester aussi soudés que possible...",posterURL:logo1,rating:"10"},
        {id:2,title:"A Couteau Tiré",des:"Célèbre auteur de polars, Harlan Thrombey est retrouvé mort, le soir de ses 85 ans. ",posterURL:logo2,rating:"8"},
        {id:3,title:"Top Gun",des:"Après plus de 30 ans de service en tant que l'un des meilleurs aviateurs de la Marine,",posterURL:logo3,rating:"9"},
        {id:4,title:"Top Gun",des:"Après plus de 30 ans de service en tant que l'un des meilleurs aviateurs de la Marine,",posterURL:logo3,rating:"9"},
        {id:5,title:"Top Gun",des:"Après plus de 30 ans de service en tant que l'un des meilleurs aviateurs de la Marine,",posterURL:logo3,rating:"9"},
        {id:6,title:"Top Gun",des:"Après plus de 30 ans de service en tant que l'un des meilleurs aviateurs de la Marine,",posterURL:logo3,rating:"9"}
    ])


    const [tri,setTri]=useState(false)
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


    return (
        <div className="main">
            <div className="nav-marge"></div>

            <div className="filter">
                {tri? <button className="btn-filter" onClick={()=> HandleClick()}>Z -> A</button> :
                    <button className="btn-filter" onClick={()=> HandleClick()}>A -> Z</button>}

            </div>

            <div  className="movie-list">
                {Movies.map((movie)=> {
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