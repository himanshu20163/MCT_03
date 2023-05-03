import Login from './Components/Login';
import { Routes,Route, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Userdetail from './Components/Userdetail';
import { useState } from 'react';
import Search from './Components/Search';
import Details from './Components/Details';

function App() {

  //login check is used to check whether user is logged in or not

  const [logincheck, setlogincheck] = useState(false)

  //detaildata is used to store the data of the user whose details are to be shown
  const [detaildata,setdetaildata] = useState({})
  
  return (
    //Routes are used to navigate between different components
    <div>
      
    <Routes>
    <Route path='/' element={logincheck?<Navigate to="/home"/>:<Login setlogincheck={setlogincheck}/>}/>
        <Route path='/home' element={logincheck?<Home setdetaildata={setdetaildata}/>:<Navigate to="/"/>}/>
        <Route path='/userdetail' element={logincheck?<Userdetail/>:<Navigate to="/"/>}/>
        <Route path='/search' element={logincheck?<Search setdetaildata={setdetaildata}/>:<Navigate to="/"/>}/>
        <Route path='/details' element={logincheck?<Details detaildata={detaildata} />:<Navigate to="/"/>}/>
    </Routes>
    </div>
   
  );
}

export default App;
