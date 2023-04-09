import {Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
// import logo from './logo.svg';

// import Destruct from './ClassWork/components/Destruct';
// import ClassDest from './ClassWork/components/ClassDest';
// import StateDes from './ClassWork/components/StateDes';

import Chome from './ClassWork/components/Chome';
import Cabout from './ClassWork/components/Cabout';
import Cservice from './ClassWork/components/Cservice';
import Ccontact from './ClassWork/components/Ccontact';
import Cnavbar from './ClassWork/components/Cnavbar';
import Pagenotfound from './ClassWork/components/Pagenotfound';
import Cproduct from './ClassWork/components/Cproduct';
import Cshirts from './ClassWork/components/Cshirts';
import Cjeans from './ClassWork/components/Cjeans';
import Cusers from './ClassWork/components/Cusers';
import CuserDetail from './ClassWork/components/CuserDetail';
import Cadmin from './ClassWork/components/Cadmin';

import "./index.css";
import CuserDetali from './ClassWork/components/CuserDetail';

// let name = "Gauri";

function App() {
  const navigate = useNavigate();
  // let name = "Gauri";
  return (
    <div className='App'>
    <Cnavbar/>
    <Routes>
      <Route path='/' element={<Chome/>}></Route>
      <Route path='/about' element={<Cabout/>}></Route>
      <Route path='/service' element={<Cservice/>}></Route>
      <Route path='/contact' element={<Ccontact/>}></Route>
      <Route path='/product' element={<Cproduct/>}>
        <Route index element={<Cshirts/>}></Route>
        <Route path='shirt' element={<Cshirts/>}></Route>
        <Route path='jeans' element={<Cjeans/>}></Route>
      </Route>
      <Route path='/user' element={<Cusers/>}>
        <Route path=':id' element={<CuserDetail/>}></Route>
      </Route>
      <Route path='/user/:id' element={<CuserDetail/>}></Route>

      {/* <Route path='/user/1' element={<CuserDetail/>}></Route>
      <Route path='/user/2' element={<CuserDetail/>}></Route>
      <Route path='/user/3' element={<CuserDetail/>}></Route> */}
      <Route path='/user/admin' element={<Cadmin/>}></Route>
      <Route path = '*' element={<Pagenotfound/>}></Route>
    </Routes>

    {/* <button onClick={() => navigate('./')}>Click Home</button>
    <button onClick={() => navigate('./about')}>Click About</button>
    <button onClick={() => navigate('./service')}>Click Service</button>
    <button onClick={() => navigate('./contact')}>Click Contact</button> */}

    {/* <button className='colbut' onClick={() => NavigateToWhere()}>Click Me</button>
    <button className='colbut' onClick={() => navigate(-1)}>Go Back</button> */}

    </div>
  //  <div>
  //  <Destruct name = 'GLA University' age = {20}/>
  //  <ClassDest name = 'FullStack' age = {20}/>
  //  <StateDes/>
  
  //  </div>
  );
}

export default App;
