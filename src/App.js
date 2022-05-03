import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";

import Dashboard from "./components/Dashboard";
import NavMain from "./components/layout/NavMain";
// import Landing from "./components/layout/Landing";
import PrivateRoute from "./routing/PrivateRoute";
import NotFound from "./components/NotFound";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";

//Naveen
import ManagePharmacy from './components/PharmacyServices/managePharmacy';

import AddCustomer from "./components/pages/create";
import ViewCustomer from "./components/pages/customer-list";
import EditCustomer from "./components/pages/Editcustomer";
import SearchCustomer from './components/pages/searchCustomer'; 

import AddContacts from './components/pages/create-contacts';  
import ViewContact from './components/pages/contact-list'; 
import EditContact from './components/pages/Editcontact';
import SearchContact from "./components/pages/searchContact";  

if (localStorage.token) { 
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());   
  }, []);
  return (
    <>  
      <div className="App">
        <Router>
          <NavMain />

          <Switch>
            {/* <Route exact path="/" component={Landing} /> */}
            <div>
              <Navbar />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              
              <Route path='/components/NotFound' component={NotFound} />
              <Route path='/managePharmacy' component={ManagePharmacy} />

              <Route path="/create" component={AddCustomer} />
              <Route path="/customer-list" component={ViewCustomer} /> 
              <Route path="/Editcustomer/:id" component={EditCustomer} />
              <Route path='/searchCustomer' component={SearchCustomer} />
              
              <Route path="/create-contacts" component={AddContacts} />
              <Route path='/contact-list' component={ViewContact} /> 
              <Route path='/Editcontact' component={EditContact} /> 
              <Route path='/searchContact' component={SearchContact} />  

            </div>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;