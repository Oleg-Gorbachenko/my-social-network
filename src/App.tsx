import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {initializeApp, initialStateType} from "./redux/app-reducer";
import {AppStateType, store} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

class App extends React.Component<AppPropsType, initialStateType> {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/news/*' element={<News/>}/>
                            <Route path='/music/*' element={<Music/>}/>
                            <Route path='/users/*' element={<UsersContainer/>}/>
                            <Route path='/settings/*' element={<Settings/>}/>
                            <Route path='/login/*' element={<Login/>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

type mapDispatchPropsType = {
    initializeApp: () => void
}

type mapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export type AppPropsType = mapStateToPropsType & mapDispatchPropsType

let AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp;