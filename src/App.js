import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile/profile';

function App() {
  const myfunc=()=>{
    alert('hello')
  }
   
  return (<>
  <Profile fullname=" Mohamed marzouki"bio =" Ingénieur développeur"  profession =" Développeur " img="avatar.png" x="hello" myfunc={myfunc}/>
  </>);
}

export default App;
