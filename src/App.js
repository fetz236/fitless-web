import './App.css';
import Navbar from './components/home/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/home/Footer';
import Home from './components/index/Home';
import SignUp from './components/signup/SignUp';
import GetApp from './components/get_app/GetApp';
import GeneralInfo from './components/general_info/GeneralInfo';
import Team from './components/team/Team';

function App() {
  return (
    <>

      <Router>
        <Navbar/>

        <Routes>
          <Route index element={<Home />} />
          <Route path='/general' element={<GeneralInfo />}/>
          <Route path='/sign-up' element={<SignUp />}/>
          <Route path='/get-app' element={<GetApp />}/>
          <Route path='/team' element={<Team />}/>
        </Routes>
        <Footer />

      </Router>
    </>
  );
}

export default App;
