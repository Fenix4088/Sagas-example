import React, {ComponentType} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux';
import {Provider, useDispatch} from 'react-redux';
import Blog from './pages/Blog';
import {NotFound} from './pages/NotFound';
import {Route, Routes} from "react-router";
import {BrowserRouter} from 'react-router-dom';
import {setPathname} from "./redux/reducers";


export function withPathname<T>(WrappedComponent: ComponentType<T>): (props: any) => JSX.Element {
    return (props: any) => {
        const dispatch = useDispatch();
        React.useEffect(() => {
            dispatch(setPathname(window.location.pathname))
        }, [dispatch])

        return <WrappedComponent {...props}/>

    }
}


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<App/>}/>
                    <Route path={'/blog'} element={<Blog/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
