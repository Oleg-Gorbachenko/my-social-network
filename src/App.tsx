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
import {RootStateType} from "./redux/State";

type MyAppPropsType = {
    state: RootStateType
    addPost: (title: string) => void
    addMessage: (title: string) => void
}

export function App(props: MyAppPropsType) {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs/*'
                           element={<Dialogs dialogs={props.state.dialogsPage.dialogs}
                                             messages={props.state.dialogsPage.messages}
                                             addMessage={props.addMessage}/>}/>
                    <Route path='/profile/*'
                           element={<Profile posts={props.state.profilePage.posts}
                                             addPost={props.addPost}/>}/>
                    <Route path='/news/*' element={<News/>}/>
                    <Route path='/music/*' element={<Music/>}/>
                    <Route path='/settings/*' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

