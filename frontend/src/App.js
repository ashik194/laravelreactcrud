import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';
import View from './components/View';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>ASHIK</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/create"}>Create</Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create' element={<UserCreate />} />
          <Route path='/edit/:id' element={<UserEdit />} />
          <Route path='/view/:id' element={<View />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
