import Home from './maincomponent/Home';
import Dashboard from './maincomponent/Dashboard';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Sidebar from './maincomponent/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
<ToastContainer />
      <Router>
        {/* <div style={{ display: 'flex' }}>
          <Sidebar />
        </div> */}


        {/* <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}> */}
          <Switch>

            {/* <Route exact path='/' component={Home} /> */}
            <Route path="/" component={Dashboard} />

          </Switch>
        {/* </div> */}


      </Router>
      

    </div>
  );
}

export default App;
