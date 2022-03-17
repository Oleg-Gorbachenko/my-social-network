import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireThree} from "./render";
import store from "./redux/redux-store";


store.subscribe(rerenderEntireThree)

reportWebVitals();
rerenderEntireThree()