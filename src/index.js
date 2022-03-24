import React , {createContext} from 'react';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'

import './index.css';
import App from './components/App';
import movies from './reducers'
import rootReducer from './reducers'
 

//function logger (obj,next,action)
//logger(obj)(next)(action)
/*
const logger = function ({dispatch,getState}) {
    return function (next){
        return function (action){
        //middleware code
        console.log('ACTION_TYPE = ',action.type);
        next(action)
    }
}
}
*/

const logger = ({dispatch,getState})  => next => (action)=>{
     //middleware code

     if(typeof(action) !== 'function')
     console.log('ACTION_TYPE = ',action.type);
     next(action)
}

//const store = createStore(movies);
const store = createStore( rootReducer ,applyMiddleware(logger,thunk));
console.log('store',store)


//console.log('BEFORE STATE',store.getState())

//store.dispatch({
//  type:'ADD_MOVIES',
//  movies:[{name:'Superman'}]
//});

//console.log('AFTER STATE',store.getState())



export const StoreContext = createContext();

class Provider extends React.Component{
    render()
    {
        const { store } = this.props;
        return <StoreContext.Provider value = {store}>
          {this.props.children}
        </StoreContext.Provider>
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App store={store} />
        {/* note the props store is not needed to pass without this itll work */}
    </Provider>,
document.getElementById('root')
);
