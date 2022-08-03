import logo from './logo.svg';
import './App.css';
import { BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Error from './components/Error/Error';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  return (
    <div >
    {/* <Home></Home> */}
     <Router>
       <Header></Header>
     <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/meal/:mealId" element={<MealDetail />} />
        <Route  path="/home" element={<Home />} />
        
        <Route  exact path="/*" element={<Error />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
