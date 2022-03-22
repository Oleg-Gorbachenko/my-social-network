import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type MyAppPropsType = {
    store: StoreType
}

export function App(props: MyAppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*'
                           element={<DialogsContainer store={props.store}/>}/>
                    <Route path='/profile/*'
                           element={<Profile store={props.store}/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

