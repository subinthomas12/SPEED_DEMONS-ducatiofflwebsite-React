import { Route, Routes } from 'react-router-dom';
import './App.css';
import Ducati from './Ducati';
import Footer from './Footer';
import Header from './Header';
import Bikeview from './Bikeview';




function App() {
  return (
    <div className="App">

      <Header />

      <Routes>
        <Route path='/' element={<Ducati />}>

        </Route>

        <Route path='/viewBike/:id' element={<Bikeview />}>

        </Route>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
