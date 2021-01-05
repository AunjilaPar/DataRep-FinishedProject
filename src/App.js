import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { DisplayData } from './components/displayData';
import { UpdateData } from './components/updateData';
import { MainContent } from './components/mainContent';
import 'bootstrap/dist/css/bootstrap.min.css';//installed bootstrap
import { Navbar, Nav } from 'react-bootstrap';//get navbar
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';//Installed Router to navigate switch etc..

import { Update } from './components/update';
import { Display } from './components/display';
import { Edit } from './components/edit';


class App extends Component {
  //Render methods for the the whole code to run
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">Car Information</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/update">Update</Nav.Link>
                <Nav.Link href="/display">Display</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <br />
          <Switch>
          <Route path='/' component={MainContent} exact />
            <Route path='/update' component={Update}  />
            <Route path='/display' component={Display} />
            <Route path='/edit/:id' component={Edit}/>
          </Switch>
        </div>
      </Router>//End of router
    );//End of return
  }//end of Render
}//end of app

export default App;
