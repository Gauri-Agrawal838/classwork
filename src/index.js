import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';


import Events from './ClassWork/components/Events';
// import Header from './ClassWork/components/Header';
// import {Header,Header2} from './ClassWork/components/Header';
// import Sidebar from './ClassWork/components/Sidebar';
// import Footer from './ClassWork/components/Footer';
import reportWebVitals from './reportWebVitals';

import Employee from './ClassWork/components/Employee';
import ClassEvent from './ClassWork/components/ClassEvent';
import PropsEventFun from './ClassWork/components/PropsEventFun';
import PropsEventComp from './ClassWork/components/PropsEventComp';

import EventBinding from './ClassWork/components/EventBinding';

const root = createRoot(document.getElementById('root'));
let a = 'Gauri';
const footer = createRoot(document.getElementById('footer'));
const sidebar = createRoot(document.getElementById('sidebar'));
root.render(
    <div>
    {/* <Header name = "Gauri" rollno = {32} branch = 'cse' isplaced = {true}/>
    <Header branch = 'cse' isplaced = {false}/>
    <Sidebar name = "GLA UNIVERSITY"/>
    <Footer/> */}
    {/* <Employee/> */}



    {/* <Events /> */}
    {/* <ClassEvent/> */}
    {/* <PropsEventFun name = "Anita"/>
    <PropsEventComp/> */}
    
    {/* <EventBinding/> */}

    {/* <App/> */}

    <BrowserRouter>
        <App/>
    </BrowserRouter>

    </div>
 );  
// footer.render(<Footer name="Gauri Agrawal" roll="32"/>);
// sidebar.render(<Sidebar/>);

