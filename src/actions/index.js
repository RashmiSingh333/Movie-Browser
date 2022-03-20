//{
//    type:'ADD_MOVIES'
//   movies: [m1,m2,m3]

//}
//{
//    type:'DECREASE_COUNT'
//}
 
//ACTION TYPE
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'

//ACTION CREATORS
export function addMovies (movies) {
   return {
            type: ADD_MOVIES,
            movies: movies
          
    }
}

export function addFavourite (movie) {
    return {
             type: ADD_FAVOURITE,
             movie: movie
           
     }
 }