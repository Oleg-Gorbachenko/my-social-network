import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./redux/store";

type MyAppPropsType = {
    store: StoreType
}

export function App(props: MyAppPropsType) {
    const state = props.store.getState()
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*'
                           element={<Dialogs dispatch={props.store.dispatch.bind(props.store)}
                                             dialogs={state.dialogsPage.dialogs}
                                             messages={state.dialogsPage.messages}
                                             newMessageText={state.dialogsPage.newMessageText}/>}/>
                    <Route path='/profile/*'
                           element={<Profile posts={state.profilePage.posts}
                                             newPostText={state.profilePage.newPostText}
                                             dispatch={props.store.dispatch.bind(props.store)}/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

