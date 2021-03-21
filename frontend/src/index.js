import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'
import Root from './components/Root'
import {Router, Switch, Route, Redirect} from 'react-router-dom'
import {fetchAuthenticated} from './actions/account'
import './index.css'
import AccountDragons from './components/AccountDragons'
import PublicDragons from './components/PublicDragons'
import history from './history'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancers2 = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

const AuthRoute = props => {
    if(!store.getState().account.loggedIn){
        return(<Redirect to={{pathname: '/'}}/>)
    }

    const {component, path} = props
    return <Route path={path} component={component}/>
}

store.dispatch(fetchAuthenticated())
.then(() => {
    render(
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={Root}/>
                    <AuthRoute path='/account-dragons' component={AccountDragons}/>
                    <AuthRoute path='/public-dragons' component={PublicDragons}/>
                </Switch>
            </Router>
        </Provider>,
        document.getElementById('root')
    )
})