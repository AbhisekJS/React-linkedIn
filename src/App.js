import './App.css';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Widgets from './components/Widgets/Widgets';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
      }))
      }else{
        //user is logged out
        dispatch(logout());
      }
    })
  },[])
  return (
    <div className="app">
      <Header/>
       
      {user ? <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>:<Login/>}
      

    </div>
  );
}

export default App;
