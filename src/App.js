
import './App.css';
import NavBar from './Header';
import Home from './HomeSection';
import SignIn from './SignIn';
import {Route, Routes} from 'react-router-dom'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import SignUp from './SignUp';



function App() {
  return (
    <>
    <NavBar/>
     <div>

      <Routes>
        <Route  path='/HomeSection' element = {<Home/>}></Route>
        <Route path='/signIn' element = {<SignIn/>}></Route>
        <Route path='/Page1' element = {<Page1/>}></Route>
        <Route path='/Page2' element = {<Page2/>}></Route>
        <Route path='/Page3' element = {<Page3/>}></Route>
        <Route path='/SignUp' element = {<SignUp/>}></Route>
      </Routes>
    
     </div>
     
    </>
      
  );
}

export default App;