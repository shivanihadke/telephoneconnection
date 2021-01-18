import 'bootstrap/dist/css/bootstrap.css'
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router ,Switch , Route } from 'react-router-dom'
import HomeComponent from './components/HomeComponent';
import TelephoneConnectionComponent from './components/TelephoneConnectionComponent';
import CitizenIdComponent from './components/CitizenIdComponent';
import BankAccountComponent from './components/BankAccountComponent';
import ListTelephoneConnectionComponent from './components/ListTelephoneConnectionComponent';
import SuccessTelephoneConnectionComponent from './components/SuccessTelephoneConnectionComponent';

function App() {
  return (
    <div >
      
        <HeaderComponent/>
      
       
        <Router>
        <Switch>
          <Route path='/' exact component={HomeComponent} />
          <Route path='/citizenid' component={CitizenIdComponent} />
          <Route path='/bankaccount' component={BankAccountComponent} />
          <Route path='/create' component={TelephoneConnectionComponent} />
          <Route path='/success' component={SuccessTelephoneConnectionComponent} />
          <Route path='/list' component={ListTelephoneConnectionComponent} />
          
        </Switch>
        </Router>
       
    </div>
  );
}

export default App;
