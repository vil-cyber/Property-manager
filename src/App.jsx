import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import Header from './components/Header';
export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Profile" element={<Profile />} />
    <Route path="/Signin" element={<Signin />} />
    <Route path="/Signout" element={<Signout />} />


    


  </Routes>
  </BrowserRouter>
}
