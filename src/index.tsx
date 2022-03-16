import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/State";
import {rerenderEntireThree} from "./render";


store.subscribe(rerenderEntireThree)

reportWebVitals();
rerenderEntireThree()