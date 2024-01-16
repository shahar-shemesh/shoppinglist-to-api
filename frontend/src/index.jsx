import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';


import App from "./App.jsx";
import store from './store/index.js';

import "./index.css";


const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<Provider store={store}><App /></Provider>);
