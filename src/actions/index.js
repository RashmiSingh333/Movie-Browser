
//{
//    type:'ADD_MOVIES'
//   movies: [m1,m2,m3]

//}
//{
//    type:'DECREASE_COUNT'
//}
 
//ACTION TYPE
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES'
export const REMOVE_FROM_FAVOURITES=  'REMOVE_FROM_FAVOURITES'
export const SET_SHOW_FAVOURITES ='SET_SHOW_FAVOURITES'
export const ADD_FROM_SEARCH_TO_MOVIE = 'ADD_FROM_SEARCH_TO_MOVIE'



//ACTION CREATORS
export function addMovies (movies) {
   return {
            type: ADD_MOVIES,
            movies: movies
          
    }
}

export function addFavourite (movie) {
    return {
             type: ADD_TO_FAVOURITES,
             movie: movie
           
     }
 }

 export function removeFromFavourites(movie) {
     return {
         type:REMOVE_FROM_FAVOURITES,
         movie
     }
 }

 export function setShowFavourites(val){
     return {
         type:SET_SHOW_FAVOURITES,
         val
     }
 }

 export const ADD_TO_SEARCH = 'ADD_TO_SEARCH'

 function addToSearch(movie){
     console.log('search result ->',movie);
     return {
         type:ADD_TO_SEARCH,
         movie
     }
 }

 export function searchResult(movie)
{
    console.log('inside seacrh result ', movie);
    return function (dispatch) {
        fetch(`http://www.omdbapi.com/?apikey=416455a5&t=${movie}`)
        .then(res => res.json())
            .then((data) => {
                console.log(data)
                dispatch(addToSearch(data));
            });
    }
}


export function addFromSearchMovie(movie)
{
    return {
        type: ADD_FROM_SEARCH_TO_MOVIE,
        movie
    }
}