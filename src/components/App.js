import React from 'react'
import { data } from '../data'
import Navbar from './Navbar'
import MovieCard from './MovieCard'
import { addMovies , setShowFavourites} from '../actions'

class App extends React.Component {

  componentDidMount(){
    const { store } = this.props;

    store.subscribe(()=>{
      //console.log('UPDATED',store.getState());
      this.forceUpdate();
    });

    //MAKE AN API CALL
    //DISPATCH ACTION

    store.dispatch(addMovies(data));

    //console.log("STATE",this.props.store.getState())
  }

  isMovieFavourite = (movie) => {
    const  {movies } = this.props.store.getState()

    const index = movies.favourites.indexOf(movie)

    if (index !== -1){
      //Found the movie
      return true;
    }
    return false
  }

  onChangeTab = (val)=>{
    this.props.store.dispatch(setShowFavourites(val))
  }
  render(){
    const { movies } = this.props.store.getState(); //{movies: {},search:{}}
    const {list, favourites, showFavourites} = movies
    console.log('fav', showFavourites)
    console.log('RENDER', this.props.store.getState())
    
    const displayMovies = showFavourites ? favourites : list

    return (
    <div className="App">
     <Navbar />

     <div className="main">

       <div className="tabs">

       <div className={`tab ${showFavourites ? null : 'active-tabs'  }`} 
         onClick={ () => this.onChangeTab(false) }> Movies
         </div>
         

         <div className={`tab ${showFavourites ?  'active-tabs' : null }`} 
         onClick={ () => this.onChangeTab(true) }> Favourites
         </div>
       </div>

       <div className="list">
         {
         displayMovies.map((movie ,index)=> (
           <MovieCard movie={movie}
            key={`movies-${index}`} 
            dispatch={this.props.store.dispatch} 
            isFavourite={this.isMovieFavourite(movie)}
            />
         ))
         }
       </div>
        {displayMovies.length === 0 ?<div className="no-movies" >No movies to display!</div> : null}
     </div>

    </div>
  );
        }
}

export default App;
