import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import {Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Promociones from './components/Promociones';
import About from './components/About';

import {Button, Form, FormGroup}
from 'react-bootstrap'; 

//import { FacebookLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    <Router>

<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>

      <div>
        <nav>
         <ul>
          <li>
             <Link to="/">
               Incio
             </Link>
           </li>
           <li>
             <Link to="/Home">
              Home
             </Link>
           </li>
           <li>
             <Link to="/Promociones">
              Promocion del dia
             </Link>
           </li>
           <li>
             <Link to="/About_Us">About Us</Link>
           </li>      
         </ul>
        </nav>
      </div>

      <Switch>
      <Route path="/principal">
          <Redirect to="/"/>
        </Route>
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route path="/Promociones">
          <Promociones />
        </Route>
        <Route path="/About_Us">
          <About />
        </Route>
      </Switch>

      <Form className="login-form">
            <h1>
              <span className="font-weight-bold">MYAPPPROYECT.COM</span>
            </h1>
            <h2 className="text-center">
              Welcome
            </h2>
            <FormGroup>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email"/>
            </FormGroup>
            <FormGroup>
              <Form.Label>Password</Form.Label>
              <Form.Control  type="password" placeholder="Password"/>
            </FormGroup>
            <Button className="btn-lg btn-dark btn-block">
              Log in
            </Button>
            <div className="text-center pt-3">
              Or continue with your social account
              </div>
              {/* <FacebookLoginButton className="mt03 mb-3"/> */}
              <div className="text-center" >
                <a href="/sing=up">Sign up</a>
                <span className="p-2"> / </span>
                <a href="/sign-up">Forgot Password</a>
              </div>
      </Form>

    </Router>
  );
 
}

export default App;
