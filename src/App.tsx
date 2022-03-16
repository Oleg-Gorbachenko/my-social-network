import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {StoreType} from "./redux/State";

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
                           element={<Dialogs dialogs={state.dialogsPage.dialogs}
                                             messages={state.dialogsPage.messages}
                                             addMessage={props.store.addMessage.bind(props.store)}/>}/>
                    <Route path='/profile/*'
                           element={<Profile posts={state.profilePage.posts}
                                             addPost={props.store.addPost.bind(props.store)}
                                             newPostText={state.profilePage.newPostText}
                                             updateNewPostText={props.store.updateNewPostText.bind(props.store)}/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

